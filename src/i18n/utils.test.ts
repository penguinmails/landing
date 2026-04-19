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

// Feature: vitest-setup, Property 3a: useTranslations returns non-empty strings for string keys
describe("Property 3: useTranslations returns non-empty string for every key in every language", () => {
  it("returns a non-empty string for every string translation key in every language", () => {
    // Validates: Requirements 3.4, 3.5
    const allKeys = Object.keys(ui[defaultLang]) as TranslationKey[];
    const stringKeys = allKeys.filter(
      (k) => typeof ui[defaultLang][k] === "string",
    );
    fc.assert(
      fc.property(
        fc.constantFrom(...Object.keys(ui)),
        fc.constantFrom(...stringKeys),
        (lang, key) => {
          const t = useTranslations(lang as keyof typeof ui);
          const result = t(key);
          expect(typeof result).toBe("string");
          expect((result as string).length).toBeGreaterThan(0);
        },
      ),
    );
  });

  it("returns structured values with matching shape for every non-string key in every language", () => {
    // Validates: Requirements 3.4, 3.5
    // Covers array/object keys (e.g. home.faq.items) that Property 3a skips
    const allKeys = Object.keys(ui[defaultLang]) as TranslationKey[];
    const structuredKeys = allKeys.filter(
      (k) => typeof ui[defaultLang][k] !== "string",
    );

    fc.assert(
      fc.property(
        fc.constantFrom(...Object.keys(ui)),
        fc.constantFrom(...structuredKeys),
        (lang, key) => {
          const t = useTranslations(lang as keyof typeof ui);
          const result = t(key);
          const defaultValue = ui[defaultLang][key];

          if (Array.isArray(defaultValue)) {
            expect(Array.isArray(result)).toBe(true);
            expect((result as unknown[]).length).toBe(defaultValue.length);
          } else if (
            typeof defaultValue === "object" &&
            defaultValue !== null
          ) {
            expect(typeof result).toBe("object");
            expect(result).not.toBeNull();
            const resultKeys = Object.keys(result as object);
            const defaultKeys = Object.keys(defaultValue);
            expect(resultKeys.sort()).toEqual(defaultKeys.sort());
          } else {
            // Fallback: ensure value exists and is not null/undefined
            expect(result).not.toBeNull();
            expect(result).not.toBeUndefined();
          }
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

// Feature: Array keys validation
describe("Array translation keys have unique identifiers", () => {
  it("home.platform.messages have unique ids", () => {
    const messages = ui.en["home.platform.messages"];
    const ids = messages.map((m: { id: number }) => m.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("home.social.messages have unique ids", () => {
    const messages = ui.en["home.social.messages"];
    const ids = messages.map((m: { id: number }) => m.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("home.fails.problems have unique ids", () => {
    const problems = ui.en["home.fails.problems"];
    const ids = problems.map((p: { id: string }) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});
