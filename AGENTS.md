# AGENTS.md

## What This Repo Is

PenguinMails Landing is an Astro-based marketing site. Its scope is messaging, plan presentation, and CTA handoff to the dashboard. Authentication, billing, and account logic are out of scope — they belong to the external dashboard app. Before making changes, read `DECISIONS.md` and `docs/landing-vs-dashboard-context.md` to understand where the boundary sits.

## Before You Start

Any terminal session must start with `nvm use` to load the correct Node version from `.nvmrc`. Commands run without it will use the system Node and may fail or produce unexpected results.

Before using any CLI tool or library, verify it is present in `package.json`. Do not assume a package is available because it is common — check first. If a script is needed, confirm it exists under `scripts` in `package.json` before running it.

Run `npm run type-check` to confirm the project is in a clean state before making changes. Run it again before finishing. Do not leave the project in a broken state.

## Code Rules

All user-facing copy goes through i18n keys — never hardcode strings in components or pages. When editing user-facing text, update both `src/i18n/locales/en/` and `src/i18n/locales/es/` and add the key to `src/i18n/types.ts`. TypeScript will error at build time if a locale is missing a key (`docs/i18n.md`).

Keep `src/pages` lean. Push UI sections and presentation logic into components under `src/components/`. Use Tailwind utilities for styling and the `cn` utility for conditional class composition. Do not introduce ad-hoc `<style>` blocks when Tailwind covers the need.

## Dashboard Links

There are two patterns for linking to the dashboard — use the right one for the context:

- Login links: import `PUBLIC_APP_ROOT_URL` directly from `astro:env/client`.
- Signup/CTA links: use `buildSignupUrl` from `src/lib/cta.ts`, passing `context`, and optionally `plan` and `billing`. This ensures UTM and intent params are always attached.

Never hardcode dashboard URLs in components. All base URLs come from environment variables defined in `astro.config.mjs` via Astro's `astro:env` schema. See the pricing CTAs as a reference implementation (`docs/landing-vs-dashboard-context.md`).

## Environment Variables

External URLs and contact endpoints live in `.env`. Copy `.env.example` to `.env` for local development. The schema in `astro.config.mjs` validates all required variables at build time — if a variable is missing, the build will fail with a clear error. Do not add new hardcoded URLs to source; add them to the schema and `.env.example` instead.

## Documentation

When a change introduces non-obvious behavior, document it. The right place depends on what it is:

- Stable product or architectural decisions go in `DECISIONS.md`, in the same PR as the change.
- Workflow and contribution guidance goes in `CONTRIBUTORS.md`.
- Topic-specific documentation goes in `docs/`.

All documentation must follow `docs/documentation-writing-style-guide.md`: non-technical context first, implementation detail last, short prose paragraphs over bullet lists, references embedded in sentence flow.

## What Not to Do

- Do not implement auth, billing, or account logic in this repo.
- Do not hardcode dashboard URLs or external endpoints in components.
- Do not add user-facing copy outside of i18n locale files.
- Do not leave `npm run type-check` failing.
- Do not create summary or process documentation files unless explicitly asked.
