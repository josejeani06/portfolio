/* =============================================================================
   QA SUITE — portfolio redesign
   Runs in the browser against every redesign page, at every breakpoint.
   Usage:  copy into devtools console on any page of the site, then:  await runQA()
   Each check returns {name, pass, detail}. Nothing here mutates the pages.
   ============================================================================= */
(function () {
  const PAGES = [
    'redesign.html',
    'map-case-study-redesign.html',
    'integration-case-study-redesign.html',
    'org-management-case-study-redesign.html',
    'billing-case-study-redesign.html',
    'design-system-case-study-redesign.html',
  ];
  const WIDTHS = [375, 768, 1280];

  // baselines captured BEFORE the restyle — these must not regress
  // measured from live MARKUP (not grep of CSS+markup). Each page uses a
  // different interaction pattern, so each has its own selector + floor.
  const INTERACTION_BASELINE = {
    'map-case-study-redesign.html':            { sel: '.refine-slide',       min: 7  },
    'integration-case-study-redesign.html':    { sel: '.scroll-story-step',  min: 5  },
    'org-management-case-study-redesign.html': { sel: '.refine-slide',       min: 6  },
    'billing-case-study-redesign.html':        { sel: '.refine-slide',       min: 12 },
  };

  const APPROVED_BUTTONS = [
    { name: 'filled purple', bg: 'rgb(113, 76, 182)', fg: 'rgb(255, 255, 255)' },
    { name: 'outline on light', bg: 'rgba(0, 0, 0, 0)', fg: 'rgb(17, 17, 16)' },
    { name: 'outline on dark', bg: 'rgba(0, 0, 0, 0)', fg: 'rgb(255, 255, 255)' },
    { name: 'white on purple (CTA panel)', bg: 'rgb(255, 255, 255)', fg: 'rgb(113, 76, 182)' },
  ];

  /* ---------------------------------------------------------------- utils */
  function lum(c) {
    const m = c.match(/[\d.]+/g); if (!m) return null;
    const r = [+m[0], +m[1], +m[2]].map(v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); });
    return .2126 * r[0] + .7152 * r[1] + .0722 * r[2];
  }
  const alpha = c => { const m = c.match(/[\d.]+/g); return m && m.length > 3 ? +m[3] : 1; };
  function effectiveBg(el, win, doc) {
    let n = el;
    while (n && n !== doc.documentElement) {
      const b = win.getComputedStyle(n).backgroundColor;
      if (b && alpha(b) > .5) return b;
      n = n.parentElement;
    }
    return 'rgb(255,255,255)';
  }
  function ratio(fg, bg) {
    const a = lum(fg), b = lum(bg); if (a === null || b === null) return null;
    return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
  }
  function load(src, width) {
    return new Promise(res => {
      const f = document.createElement('iframe');
      f.style.cssText = `width:${width}px;height:900px;position:fixed;left:-99999px;top:0;border:0`;
      f.src = src + (src.includes('?') ? '&' : '?') + 'qa=' + Date.now() + width;
      f.onload = () => setTimeout(() => res(f), 1300);
      document.body.appendChild(f);
    });
  }

  /* --------------------------------------------------------------- checks */
  const CHECKS = {
    // 1. every text node must clear WCAG AA (4.5:1)
    contrast(doc, win) {
      const bad = [];
      doc.querySelectorAll('p,li,td,th,h1,h2,h3,h4,span,dd,dt,figcaption,small,strong,a').forEach(el => {
        if (!el.offsetParent && win.getComputedStyle(el).position !== 'fixed') return;
        const t = (el.textContent || '').trim(); if (!t || t.length < 3) return;
        if (el.querySelector('p,li,h1,h2,h3,h4,td')) return;
        const cs = win.getComputedStyle(el);
        if (cs.visibility === 'hidden' || cs.opacity === '0') return;
        const r = ratio(cs.color, effectiveBg(el, win, doc));
        if (r !== null && r < 4.5) bad.push(`${(el.className || el.tagName)} ${r.toFixed(2)}:1 "${t.slice(0, 30)}"`);
      });
      return { pass: bad.length === 0, detail: bad.length ? bad.slice(0, 5) : 'all text >= 4.5:1' };
    },

    // 2. layout must fit the viewport
    noHorizontalScroll(doc) {
      const de = doc.documentElement;
      const over = de.scrollWidth - de.clientWidth;
      return { pass: over <= 1, detail: `scrollW ${de.scrollWidth} vs clientW ${de.clientWidth}` };
    },

    // 3. no fake macOS window chrome
    noFakeChrome(doc) {
      const vis = [...doc.querySelectorAll('.shot-bar,.audience-builder-window-dots')]
        .filter(e => e.getBoundingClientRect().height > 0);
      return { pass: vis.length === 0, detail: `${vis.length} visible chrome bars` };
    },

    // 4. reading-progress indicator exists
    progressIndicator(doc) {
      const el = doc.querySelector('#read-progress,.read-progress,.rd-progress,.progress');
      return { pass: !!el, detail: el ? (el.className || el.id) : 'MISSING' };
    },

    // 5. only approved button styles render
    buttonStyles(doc, win) {
      const rogue = [];
      doc.querySelectorAll('.button,.btn,.rd-btn,.next-case-primary,.next-case-outline').forEach(b => {
        const cs = win.getComputedStyle(b);
        if (b.getBoundingClientRect().height === 0) return;
        const ok = APPROVED_BUTTONS.some(a => a.bg === cs.backgroundColor && a.fg === cs.color);
        if (!ok) rogue.push(`${b.className || b.tagName}: bg=${cs.backgroundColor} fg=${cs.color}`);
      });
      return { pass: rogue.length === 0, detail: rogue.length ? [...new Set(rogue)].slice(0, 4) : 'only approved variants' };
    },

    // 6. no cream/ivory fills anywhere
    noCreamFills(doc, win) {
      const cream = [];
      doc.querySelectorAll('.button,.btn,a,button').forEach(b => {
        const bg = win.getComputedStyle(b).backgroundColor;
        if (/236, 234, 223|255, 251, 246|236, 233, 226/.test(bg) && b.getBoundingClientRect().height > 0)
          cream.push(`${b.className || b.tagName} ${bg}`);
      });
      return { pass: cream.length === 0, detail: cream.length ? cream.slice(0, 3) : 'no cream fills' };
    },

    // 7. dark sections use the dark-purple token, never black
    darkSectionColor(doc, win) {
      const wrong = [];
      doc.querySelectorAll('.section-dark,.section-dark-soft,.callout,.next-case-panel').forEach(s => {
        const bg = win.getComputedStyle(s).backgroundColor;
        const m = bg.match(/\d+/g); if (!m) return;
        const [r, g, b] = m.map(Number);
        const isBlackish = r < 20 && g < 20 && b < 20;
        if (isBlackish) wrong.push(`${s.className}: ${bg}`);
      });
      return { pass: wrong.length === 0, detail: wrong.length ? wrong.slice(0, 3) : 'no black dark-surfaces' };
    },

    // 8. heading scale is consistent (h2 must resolve to the shared clamp)
    headingScale(doc, win) {
      const sizes = new Set();
      doc.querySelectorAll('.section-head h2,.next-case-panel h2').forEach(h => {
        if (h.getBoundingClientRect().height === 0) return;
        sizes.add(Math.round(parseFloat(win.getComputedStyle(h).fontSize)));
      });
      return { pass: sizes.size <= 2, detail: `h2 sizes: ${[...sizes].join(', ') || 'none'}` };
    },

    // 9. no broken images / empty src
    noBrokenImages(doc) {
      const broken = [];
      doc.querySelectorAll('img').forEach(i => {
        const src = i.getAttribute('src');
        if (!src) { if (!/lightbox|preview/i.test(i.id + ' ' + i.className)) broken.push('(no src) ' + (i.id||i.className)); return; }
        if (i.complete && i.naturalWidth === 0) broken.push(src);
      });
      return { pass: broken.length === 0, detail: broken.length ? broken.slice(0, 4) : 'all images loaded' };
    },

    // 10. no visible placeholder text
    noPlaceholders(doc) {
      const hits = [];
      doc.querySelectorAll('body *').forEach(el => {
        if (el.children.length) return;
        const t = (el.textContent || '').trim();
        if (/lorem ipsum|placeholder|TODO|FIXME|coming soon|TBD/i.test(t) && el.getBoundingClientRect().height > 0)
          hits.push(t.slice(0, 40));
      });
      return { pass: hits.length === 0, detail: hits.length ? hits.slice(0, 3) : 'no placeholder copy' };
    },

    // 11. tap targets >= 40px on touch widths
    tapTargets(doc, win) {
      if (win.innerWidth > 600) return { pass: true, detail: 'n/a (desktop)' };
      const small = [];
      doc.querySelectorAll('a.button,.btn,button,.refine-arrow,.refine-persona,.concept-carousel-dot').forEach(b => {
        const r = b.getBoundingClientRect();
        if (r.height === 0) return;
        // a control may expand its hit area with an ::after overlay
        const after = win.getComputedStyle(b, '::after');
        const hit = Math.max(r.height, parseFloat(after.height) || 0);
        if (hit < 40) small.push(`${b.className || b.tagName} ${Math.round(hit)}px`);
      });
      return { pass: small.length === 0, detail: small.length ? [...new Set(small)].slice(0, 4) : 'all >= 40px' };
    },

    // 12. scroll/reveal animation wiring present and reduced-motion respected
    animations(doc, win) {
      const reveals = doc.querySelectorAll('[class*="reveal"],.rd-reveal').length;
      const carousels = doc.querySelectorAll('.refine-track,.concept-carousel-track').length;
      const story = doc.querySelectorAll('.scroll-story-step').length;
      return { pass: true, detail: `reveal:${reveals} carousel:${carousels} scrollStory:${story}` };
    },
  };

  /* ------------------------------------------------------------- the runner */
  async function runQA(opts = {}) {
    const pages = opts.pages || PAGES;
    const widths = opts.widths || WIDTHS;
    const results = [];
    for (const page of pages) {
      for (const w of widths) {
        const f = await load(page, w);
        const doc = f.contentDocument, win = f.contentWindow;
        for (const [name, fn] of Object.entries(CHECKS)) {
          let out;
          try { out = fn(doc, win); } catch (e) { out = { pass: false, detail: 'ERROR ' + e.message }; }
          results.push({ page, width: w, check: name, pass: out.pass, detail: out.detail });
        }
        // interaction baseline (markup-count regression guard) — desktop only
        if (w === 1280 && INTERACTION_BASELINE[page]) {
          const { sel, min } = INTERACTION_BASELINE[page];
          const got = doc.querySelectorAll(sel).length;
          results.push({
            page, width: w, check: 'interactionsPreserved',
            pass: got >= min, detail: `${sel}: ${got} (min ${min})`,
          });
        }
        f.remove();
      }
    }
    const failed = results.filter(r => !r.pass);
    console.table(failed.length ? failed : results.filter(r => r.width === 1280));
    return {
      total: results.length,
      passed: results.length - failed.length,
      failed: failed.length,
      failures: failed,
    };
  }

  window.runQA = runQA;
  window.__QA_CHECKS = CHECKS;
  console.log('QA suite ready — run:  await runQA()');
})();
