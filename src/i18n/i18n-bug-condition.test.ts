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

  it("Footer: must contain Spanish description when lang=es", async () => {
    // Positive assertion to prevent false-pass
    const html = await container.renderToString(Footer, {
      request: esRequest,
    });
    expect(html).toContain("PenguinMails es una herramienta asequible");
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

  it("Logo: must contain Spanish aria-label and alt text when lang=es", async () => {
    // Positive assertion to prevent false-pass
    const html = await container.renderToString(Logo, {
      request: esRequest,
    });
    expect(html).toContain('aria-label="Inicio de PenguinMails"');
    expect(html).toContain('alt="Logo de PenguinMails"');
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

  it("ResultsSection: must contain Spanish title when lang=es", async () => {
    // Positive assertion to prevent false-pass
    const html = await container.renderToString(ResultsSection, {
      request: esRequest,
    });
    expect(html).toContain("Cómo Se Ve Una Mejor Entregabilidad");
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

  it("SocialProofSection: must contain Spanish heading when lang=es", async () => {
    // Positive assertion to prevent false-pass
    const html = await container.renderToString(SocialProofSection, {
      request: esRequest,
    });
    expect(html).toContain("De confianza para equipos de ventas modernos");
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

  it("ColdEmailFailsSection: must contain Spanish title when lang=es", async () => {
    // Positive assertion to prevent false-pass
    const html = await container.renderToString(ColdEmailFailsSection, {
      request: esRequest,
    });
    expect(html).toContain("Por Qué el Software de Email en Frío Te Falla");
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

  it("ColdEmailSection: must contain Spanish heading when lang=es", async () => {
    // Positive assertion to prevent false-pass
    const html = await container.renderToString(ColdEmailSection, {
      request: esRequest,
    });
    expect(html).toContain(
      "La Plataforma de Email en Frío Construida para la Entregabilidad",
    );
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

  it("DeliveringStepsSection: must contain Spanish title when lang=es", async () => {
    // Positive assertion to prevent false-pass
    const html = await container.renderToString(DeliveringStepsSection, {
      request: esRequest,
    });
    expect(html).toContain("Empieza a Entregar en 3 Simples Pasos");
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

  it("FrequentlyAskedQuestionsSection: must contain Spanish heading when lang=es", async () => {
    // Positive assertion to prevent false-pass
    const html = await container.renderToString(
      FrequentlyAskedQuestionsSection,
      { request: esRequest },
    );
    expect(html).toContain("Preguntas Frecuentes");
  });

  // ── 1.9 ReachTheInboxSection ─────────────────────────────────────────────────
  it("ReachTheInboxSection: must NOT contain hardcoded title when lang=es", async () => {
    // Validates: Requirements 1.9
    const html = await container.renderToString(ReachTheInboxSection, {
      request: esRequest,
    });
    expect(html).not.toContain("Everything You Need to Reach the Inbox");
  });

  it("ReachTheInboxSection: must contain Spanish title when lang=es", async () => {
    // Positive assertion to prevent false-pass
    const html = await container.renderToString(ReachTheInboxSection, {
      request: esRequest,
    });
    expect(html).toContain(
      "Todo Lo Que Necesitas para Llegar a la Bandeja de Entrada",
    );
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
    // Use whitespace-tolerant regex to avoid brittleness from HTML formatting
    expect(html).not.toMatch(/>\s*Features\s*</);
  });

  it("ComparisonTableSection: must contain Spanish section heading when lang=es", async () => {
    // Positive assertion to prevent false-pass
    const html = await container.renderToString(ComparisonTableSection, {
      request: esRequest,
    });
    expect(html).toContain("Construido para la Entregabilidad. No el Volumen.");
  });
});
