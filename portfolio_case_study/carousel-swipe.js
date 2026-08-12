/* =============================================================================
   Touch-swipe for the case-study carousels.
   Delegates to each page's existing prev/next buttons, so the page keeps
   ownership of its own carousel logic (persona filtering, timers, autoplay)
   and this file never duplicates it.
   ============================================================================= */
(function () {
  var MIN_DISTANCE = 45;   // px of horizontal travel before it counts as a swipe
  var MAX_OFF_AXIS = 0.8;  // |dy| must stay below this ratio of |dx| (else it's a scroll)

  var TARGETS = [
    { viewport: '.refine-viewport',  prev: '.refine-arrow.prev',        next: '.refine-arrow.next' },
    { viewport: '.concept-carousel', prev: '.concept-carousel-btn.prev', next: '.concept-carousel-btn.next' }
  ];

  function wire(el, prevSel, nextSel) {
    if (!el || el.dataset.swipeWired) return;
    el.dataset.swipeWired = '1';

    var x0 = null, y0 = null, t0 = 0;

    el.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1) { x0 = null; return; }
      x0 = e.touches[0].clientX;
      y0 = e.touches[0].clientY;
      t0 = Date.now();
    }, { passive: true });

    el.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var t = e.changedTouches[0];
      var dx = t.clientX - x0;
      var dy = t.clientY - y0;
      x0 = null;

      if (Date.now() - t0 > 900) return;                       // too slow to be a flick
      if (Math.abs(dx) < MIN_DISTANCE) return;                 // too short
      if (Math.abs(dy) > Math.abs(dx) * MAX_OFF_AXIS) return;  // that was a vertical scroll

      var scope = el.closest('.refine-carousel, .concept-carousel') || document;
      var btn = scope.querySelector(dx < 0 ? nextSel : prevSel);
      if (btn) btn.click();
    }, { passive: true });
  }


  /* ---------------------------------------------------------------------------
     Height sync. The track is a flex row, so its height is the TALLEST slide —
     a short image therefore leaves a large gap above the arrows, which sit at
     the viewport's bottom edge. Pin the viewport to the ACTIVE slide's height.
     --------------------------------------------------------------------------- */
  function activeIndex(track) {
    var m = /translateX\(-?([\d.]+)%\)/.exec(track.style.transform || '');
    return m ? Math.round(parseFloat(m[1]) / 100) : 0;
  }

  function syncHeights() {
    document.querySelectorAll('.refine-viewport, .concept-carousel-viewport').forEach(function (vp) {
      var track = vp.querySelector('.refine-track, .concept-carousel-track');
      if (!track) return;
      var slides = track.children;
      if (!slides.length) return;
      var slide = slides[Math.min(activeIndex(track), slides.length - 1)];
      if (!slide) return;
      track.style.alignItems = 'flex-start';
      var h = slide.getBoundingClientRect().height;
      vp.style.height = h > 0 ? Math.round(h) + 'px' : '';
    });
  }

  function watchHeights() {
    syncHeights();
    document.querySelectorAll('.refine-track, .concept-carousel-track').forEach(function (track) {
      new MutationObserver(function () { requestAnimationFrame(syncHeights); })
        .observe(track, { attributes: true, attributeFilter: ['style'] });
      new MutationObserver(function () { requestAnimationFrame(conceptArrows); })
        .observe(track, { attributes: true, attributeFilter: ['style'] });
    });
    window.addEventListener('resize', function () { setTimeout(syncHeights, 120); }, { passive: true });
    window.addEventListener('load', syncHeights);
    [300, 900, 1600].forEach(function (d) { setTimeout(syncHeights, d); });
  }


  /* ---------------------------------------------------------------------------
     Tall images. Rather than letting a portrait screenshot run past the fold,
     clip it and offer "Show full", which opens it in a lightbox.
     --------------------------------------------------------------------------- */
  var MAX_H = 0.62;   // fraction of viewport height before we clip

  function lightbox(src, alt) {
    var box = document.createElement('div');
    box.className = 'img-lightbox';
    box.innerHTML = '<button class="img-lightbox-close" aria-label="Close">&times;</button>' +
                    '<img src="' + src + '" alt="' + (alt || '') + '">';
    document.body.appendChild(box);
    document.body.style.overflow = 'hidden';
    function close() {
      box.remove();
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e) { if (e.key === 'Escape') close(); }
    box.addEventListener('click', function (e) {
      if (e.target === box || e.target.classList.contains('img-lightbox-close')) close();
    });
    document.addEventListener('keydown', onKey);
  }

  /* Every slide in a concept carousel gets clipped to the SAME height on a
     phone, so the carousel does not jump as you page through it, and each one
     carries a "Show full" button that opens the image in the lightbox.
     A one-off tall image outside a carousel is clipped only if it overruns. */
  var UNIFORM_H = 0.46;   // fraction of viewport height for carousel slides

  function addShowFull(host, img) {
    if (host.querySelector(':scope > .show-full-btn')) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'show-full-btn';
    btn.textContent = 'Show full';
    btn.addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation();
      lightbox(img.currentSrc || img.src, img.alt);
    });
    host.appendChild(btn);
  }

  function unclip(el) {
    el.classList.remove('is-clipped');
    el.style.maxHeight = ''; el.style.height = ''; el.style.overflow = ''; el.style.position = '';
    delete el.dataset.clipped;
    var b = el.querySelector(':scope > .show-full-btn');
    if (b) b.remove();
  }

  function clipTall() {
    var mobile = window.innerWidth <= 900;
    var vh = window.innerHeight;

    // 1. concept carousels: uniform height across every slide
    document.querySelectorAll('.concept-carousel').forEach(function (cc) {
      var medias = cc.querySelectorAll('.concept-carousel-media');
      medias.forEach(function (m) {
        var img = m.querySelector('img');
        if (!img) return;
        if (!mobile) { unclip(m); return; }
        m.classList.add('is-clipped');
        m.dataset.clipped = '1';
        m.style.position = 'relative';
        // a fixed height (not max-height) is what actually equalises them;
        // max-height only caps the tall ones and leaves short ones short.
        m.style.height = Math.round(vh * UNIFORM_H) + 'px';
        m.style.maxHeight = 'none';
        m.style.overflow = 'hidden';
        addShowFull(m, img);
      });
    });

    // 2. anything else only gets clipped when it genuinely overruns
    if (!mobile) {
      document.querySelectorAll('.refine-slide.is-clipped').forEach(unclip);
      return;
    }
    var limit = Math.round(vh * MAX_H);
    document.querySelectorAll('.refine-slide').forEach(function (slide) {
      var img = slide.querySelector('img');
      if (!img || !img.naturalHeight) return;
      if (slide.dataset.clipped === '1') return;
      if (img.getBoundingClientRect().height <= limit + 8) return;
      slide.dataset.clipped = '1';
      slide.classList.add('is-clipped');
      slide.style.position = 'relative';
      slide.style.maxHeight = limit + 'px';
      slide.style.overflow = 'hidden';
      addShowFull(slide, img);
    });
  }


  /* ONE mobile carousel pattern across the whole site: media on top, the two
     arrows as dark circles over the media's bottom-left, information for the
     CURRENT slide underneath. The concept carousel ships its arrows outside the
     media, absolutely positioned against a very tall shell, so on a phone we
     move them into the active slide's media. Desktop is untouched. */
  function conceptArrows() {
    var mobile = window.innerWidth <= 900;
    document.querySelectorAll('.concept-carousel').forEach(function (cc) {
      var shell = cc.querySelector('.concept-carousel-shell');
      var btns  = cc.querySelectorAll('.concept-carousel-btn');
      if (!shell || !btns.length) return;
      cc.classList.toggle('cc-mobile', mobile);

      if (!mobile) {                       // restore the desktop arrangement
        btns.forEach(function (b) { if (b.parentElement !== shell) shell.appendChild(b); });
        return;
      }
      var track = cc.querySelector('.concept-carousel-track');
      var idx = track ? activeIndex(track) : 0;
      var slides = cc.querySelectorAll('.concept-carousel-slide');
      var slide = slides[Math.min(idx, slides.length - 1)];
      var media = slide && slide.querySelector('.concept-carousel-media');
      if (!media) return;
      media.style.position = 'relative';
      btns.forEach(function (b) { if (b.parentElement !== media) media.appendChild(b); });
    });
  }

  function init() {
    TARGETS.forEach(function (t) {
      document.querySelectorAll(t.viewport).forEach(function (el) {
        wire(el, t.prev, t.next);
      });
    });
    conceptArrows();
    window.addEventListener('resize', function () { setTimeout(conceptArrows, 160); }, { passive: true });
    watchHeights();
    [400, 1000, 1800].forEach(function (d) { setTimeout(clipTall, d); });
    document.querySelectorAll('.concept-carousel img, .refine-slide img').forEach(function (im) {
      if (!im.complete) im.addEventListener('load', function () { setTimeout(clipTall, 60); }, { once: true });
    });
    window.addEventListener('resize', function () { setTimeout(clipTall, 200); }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
