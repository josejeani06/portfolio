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

  function init() {
    TARGETS.forEach(function (t) {
      document.querySelectorAll(t.viewport).forEach(function (el) {
        wire(el, t.prev, t.next);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
