# Audience builder prototype

A real Leaflet map (real tiles, real ZIP/county boundaries via `/api/proxy`) built on the
Ivanlabs Design System. Portfolio piece — it has to work, not just look right.

## Run it

```bash
npm install        # once
node server.js     # http://localhost:8001 — /api/proxy powers search + boundaries
```

`file://` and any plain static server break search and boundaries. Add `?demo` to auto-play the
scripted flow.

## The design system is a DEPENDENCY. Do not re-create it.

`package.json` depends on `@ivancreatelabs/design-system`. Everything in `ds/` is **generated** —
`npm run build:ds` resolves the package through `node_modules` and copies its own browser build
(`dist/index.global.js`, exported as `./global`) plus its tokens. Never hand-edit `ds/`.

```bash
npm run build:ds   # after any design system change; ds/VERSION.txt records the version
```

The rule, learned the hard way: **re-implementing a component's look in `styles.css` is a copy,
not usage.** It matches on the day you write it and drifts forever after. If a component doesn't
do what this app needs, add a prop to the component in `~/Documents/ivanlabs-design-system`,
write a changeset, `npm run design`, then `npm run build:ds` here. Three props and one wrap fix
in 0.5.0 came from exactly that loop.

## How the seam works

- `ds-mount.js` — the ONLY place React is used. One `DS.<region>(host, props, handlers)` per UI
  region; it renders the real `window.IVDS` component into a host div.
- `script.js` — owns all state, the Leaflet map, and every branch. It calls `DS.*` instead of
  writing DOM. Its flow was not restructured and should not be.
- `styles.css` — layout, positioning and the map's own cartography. **Semantic tokens only**
  (`var(--brand-bg-default)`, never `var(--purple-300)`); no component chrome.
- `index.html` — hosts are empty divs. If a region renders nothing, check `ds-mount.js` first.

Load order matters: `ds/react.js` → `ds/react-dom.js` → `ds/ivanlabs-design-system.js` →
`ds-mount.js` → `script.js` → `demo.js`.

## Gotchas paid for already

- A `font:` shorthand on a descendant-span selector kills the Material Symbols family — scope it
  with `:not([class])`.
- Deleting CSS rules by selector will silently take out **shared** rules; one positioning rule
  listing six selectors died because a single one of them was dead.
- Design system controls are 40px where the old hand-rolled ones were 32px.

## Known outstanding

- `demo.js` still drives pre-swap ids (`#locationSearch`, `#drawInclude`, `#areaButton`,
  `#popupInclude`, `#mapOptionsButton`) that React now owns — the auto-play demo is broken.
- The three modals (CSV upload, saved map, locations) are still built as HTML strings in
  `script.js`; they should become `Modal` / `UploadField` / `DataTable` / `Toast`.
