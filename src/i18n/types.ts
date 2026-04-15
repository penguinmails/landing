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
};

export type UsecasesTranslations = {
  "usecases.title": string;
  "usecases.description": string;
};

export type Translations = typeof en;
export type TranslationKey = keyof Translations;
