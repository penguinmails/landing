import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { buildSignupUrl } from "./cta";

describe("buildSignupUrl", () => {
  // Example-based tests

  it("omitting plan produces a URL without a plan query param", () => {
    const result = buildSignupUrl({ context: "landing_page" });
    const url = new URL(result);
    expect(url.searchParams.has("plan")).toBe(false);
  });

  it("omitting billing produces a URL without a billing query param", () => {
    const result = buildSignupUrl({ context: "landing_page" });
    const url = new URL(result);
    expect(url.searchParams.has("billing")).toBe(false);
  });

  it("supports the About page bottom CTA context", () => {
    const result = buildSignupUrl({ context: "about_page_bottom" });
    const url = new URL(result);
    expect(url.searchParams.get("utm_source")).toBe("about_page_bottom");
  });

  // Feature: vitest-setup, Property 5: buildSignupUrl always returns a valid absolute URL with required UTM params
  it("Property 5: buildSignupUrl always returns a valid absolute URL with required UTM params", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(
          "landing_page",
          "pricing_page",
          "cta_bottom",
          "about_page_bottom",
        ) as fc.Arbitrary<
          "landing_page" | "pricing_page" | "cta_bottom" | "about_page_bottom"
        >,
        (context) => {
          const result = buildSignupUrl({ context });
          const url = new URL(result); // throws if not a valid absolute URL
          expect(url.searchParams.get("utm_source")).toBe(context);
          expect(url.searchParams.get("utm_medium")).toBe("website");
          expect(url.searchParams.get("utm_campaign")).toBe("pricing");
        },
      ),
    );
  });

  // Feature: vitest-setup, Property 6: buildSignupUrl includes optional params when provided, omits them when absent
  it("Property 6: buildSignupUrl includes optional params when provided, omits them when absent", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(
          "landing_page",
          "pricing_page",
          "cta_bottom",
          "about_page_bottom",
        ) as fc.Arbitrary<
          "landing_page" | "pricing_page" | "cta_bottom" | "about_page_bottom"
        >,
        fc.option(
          fc.constantFrom("starter", "growth", "scale", "pro") as fc.Arbitrary<
            "starter" | "growth" | "scale" | "pro"
          >,
        ),
        fc.option(
          fc.constantFrom("monthly", "annually") as fc.Arbitrary<
            "monthly" | "annually"
          >,
        ),
        (context, plan, billing) => {
          const result = buildSignupUrl({
            context,
            ...(plan !== null ? { plan } : {}),
            ...(billing !== null ? { billing } : {}),
          });
          const url = new URL(result);

          if (plan !== null) {
            expect(url.searchParams.get("plan")).toBe(plan);
          } else {
            expect(url.searchParams.has("plan")).toBe(false);
          }

          if (billing !== null) {
            expect(url.searchParams.get("billing")).toBe(billing);
          } else {
            expect(url.searchParams.has("billing")).toBe(false);
          }
        },
      ),
    );
  });
});
