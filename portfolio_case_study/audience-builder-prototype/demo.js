/*
 * demo.js — scripted auto-play tour of the REAL Audience Builder prototype.
 * Loaded as a classic <script> AFTER script.js, so it shares the same global
 * lexical scope: it drives the prototype's OWN functions and Leaflet map
 * (map, setDrawMode, finishCurrentDraw, fetchVisibleBoundaries, boundaryLayer,
 * boundarySelectionFromFeature, saveCurrentMap, ...). Nothing is recreated.
 *
 * Gated on the URL having ?demo — with no param this file does nothing and the
 * prototype behaves exactly as normal.
 */
(function () {
  "use strict";

  if (!new URLSearchParams(location.search).has("demo")) return;

  /* -------------------------------------------------------------------- */
  /* tiny helpers                                                          */
  /* -------------------------------------------------------------------- */
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  // Poll until fn() returns a truthy value (or timeout). Returns the value or null.
  async function waitFor(fn, { timeout = 12000, interval = 150 } = {}) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      try {
        const v = fn();
        if (v) return v;
      } catch (_) {
        /* ignore and keep polling */
      }
      await sleep(interval);
    }
    return null;
  }

  // A real click that fires the prototype's own listeners.
  function realClick(el) {
    if (!el) return false;
    el.click();
    return true;
  }

  /* -------------------------------------------------------------------- */
  /* toast — lightweight, top-right of the map pane, prototype's colors    */
  /* -------------------------------------------------------------------- */
  function injectToastStyles() {
    if (document.getElementById("demoToastStyles")) return;
    const style = document.createElement("style");
    style.id = "demoToastStyles";
    style.textContent = `
      .demo-toast-stack {
        position: absolute;
        top: 68px;
        right: 22px;
        z-index: 60;
        display: flex;
        flex-direction: column;
        gap: 8px;
        pointer-events: none;
      }
      .demo-toast {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 190px;
        padding: 9px 14px;
        border: 1px solid #c7ebce;
        border-radius: 8px;
        background: #f0fff4;
        color: #2a9b50;
        box-shadow: 0 7px 16px rgba(38, 67, 49, .16);
        font-family: Inter, ui-sans-serif, system-ui, sans-serif;
        font-size: 13.5px;
        font-weight: 650;
        opacity: 0;
        transform: translateY(-6px);
        transition: opacity .22s ease, transform .22s ease;
      }
      .demo-toast.is-in { opacity: 1; transform: translateY(0); }
      .demo-toast .material-symbols-rounded { font-size: 18px; }
    `;
    document.head.append(style);
  }

  function demoToast(message) {
    injectToastStyles();
    const canvas = document.getElementById("mapCanvas") || document.body;
    let stack = canvas.querySelector(".demo-toast-stack");
    if (!stack) {
      stack = document.createElement("div");
      stack.className = "demo-toast-stack";
      canvas.append(stack);
    }
    const toast = document.createElement("div");
    toast.className = "demo-toast";
    toast.innerHTML =
      '<span class="material-symbols-rounded" aria-hidden="true">check_circle</span>' +
      `<span>${message}</span>`;
    stack.append(toast);
    requestAnimationFrame(() => toast.classList.add("is-in"));
    setTimeout(() => {
      toast.classList.remove("is-in");
      setTimeout(() => toast.remove(), 240);
    }, 2200);
  }

  /* -------------------------------------------------------------------- */
  /* geometry — a searched-place base + nearby offsets for drawing         */
  /* -------------------------------------------------------------------- */
  const FALLBACK = { lat: 39.7392, lng: -104.9903 }; // Denver
  const LAKEWOOD = { lat: 39.7047, lng: -105.0814 }; // radius center — west of Denver
  let demoBase = null;   // locked to the searched place so shapes land where the map is
  function base() {
    if (demoBase) return demoBase;
    try {
      const c = map.getCenter();
      if (c && Number.isFinite(c.lat) && Number.isFinite(c.lng)) return { lat: c.lat, lng: c.lng };
    } catch (_) {}
    return FALLBACK;
  }
  const near = (b, dLat, dLng) => L.latLng(b.lat + dLat, b.lng + dLng);

  // Visibly RESIZE the in-progress radius: grow draftRadius.radiusMeters, moving
  // the circle + the drag handle exactly like a real drag would (see script.js
  // renderDraftRadius / handleMarker 'drag').
  async function animateRadius(target, { steps = 22, dur = 1500, instant = false } = {}) {
    if (typeof draftRadius === "undefined" || !draftRadius || !draftRadius.circle) return;
    const start = draftRadius.radiusMeters;
    const apply = (r) => {
      draftRadius.radiusMeters = r;
      try { draftRadius.circle.setRadius(r); } catch (_) {}
      try {
        if (draftRadius.handleMarker)
          draftRadius.handleMarker.setLatLng(metersToLatLng(draftRadius.center, r));
      } catch (_) {}
    };
    if (instant) { apply(target); return; }
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const eased = 1 - Math.pow(1 - t, 3); // ease-out so the grow reads clearly
      apply(start + (target - start) * eased);
      await sleep(dur / steps);
    }
  }

  /* -------------------------------------------------------------------- */
  /* the scripted flow                                                     */
  /* -------------------------------------------------------------------- */

  async function stepSearch() {
    const input = document.getElementById("locationSearch");
    const menu = document.getElementById("searchMenu");
    if (!input || !menu) throw new Error("search elements missing");

    input.focus();
    input.value = "Denver";
    // real input event so the prototype's own search fires (Nominatim via /api/proxy)
    input.dispatchEvent(new Event("input", { bubbles: true }));

    // Wait for results (a live result button, or the popular-suggestions fallback).
    const result = await waitFor(
      () => menu.querySelector(".search-result"),
      { timeout: 8000 }
    );
    await sleep(600);
    if (result) {
      realClick(result); // prototype flies the map to the place
    }
    await sleep(1600); // let the search flyTo settle
    // Lock the working center to the searched place — the search fly's timing varies,
    // so pin the map + base to Denver so every shape lands where the map is showing.
    demoBase = { lat: FALLBACK.lat, lng: FALLBACK.lng };
    // setView (no animation) rather than setMapView's flyTo — a fly here can
    // collide with the search result's in-flight fly and throw Invalid LatLng.
    try { map.invalidateSize(); } catch (_) {}
    try { map.setView([demoBase.lat, demoBase.lng], 11, { animate: false }); } catch (_) {}
    await sleep(1500);
  }

  async function stepRadius() {
    setDrawMode("radius");
    await sleep(1200);
    // Drop the radius center on LAKEWOOD (west of Denver) — real Leaflet click,
    // handler reads only latlng and creates draftRadius (default 25 km).
    map.fire("click", { latlng: L.latLng(LAKEWOOD.lat, LAKEWOOD.lng) });
    await sleep(900);
    // SHOW THE RESIZE: snap tight, then grow the radius so the drag handle + circle
    // visibly expand (kept modest so it stays beside the Denver polygon).
    await animateRadius(2200, { instant: true });
    await sleep(500);
    await animateRadius(5200, { steps: 26, dur: 1700 });
    await sleep(700);
    realClick(document.getElementById("drawInclude")); // click Include before adding
    await sleep(1000);
    finishCurrentDraw(); // the #finishDraw handler -> adds the radius location
    await sleep(600);
    demoToast("Radius added");
    await sleep(1400);
  }

  async function stepPolygon() {
    setDrawMode("polygon");
    await sleep(1200);
    const b = base(); // Denver
    // Center the polygon on Denver, nudged EAST so it sits clearly BESIDE the
    // Lakewood radius (never inside it).
    const c = near(b, 0.004, 0.018);
    const pts = [
      L.latLng(c.lat + 0.026, c.lng - 0.022),
      L.latLng(c.lat + 0.024, c.lng + 0.030),
      L.latLng(c.lat - 0.006, c.lng + 0.040),
      L.latLng(c.lat - 0.028, c.lng + 0.010),
      L.latLng(c.lat - 0.018, c.lng - 0.028),
    ];
    for (const p of pts) {
      map.fire("click", { latlng: p }); // each click pushes to draftPolygonPoints + re-renders
      await sleep(500);
    }
    await sleep(700);
    realClick(document.getElementById("drawInclude")); // click Include before adding
    await sleep(900);
    finishCurrentDraw(); // adds the polygon location
    await sleep(600);
    demoToast("Polygon added");
    await sleep(1400);
  }

  async function stepBoundaryToZip() {
    // Open the area menu and pick ZIP Code (sets areaMode + fetchVisibleBoundaries).
    realClick(document.getElementById("areaButton"));
    await sleep(1000);
    const areaMenu = document.getElementById("areaMenu");
    const zipBtn = [...areaMenu.querySelectorAll("button")].find((b) => {
      const t = b.textContent.trim().toLowerCase();
      return t === "zip code";
    });
    if (!zipBtn) throw new Error("ZIP Code option not found");
    realClick(zipBtn);
    await sleep(1200);
    // Zoom in so ZIP boundaries load for the visible area.
    const b = base();
    map.flyTo([b.lat, b.lng], 12, { duration: 0.6 });
    await sleep(2200);

    // Wait for boundary features to actually load.
    const ready = await waitFor(
      () => boundaryLayer.getLayers().length > 0 && boundaryLayer,
      { timeout: 14000, interval: 250 }
    );
    if (!ready) throw new Error("ZIP boundaries did not load");
    await sleep(1200);
  }

  async function stepSelectZip() {
    const layers = boundaryLayer.getLayers();
    if (!layers.length) throw new Error("no boundary features to select");

    // Pick the ZIP boundary nearest the map center.
    const c = map.getCenter();
    let best = null;
    let bestD = Infinity;
    layers.forEach((layer) => {
      try {
        const cen = layer.getBounds().getCenter();
        const d = c.distanceTo(cen);
        if (d < bestD) {
          bestD = d;
          best = layer;
        }
      } catch (_) {}
    });
    if (!best) throw new Error("could not pick a boundary layer");

    const latlng = best.getBounds().getCenter();
    // Fire the boundary feature's REAL click -> opens the selection popover.
    best.fire("click", { latlng });

    // The prototype's popover is a Leaflet popup with #popupInclude.
    const includeBtn = await waitFor(
      () => document.getElementById("popupInclude"),
      { timeout: 5000 }
    );
    if (!includeBtn) throw new Error("boundary popover did not open");
    await sleep(1100);
    realClick(includeBtn); // setPopupSelectionMode('include') -> adds the ZIP location
    await sleep(600);
    demoToast("ZIP added");
    await sleep(1600);
  }

  async function stepSavedMap() {
    // ---- SHOW THE SAVING PROCESS: Map Options -> Save this Map ---------------
    realClick(document.getElementById("mapOptionsButton"));
    await sleep(1000);
    // #saveMapOption -> requestSaveCurrentMap() -> opens the real Save-name modal.
    realClick(document.getElementById("saveMapOption"));
    await sleep(1100);

    const nameInput = await waitFor(
      () => document.getElementById("savedMapNameInput"),
      { timeout: 5000 }
    );
    if (nameInput) {
      // Type the name so the save is visibly authored, then click the modal's Save.
      nameInput.focus();
      nameInput.value = "";
      for (const ch of "Denver Storm Map") {
        nameInput.value += ch;
        nameInput.dispatchEvent(new Event("input", { bubbles: true }));
        await sleep(55);
      }
      await sleep(750);
      const saveBtn = document.querySelector('.saved-map-backdrop [data-action="save"]');
      realClick(saveBtn); // saveCurrentMap(name) -> persists + fires its OWN "Map saved successfully" toast
      await sleep(1300);
      await sleep(1500);
    } else {
      console.warn("[demo] save-name modal did not open");
    }

    // ---- Then load it back through Use Saved Map -----------------------------
    realClick(document.getElementById("mapOptionsButton"));
    await sleep(900);
    realClick(document.getElementById("useSavedMapOption"));
    await sleep(1200);

    const useBtn = await waitFor(
      () =>
        document.querySelector(
          '.saved-map-table tbody tr[data-map-id] [data-action="use"]'
        ),
      { timeout: 5000 }
    );
    if (useBtn) {
      realClick(useBtn); // applySavedMap -> loads it + fires its OWN "Saved map applied" toast
      await sleep(800);
    } else {
      console.warn("[demo] no saved map row to load (modal may be empty)");
    }
    await sleep(1800);
  }

  async function run() {
    const steps = [
      ["Search", stepSearch],
      ["Radius", stepRadius],
      ["Polygon", stepPolygon],
      ["Boundary → ZIP", stepBoundaryToZip],
      ["Select ZIP", stepSelectZip],
      ["Saved Map", stepSavedMap],
    ];
    for (const [name, fn] of steps) {
      try {
        console.log(`[demo] step: ${name}`);
        await fn();
      } catch (err) {
        console.warn(`[demo] step "${name}" failed:`, err);
      }
    }
    console.log("[demo] done");
  }

  // Kick off once the map + tiles have had a moment to settle.
  function boot() {
    if (typeof map === "undefined" || typeof setDrawMode === "undefined") {
      console.warn("[demo] prototype globals not ready; retrying");
      setTimeout(boot, 400);
      return;
    }
    try { map.invalidateSize(); } catch (_) {}
    setTimeout(function () { try { map.invalidateSize(); } catch (_) {} run(); }, 1400);
  }

  if (document.readyState === "complete") boot();
  else window.addEventListener("load", boot);
})();
