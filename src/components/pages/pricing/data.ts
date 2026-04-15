export type BillingPeriod = "monthly" | "annually";
export type PricingPlanId = "starter" | "growth" | "scale" | "pro";

export interface PricingPlan {
  id: PricingPlanId;
  nameKey: string;
  monthlyPrice: number;
  annualPrice: number;
  descriptionKey: string;
  featureKeys: string[];
  ctaKey: string;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    nameKey: "pricing.plan.starter.name",
    monthlyPrice: 35,
    annualPrice: 28,
    descriptionKey: "pricing.plan.starter.description",
    featureKeys: [
      "pricing.plan.feature.contacts3k",
      "pricing.plan.feature.unlimitedSending",
      "pricing.plan.feature.unlimitedAccounts",
      "pricing.plan.feature.unlimitedWarmups",
    ],
    ctaKey: "pricing.plan.starter.cta",
  },
  {
    id: "growth",
    nameKey: "pricing.plan.growth.name",
    monthlyPrice: 55,
    annualPrice: 44,
    descriptionKey: "pricing.plan.growth.description",
    featureKeys: [
      "pricing.plan.feature.contacts10k",
      "pricing.plan.feature.unlimitedSending",
      "pricing.plan.feature.unlimitedAccounts",
      "pricing.plan.feature.unlimitedWarmups",
    ],
    ctaKey: "pricing.plan.cta.getStarted",
    popular: true,
  },
  {
    id: "scale",
    nameKey: "pricing.plan.scale.name",
    monthlyPrice: 89,
    annualPrice: 71,
    descriptionKey: "pricing.plan.scale.description",
    featureKeys: [
      "pricing.plan.feature.contacts50k",
      "pricing.plan.feature.unlimitedSending",
      "pricing.plan.feature.unlimitedAccounts",
      "pricing.plan.feature.unlimitedWarmups",
      "pricing.plan.feature.analytics",
      "pricing.plan.feature.prioritySupport",
      "pricing.plan.feature.slack",
    ],
    ctaKey: "pricing.plan.cta.getStarted",
  },
  {
    id: "pro",
    nameKey: "pricing.plan.pro.name",
    monthlyPrice: 189,
    annualPrice: 151,
    descriptionKey: "pricing.plan.pro.description",
    featureKeys: [
      "pricing.plan.feature.contactsUnlimited",
      "pricing.plan.feature.unlimitedSending",
      "pricing.plan.feature.unlimitedAccounts",
      "pricing.plan.feature.unlimitedWarmups",
      "pricing.plan.feature.analytics",
      "pricing.plan.feature.prioritySupport",
      "pricing.plan.feature.slack",
    ],
    ctaKey: "pricing.plan.cta.getStarted",
  },
];

export interface PricingFaq {
  questionKey: string;
  answerKey: string;
}

export const pricingFaqs: PricingFaq[] = [
  {
    questionKey: "pricing.faq.spam.question",
    answerKey: "pricing.faq.spam.answer",
  },
  {
    questionKey: "pricing.faq.domain.question",
    answerKey: "pricing.faq.domain.answer",
  },
  {
    questionKey: "pricing.faq.technical.question",
    answerKey: "pricing.faq.technical.answer",
  },
  {
    questionKey: "pricing.faq.replace.question",
    answerKey: "pricing.faq.replace.answer",
  },
];
