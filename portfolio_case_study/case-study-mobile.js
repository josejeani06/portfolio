/* ============================================================================
   case-study-mobile.js — shared mobile helpers for the case-study pages.

   "Swipe to scroll" hint: any element marked [data-hscroll] that actually
   overflows horizontally on a small screen gets a small floating pill with a
   moving icon. The pill disappears the first time the user scrolls/swipes it,
   and never comes back for that element. Desktop (>640px) is untouched.
   ============================================================================ */
(function () {
  "use strict";

  var MOBILE = window.matchMedia("(max-width: 640px)");

  function overflows(el) {
    return el.scrollWidth - el.clientWidth > 6;
  }

  function buildHint() {
    var hint = document.createElement("div");
    hint.className = "hscroll-hint";
    hint.setAttribute("aria-hidden", "true");
    hint.innerHTML =
      '<span class="hscroll-hint-ico">' +
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M9 6 4 12l5 6"/><path d="M15 6l5 6-5 6"/>' +
      "</svg></span><span>Swipe to scroll</span>";
    return hint;
  }

  function attach(el) {
    if (el.__hscrollBound) return;
    el.__hscrollBound = true;

    var hint = null;

    function dismiss() {
      if (!hint) return;
      hint.classList.add("is-gone");
      var node = hint;
      hint = null;
      window.setTimeout(function () {
        if (node && node.parentNode) node.parentNode.removeChild(node);
      }, 320);
      el.removeEventListener("scroll", dismiss);
      el.removeEventListener("touchmove", dismiss);
      el.removeEventListener("pointerdown", dismiss);
    }

    function show() {
      if (hint || el.__hscrollDone) return;
      if (!MOBILE.matches || !overflows(el)) return;
      if (getComputedStyle(el).position === "static") el.style.position = "relative";
      hint = buildHint();
      el.appendChild(hint);
      // fade in shortly after insert
      window.setTimeout(function () {
        if (hint) hint.classList.add("is-in");
      }, 20);
      el.addEventListener("scroll", dismiss, { passive: true });
      el.addEventListener("touchmove", dismiss, { passive: true });
      el.addEventListener("pointerdown", dismiss, { passive: true });
      el.__hscrollDone = true; // only ever show once per element
    }

    // Reveal the hint once the element is meaningfully in view. A plain
    // scroll/rAF visibility check is used instead of IntersectionObserver,
    // which is unreliable in some embedded/preview contexts.
    el.__hscrollReveal = function () {
      if (el.__hscrollDone || hint) return;
      var r = el.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var inView = r.top < vh * 0.85 && r.bottom > vh * 0.2;
      if (inView) show();
    };
    pending.push(el);
    el.__hscrollReveal();
  }

  var pending = [];
  var ticking = false;
  function sweep() {
    ticking = false;
    for (var i = pending.length - 1; i >= 0; i--) {
      var el = pending[i];
      if (el.__hscrollDone) {
        pending.splice(i, 1);
      } else if (el.__hscrollReveal) {
        el.__hscrollReveal();
      }
    }
  }
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.setTimeout(sweep, 80);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  /* Wrappers that CSS turns into horizontal scrollers at ≤640px. The hint only
     actually appears on those that genuinely overflow, so listing them here is
     safe even where a given page doesn't use one. */
  var SELECTORS =
    "[data-hscroll], .itable, .decision-log-table, .persona-table-shell," +
    " .comparison-table, .model-comparison-table, .journey-steps";

  function init() {
    // Bind regardless of viewport (cheap); show() gates on MOBILE at reveal time,
    // so this works whether the page loads narrow or is resized narrow later.
    var nodes = document.querySelectorAll(SELECTORS);
    for (var i = 0; i < nodes.length; i++) attach(nodes[i]);
    sweep();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  // re-check when the viewport crosses the breakpoint (rotate / resize)
  function onMediaChange() {
    if (!MOBILE.matches) {
      // left mobile — drop any lingering hint
      var hints = document.querySelectorAll(".hscroll-hint");
      for (var i = 0; i < hints.length; i++) hints[i].parentNode.removeChild(hints[i]);
      return;
    }
    init();
  }
  if (MOBILE.addEventListener) MOBILE.addEventListener("change", onMediaChange);
  else if (MOBILE.addListener) MOBILE.addListener(onMediaChange);
})();
