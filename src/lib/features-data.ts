import {
  MessageSquare,
  Mail,
  Flame,
  Download,
  Cpu,
  ChartNoAxesColumnIncreasing,
} from "@lucide/astro";
import FreeMailboxCreationFeature from "@/components/pages/features/FreeMailboxCreationFeature.astro";
import RealTimeAnalyticsFeature from "@/components/pages/features/RealTimeAnalyticsFeature.astro";
import type { UtmSource } from "./cta";

import type { TranslationKey } from "../i18n/types";

export interface CtaInfo {
  context: UtmSource;
  titleKey: TranslationKey;
  subtitleKey: TranslationKey;
}

export interface Feature {
  slug: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  icon: typeof MessageSquare;
  iconClass: string;
  component?: any;
  cta?: CtaInfo;
}

export const features: Feature[] = [
  {
    slug: "unified-inbox",
    titleKey: "features.unified-inbox.title",
    descriptionKey: "features.unified-inbox.description",
    icon: MessageSquare,
    iconClass: "w-8 h-8 text-primary",
  },
  {
    slug: "free-mailbox-creation",
    titleKey: "features.free-mailbox-creation.title",
    descriptionKey: "features.free-mailbox-creation.description",
    icon: Mail,
    iconClass: "w-8 h-8 text-primary",
    component: FreeMailboxCreationFeature,
    cta: {
      context: "features_free_mailbox_bottom",
      titleKey: "features.free-mailbox-creation.cta.title",
      subtitleKey: "features.free-mailbox-creation.cta.subtitle",
    },
  },
  {
    slug: "warmup-automation",
    titleKey: "features.warmup-automation.title",
    descriptionKey: "features.warmup-automation.description",
    icon: Flame,
    iconClass: "w-8 h-8 text-primary",
  },
  {
    slug: "leads-export",
    titleKey: "features.leads-export.title",
    descriptionKey: "features.leads-export.description",
    icon: Download,
    iconClass: "w-8 h-8 text-primary",
  },
  {
    slug: "real-time-analytics",
    titleKey: "features.real-time-analytics.title",
    descriptionKey: "features.real-time-analytics.description",
    icon: ChartNoAxesColumnIncreasing,
    iconClass: "w-8 h-8 text-primary",
    component: RealTimeAnalyticsFeature,
    cta: {
      context: "features_analytics_bottom",
      titleKey: "features.real-time-analytics.cta.title",
      subtitleKey: "features.real-time-analytics.cta.subtitle",
    },
  },
  {
    slug: "automated-sequences",
    titleKey: "features.automated-sequences.title",
    descriptionKey: "features.automated-sequences.description",
    icon: Cpu,
    iconClass: "w-8 h-8 text-primary",
  },
];

export const getFeatureBySlug = (slug: string): Feature | undefined => {
  return features.find((f) => f.slug === slug);
};
