import { MessageSquare, Mail, Flame, Download, Cpu } from "@lucide/astro";

export interface Feature {
  slug: string;
  title: string;
  description: string;
  icon: typeof MessageSquare;
  iconClass: string;
}

export const features: Feature[] = [
  {
    slug: "unified-inbox",
    title: "Unified Inbox",
    description:
      "Manage all replies in one clean workspace across all your senders.",
    icon: MessageSquare,
    iconClass: "w-8 h-8 text-primary",
  },
  {
    slug: "free-mailbox-creation",
    title: "Free Mailbox Creation",
    description: "Scale safely without additional infrastructure costs.",
    icon: Mail,
    iconClass: "w-8 h-8 text-primary",
  },
  {
    slug: "warmup-automation",
    title: "Warmup Automation",
    description:
      "Build trust with inbox providers before scaling your campaigns.",
    icon: Flame,
    iconClass: "w-8 h-8 text-primary",
  },
  {
    slug: "leads-export",
    title: "Leads Export",
    description:
      "Download and manage your leads effortlessly, ready for outreach or analysis.",
    icon: Download,
    iconClass: "w-8 h-8 text-primary",
  },
  {
    slug: "real-time-analytics",
    title: "Real-Time Analytics",
    description:
      "See exactly how campaigns perform with detailed deliverability metrics.",
    icon: Cpu,
    iconClass: "w-8 h-8 text-primary",
  },
  {
    slug: "automated-sequences",
    title: "Automated Sequences",
    description:
      "Follow up consistently without manual work using smart rules.",
    icon: Cpu,
    iconClass: "w-8 h-8 text-primary",
  },
];

export const getFeatureBySlug = (slug: string): Feature | undefined => {
  return features.find((f) => f.slug === slug);
};
