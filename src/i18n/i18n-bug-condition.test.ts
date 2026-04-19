/**
 * Bug Condition Exploration Test
 *
 * Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10
 *
 * These tests MUST FAIL on unfixed code — failure confirms the bug exists.
 * Each affected component is rendered with lang="es" (via a Spanish URL).
 * The assertions check that known English hardcoded strings do NOT appear in
 * the rendered output. On unfixed code the strings are hardcoded, so they
 * will appear and the assertions will fail, proving the bug.
 *
 * DO NOT fix the components to make these tests pass — that is Task 3.
 */

import { describe, it, expect, beforeAll } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";

import Footer from "@/components/layouts/Footer.astro";
import Logo from "@/components/layouts/Logo.astro";
import ResultsSection from "@/components/pages/home/ResultsSection.astro";
import SocialProofSection from "@/components/pages/home/SocialProofSection.astro";
import ColdEmailFailsSection from "@/components/pages/home/ColdEmailFailsSection.astro";
import ColdEmailSection from "@/components/pages/home/ColdEmailSection.astro";
import DeliveringStepsSection from "@/components/pages/home/DeliveringStepsSection.astro";
import FrequentlyAskedQuestionsSection from "@/components/pages/home/FrequentlyAskedQuestionsSection.astro";
import ReachTheInboxSection from "@/components/pages/home/ReachTheInboxSection.astro";
import ComparisonTableSection from "@/components/pages/home/ComparisonTableSection.astro";

// Spanish URL — getLangFromUrl will return "es" for components that use it
const esRequest = new Request("https://example.com/es/");

describe("Bug Condition: hardcoded English strings rendered regardless of locale", () => {
  let container: AstroContainer;

  beforeAll(async () => {
    container = await AstroContainer.create();
  });

  // ── 1.1 Footer ──────────────────────────────────────────────────────────────
  it("Footer: must NOT contain hardcoded English description when lang=es", async () => {
    // Validates: Requirements 1.1
    const html = await container.renderToString(Footer, {
      request: esRequest,
    });
    expect(html).not.toContain(
      "PenguinMails is an affordable cold email automation tool",
    );
  });

  // ── 1.2 Logo ─────────────────────────────────────────────────────────────────
  it("Logo: must NOT contain hardcoded aria-label when lang=es", async () => {
    // Validates: Requirements 1.2
    const html = await container.renderToString(Logo, {
      request: esRequest,
    });
    expect(html).not.toContain('aria-label="PenguinMails home"');
  });

  it("Logo: must NOT contain hardcoded alt text when lang=es", async () => {
    // Validates: Requirements 1.2
    const html = await container.renderToString(Logo, {
      request: esRequest,
    });
    expect(html).not.toContain('alt="PenguinMails logo"');
  });

  // ── 1.3 ResultsSection ───────────────────────────────────────────────────────
  it("ResultsSection: must NOT contain hardcoded title when lang=es", async () => {
    // Validates: Requirements 1.3
    const html = await container.renderToString(ResultsSection, {
      request: esRequest,
    });
    expect(html).not.toContain("What Better Deliverability Looks Like");
  });

  it("ResultsSection: must NOT contain hardcoded result item text when lang=es", async () => {
    // Validates: Requirements 1.3
    const html = await container.renderToString(ResultsSection, {
      request: esRequest,
    });
    expect(html).not.toContain("Higher open rates");
  });

  // ── 1.4 SocialProofSection ───────────────────────────────────────────────────
  it("SocialProofSection: must NOT contain hardcoded heading when lang=es", async () => {
    // Validates: Requirements 1.4
    const html = await container.renderToString(SocialProofSection, {
      request: esRequest,
    });
    expect(html).not.toContain("Trusted by modern outbound teams");
  });

  it("SocialProofSection: must NOT contain hardcoded stat label when lang=es", async () => {
    // Validates: Requirements 1.4
    const html = await container.renderToString(SocialProofSection, {
      request: esRequest,
    });
    expect(html).not.toContain("average inbox placement");
  });

  // ── 1.5 ColdEmailFailsSection ────────────────────────────────────────────────
  it("ColdEmailFailsSection: must NOT contain hardcoded title when lang=es", async () => {
    // Validates: Requirements 1.5
    const html = await container.renderToString(ColdEmailFailsSection, {
      request: esRequest,
    });
    expect(html).not.toContain("Why Cold Email Software Fails You");
  });

  it("ColdEmailFailsSection: must NOT contain hardcoded footer callout when lang=es", async () => {
    // Validates: Requirements 1.5
    const html = await container.renderToString(ColdEmailFailsSection, {
      request: esRequest,
    });
    expect(html).not.toContain("Cold email isn't broken. Inbox placement is.");
  });

  // ── 1.6 ColdEmailSection ─────────────────────────────────────────────────────
  it("ColdEmailSection: must NOT contain hardcoded heading when lang=es", async () => {
    // Validates: Requirements 1.6
    const html = await container.renderToString(ColdEmailSection, {
      request: esRequest,
    });
    expect(html).not.toContain(
      "The Cold Email Platform Built for Deliverability",
    );
  });

  it("ColdEmailSection: must NOT contain hardcoded panel heading when lang=es", async () => {
    // Validates: Requirements 1.6
    const html = await container.renderToString(ColdEmailSection, {
      request: esRequest,
    });
    expect(html).not.toContain("Recent Replies");
  });

  // ── 1.7 DeliveringStepsSection ───────────────────────────────────────────────
  it("DeliveringStepsSection: must NOT contain hardcoded title when lang=es", async () => {
    // Validates: Requirements 1.7
    const html = await container.renderToString(DeliveringStepsSection, {
      request: esRequest,
    });
    expect(html).not.toContain("Start Delivering in 3 Simple Steps");
  });

  it("DeliveringStepsSection: must NOT contain hardcoded footer note when lang=es", async () => {
    // Validates: Requirements 1.7
    const html = await container.renderToString(DeliveringStepsSection, {
      request: esRequest,
    });
    expect(html).not.toContain("No technical expertise required");
  });

  // ── 1.8 FrequentlyAskedQuestionsSection ──────────────────────────────────────
  it("FrequentlyAskedQuestionsSection: must NOT contain hardcoded heading when lang=es", async () => {
    // Validates: Requirements 1.8
    const html = await container.renderToString(
      FrequentlyAskedQuestionsSection,
      { request: esRequest },
    );
    expect(html).not.toContain("Frequently Asked Questions");
  });

  it("FrequentlyAskedQuestionsSection: must NOT contain hardcoded FAQ question when lang=es", async () => {
    // Validates: Requirements 1.8
    const html = await container.renderToString(
      FrequentlyAskedQuestionsSection,
      { request: esRequest },
    );
    expect(html).not.toContain("Will this get my emails out of spam?");
  });

  // ── 1.9 ReachTheInboxSection ─────────────────────────────────────────────────
  it("ReachTheInboxSection: must NOT contain hardcoded title when lang=es", async () => {
    // Validates: Requirements 1.9
    const html = await container.renderToString(ReachTheInboxSection, {
      request: esRequest,
    });
    expect(html).not.toContain("Everything You Need to Reach the Inbox");
  });

  // ── 1.10 ComparisonTableSection ──────────────────────────────────────────────
  it("ComparisonTableSection: must NOT contain hardcoded section heading when lang=es", async () => {
    // Validates: Requirements 1.10
    const html = await container.renderToString(ComparisonTableSection, {
      request: esRequest,
    });
    expect(html).not.toContain("Built for Deliverability. Not Volume.");
  });

  it('ComparisonTableSection: must NOT contain hardcoded "Features" column header when lang=es', async () => {
    // Validates: Requirements 1.10
    const html = await container.renderToString(ComparisonTableSection, {
      request: esRequest,
    });
    // The "Features" column header is a hardcoded string in the table header row
    expect(html).not.toContain(">Features<");
  });
});
