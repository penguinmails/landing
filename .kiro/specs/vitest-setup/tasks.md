# Implementation Plan: vitest-setup

## Overview

Install Vitest and fast-check, wire up the config with the `astro:env/client` mock, then build out the test suite incrementally — mock fixture first, then i18n, pricing data, CTA builder, and optionally the Button snapshot.

## Tasks

- [x] 1. Install dependencies and add the test script
  - Run `npm install --save-dev vitest fast-check` to add the test runner and property-based testing library
  - Add `"test": "vitest --run"` to the `scripts` section of `package.json`
  - _Requirements: 1.4, 1.5_

- [x] 2. Create the Vitest config
  - [x] 2.1 Create `vitest.config.ts` at the project root
    - Call `getViteConfig` from `astro/config` with `test.environment: "node"` and `test.include: ["src/**/*.test.ts"]`
    - Add a `resolve.alias` entry mapping `astro:env/client` to `./src/test/mocks/astro-env.ts` using `new URL(..., import.meta.url).pathname`
    - _Requirements: 1.1, 1.2, 1.3_

- [x] 3. Create the Virtual Module Mock
  - [x] 3.1 Create `src/test/mocks/astro-env.ts`
    - Export `PUBLIC_APP_ROOT_URL = "https://test.example.com"` and `PUBLIC_SIGNUP_PATH = "/signup"` as plain string constants
    - No Astro internals or runtime dependencies
    - _Requirements: 2.1, 2.2, 2.3, 2.4_
  - [x] 3.2 Write unit tests for the mock exports
    - Assert both exports are strings and have the expected values
    - _Requirements: 2.1, 2.2_

- [x] 4. Checkpoint — ensure `npm test` runs without errors before writing feature tests
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Implement i18n utility tests
  - [x] 5.1 Create `src/i18n/utils.test.ts` with example-based tests
    - Test `getLangFromUrl` with a root URL (`/`) returns `defaultLang` (Requirement 3.3)
    - Test `useTranslatedPath` with `defaultLang` returns path unchanged (Requirement 3.6)
    - Test `useTranslatedPath` with a non-default lang returns `/{lang}{path}` (Requirement 3.7)
    - Import `ui`, `defaultLang`, `showDefaultLang` from `src/i18n/ui.ts` — no hardcoded locale names
    - _Requirements: 3.3, 3.6, 3.7_
  - [x] 5.2 Write property test for Property 1: getLangFromUrl — known lang
    - `// Feature: vitest-setup, Property 1: getLangFromUrl returns the matching language key`
    - Arbitrary: `fc.constantFrom(...Object.keys(ui))`; assert return value equals input lang
    - **Property 1: getLangFromUrl returns the matching language key**
    - **Validates: Requirements 3.1**
  - [x] 5.3 Write property test for Property 2: getLangFromUrl — unknown segment
    - `// Feature: vitest-setup, Property 2: getLangFromUrl falls back to defaultLang for unknown segments`
    - Arbitrary: `fc.string().filter(s => !(s in ui))`; assert return value equals `defaultLang`
    - **Property 2: getLangFromUrl falls back to defaultLang for unknown segments**
    - **Validates: Requirements 3.2, 3.3**
  - [x] 5.4 Write property test for Property 3: useTranslations completeness
    - `// Feature: vitest-setup, Property 3: useTranslations returns non-empty string for every key in every language`
    - Arbitraries: `fc.constantFrom(...Object.keys(ui))` × `fc.constantFrom(...translationKeys)`; assert result is a non-empty string
    - **Property 3: useTranslations returns a non-empty string for every key in every language**
    - **Validates: Requirements 3.4, 3.5**
  - [x] 5.5 Write property test for Property 4: useTranslatedPath prefixes
    - `// Feature: vitest-setup, Property 4: useTranslatedPath produces correct prefixes for all languages and paths`
    - Arbitraries: `fc.constantFrom(...Object.keys(ui))` × `fc.string()`; assert correct prefix or no prefix
    - **Property 4: useTranslatedPath produces correct prefixes for all languages and paths**
    - **Validates: Requirements 3.6, 3.7**

- [x] 6. Implement pricing data integrity tests
  - [x] 6.1 Create `src/components/pages/pricing/data.test.ts`
    - Assert `pricingPlans` has exactly 4 entries (Requirement 4.1)
    - Assert all plan `id` values are unique (Requirement 4.2)
    - Assert every `monthlyPrice` is a positive number > 0 (Requirement 4.3)
    - Assert every `annualPrice` is strictly less than `monthlyPrice` (Requirement 4.4)
    - Assert exactly 1 plan has `popular: true` (Requirement 4.5)
    - Assert every plan's `featureKeys` is a non-empty array of non-empty strings (Requirement 4.6)
    - Assert every FAQ's `questionKey` and `answerKey` are non-empty strings (Requirement 4.7)
    - Assert `pricingFaqs` has exactly 4 entries (Requirement 4.8)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8_

- [x] 7. Implement buildSignupUrl tests
  - [x] 7.1 Create `src/lib/cta.test.ts` with example-based tests
    - Test that omitting `plan` produces a URL without a `plan` query param (Requirement 5.5)
    - Test that omitting `billing` produces a URL without a `billing` query param (Requirement 5.7)
    - Parse returned strings with `new URL()` to inspect query parameters
    - _Requirements: 5.5, 5.7_
  - [x] 7.2 Write property test for Property 5: buildSignupUrl UTM params
    - `// Feature: vitest-setup, Property 5: buildSignupUrl always returns a valid absolute URL with required UTM params`
    - Arbitrary: `fc.constantFrom("landing_page", "pricing_page", "cta_bottom")`; assert URL is valid and utm params are correct
    - **Property 5: buildSignupUrl always returns a valid absolute URL with required UTM params**
    - **Validates: Requirements 5.1, 5.2, 5.3**
  - [x] 7.3 Write property test for Property 6: buildSignupUrl optional params
    - `// Feature: vitest-setup, Property 6: buildSignupUrl includes optional params when provided, omits them when absent`
    - Arbitraries: `fc.constantFrom(...)` for plan/billing values wrapped in `fc.option(...)`; assert params present/absent correctly
    - **Property 6: buildSignupUrl includes optional params when provided, omits them when absent**
    - **Validates: Requirements 5.4, 5.5, 5.6, 5.7, 5.8**

- [ ] 8. Checkpoint — ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. (Optional) Button component snapshot test
  - [x] 9.1 Install `@astrojs/container` and create `src/components/ui/Button.test.ts`
    - Render `Button.astro` with `href` prop and assert output contains `<a>`
    - Render `Button.astro` without `href` prop and assert output contains `<button>`
    - Store a snapshot for representative prop combinations
    - _Requirements: 6.1, 6.2, 6.3_

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Property tests use fast-check with a minimum of 100 iterations (the default)
- Each property test must include a comment referencing the design property it implements
- The `--run` flag on the test script ensures CI exits after a single pass; use `npx vitest` locally for watch mode
