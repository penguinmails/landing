export type BillingPeriod = "monthly" | "annually";
export type PricingPlanId = "starter" | "growth" | "scale" | "pro";

export interface PricingPlan {
  id: PricingPlanId;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 35,
    annualPrice: 28,
    description: "For individuals getting started",
    features: [
      "3,000 Contacts",
      "Unlimited Monthly Sending Emails",
      "Unlimited Email Accounts",
      "Unlimited Email Warmups",
    ],
    cta: "Start Free",
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 55,
    annualPrice: 44,
    description: "For small outbound teams",
    features: [
      "10,000 Contacts",
      "Unlimited Monthly Sending Emails",
      "Unlimited Email Accounts",
      "Unlimited Email Warmups",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    id: "scale",
    name: "Scale",
    monthlyPrice: 89,
    annualPrice: 71,
    description: "For high volume campaigns",
    features: [
      "50,000 Contacts",
      "Unlimited Monthly Sending Emails",
      "Unlimited Email Accounts",
      "Unlimited Email Warmups",
      "Real-Time Analytics",
      "Priority Support",
      "Private Slack Community",
    ],
    cta: "Get Started",
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 189,
    annualPrice: 151,
    description: "For advanced team and infrastructure",
    features: [
      "Unlimited Contacts",
      "Unlimited Monthly Sending Emails",
      "Unlimited Email Accounts",
      "Unlimited Email Warmups",
      "Real-Time Analytics",
      "Priority Support",
      "Private Slack Community",
    ],
    cta: "Get Started",
  },
];

export const pricingFaqs = [
  {
    question: "Will this get my emails out of spam?",
    answer:
      "Yes. By using our warmup protocol and rotation techniques, we help rebuild and maintain your sender reputation to ensure your emails land where they belong.",
  },
  {
    question: "Is this safe for my domain?",
    answer:
      "Our entire system is built around safety. We use conservative sending limits and rotate accounts to ensure no single domain is ever flagged.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. We provide step-by-step guides for DNS settings (SPF, DKIM, DMARC) and our dashboard handles the heavy lifting of automation.",
  },
  {
    question: "Does it replace my current outreach tool?",
    answer:
      "PenguinMails can replace your current tool entirely, or be used specifically for your most important outbound campaigns where deliverability is critical.",
  },
];
