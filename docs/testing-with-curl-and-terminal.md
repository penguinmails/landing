# Testing With Curl and Terminal

## What This Means

This project is mostly static marketing content with server-rendered pages and environment-driven links, so a fast terminal check catches many regressions before visual QA. Running a quick `curl` pass helps confirm that pages render, routes resolve, and CTA targets are shaped correctly without opening the browser for every change.

## How It Works

Use `nvm use` first so commands run with the repo Node version, then start the app in dev or preview mode depending on what you need to validate (`CONTRIBUTORS.md`). For iterative work, `npm run dev` is enough to verify route responses and inspect generated HTML. For deployment parity, build and run preview (`npm run build` and `npm run preview`) and run the same `curl` checks against the preview server.

When testing CTA behavior, inspect rendered markup for expected URL fragments rather than relying only on status codes. For example, pricing and home pages should include signup links generated through `buildSignupUrl` (`src/lib/cta.ts`) and those links should carry UTM parameters plus optional plan and billing parameters.

## Implementation Notes

From the repository root, start with the baseline checks:

```bash
nvm use
npm run type-check
npm run build
```

Use these `curl` checks while `npm run dev` or `npm run preview` is running:

```bash
# Basic route health
curl -i http://localhost:4321/
curl -i http://localhost:4321/pricing

# Follow redirects if present
curl -IL http://localhost:4321/es/pricing

# Verify signup CTA params are present in rendered HTML
curl -s http://localhost:4321/pricing | rg "utm_source|utm_medium|utm_campaign|plan|billing"

# Verify book-demo mail link format in rendered HTML
curl -s http://localhost:4321/ | rg "mailto:"
```

If a command fails, capture the terminal output and include it in the PR description so reviewers can distinguish routing issues, env issues, and markup regressions quickly.
