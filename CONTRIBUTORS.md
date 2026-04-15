# Contributors Guide

## What This Repo Is

PenguinMails Landing is an Astro-based marketing site focused on messaging, plan presentation, and CTA handoff to the dashboard. Authentication, billing, and account logic live in the dashboard app — not here. When a change touches those concerns, it belongs in the other repo (`DECISIONS.md`; `docs/landing-vs-dashboard-context.md`).

## Local Development

Sync your Node version and copy the env file before running anything:

```bash
nvm use
cp .env.example .env   # fill in values for your environment
npm install
npm run dev       # local dev server
npm run build     # production build
npm run preview   # preview production build locally
npm run type-check  # run before pushing
```

## How To Work Here

Keep changes scoped to one concern per PR. Preserve CTA tracking behavior — `plan`, `billing`, and UTM params must survive refactors (`src/lib/cta.ts`). Document non-obvious behavior changes in `DECISIONS.md` in the same PR that introduces them.

All user-facing copy goes through i18n keys, not hardcoded strings. Keep `src/pages` lean and push presentation blocks into components. Use Tailwind utilities for styling and the `cn` utility for conditional class composition — avoid ad-hoc `<style>` blocks when Tailwind covers the same need.

## Review Checklist

- Links route to the correct destination (landing vs dashboard).
- CTA params are intact after refactors.
- i18n keys and localized copy are updated when editing user-facing text.
- Before/after screenshots included for significant UI changes.
- `npm run type-check` passes.

## Documentation Map

- `README.md` — project overview and quick start.
- `DECISIONS.md` — stable architectural and product decisions.
- `CONTRIBUTORS.md` — this file; dev workflow and contribution guidance.
- `docs/` — deeper documentation on specific topics.
- `docs/testing-with-curl-and-terminal.md` — terminal-first checks for routes, CTA markup, and deployment-parity smoke tests.
