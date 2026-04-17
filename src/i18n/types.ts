import type { en } from "./locales/en";

export type CommonTranslations = {
  "site.title": string;
  "site.description": string;
  "nav.home": string;
  "nav.features": string;
  "nav.pricing": string;
  "nav.usecases": string;
  "nav.login": string;
};

export type HomeTranslations = {
  "hero.titleStart": string;
  "hero.titleInbox": string;
  "hero.titleSpam": string;
  "hero.description": string;
  "hero.cta.trial": string;
  "hero.cta.demo": string;
};

export type PricingTranslations = {
  "pricing.title": string;
  "pricing.description": string;
  "pricing.hero.headline": string;
  "pricing.hero.subCopy": string;
  "pricing.hero.cta.trial": string;
  "pricing.hero.cta.demo": string;
  "pricing.toggle.monthly": string;
  "pricing.toggle.annually": string;
  "pricing.billing.monthly": string;
  "pricing.billing.annually": string;
  "pricing.popular": string;
  "pricing.perMonth": string;
  "pricing.faq.title": string;
  // Plan names & descriptions
  "pricing.plan.starter.name": string;
  "pricing.plan.starter.description": string;
  "pricing.plan.starter.cta": string;
  "pricing.plan.growth.name": string;
  "pricing.plan.growth.description": string;
  "pricing.plan.scale.name": string;
  "pricing.plan.scale.description": string;
  "pricing.plan.pro.name": string;
  "pricing.plan.pro.description": string;
  "pricing.plan.cta.getStarted": string;
  // Features
  "pricing.plan.feature.contacts3k": string;
  "pricing.plan.feature.contacts10k": string;
  "pricing.plan.feature.contacts50k": string;
  "pricing.plan.feature.contactsUnlimited": string;
  "pricing.plan.feature.unlimitedSending": string;
  "pricing.plan.feature.unlimitedAccounts": string;
  "pricing.plan.feature.unlimitedWarmups": string;
  "pricing.plan.feature.analytics": string;
  "pricing.plan.feature.prioritySupport": string;
  "pricing.plan.feature.slack": string;
  // FAQs
  "pricing.faq.spam.question": string;
  "pricing.faq.spam.answer": string;
  "pricing.faq.domain.question": string;
  "pricing.faq.domain.answer": string;
  "pricing.faq.technical.question": string;
  "pricing.faq.technical.answer": string;
  "pricing.faq.replace.question": string;
  "pricing.faq.replace.answer": string;
};

export type FeaturesTranslations = {
  "features.title": string;
  "features.description": string;
  // Mailbox Creation Feature
  "features.mailbox.tabTitle": string;
  "features.mailbox.heading": string;
  "features.mailbox.subheading": string;
  "features.mailbox.tagline": string;
  "features.mailbox.core.valueProp": string;
  "features.mailbox.core.explanation": string;
  "features.mailbox.core.benefit": string;
  "features.mailbox.versus.title": string;
  "features.mailbox.versus.subtitle": string;
  "features.mailbox.versus.problems": string[];
  "features.mailbox.versus.solution": string;
  "features.mailbox.versus.benefits": string[];
  "features.mailbox.steps.title": string;
  "features.mailbox.steps.step1.title": string;
  "features.mailbox.steps.step1.description": string;
  "features.mailbox.steps.step2.title": string;
  "features.mailbox.steps.step2.description": string;
  "features.mailbox.steps.step3.title": string;
  "features.mailbox.steps.step3.description": string;
  "features.mailbox.steps.conclusion": string;
  "features.mailbox.real.title": string;
  "features.mailbox.real.subtitle": string;
  "features.mailbox.real.description": string;
  "features.mailbox.real.capabilities": string[];
  "features.mailbox.real.benefits": string[];
  "features.mailbox.unlimited.title": string;
  "features.mailbox.unlimited.description": string;
  "features.mailbox.unlimited.explanation": string;
  "features.mailbox.cost.title": string;
  "features.mailbox.cost.description": string;
  "features.mailbox.cost.intro": string;
  "features.mailbox.cost.table.title": string;
  "features.mailbox.cost.conclusion": string;
  "features.mailbox.management.title": string;
  "features.mailbox.management.description": string;
  "features.mailbox.management.controls": string[];
  "features.mailbox.faq.title": string;
  "features.mailbox.faq.items": Array<{
    question: string;
    answer: string;
  }>;
  "features.mailbox.cta.title": string;
  "features.mailbox.cta.description": string;

  // Real-Time Analytics Feature
  "features.analytics.tabTitle": string;
  "features.analytics.heading": string;
  "features.analytics.subheading": string;
  "features.analytics.tagline": string;
  "features.analytics.core.valueProp": string;
  "features.analytics.core.explanation": string;
  "features.analytics.core.benefit": string;
  "features.analytics.versus.title": string;
  "features.analytics.versus.subtitle": string;
  "features.analytics.versus.problems": string[];
  "features.analytics.versus.solution": string;
  "features.analytics.versus.benefits": string[];
  "features.analytics.steps.title": string;
  "features.analytics.steps.step1.title": string;
  "features.analytics.steps.step1.description": string;
  "features.analytics.steps.step2.title": string;
  "features.analytics.steps.step2.description": string;
  "features.analytics.steps.step3.title": string;
  "features.analytics.steps.step3.description": string;
  "features.analytics.steps.conclusion": string;
  "features.analytics.capabilities.title": string;
  "features.analytics.capabilities.subtitle": string;
  "features.analytics.capabilities.description": string;
  "features.analytics.capabilities.items": string[];
  "features.analytics.benefits.title": string;
  "features.analytics.benefits.description": string;
  "features.analytics.faq.title": string;
  "features.analytics.faq.items": Array<{
    question: string;
    answer: string;
  }>;
  "features.analytics.cta.title": string;
  "features.analytics.cta.description": string;
};

export type UsecasesTranslations = {
  "usecases.title": string;
  "usecases.description": string;
};

export type Translations = typeof en;
export type TranslationKey = keyof Translations;
