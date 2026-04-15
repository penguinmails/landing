# Landing vs Dashboard Context

## What This Means

This repository is the public marketing site for PenguinMails. Its job is to communicate product value, present pricing, and capture user intent before handing visitors off to the dashboard — the separate, authenticated product where accounts are created and billing is executed. Understanding this boundary prevents misplaced logic and keeps both codebases focused.

## How It Works

Landing pages collect intent and route users into the dashboard experience. There are two kinds of dashboard links:

- Login links use `PUBLIC_APP_ROOT_URL` from `astro:env/client` directly — no params needed, just the dashboard root.
- Signup/CTA links go through `buildSignupUrl` in `src/lib/cta.ts`, which takes a `context`, an optional `plan`, and an optional `billing` period, derives the signup base URL from `PUBLIC_APP_ROOT_URL` plus `PUBLIC_SIGNUP_PATH`, and returns a fully-formed URL with `utm_source`, `utm_medium`, `utm_campaign`, `plan`, and `billing` params attached.

The base URLs for both come from environment variables (`astro.config.mjs`; `DECISIONS.md`). Neither is hardcoded in components. The pricing CTAs are the current reference usage for `buildSignupUrl` and a good example to follow.

There is no login flow, payment processing, or account state management in this repository. If a proposed change involves any of those concerns, it belongs in the dashboard app.

## Implementation Notes

The boundary is enforced by convention rather than code. Plain URL constants (`PUBLIC_APP_ROOT_URL`, `PUBLIC_WATCH_DEMO_URL`, `PUBLIC_BOOK_DEMO_EMAIL`) are imported directly from `astro:env/client` in the components that need them. `src/lib/cta.ts` is scoped to `buildSignupUrl` only — it owns signup URL construction from `PUBLIC_APP_ROOT_URL` and `PUBLIC_SIGNUP_PATH`, not the other constants. All values are defined in the `env.schema` in `astro.config.mjs`.

When reviewing changes, verify that:

- login links import `PUBLIC_APP_ROOT_URL` from `astro:env/client` directly,
- new signup/CTA links use `buildSignupUrl` rather than constructing URLs inline,
- no auth or billing logic has been introduced in this repo.

Stable decisions about this boundary are recorded in `DECISIONS.md`.
