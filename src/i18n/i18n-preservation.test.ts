/**
 * Preservation Property Tests
 *
 * Validates: Requirements 3.1, 3.2, 3.3, 3.4
 *
 * These tests MUST PASS on unfixed code — they establish the baseline behavior
 * of already-translated components that must be preserved after the fix.
 *
 * Components tested:
 * - HeroSection: receives translated strings as props from the parent page
 * - PricingPlansSection: uses getLangFromUrl / useTranslations directly
 * - Footer nav links: already translated via t() in Footer.astro
 */

import { describe, it, expect, beforeAll } from "vitest";
import * as fc from "fast-check";
import { experimental_AstroContainer as AstroContainer } from "astro/container";

import PricingPlansSection from "@/components/pages/pricing/PricingPlansSection.astro";
import Footer from "@/components/layouts/Footer.astro";

import { en } from "@/i18n/locales/en";
import { es } from "@/i18n/locales/es";

// ── Locale maps ──────────────────────────────────────────────────────────────

const localeMap = { en, es } as const;
type SupportedLang = keyof typeof localeMap;
const supportedLangs: SupportedLang[] = ["en", "es"];

// ── 1. HeroSection — locale key assertions (no render needed) ────────────────
// HeroSection receives translated strings as props from the parent page.
// The parent calls t("hero.titleStart") etc. and passes them as props.
// We verify the locale files have the expected keys and non-empty values.

describe("Property 1: HeroSection locale keys exist and are non-empty strings for all locales", () => {
  it("hero keys are present and non-empty in every supported locale", () => {
    // Validates: Requirements 3.1
    const heroKeys = [
      "hero.titleStart",
      "hero.titleInbox",
      "hero.titleSpam",
      "hero.description",
      "hero.cta.trial",
      "hero.cta.demo",
    ] as const;

    fc.assert(
      fc.property(fc.constantFrom(...supportedLangs), (lang) => {
        const translations = localeMap[lang];
        for (const key of heroKeys) {
          const value = translations[key];
          expect(typeof value, `${lang}["${key}"] should be a string`).toBe(
            "string",
          );
          expect(
            (value as string).length,
            `${lang}["${key}"] should be non-empty`,
          ).toBeGreaterThan(0);
        }
      }),
    );
  });

  it("Spanish hero keys have the expected values", () => {
    // Validates: Requirements 3.1
    expect(es["hero.titleStart"]).toBe("Emails en frío que llegan a");
    expect(es["hero.titleInbox"]).toBe("la Bandeja.");
    expect(es["hero.cta.trial"]).toBe("Prueba Gratis");
  });

  it("English hero keys have the expected values", () => {
    // Validates: Requirements 3.1
    expect(en["hero.titleStart"]).toBe("Cold emails that land in the");
    expect(en["hero.titleInbox"]).toBe("Inbox.");
    expect(en["hero.cta.trial"]).toBe("Start Free Trial");
  });
});

// ── 2. PricingPlansSection — render with lang="es" ───────────────────────────

describe("Property 2: PricingPlansSection renders Spanish pricing strings when lang=es", () => {
  let container: AstroContainer;

  beforeAll(async () => {
    container = await AstroContainer.create();
  });

  it("renders Spanish toggle and billing labels for lang=es", async () => {
    // Validates: Requirements 3.2
    const html = await container.renderToString(PricingPlansSection, {
      request: new Request("https://example.com/es/pricing"),
    });
    expect(html).toContain("Mensual");
    expect(html).toContain("Facturado mensualmente");
  });

  it("renders Spanish popular badge for lang=es", async () => {
    // Validates: Requirements 3.2
    const html = await container.renderToString(PricingPlansSection, {
      request: new Request("https://example.com/es/pricing"),
    });
    expect(html).toContain("⭐ Plan Más Popular");
  });

  it("renders English toggle and billing labels for lang=en", async () => {
    // Validates: Requirements 3.2
    const html = await container.renderToString(PricingPlansSection, {
      request: new Request("https://example.com/pricing"),
    });
    expect(html).toContain("Monthly");
    expect(html).toContain("Billed monthly");
  });

  it("pricing locale keys are non-empty strings for all locales", () => {
    // Validates: Requirements 3.2
    const pricingKeys = [
      "pricing.toggle.monthly",
      "pricing.billing.monthly",
      "pricing.popular",
    ] as const;

    fc.assert(
      fc.property(fc.constantFrom(...supportedLangs), (lang) => {
        const translations = localeMap[lang];
        for (const key of pricingKeys) {
          const value = translations[key];
          expect(typeof value, `${lang}["${key}"] should be a string`).toBe(
            "string",
          );
          expect(
            (value as string).length,
            `${lang}["${key}"] should be non-empty`,
          ).toBeGreaterThan(0);
        }
      }),
    );
  });
});

// ── 3. Footer nav links — render with lang="es" ──────────────────────────────
// Footer already uses t() for nav link labels. Only nav links are tested here.
// Footer description/headings/copyright are still hardcoded (that's the bug).

describe("Property 3: Footer nav links render Spanish labels when lang=es", () => {
  let container: AstroContainer;

  beforeAll(async () => {
    container = await AstroContainer.create();
  });

  it("renders Spanish nav link labels for lang=es", async () => {
    // Validates: Requirements 3.3
    // Footer uses usecasesLinks, resourcesLinks, companyLinks, legalLinks — not main nav
    const html = await container.renderToString(Footer, {
      request: new Request("https://example.com/es/"),
    });
    expect(html).toContain("Agencias");
    expect(html).toContain("Autónomos");
    expect(html).toContain("Acerca de");
  });

  it("renders English nav link labels for lang=en", async () => {
    // Validates: Requirements 3.3
    const html = await container.renderToString(Footer, {
      request: new Request("https://example.com/"),
    });
    expect(html).toContain("Agencies");
    expect(html).toContain("Freelancers");
    expect(html).toContain("About");
  });

  it("nav link locale keys are non-empty strings for all locales", () => {
    // Validates: Requirements 3.3
    const navKeys = [
      "nav.home",
      "nav.features",
      "nav.agencies",
      "nav.freelancers",
      "nav.outbound-teams",
      "nav.startups",
      "nav.about",
      "nav.blog",
    ] as const;

    fc.assert(
      fc.property(fc.constantFrom(...supportedLangs), (lang) => {
        const translations = localeMap[lang];
        for (const key of navKeys) {
          const value = translations[key];
          expect(typeof value, `${lang}["${key}"] should be a string`).toBe(
            "string",
          );
          expect(
            (value as string).length,
            `${lang}["${key}"] should be non-empty`,
          ).toBeGreaterThan(0);
        }
      }),
    );
  });

  it("Spanish nav link values match expected translations", () => {
    // Validates: Requirements 3.3
    // Footer uses usecasesLinks, resourcesLinks, companyLinks, legalLinks
    expect(es["nav.agencies"]).toBe("Agencias");
    expect(es["nav.freelancers"]).toBe("Autónomos");
    expect(es["nav.about"]).toBe("Acerca de");
    expect(es["nav.blog"]).toBe("Blog");
  });
});

// ── 4. Cross-locale completeness ─────────────────────────────────────────────

describe("Property 4: All preserved keys exist in both locales", () => {
  it("every key present in en/ is also present in es/ for preserved components", () => {
    // Validates: Requirements 3.4
    const preservedKeys = [
      "hero.titleStart",
      "hero.titleInbox",
      "hero.titleSpam",
      "hero.description",
      "hero.cta.trial",
      "hero.cta.demo",
      "pricing.toggle.monthly",
      "pricing.billing.monthly",
      "pricing.popular",
      "nav.home",
      "nav.features",
      "nav.agencies",
      "nav.freelancers",
      "nav.outbound-teams",
      "nav.startups",
      "nav.about",
      "nav.blog",
    ] as const;

    fc.assert(
      fc.property(fc.constantFrom(...preservedKeys), (key) => {
        const enValue = en[key];
        const esValue = es[key];
        expect(typeof enValue, `en["${key}"] should be a string`).toBe(
          "string",
        );
        expect(typeof esValue, `es["${key}"] should be a string`).toBe(
          "string",
        );
        expect(
          (enValue as string).length,
          `en["${key}"] should be non-empty`,
        ).toBeGreaterThan(0);
        expect(
          (esValue as string).length,
          `es["${key}"] should be non-empty`,
        ).toBeGreaterThan(0);
      }),
    );
  });
});
