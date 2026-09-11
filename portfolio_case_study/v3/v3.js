/* ============================================================================
   v3 behaviour
   1. Hero: measure the text block, then drive --p (0..1) while the stage is
      pinned. Desktop only — on mobile the hero hugs its content and there is
      no animation at all.
   2. Nav hides on scroll down, returns on scroll up.
   3. Mobile nav panel toggle.
   4. Email / WhatsApp copy on desktop with a toast; native handler on mobile.
   5. Marquee rows share one scroll speed regardless of their width.
   6. Custom cursor: accent-2 dot, circular text ring over cards.
   7. Minimal reveal-on-scroll, staggered per sibling group.
   8. Hero image sequence: fast swaps while scrolling, slow autoplay at rest.
   9. Image fallbacks until the real assets are in place.
   ============================================================================ */

(function () {
  'use strict';

  /* ---------------- 0. Loader ----------------
     A pale gradient veil that fades out as the hero images arrive. Three
     guarantees: it always resolves (hard timeout), an image that errors
     cannot stall it, and it removes itself from the DOM so it can never
     swallow clicks. */
  var loader = document.querySelector('[data-loader]');

  if (loader) {
    var MAX_WAIT_MS = 5000;
    var MIN_SHOW_MS = 450;

    // Preview mode for reviewing it: ?loader=slow (6s) or ?loader=12000 for an
    // explicit duration. Ignored without the param, so real visitors are
    // never held up.
    var demoMs = 0;
    try {
      var raw = new URLSearchParams(window.location.search).get('loader');
      if (raw) demoMs = raw === 'slow' ? 6000 : Math.max(0, parseInt(raw, 10) || 0);
    } catch (e) { demoMs = 0; }
    if (demoMs) {
      MIN_SHOW_MS = demoMs;
      MAX_WAIT_MS = demoMs + 3000;
    }

    var heroImgs = document.querySelectorAll('.hero__slide');
    var total = heroImgs.length || 1;
    var loaded = 0;
    var finished = false;
    var startedAt = Date.now();
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var target = 0;                  // 0..1, driven by images loaded
    var shown = 0;                   // eased value chasing target
    var rafId = null;

    var settle = function () {
      if (finished) return;
      finished = true;
      var wait = Math.max(0, MIN_SHOW_MS - (Date.now() - startedAt));
      setTimeout(function () {
        loader.classList.add('is-done');
        document.documentElement.classList.remove('is-loading');
        setTimeout(function () {
          if (loader.parentNode) loader.parentNode.removeChild(loader);
        }, 500);
      }, wait);
    };

    var frame = function () {
      rafId = null;
      shown += (target - shown) * 0.12;
      if (target - shown < 0.002) shown = target;
      loader.style.setProperty('--progress', shown.toFixed(3));
      if (shown < target) rafId = requestAnimationFrame(frame);
      else if (target >= 1) settle();
    };

    var pump = function () {
      if (reduced) {
        loader.style.setProperty('--progress', target.toFixed(3));
        if (target >= 1) settle();
        return;
      }
      if (rafId === null) rafId = requestAnimationFrame(frame);
    };

    var bump = function () {
      loaded++;
      target = Math.min(1, loaded / total);
      pump();
    };

    loader.style.setProperty('--progress', '0');

    if (demoMs) {
      var demoStart = Date.now();
      var demoTick = setInterval(function () {
        target = Math.min(1, (Date.now() - demoStart) / demoMs);
        pump();
        if (target >= 1) clearInterval(demoTick);
      }, 40);
    } else {
      Array.prototype.forEach.call(heroImgs, function (img) {
        if (img.complete) { bump(); return; }
        img.addEventListener('load', bump, { once: true });
        img.addEventListener('error', bump, { once: true });
      });
    }

    // Failsafes: never hold the page hostage.
    setTimeout(function () { target = 1; pump(); settle(); }, MAX_WAIT_MS);
    if (!demoMs) window.addEventListener('load', function () { target = 1; pump(); });
  }

  /* ---------------- 1. Hero grow ---------------- */
  var track = document.querySelector('[data-grow-track]');

  if (track) {
    var stage = track.querySelector('[data-grow-stage]');
    var text = track.querySelector('[data-grow-text]');
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    var queued = false;
    var active = false;

    // Natural height of the text block, so it can be collapsed as --p grows.
    var measure = function () {
      track.classList.remove('js-grow');
      track.style.removeProperty('--text-h');
      var h = text.getBoundingClientRect().height;   // forces a reflow: intended
      track.style.setProperty('--text-h', h + 'px');
      track.classList.add('js-grow');
    };

    var update = function () {
      queued = false;
      var rect = track.getBoundingClientRect();
      // The stage pins at `top` (nav height), so progress is measured from
      // there and finishes exactly when the stage unpins.
      var stickTop = parseFloat(getComputedStyle(stage).top) || 0;
      var distance = track.offsetHeight - stage.offsetHeight;
      var p = distance > 0
        ? Math.min(1, Math.max(0, (stickTop - rect.top) / distance))
        : 0;
      track.style.setProperty('--p', p.toFixed(4));
    };

    var onScroll = function () {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };

    var sync = function () {
      // Runs at every width now: on desktop --p grows the frame, on mobile it
      // drives the pinned/centred section (e.g. an image sequence).
      var wanted = !reduced.matches;

      if (wanted) {
        if (!active) {
          active = true;
          window.addEventListener('scroll', onScroll, { passive: true });
        }
        measure();
        update();
      } else if (active || track.classList.contains('js-grow')) {
        active = false;
        window.removeEventListener('scroll', onScroll);
        track.classList.remove('js-grow');
        track.style.removeProperty('--text-h');
        track.style.setProperty('--p', '0');
      }
    };

    sync();
    window.addEventListener('resize', sync);
    window.addEventListener('load', sync);       // re-measure once fonts land
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sync);
  }

  /* ---------------- 2. Hide the nav while scrolling down ---------------- */
  var nav = document.querySelector('.nav');

  if (nav) {
    var lastY = window.scrollY;
    var navQueued = false;

    var updateNav = function () {
      navQueued = false;
      var y = window.scrollY;
      var panelOpen = document.querySelector('[data-nav-panel].is-open');
      var past = y > nav.offsetHeight;

      // Never hide it while the mobile menu is open, or near the very top.
      if (panelOpen || !past || y < lastY) {
        nav.classList.remove('is-hidden');
      } else if (y > lastY) {
        nav.classList.add('is-hidden');
      }
      lastY = y;
    };

    window.addEventListener('scroll', function () {
      if (!navQueued) {
        navQueued = true;
        requestAnimationFrame(updateNav);
      }
    }, { passive: true });
  }

  /* ---------------- 3. Mobile nav panel ---------------- */
  var burger = document.querySelector('[data-nav-toggle]');
  var panel = document.querySelector('[data-nav-panel]');

  if (burger && panel) {
    var setOpen = function (open) {
      burger.setAttribute('aria-expanded', String(open));
      panel.classList.toggle('is-open', open);
    };

    burger.addEventListener('click', function () {
      setOpen(burger.getAttribute('aria-expanded') !== 'true');
    });

    panel.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setOpen(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1023) setOpen(false);
    });
  }

  /* ---------------- 4. Copy on desktop, native handler on mobile ----------
     Email and WhatsApp open mailto:/wa.me on a phone, where that is what you
     want. On desktop those handlers are usually a dead end, so the click
     copies the value and a toast confirms it. */
  var toast = document.querySelector('[data-toast]');
  var toastTimer;

  // Pins the toast's RIGHT edge just left of `anchor` and centres it
  // vertically with a transform. Using `right` + `translateY(-50%)` means the
  // toast's own width/height are never measured, so placement cannot depend on
  // layout or paint timing.
  var positionToast = function (anchor) {
    var step = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--space-small')
    ) || 8;

    var a = anchor.getBoundingClientRect();

    // offsetWidth is a synchronous layout read, used only to decide whether
    // there is room on the left. Placement itself does not rely on it.
    var roomOnLeft = a.left - step >= toast.offsetWidth;

    toast.style.top = (a.top + a.height / 2) + 'px';

    if (roomOnLeft) {
      toast.style.right = (window.innerWidth - a.left + step) + 'px';
      toast.style.left = 'auto';
    } else {
      toast.style.left = (a.right + step) + 'px';
      toast.style.right = 'auto';
    }
  };

  var showToast = function (message, anchor) {
    if (!toast) return;
    toast.textContent = message;
    clearTimeout(toastTimer);

    var reveal = function () {
      toast.classList.add('is-visible');
      toastTimer = setTimeout(function () {
        toast.classList.remove('is-visible');
      }, 2200);
    };

    if (!anchor) {
      toast.classList.remove('is-anchored');
      toast.style.left = '';
      toast.style.right = '';
      toast.style.top = '';
      reveal();
      return;
    }

    toast.classList.add('is-anchored');
    positionToast(anchor);
    reveal();
  };

  var legacyCopy = function (text) {
    var field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.top = '-1000px';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    field.setSelectionRange(0, text.length);
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(field);
    return ok;
  };

  var copyText = function (text) {
    if (navigator.clipboard && window.isSecureContext) {
      // If the async API rejects (no user activation, permission denied),
      // still try the legacy path before giving up.
      return navigator.clipboard.writeText(text).catch(function () {
        return legacyCopy(text) ? undefined : Promise.reject(new Error('copy failed'));
      });
    }
    return legacyCopy(text)
      ? Promise.resolve()
      : Promise.reject(new Error('copy failed'));
  };

  Array.prototype.forEach.call(
    document.querySelectorAll('[data-copy]'),
    function (el) {
      el.addEventListener('click', function (event) {
        // Phones keep the native mailto: / wa.me behaviour
        if (window.matchMedia('(max-width: 767px)').matches) return;

        event.preventDefault();
        var text = el.getAttribute('data-copy');
        var label = el.getAttribute('data-copy-toast') || 'Copied';

        copyText(text).then(
          function () { showToast(label, el); },
          function () { showToast('Copy failed \u2014 ' + text, el); }
        );
      });
    }
  );

  /* ---------------- 5. Marquee speed ----------------
     Both footer rows share one speed in px/second. Without this the wider row
     (more text) covers its track in the same time and so moves visibly
     faster. Lower the constant to slow both rows down. */
  var MARQUEE_PX_PER_SECOND = 60;

  Array.prototype.forEach.call(
    document.querySelectorAll('.marquee'),
    function (row) {
      var track = row.querySelector('.marquee__track');
      if (!track) return;

      var setDuration = function () {
        var width = track.getBoundingClientRect().width;
        if (!width) return;
        row.style.setProperty(
          '--marquee-duration',
          (width / MARQUEE_PX_PER_SECOND).toFixed(2) + 's'
        );
      };

      setDuration();
      window.addEventListener('resize', setDuration);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(setDuration);   // text width shifts on load
      }
    }
  );

  /* ---------------- 6. Custom cursor ----------------
     A dot that follows the pointer and becomes a ring of circular text over a
     card. Enabled only on a fine pointer, and never under reduced motion, so
     touch and reduced-motion users keep the native cursor. */
  var cursor = document.querySelector('[data-cursor]');
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  var noMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (cursor && fine.matches && !noMotion.matches) {
    var cursorText = cursor.querySelector('[data-cursor-text]');
    var pointerX = 0;
    var pointerY = 0;
    var cursorQueued = false;

    document.documentElement.classList.add('has-cursor');

    var drawCursor = function () {
      cursorQueued = false;
      cursor.style.setProperty('--cx', pointerX + 'px');
      cursor.style.setProperty('--cy', pointerY + 'px');
    };

    document.addEventListener('mousemove', function (event) {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!cursorQueued) {
        cursorQueued = true;
        requestAnimationFrame(drawCursor);
      }
    }, { passive: true });

    // Hide it when the pointer leaves the window entirely
    document.addEventListener('mouseleave', function () {
      cursor.classList.remove('is-active');
    });

    Array.prototype.forEach.call(
      document.querySelectorAll('[data-cursor-label]'),
      function (card) {
        card.addEventListener('mouseenter', function () {
          var label = card.getAttribute('data-cursor-label') || 'Read case study';
          // Two repeats fill the circle; textLength closes the loop exactly.
          if (cursorText) cursorText.textContent = (label + ' \u2733 ').repeat(2).trim();
          cursor.classList.add('is-active');
        });
        card.addEventListener('mouseleave', function () {
          cursor.classList.remove('is-active');
        });
      }
    );
  }

  /* ---------------- 7. Reveal on scroll ----------------
     One-shot: reveal, then stop observing. Siblings stagger slightly so a row
     of cards arrives in sequence rather than all at once. */
  if (document.documentElement.classList.contains('has-reveal')) {
    var STAGGER_MS = 70;
    var STAGGER_MAX = 4;

    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var el = entry.target;
        var parent = el.parentElement;
        var index = 0;

        if (parent) {
          var siblings = Array.prototype.filter.call(
            parent.children,
            function (child) { return child.classList.contains('reveal'); }
          );
          index = Math.min(siblings.indexOf(el), STAGGER_MAX);
        }

        el.style.setProperty('--reveal-delay', (index * STAGGER_MS) + 'ms');
        el.classList.add('is-in');
        obs.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    Array.prototype.forEach.call(
      document.querySelectorAll('.reveal'),
      function (el) { revealObserver.observe(el); }
    );
  }

  /* ---------------- 8. Hero image sequence ----------------
     Two speeds on one timer: fast swaps while the page is being scrolled,
     slow autoplay when it is still. The fade length follows the same flag. */
  var sequence = document.querySelector('[data-sequence]');

  if (sequence && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var slides = sequence.querySelectorAll('.hero__slide');

    if (slides.length > 1) {
      var SLIDE_IDLE_MS = 4000;       // autoplay pace when the page is still
      var FADE_SCROLLING = '350ms';
      var FADE_IDLE = '800ms';
      var SCROLL_SETTLE_MS = 160;
      var TICK_MS = 80;

      var slideIndex = 0;
      var elapsed = 0;
      var scrolling = false;
      var settleTimer;

      var show = function (next) {
        if (next === slideIndex) return;
        slides[slideIndex].classList.remove('is-current');
        slideIndex = next;
        slides[slideIndex].classList.add('is-current');
      };

      var advance = function () {
        show((slideIndex + 1) % slides.length);
      };

      // While scrolling the index comes from position, not a timer: the hero's
      // scroll length is split evenly between the slides, so each one owns
      // 1/N of the section. --p is written by the hero grow logic above.
      var heroTrack = document.querySelector('[data-grow-track]');

      var indexFromScroll = function () {
        if (!heroTrack) return null;
        var p = parseFloat(heroTrack.style.getPropertyValue('--p'));
        if (isNaN(p)) return null;
        return Math.max(0, Math.min(slides.length - 1, Math.floor(p * slides.length)));
      };

      // Give every slide an equal, consistent share of scroll: one screen of
      // pin plus --hero-per-image screens per slide. Recomputed on resize
      // because the per-slide share differs between mobile and desktop.
      var sizeTrack = function () {
        if (!heroTrack) return;
        var per = parseFloat(
          getComputedStyle(heroTrack).getPropertyValue('--hero-per-image')
        ) || 0.7;
        heroTrack.style.setProperty('--hero-screens', (1 + slides.length * per).toFixed(3));
      };
      sizeTrack();
      window.addEventListener('resize', sizeTrack);

      sequence.style.setProperty('--slide-fade', FADE_IDLE);

      setInterval(function () {
        // Scrolling owns the index; the timer only runs when the page is still.
        if (document.hidden || scrolling) return;
        elapsed += TICK_MS;
        if (elapsed >= SLIDE_IDLE_MS) {
          elapsed = 0;
          advance();
        }
      }, TICK_MS);

      window.addEventListener('scroll', function () {
        if (!scrolling) {
          scrolling = true;
          sequence.style.setProperty('--slide-fade', FADE_SCROLLING);
        }
        var fromScroll = indexFromScroll();
        if (fromScroll !== null) show(fromScroll);
        elapsed = 0;

        clearTimeout(settleTimer);
        settleTimer = setTimeout(function () {
          scrolling = false;
          elapsed = 0;                 // resume autoplay from where it stopped
          sequence.style.setProperty('--slide-fade', FADE_IDLE);
        }, SCROLL_SETTLE_MS);
      }, { passive: true });
    }
  }

  /* ---------------- 9. Image fallbacks ---------------- */
  Array.prototype.forEach.call(
    document.querySelectorAll('[data-fallback] img:first-of-type'),
    function (img) {
      var mark = function () {
        img.closest('[data-fallback]').classList.add('is-empty');
      };
      if (img.complete && img.naturalWidth === 0) mark();
      img.addEventListener('error', mark);
    }
  );
}());

/* ============================================================================
   10. The Download CV FAB belongs to the hero, so it fades out with it.
       Observed rather than measured on every scroll frame: the hero is a tall
       sticky track, and its intersection is exactly the signal we want.
   ============================================================================ */
(function () {
  'use strict';
  var fab = document.querySelector('[data-hero-cv]');
  var hero = document.querySelector('.hero');
  if (!fab || !hero) return;

  if (!('IntersectionObserver' in window)) return;   /* stays visible, still usable */

  new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      fab.classList.toggle('is-gone', !entry.isIntersecting);
    });
  }, { rootMargin: '-10% 0px -10% 0px', threshold: 0 }).observe(hero);
}());
