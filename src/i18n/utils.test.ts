import { describe, it, expect } from "vitest";
import { getLangFromUrl, useTranslatedPath } from "./utils";
import { ui, defaultLang, showDefaultLang } from "./ui";

describe("getLangFromUrl", () => {
  it("returns defaultLang for root URL /", () => {
    const url = new URL("https://example.com/");
    expect(getLangFromUrl(url)).toBe(defaultLang);
  });
});

describe("useTranslatedPath", () => {
  it("returns path unchanged for defaultLang when showDefaultLang is false", () => {
    const translatePath = useTranslatedPath(defaultLang);
    expect(translatePath("/about")).toBe("/about");
  });

  it("prefixes path with /{lang} for non-default lang", () => {
    const nonDefaultLang = Object.keys(ui).find(
      (l) => l !== defaultLang,
    ) as keyof typeof ui;
    const translatePath = useTranslatedPath(nonDefaultLang);
    expect(translatePath("/about")).toBe(`/${nonDefaultLang}/about`);
  });
});

import * as fc from "fast-check";
import { useTranslations } from "./utils";
import type { TranslationKey } from "./types";

// Feature: vitest-setup, Property 1: getLangFromUrl returns the matching language key
describe("Property 1: getLangFromUrl returns the matching language key", () => {
  it("returns the lang key when a known lang segment is in the URL", () => {
    // Validates: Requirements 3.1
    fc.assert(
      fc.property(fc.constantFrom(...Object.keys(ui)), (lang) => {
        const url = new URL(`https://example.com/${lang}/some-path`);
        expect(getLangFromUrl(url)).toBe(lang);
      }),
    );
  });
});

// Feature: vitest-setup, Property 2: getLangFromUrl falls back to defaultLang for unknown segments
describe("Property 2: getLangFromUrl falls back to defaultLang for unknown segments", () => {
  it("returns defaultLang when the URL segment is not a known language", () => {
    // Validates: Requirements 3.2, 3.3
    fc.assert(
      fc.property(
        fc.webSegment().filter((s) => !(s in ui)),
        (segment) => {
          const url = new URL(`https://example.com/${segment}/some-path`);
          expect(getLangFromUrl(url)).toBe(defaultLang);
        },
      ),
    );
  });
});

// Feature: vitest-setup, Property 3: useTranslations returns non-empty string for every key in every language
describe("Property 3: useTranslations returns non-empty string for every key in every language", () => {
  it("returns a non-empty string for every translation key in every language", () => {
    // Validates: Requirements 3.4, 3.5
    const translationKeys = Object.keys(ui[defaultLang]) as TranslationKey[];
    fc.assert(
      fc.property(
        fc.constantFrom(...Object.keys(ui)),
        fc.constantFrom(...translationKeys),
        (lang, key) => {
          const t = useTranslations(lang as keyof typeof ui);
          const result = t(key);
          expect(typeof result).toBe("string");
          expect(result.length).toBeGreaterThan(0);
        },
      ),
    );
  });
});

// Feature: vitest-setup, Property 4: useTranslatedPath produces correct prefixes for all languages and paths
describe("Property 4: useTranslatedPath produces correct prefixes for all languages and paths", () => {
  it("returns path unchanged for defaultLang when showDefaultLang is false, otherwise prefixes with /{lang}", () => {
    // Validates: Requirements 3.6, 3.7
    fc.assert(
      fc.property(
        fc.constantFrom(...Object.keys(ui)),
        fc.string(),
        (lang, path) => {
          const translatePath = useTranslatedPath(lang as keyof typeof ui);
          const result = translatePath(path, lang);
          if (lang === defaultLang && !showDefaultLang) {
            expect(result).toBe(path);
          } else {
            expect(result).toBe(`/${lang}${path}`);
          }
        },
      ),
    );
  });
});
