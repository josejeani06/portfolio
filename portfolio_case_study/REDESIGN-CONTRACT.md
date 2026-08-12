# Redesign Contract — the system learned from `redesign.html` (landing) + `map-case-study-redesign.html` (map)

**Every case study MUST follow this file exactly.** Superhuman palette (as-is) × Uber layout language.
Single stylesheet: `redesign.css`. No legacy `style.css`, no legacy classes, no legacy palette.

---

## 1. Non-negotiable rules (learned the hard way)

| # | Rule | Why |
|---|------|-----|
| R1 | **NO background grid.** No `.landing-grid`, no grid `::before` overlays. | Explicit user instruction, repeated. |
| R2 | **Flat only. No gradients** anywhere — not on tiles, cards, heroes, or media stages. | Explicit user instruction. |
| R3 | **Dark sections are dark purple `#221836`** (`--d-bg`), never black. | Explicit user instruction. |
| R4 | **White text on dark. Never gray.** Body copy on dark = `rgba(255,255,255,.92)`. | Explicit user instruction. |
| R5 | **Consistent heading sizes site-wide.** All h2 = `--h2`, all h3 = `--h3`. Never hand-size a heading. | Explicit user instruction. |
| R6 | **Titles + paragraphs are 100% width, never clipped.** No `max-width` on `.rd-head`, `.rd-lead`, `.rd-h1/2/3`. | Explicit user instruction, twice. |
| R7 | **Red/green for status.** `.rd-status--bad` `#c0392b`, `.rd-status--good` `#1f9d57`. | Explicit user instruction. |
| R8 | **Clean cards** — white + 1px border. No lavender fill. Icon cards have no box at all. | Explicit user instruction. |
| R9 | **One eyebrow per section.** Never stack a kicker and an "AI" badge. | Explicit user instruction. |
| R10 | **NEVER remove a section, heading, paragraph, table row, stat, image, or caption.** Restyle only. | Explicit user instruction, repeated ~5×. |
| R11 | **Never put `grid-template-columns` in an inline `style=`** — inline styles beat media queries and break mobile stacking. Use a page-local class. | Verified bug, see §6. |

---

## 2. Tokens (from `redesign.css` `:root` — do not redefine)

**Color**
```
--paper #ffffff   --paper-2 #f7f5f2   --paper-3 #f2f0eb   --paper-4 #ece9e2
--ink #292827     --ink-strong #111110   --muted #6b675f   --faint #9a958c
--line rgba(41,40,39,.12)              --line-2 rgba(41,40,39,.20)
--purple #714cb6  --purple-2 #5f3da0  --bright #9e6ee5
--lavender #d4c7ff --lavender-bg #f1ecfb --teal #027e6f
--d-bg #221836    --d-bg-2 #2c2147    --d-text #f6f3ea
--d-muted rgba(255,255,255,.92)        --d-line rgba(246,243,234,.16)
```

**Type** — display = `Space Grotesk` (Uber Move stand-in), body = `Inter`
```
--h1 clamp(46px,7.4vw,104px)   --h2 clamp(30px,4vw,48px)   --h3 clamp(19px,1.8vw,22px)
--lead clamp(18px,1.7vw,22px)  --body 17px  --sm 14.5px  --xs 13px
```

**Shape / motion**
```
--radius 20px  --radius-sm 14px  --radius-lg 28px
--ease cubic-bezier(.22,.61,.24,1)   --maxw 1200px   --gutter clamp(20px,4vw,40px)
```

**Heading metrics (tuned so descenders never clip):**
h1 `line-height:1.0` `letter-spacing:-.045em` `padding-bottom:.06em`
h2 `line-height:1.08` `letter-spacing:-.035em` `padding-bottom:.06em`
h3 `line-height:1.16` `letter-spacing:-.03em` `padding-bottom:.04em`

---

## 3. Page skeleton (copy from the map, in this order)

```html
<div class="rd-progress" id="progress"></div>
<nav class="rd-nav" id="nav">
  <div class="rd-container rd-nav-inner">
    <a class="rd-brand" href="redesign.html"><span class="dot"></span>Ivan Jose</a>
    <div class="rd-nav-links" id="spy"> …5 anchors max… </div>
    <a class="rd-nav-cta" href="…">Open prototype ↗</a>
  </div>
</nav>
<main>
  <section class="rd-section rd-hero" id="summary">      <!-- kicker → h1 → lead → actions → main UX -->
  <section class="rd-section rd-section--tight">        <!-- .rd-hero-grid exec summary + .rd-meta kanban -->
  <section class="rd-section rd-section--tight">        <!-- "At a glance" .rd-stats -->
  …content sections, alternating light / --dark / --tight + paper-2…
  <section class="rd-section">                          <!-- Outcome -->
  <section class="rd-section rd-section--dark">         <!-- Reflection + what's next -->
  <section class="rd-section rd-section--tight">        <!-- purple next-case-study CTA panel -->
</main>
<footer class="rd-footer"> … brand · links · Bē + LinkedIn · © line … </footer>
```

**Section rhythm:** light → `--tight` on `--paper-2` → light → `--dark`. Never two identical dark sections adjacent without a light one between.

---

## 4. Component vocabulary (use these; do not invent)

| Component | Class | Use for |
|---|---|---|
| Hero | `.rd-hero` + `.rd-badges` `.rd-kicker` `.rd-h1` `.rd-lead` `.rd-hero-actions` | Page opener. Main UX visual sits directly under the CTA row, **with no heading above it**. |
| Exec summary | `.rd-hero-grid` > `.rd-panel` + `dl.rd-meta` > `.rd-meta-row` (dt/dd) | Dark purple board; 4-card kanban row (Role / Outcome / Timeline / Process). |
| Stats | `.rd-stats` > `.rd-stat` > `.n` + `.l` | "At a glance". Numbers in `--purple`. |
| Section head | `.rd-head` > `.rd-kicker` + `.rd-h2` + `.rd-lead` | Every section. Exactly one kicker. |
| Text columns | `.rd-cols` > div > `.rd-kicker` + p | 3-up discovery / evidence prose. |
| Cards | `.rd-grid-2/3/4` > `.rd-card` | Clean white + border. `--flat` kills hover lift. `--dark` on dark bg. `--fill` = purple. |
| Icon cards | `.rd-card` containing `.rd-icon` | Auto-borderless, no padding (Superhuman suite style). |
| Label | `.rd-card-label` | Uppercase purple micro-label inside a card. |
| Key/value rows | `.rd-rows` > `.rd-row` > `.k` + `.v`; `.rd-row.is-head` > span | Evidence / blocker→fix tables. |
| Compare rows | `.rd-compare` > `.rd-crow` > `.stage` + `.side` | Before/after + decision tables. `.side.after` for the "after" column. |
| Status pill | `.rd-status--bad` / `--good` | Red/green outcome markers inside rows. |
| Quote | `.rd-quote` > `.q` | Big pull-quote with purple left rule. |
| Tags | `.rd-tags` > `.rd-tag` | Chips. Non-interactive (`cursor:default`). |
| Framed media | `.rd-frame` > `.rd-frame-stage` > img | 16:9, image `object-fit:cover`. No browser-chrome bar (`.rd-frame-bar{display:none}`). |
| Full-bleed embed | `.rd-frame.init-frame` > iframe (100% width, `clamp(560px,82vh,900px)` tall) | Live prototypes — **no** aspect stage, **no** `.case-live` scaling, no letterbox. |
| Figure | `.rd-figure` + `.rd-cap` | Static image + caption. |
| Before/after | `.rd-ba` (+ `.rd-ba-clip` `.rd-ba-line` `.rd-ba-handle` `.rd-ba-tag old/new`) | Draggable slider. `--pos` var. |
| Buttons | `.rd-btn` + `--primary` / `--outline` / `--dark` | 52px pill. Arrow `.arw` slides on hover. |
| Footer | `.rd-footer` | Shared across all pages, identical markup. |
| Reveal | `.rd-reveal` (+ `.d1/.d2/.d3`) | Scroll-in. Respects reduced-motion. |

**Next-case-study CTA** (last section, identical on every page): `.rd-panel` centered, `background:var(--purple)`, kicker `#e6dbff`, white h2, white "Read it" button + `.rd-btn--outline` "All work".

---

## 5. Landing-page lessons that carry into case studies

- **No 100vh fold.** Hero padding is `clamp(36px,5vw,64px)` top — content starts high, no forced viewport height.
- **Numbers are the hero of a stat block** — big display weight, small muted label under.
- **Tables read as bordered row stacks**, not `<table>` — `.rd-rows` / `.rd-compare` with hairline dividers and a tinted `is-head`.
- **Cards are borders, not fills.** Lift + shadow on hover; never a colored background except the deliberate `--fill` purple.
- **Bright text** = `--bright #9e6ee5` on dark surfaces only (kickers, labels, numbers).
- **Section padding rhythm** `clamp(72px,9vw,132px)`, tight variant `clamp(40px,5vw,72px)`.
- **Sticky section title** on long dark lists (see landing `.approach-head`, `top:92px`).
- Chips/tags are **non-interactive** — `cursor:default`, no hover transform.

---

## 6. Responsive contract (mobile + tablet) — MANDATORY

Breakpoints in use: **1024 (tablet landscape) · 900 (tablet) · 820 · 760 · 720 · 640 · 600 · 480 (phone)**

**Verified failure mode — fix everywhere:**
> An inline `style="grid-template-columns:…"` **overrides** `@media(max-width:760px){.rd-crow{grid-template-columns:1fr}}`, because inline styles outrank stylesheet selectors. Combined with an inline `min-width:760px`, tables stay 4-up and force horizontal scroll on a phone, with the header row hidden — unlabeled columns.
> **Fix:** move column ratios to a page-local class in the page's `<style>`, defined inside a `min-width` media query so small screens fall back to the stacked default. Never inline it.

Required behaviour per component:

| Component | Phone ≤600 | Tablet 601–1024 |
|---|---|---|
| `.rd-nav-links` | hidden ≤700 | visible, scrolls horizontally inside itself (`min-width:0`) |
| `.rd-meta` | 1 col ≤480, 2 col ≤820 | 2 col |
| `.rd-stats` | 1 col ≤460, 2 col ≤720 | 2–3 col |
| `.rd-grid-2/3/4` | 1 col ≤600 | 2 col ≤900 |
| `.rd-cols` | 1 col ≤820 | 1 col |
| `.rd-row` | stacked, head hidden ≤640 | 2 col |
| `.rd-crow` | stacked, head hidden ≤760, `.side.after` gets a dashed top rule | 3 col |
| `.rd-ba` | stays 16:10, touch-draggable (`touch-action:none`) | same |
| `.init-frame` iframe | `height:clamp(560px,82vh,900px)`, 100% width | same |
| Any page-local grid | must collapse to 1 col ≤600 | 2 col ≤900 |

**Two traps proven in the browser — do not repeat them:**
1. A **wide-prose table** (4 columns of sentences) is unreadable at 768px even when it technically fits — at 1280px its columns are ~228px, at 768px only ~123px. Stack such tables up to **900px**, and expose the hidden column headers as `::before{content:attr(data-l)}` labels on each stacked cell so the cells stay identifiable.
2. A tablet rule written as `@media(max-width:1024px)` **also matches phones**, and being later in the file it beats the earlier `max-width:460px` phone rule — this silently rendered `.rd-stats` 3-up on a 375px screen. Always **range-bound** tablet rules: `@media(min-width:721px) and (max-width:1024px)`.

Also required: no horizontal page scroll at 320/375/768/1024px (`body{overflow-x:hidden}` is a safety net, **not** a fix — the layout itself must fit); tap targets ≥44px; `.rd-btn` wraps rather than overflows.

---

## 7. The four pages to rebuild (content that must survive intact)

| Page | Sections | Media |
|---|---|---|
| `integration-case-study-redesign.html` | 12 sections — overview, main-ux, problem, discovery, audit, evolution, connection, decisions, outcome, reflection | 32 img · 6 iframe (`recreations/integration-*.html`) · 2 table · logo grid (11 connector logos) |
| `org-management-case-study-redesign.html` | 8 sections — summary, model, automations, templates, ai-process, outcome, reflection | 9 img · 1 table · 19 svg |
| `billing-case-study-redesign.html` | 14 sections — summary, business-context, main-ux, question, why, discovery, model, concept-shift, feature-refine, constraints, design-system, before-after, outcome, reflection | 15 img · 8 svg |
| `design-system-case-study-redesign.html` | 10 sections — summary, main-ux, problem, architecture, machine, pipeline, limits, impact, reflection | 3 img · 3 iframe (ivanlabs-hero, ds-library, ds-tokens) · 1 table |

Originals (`*-case-study.html`, no `-redesign`) stay untouched — they are the content source of truth.
