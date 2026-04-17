import {
  MessageSquare,
  Mail,
  Flame,
  Download,
  Cpu,
  ChartNoAxesColumnIncreasing,
} from "@lucide/astro";
import FreeMailboxCreationFeature from "../components/pages/features/FreeMailboxCreationFeature.astro";
import RealTimeAnalyticsFeature from "../components/pages/features/RealTimeAnalyticsFeature.astro";
import type { UtmSource } from "./cta";

export interface CtaInfo {
  context: UtmSource;
  title: string;
  subtitle: string;
}

export interface Feature {
  slug: string;
  title: string;
  description: string;
  icon: typeof MessageSquare;
  iconClass: string;
  component?: any;
  cta?: CtaInfo;
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
    component: FreeMailboxCreationFeature,
    cta: {
      context: "features_free_mailbox_bottom",
      title: "Create Your First Mailbox in Under 2 Minutes",
      subtitle:
        'No hosting. No SMTP. No cPanel. Just connect your domain and click "Create Mailbox." You\'ll have a working cold email inbox, ready to warm up and send.',
    },
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
    icon: ChartNoAxesColumnIncreasing,
    iconClass: "w-8 h-8 text-primary",
    component: RealTimeAnalyticsFeature,
    cta: {
      context: "features_analytics_bottom",
      title: "Start Tracking Your Campaign Performance",
      subtitle:
        "Get real-time insights into your email deliverability. Monitor opens, clicks, and responses across all your campaigns.",
    },
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
