import { describe, it, expect } from "vitest";
import { pricingPlans, pricingFaqs } from "./data";

describe("pricingPlans", () => {
  it("has exactly 4 entries", () => {
    expect(pricingPlans).toHaveLength(4);
  });

  it("has unique id values", () => {
    const ids = pricingPlans.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every monthlyPrice is a positive number", () => {
    for (const plan of pricingPlans) {
      expect(typeof plan.monthlyPrice).toBe("number");
      expect(plan.monthlyPrice).toBeGreaterThan(0);
    }
  });

  it("every annualPrice is strictly less than monthlyPrice", () => {
    for (const plan of pricingPlans) {
      expect(plan.annualPrice).toBeLessThan(plan.monthlyPrice);
    }
  });

  it("exactly 1 plan has popular: true", () => {
    const popularPlans = pricingPlans.filter((p) => p.popular === true);
    expect(popularPlans).toHaveLength(1);
  });

  it("every plan has a non-empty featureKeys array of non-empty strings", () => {
    for (const plan of pricingPlans) {
      expect(plan.featureKeys.length).toBeGreaterThan(0);
      for (const key of plan.featureKeys) {
        expect(typeof key).toBe("string");
        expect(key.length).toBeGreaterThan(0);
      }
    }
  });
});

describe("pricingFaqs", () => {
  it("has exactly 4 entries", () => {
    expect(pricingFaqs).toHaveLength(4);
  });

  it("every FAQ has non-empty questionKey and answerKey strings", () => {
    for (const faq of pricingFaqs) {
      expect(typeof faq.questionKey).toBe("string");
      expect(faq.questionKey.length).toBeGreaterThan(0);
      expect(typeof faq.answerKey).toBe("string");
      expect(faq.answerKey.length).toBeGreaterThan(0);
    }
  });
});
