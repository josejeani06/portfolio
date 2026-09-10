/* ============================================================================
   Case study behaviour
   1. Nav goes solid (dark text) once the dark banner is behind it.
   2. Scroll-spy on the sticky contents rail: the current H2 group and the
      current H3 are marked separately, and the rail scrolls itself to keep
      whichever one is active in view.
   ============================================================================ */
(function () {
  'use strict';

  var nav = document.querySelector('[data-cs-nav]');
  var banner = document.querySelector('.cs-banner');
  var toc = document.querySelector('.cs-toc');
  var content = document.querySelector('.cs-content');
  if (!toc || !content) return;

  var links = [].slice.call(toc.querySelectorAll('a[href^="#"]'));

  /* H3 (and H2) rows that have their own anchor */
  var items = links.map(function (a) {
    var el = document.getElementById(a.getAttribute('href').slice(1));
    return el ? { a: a, el: el, level: el.tagName === 'H2' ? 2 : 3 } : null;
  }).filter(Boolean);

  /* ---- pair each group label with its H2 ---------------------------------
     The rail is written in the same order as the reading column, so an
     ordinal pairing is right; text matching is tried first so a reordered
     rail still lines up. */
  var groupRows = [].slice.call(toc.querySelectorAll('.cs-toc__group'));
  var h2s = [].slice.call(content.querySelectorAll('h2'));
  var norm = function (s) { return (s || '').replace(/\s+/g, ' ').trim().toLowerCase(); };

  var groups = groupRows.map(function (li, i) {
    var label = norm(li.textContent);
    var match = null;
    for (var j = 0; j < h2s.length; j++) {
      if (norm(h2s[j].textContent) === label) { match = h2s[j]; break; }
    }
    return { li: li, el: match || h2s[i] || null };
  }).filter(function (g) { return g.el; });

  var activeItem = null;
  var activeGroup = null;
  var queued = false;
  var lastY = window.scrollY;   /* for hide-on-read, same behaviour as the landing nav */

  /* Keep `el` visible inside the rail without yanking it around.
     Measured with rects rather than offsetTop: .cs-toc is position:sticky, so
     it is the offsetParent of its own rows and subtracting toc.offsetTop
     double-counted the offset, which is why the rail never followed along. */
  var reveal = function (el) {
    var pad = 24;
    var er = el.getBoundingClientRect();
    var cr = toc.getBoundingClientRect();
    var top = er.top - cr.top + toc.scrollTop;   /* position inside the scroll content */
    var bottom = top + er.height;
    var viewTop = toc.scrollTop;
    var viewBottom = viewTop + toc.clientHeight;
    var to = null;

    if (top < viewTop + pad) to = top - pad;
    else if (bottom > viewBottom - pad) to = bottom - toc.clientHeight + pad;
    if (to === null) return;

    to = Math.max(0, Math.min(to, toc.scrollHeight - toc.clientHeight));
    if (Math.abs(to - toc.scrollTop) < 2) return;

    if (typeof toc.scrollTo === 'function') {
      try { toc.scrollTo({ top: to, behavior: 'smooth' }); return; } catch (e) { /* older engines */ }
    }
    toc.scrollTop = to;
  };

  var update = function () {
    queued = false;

    /* 1. nav treatment — light over the banner, solid past it, and out of the
       way while reading downward. It comes back on any upward scroll. */
    var y = window.scrollY;
    if (nav && banner) {
      var past = banner.getBoundingClientRect().bottom <= nav.offsetHeight;
      nav.classList.toggle('is-solid', past);

      if (!past || y < lastY || y <= 0) nav.classList.remove('is-hidden');
      else if (y > lastY) nav.classList.add('is-hidden');
    }
    if (Math.abs(y - lastY) > 1) lastY = y;

    /* 2. the reading line: just under the fixed nav */
    var line = (nav ? nav.offsetHeight : 80) + 40;

    var item = null;
    for (var i = 0; i < items.length; i++) {
      if (items[i].el.getBoundingClientRect().top <= line) item = items[i];
      else break;
    }

    var group = null;
    for (var g = 0; g < groups.length; g++) {
      if (groups[g].el.getBoundingClientRect().top <= line) group = groups[g];
      else break;
    }

    var changed = false;

    if (group !== activeGroup) {
      if (activeGroup) activeGroup.li.classList.remove('is-current');
      activeGroup = group;
      if (activeGroup) activeGroup.li.classList.add('is-current');
      changed = true;
    }

    if (item !== activeItem) {
      if (activeItem) activeItem.a.classList.remove('is-active');
      activeItem = item;
      if (activeItem) activeItem.a.classList.add('is-active');
      changed = true;
    }

    /* 3. follow along: prefer the H3, fall back to its group heading */
    if (changed) {
      var target = (activeItem && activeItem.a) || (activeGroup && activeGroup.li);
      if (target) reveal(target);
    }
  };

  window.addEventListener('scroll', function () {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
}());

/* ============================================================================
   3. Image lightbox — click any content image to see it larger.
      The billing page shipped this behaviour bound to two selectors; this is
      the same idea applied to every content image, carousels included. The
      caption prefers an explicit data-lightbox-caption, then the figure's own
      figcaption, then the image's alt text.
   ============================================================================ */
(function () {
  'use strict';

  /* The lightbox markup sits at the very end of <body>, after this script tag,
     so wait for the parser to finish before looking it up. */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
  var box = document.getElementById('cs-lightbox');
  var content = document.querySelector('.cs-content');
  if (!box || !content) return;

  var img = document.getElementById('cs-lightbox-image');
  var vid = document.getElementById('cs-lightbox-video');
  var title = document.getElementById('cs-lightbox-title');
  var text = document.getElementById('cs-lightbox-text');
  var closeBtn = document.getElementById('cs-lightbox-close');
  var lastFocus = null;

  var open = function (source, media) {
    if (!media) return;
    var isVideo = media.tagName === 'VIDEO';
    var src = media.currentSrc || media.src ||
      (isVideo && media.querySelector('source') ? media.querySelector('source').src : '');
    if (!src) return;

    lastFocus = document.activeElement;

    if (isVideo) {
      img.hidden = true;
      img.src = '';
      vid.hidden = false;
      vid.src = src;
      if (media.poster) vid.poster = media.poster;
      vid.play().catch(function () { /* autoplay may be refused; controls remain */ });
    } else {
      vid.hidden = true;
      vid.removeAttribute('src');
      img.hidden = false;
      img.src = src;
      img.alt = media.alt || '';
    }

    var cap = source.getAttribute('data-lightbox-caption');
    if (!cap) {
      var fig = media.closest('figure');
      var fc = fig && fig.querySelector('figcaption');
      /* a carousel slide carries its copy beside the media, not in a caption */
      var slide = media.closest('.refine-slide, .concept-carousel-slide');
      /* NB: not `title` — that name is the lightbox's own title element in the
         enclosing scope, and a `var` here would hoist over it. */
      var slideTitle = null;
      if (slide) {
        var carousel = slide.closest('.refine-carousel, .concept-carousel');
        slideTitle = carousel && carousel.querySelector(
          '.refine-item.is-active .refine-item-title, .concept-carousel-slide h4');
      }
      cap = (fc && fc.textContent.trim()) ||
            (slideTitle && slideTitle.textContent.trim()) ||
            media.alt || '';
    }
    title.textContent = source.getAttribute('data-lightbox-title') || '';
    text.textContent = cap || '';

    box.hidden = false;
    box.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
    closeBtn.focus();
  };

  var close = function () {
    box.hidden = true;
    box.setAttribute('aria-hidden', 'true');
    img.src = '';
    vid.pause();
    vid.removeAttribute('src');
    document.documentElement.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  };

  /* Every image in the reading column, except decorative chrome: logos, the
     nav avatar, icons, and the poster that already has a play button on it. */
  var SKIP = '.cs-logos__item, .nav__logo, .cs-model__icon, .harness-file, .play-btn, .proto-poster';
  [].slice.call(content.querySelectorAll('img, video')).forEach(function (picture) {
    if (picture.closest(SKIP)) return;
    if (picture.tagName === 'IMG' && picture.width && picture.width < 80) return;

    /* the clickable surface is the framed wrapper when there is one */
    var source = picture.closest('[data-lightbox-caption], .shot-media, .vid-frame, .cs-figure, ' +
      '.concept-carousel-media, .scroll-story-mobile-media, .refine-media, figure') || picture;

    if (source.hasAttribute('data-cs-zoom')) return;   /* already wired */
    source.setAttribute('data-cs-zoom', '');
    source.addEventListener('click', function (e) {
      if (e.target.closest('a, button')) return;       /* let real controls win */
      open(source, picture);
    });
  });

  closeBtn.addEventListener('click', close);
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !box.hidden) close();
  });
  }
}());

/* ============================================================================
   4. Mark a table wrapper as scrollable only when it really overflows, so the
      swipe hint appears exactly where sideways scrolling is possible.
   ============================================================================ */
(function () {
  'use strict';
  var run = function () {
    var boxes = [].slice.call(document.querySelectorAll('[data-cs-scroller]'));
    if (!boxes.length) return;
    var measure = function () {
      boxes.forEach(function (b) {
        b.classList.toggle('is-scrollable', b.scrollWidth > b.clientWidth + 2);
      });
    };
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
}());
