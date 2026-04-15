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
