# PenguinMails Landing

![PenguinMails](./public/favicon.svg)

Marketing landing site for PenguinMails, built with Astro. It presents product value and pricing, captures user intent through CTA interactions, and routes visitors to the external dashboard for authentication and payment. Auth, billing, and account state belong to the dashboard app — not here (`DECISIONS.md`).

## Getting Started

```bash
nvm use          # sync Node version from .nvmrc
cp .env.example .env  # fill in values for your environment
npm install
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview production build locally
npm run type-check  # run before pushing
```

## Engineering Rules

- Run `nvm use` before installing or running scripts to avoid Node version drift.
- Run `npm run type-check` before pushing.
- All user-facing copy goes through i18n keys — no hardcoded strings in components or pages (`docs/i18n.md`).
- Keep `src/pages` lean and composition-focused; move UI sections and logic into reusable components.
- Use Tailwind utilities for styling; avoid ad-hoc `<style>` blocks when Tailwind covers the same need.
- Use the `cn` utility for conditional or complex class composition.
- CTA links must use `buildSignupUrl` from `src/lib/cta.ts` to preserve plan and attribution params.

## Documentation

- `CONTRIBUTORS.md` — dev workflow and contribution guidance.
- `DECISIONS.md` — stable architectural and product decisions.
- `docs/` — deeper documentation on i18n, landing/dashboard boundaries, and writing style.
