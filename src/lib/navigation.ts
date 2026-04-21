import type { TranslationKey } from "../i18n/types";

export interface NavItem {
  labelKey: TranslationKey;
  href: string;
}

export const usecasesLinks: NavItem[] = [
  { labelKey: "nav.agencies", href: "/usecases/agencies" },
  { labelKey: "nav.freelancers", href: "/usecases/freelancers" },
  { labelKey: "nav.outbound-teams", href: "/usecases/outbound-teams" },
  { labelKey: "nav.startups", href: "/usecases/startups" },
];

export const featuresLinks: NavItem[] = [
  { labelKey: "nav.unified-inbox", href: "/features/unified-inbox" },
  { labelKey: "nav.free-mailbox-creation", href: "/features/free-mailbox-creation" },
  { labelKey: "nav.warmup-automation", href: "/features/warm-ups" },
  { labelKey: "nav.leads-export", href: "/features/leads-export" },
  { labelKey: "nav.real-time-analytics", href: "/features/real-time-analytics" },
  { labelKey: "nav.automated-sequences", href: "/features/automated-sequences" },
];

export const legalLinks: NavItem[] = [
  { labelKey: "nav.anti-spam-policy", href: "/anti-spam-policy" },
  { labelKey: "nav.privacy", href: "/privacy" },
  { labelKey: "nav.refund-policy", href: "/refund-policy" },
  { labelKey: "nav.terms", href: "/terms" },
];

export const companyLinks: NavItem[] = [
  { labelKey: "nav.about", href: "/features#about" },
  { labelKey: "nav.contact", href: "/features#contact" },
];

export const resourcesLinks: NavItem[] = [
  { labelKey: "nav.blog", href: "/features#blog" },
  { labelKey: "nav.tools", href: "/features#tools" },
];
