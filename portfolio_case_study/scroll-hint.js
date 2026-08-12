/* =============================================================================
   "Swipe to see" hint for horizontally-scrollable tables on mobile.
   Only attaches to elements that ACTUALLY overflow, and removes itself the
   moment the reader scrolls — so it never lies and never nags.
   ============================================================================= */
(function () {
  var SELECTOR = [
    '.itable', '.comparison-table', '.perm-matrix', '.results-table',
    '.decision-log-table', '.rd-rows', '.rd-compare', '.vs-table', '.table-scroll'
  ].join(',');

  var MOBILE = 760;

  function scrollable(el) {
    return el.scrollWidth - el.clientWidth > 12;
  }

  function attach(el) {
    if (el.dataset.hintWired === '1') return;

    // the hint is positioned against the scroll container's wrapper
    var host = el;
    if (getComputedStyle(host).position === 'static') host.style.position = 'relative';

    var hint = document.createElement('span');
    hint.className = 'scroll-hint';
    hint.setAttribute('aria-hidden', 'true');
    hint.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" ' +
      'stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>Swipe to see more';
    host.appendChild(hint);
    el.dataset.hintWired = '1';

    function dismiss() {
      hint.classList.add('is-gone');
      el.removeEventListener('scroll', dismiss);
      setTimeout(function () { if (hint.parentNode) hint.parentNode.removeChild(hint); }, 400);
    }
    el.addEventListener('scroll', dismiss, { passive: true });
  }

  function detach(el) {
    var h = el.querySelector(':scope > .scroll-hint');
    if (h) h.remove();
    delete el.dataset.hintWired;
  }

  function sync() {
    var isMobile = (window.innerWidth || document.documentElement.clientWidth) <= MOBILE;
    document.querySelectorAll(SELECTOR).forEach(function (el) {
      if (isMobile && scrollable(el)) attach(el);
      else if (!scrollable(el) || !isMobile) detach(el);
    });
  }

  function init() {
    sync();
    var t;
    window.addEventListener('resize', function () {
      clearTimeout(t); t = setTimeout(sync, 200);
    }, { passive: true });
    // late-loading images can change table widths
    window.addEventListener('load', sync);
    setTimeout(sync, 800);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
