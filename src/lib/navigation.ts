export interface NavItem {
  label: string;
  href: string;
}

export const usecasesLinks: NavItem[] = [
  { label: "Agencies", href: "/usecases/agencies" },
  { label: "Freelancers", href: "/usecases/freelancers" },
  { label: "Outbound Teams", href: "/usecases/outbound-teams" },
  { label: "Startups", href: "/usecases/startups" },
];

export const featuresLinks: NavItem[] = [
  { label: "Unified Inbox", href: "/features/unified-inbox" },
  { label: "Free Mailbox Creation", href: "/features/free-mailbox-creation" },
  { label: "Warmup Automation", href: "/features/warmup-automation" },
  { label: "Leads Export", href: "/features/leads-export" },
  { label: "Real-Time Analytics", href: "/features/real-time-analytics" },
  { label: "Automated Sequences", href: "/features/automated-sequences" },
];

export const legalLinks: NavItem[] = [
  { label: "Anti-Spam Policy", href: "/pricing#anti-spam-policy" },
  { label: "Privacy", href: "/pricing#privacy" },
  { label: "Refund Policy", href: "/pricing#refund-policy" },
  { label: "Terms", href: "/pricing#terms" },
];

export const companyLinks: NavItem[] = [
  { label: "About", href: "/features#about" },
  { label: "Contact", href: "/features#contact" },
];

export const resourcesLinks: NavItem[] = [
  { label: "Blog", href: "/features#blog" },
  { label: "Tools", href: "/features#tools" },
];
