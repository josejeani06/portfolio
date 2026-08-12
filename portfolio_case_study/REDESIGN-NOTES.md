# Portfolio redesign — Superhuman palette × Uber layout

A non-destructive redesigned copy of the whole portfolio. **None of your original
files were touched** — everything new lives in parallel `*-redesign.html` files.

## How to view

```bash
cd portfolio_case_study
python3 -m http.server 8799
```

Then open **http://localhost:8799/redesign.html** (a local server is needed so the
live case-study demos and hover-to-play iframes load).

| New (redesign) | Original (untouched) |
|---|---|
| `redesign.html` | `index.html` |
| `map-case-study-redesign.html` | `map-case-study.html` |
| `integration-case-study-redesign.html` | `integration-case-study.html` |
| `org-management-case-study-redesign.html` | `org-management-case-study.html` |
| `billing-case-study-redesign.html` | `billing-case-study.html` |
| `design-system-case-study-redesign.html` | `design-system-case-study.html` |

All internal links in the redesigned set point at each other, so you can click
through the whole thing in the new theme.

## The palette — taken as-is from superhuman.com (inspected live, not guessed)

| Token | Hex | Role |
|---|---|---|
| Ink | `#292827` | warm near-black body text (Superhuman's exact text color) |
| Ink strong | `#111110` | Uber near-black — dark sections, headlines |
| Purple | `#714CB6` | Superhuman's primary accent (their Sign-up button) |
| Purple bright | `#9E6EE5` | **the alternate accent** you pointed at |
| Lavender | `#D4C7FF` / `#F1ECFB` | tint + pale surface |
| Paper | `#FFFFFF` / `#F7F5F2` / `#F2F0EB` | Superhuman's warm off-whites |
| Teal | `#027E6F` | Superhuman's secondary accent (status dot) |

## The layout — Uber's language

- **Type:** display set in **Space Grotesk** — which is literally Uber's own
  fallback for *Uber Move* (confirmed from brand.uber.com's font stack). Body in Inter.
- **Bento** selected-work grid: the live map anchors a large tile, the rest sized
  around it. "Why me" is a second bento with one filled-purple statement tile.
- **Whitespace & rhythm:** generous section padding, big left-aligned headlines, a
  bold Uber-style stat band (06 · 05 · ~75% · AA).
- **Flat, crisp cards** with subtle lift-on-hover transitions — no gradients-on-text,
  no glow blobs, no dark glassmorphism.
- One **dark "alternate" surface** (the Approach section) for contrast, using the
  bright lavender accent — echoing Superhuman's dark plum section.

## The inner pages were rebuilt from scratch (not reskinned)

The five case studies were **rebuilt as new documents** on the shared design system —
they no longer load `style.css`, the legacy classes, or any of the old palette. Each
page is expressed entirely in the token-driven components in **`redesign.css`**:

- `.rd-nav` scroll-spy nav · `.rd-hero` · `.rd-panel` dark summary · `.rd-meta`
- `.rd-stats` Uber stat grid · `.rd-cols` · `.rd-quote` big callout
- `.rd-bento` / `.rd-card` cards · `.rd-rows` & `.rd-compare` styled tables with
  status dots · `.rd-tag` lavender pills · `.rd-frame` framed live demos
- one flat Uber-black `.rd-section--dark` "alternate" surface per page

Everything is driven by the same `:root` tokens as the homepage — colors, type
scale, radius, motion — so the inner pages and the homepage are one system. All
content, live demos, and scroll machinery are preserved; the framed-media browser
chrome (traffic-light dots + fake URL bar) was removed on request.

**Shared stylesheet:** `redesign.css` — the single source of truth for the inner pages.

## Preserved signature behavior

Hover-to-play live iframe previews, scroll progress bar, copy-email, reveal-on-scroll,
lazy-loaded CDN demos, and full keyboard/reduced-motion support all carried over.
