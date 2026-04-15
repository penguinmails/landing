# Decisions

Stable product and implementation decisions. Update this file in the same PR that changes the behavior it describes.

## Landing vs Dashboard Boundary

This repository is the public marketing site. The dashboard is a separate external product for authenticated customers. Landing pages collect intent and route users into the dashboard — authentication and billing execution belong there, not here (`docs/landing-vs-dashboard-context.md`).

## CTA and Link Behavior

Login links use `PUBLIC_APP_ROOT_URL` from `astro:env/client` directly. Signup CTAs go through `buildSignupUrl` (`src/lib/cta.ts`), which attaches `plan`, `billing`, and UTM parameters to preserve handoff intent and attribution. `src/lib/cta.ts` is scoped to signup URL construction only — other URL constants are consumed directly from `astro:env/client` in the components that need them. The `PUBLIC_WATCH_DEMO_URL` placeholder should be replaced with a real URL before production launch.

## Environment Variables

External URLs and contact endpoints are configured via environment variables, not hardcoded in source. The schema is defined in `astro.config.mjs` using Astro's `astro:env` API, which provides type safety and build-time validation. All values are `PUBLIC_` prefixed since they are used client-side. Copy `.env.example` to `.env` and fill in values for local development; set the same variables in the Vercel project settings for deployed environments.

## Pricing Page

The billing toggle defaults to monthly on page load. URL deep-linking for billing period selection is intentionally not implemented at this time.

## Change Policy

Short entries that state both the decision and the reason it exists are preferred over long explanations. If a decision changes, update this file in the same PR.
