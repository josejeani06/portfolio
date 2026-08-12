# Copy voice brief — Ivan's case studies

The writing currently reads as machine-written. The job is to make it sound like Ivan
talking a colleague through the work, without losing a single fact.

## Absolute rules (a rewrite that breaks any of these is rejected)

1. **Every number survives, exactly.** Percentages, counts, currency, timeframes, ratios,
   version numbers, ticket counts. `~95%` stays `~95%`. `15 / 31` stays `15 / 31`.
   `3–4 weeks` becomes `3 to 4 weeks` (the dash goes, the number does not).
2. **Every fact and every causal link survives.** If a sentence explains *why* a decision
   was made, the rewrite still explains why. Rewrite, never delete.
3. **Proper nouns stay exact**: LettrLabs, Codex, MapTiler, Figma, Storybook, axe DevTools,
   Housecall Pro, HubSpot, Salesforce, file names like `component-specs.md`.
4. **Markup is untouchable.** Only text between tags changes. Never edit a tag, class,
   id, `src`, `href`, `alt`, `data-*`, or a `<script>`/`<style>` block.

## The dash rule (this is the main tell)

- **Delete every em dash `—` and en dash `–`.** Zero may remain.
  Recast the sentence: split into two, use a comma, or use "and" / "so" / "but".
  - `the map wasn't the problem — the workflow around it was` →
    `the map wasn't the problem. The workflow around it was.`
  - `3–4 weeks` → `3 to 4 weeks`
- **Keep hyphens inside real compound words**: `map-first`, `end-to-end`, `two-year-old`,
  `self-serve`, `bug-fix`. Removing those produces misspellings, so they stay.

## Other tells to kill

- Colon-led dramatic reveals: `The deeper problem:` → just say it.
- The "not X, it's Y" flip: `It was never the map controls. It was the way people think.`
  Say the actual point once.
- Rule-of-three lists that pad rather than enumerate real things.
- Semicolon-stitched clauses. Use two sentences.
- Words that never appear in real speech: leverage, robust, seamless, elevate, delve,
  underscore, testament, landscape, realm, crucial, pivotal, holistic, unlock, empower,
  "at its core", "in essence", "worth reading", "that's the part that matters".

## The voice

First person, past tense. Short sentences, varied length. Contractions (I'd, didn't,
wasn't, it's). Plain words. Say what happened and what it cost. It should read like Ivan
narrating: direct, a bit dry, specific about numbers, comfortable admitting trade-offs.

**Before**
> It looked like a bug-fix pass on an old map. But the map wasn't the problem — the
> workflow around it was: setup gates, dead clicks, missing controls, and work people had
> to redo.

**After**
> On paper it was a bug-fix pass on an old map. The map wasn't the problem though. The
> workflow around it was. There were setup gates, dead clicks, missing controls, and work
> people kept having to redo.

Headings can get plainer, but they keep their meaning. Don't turn a specific heading into
a vague one.
