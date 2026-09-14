/* ============================================================================
   Deck behaviour
   1. Scale the fixed 1440x810 stage to fit whatever window it opens in.
   2. Move between slides with the keyboard, the on-screen controls, or a swipe.
   3. Keep the slide number in the URL so a single slide can be linked or
      reloaded in place.
   ============================================================================ */
(function () {
  'use strict';

  var deck = document.querySelector('[data-deck]');
  if (!deck) return;

  var stage = deck.querySelector('.deck__stage');
  var slides = [].slice.call(deck.querySelectorAll('.slide'));
  if (!stage || !slides.length) return;

  var prevBtn = deck.querySelector('[data-deck-prev]');
  var nextBtn = deck.querySelector('[data-deck-next]');
  var count = deck.querySelector('[data-deck-count]');
  var bar = deck.querySelector('[data-deck-bar]');
  var hint = deck.querySelector('[data-deck-hint]');

  var index = 0;
  var moved = false;

  /* ---- 1. fit the stage ---------------------------------------------------
     The stage never reflows; it is scaled as a whole. Leaving a margin's worth
     of breathing room on each side stops it touching the window edge, and the
     factor is capped at 1 so a huge monitor shows the slide at its true size
     rather than a blurry upscale. */
  var fit = function () {
    /* The breathing room is the page's own --margin-medium, read from the
       stylesheet rather than restated here, so it tightens on small screens
       exactly like every other margin does. */
    var css = getComputedStyle(document.documentElement);
    var gap = parseFloat(css.getPropertyValue('--margin-medium')) || 0;
    var btn = parseFloat(css.getPropertyValue('--deck-btn')) || 0;

    /* The controls, the counter and the case-study link are fixed to the
       window, so the stage has to stop short of them. Reserving one control
       row plus a gap keeps the chrome off the slide instead of floating over
       its bottom corners. */
    var w = (window.innerWidth - 2 * gap) / stage.offsetWidth;
    var h = (window.innerHeight - 2 * gap - btn - gap) / stage.offsetHeight;
    var k = Math.min(w, h, 1);
    document.documentElement.style.setProperty('--deck-k', k > 0 ? k : 1);
  };

  /* ---- 2. show a slide --------------------------------------------------- */
  var show = function (i, push) {
    index = Math.max(0, Math.min(i, slides.length - 1));

    slides.forEach(function (s, n) {
      s.classList.toggle('is-current', n === index);
      s.setAttribute('aria-hidden', n === index ? 'false' : 'true');
    });

    if (count) count.textContent = (index + 1) + ' / ' + slides.length;
    if (bar) bar.style.width = ((index + 1) / slides.length * 100) + '%';
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === slides.length - 1;

    if (!moved && index > 0) {
      moved = true;
      if (hint) hint.classList.add('is-gone');
    }

    if (push) {
      try {
        history.replaceState(null, '', '#' + (index + 1));
      } catch (e) { /* file:// refuses replaceState in some browsers */ }
    }
  };

  var go = function (delta) { show(index + delta, true); };

  /* ---- 3. input ----------------------------------------------------------- */
  var KEYS_NEXT = { ArrowRight: 1, ArrowDown: 1, PageDown: 1, ' ': 1, Spacebar: 1, Enter: 1 };
  var KEYS_PREV = { ArrowLeft: 1, ArrowUp: 1, PageUp: 1, Backspace: 1 };

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (KEYS_NEXT[e.key]) { e.preventDefault(); go(1); }
    else if (KEYS_PREV[e.key]) { e.preventDefault(); go(-1); }
    else if (e.key === 'Home') { e.preventDefault(); show(0, true); }
    else if (e.key === 'End') { e.preventDefault(); show(slides.length - 1, true); }
  });

  if (prevBtn) prevBtn.addEventListener('click', function () { go(-1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { go(1); });

  /* swipe — horizontal only, so a vertical scroll gesture is left alone */
  var x0 = null, y0 = null;
  deck.addEventListener('touchstart', function (e) {
    var t = e.changedTouches[0];
    x0 = t.clientX; y0 = t.clientY;
  }, { passive: true });

  deck.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var t = e.changedTouches[0];
    var dx = t.clientX - x0;
    var dy = t.clientY - y0;
    x0 = y0 = null;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    go(dx < 0 ? 1 : -1);
  }, { passive: true });

  /* ---- 4. start ----------------------------------------------------------- */
  var start = parseInt((location.hash || '').slice(1), 10);
  fit();
  show(isNaN(start) ? 0 : start - 1, false);

  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', fit);

  /* Webfonts land after first paint and can change the stage's measured size,
     so re-fit once they are in. */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
}());
