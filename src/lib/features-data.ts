import {
  MessageSquare,
  Mail,
  Flame,
  Download,
  Cpu,
  ChartNoAxesColumnIncreasing,
  RefreshCw,
} from "@lucide/astro";
import FreeMailboxCreationFeature from "@/components/pages/features/FreeMailboxCreationFeature.astro";
import InboxRotationFeature from "@/components/pages/features/InboxRotationFeature.astro";
import RealTimeAnalyticsFeature from "@/components/pages/features/RealTimeAnalyticsFeature.astro";
import UnifiedInboxFeature from "@/components/pages/features/UnifiedInboxFeature.astro";
import type { UtmSource } from "./cta";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

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
  component?: AstroComponentFactory;
  cta?: CtaInfo;
}

export const features: Feature[] = [
  {
    slug: "unified-inbox",
    titleKey: "features.unified-inbox.title",
    descriptionKey: "features.unified-inbox.description",
    icon: MessageSquare,
    iconClass: "w-8 h-8 text-primary",
    component: UnifiedInboxFeature,
    cta: {
      context: "features_unified_inbox_bottom",
      titleKey: "features.unified-inbox.title",
      subtitleKey: "features.inbox.cta.description",
    },
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
    slug: "inbox-rotation",
    titleKey: "features.inbox-rotation.title",
    descriptionKey: "features.inbox-rotation.description",
    icon: RefreshCw,
    iconClass: "w-8 h-8 text-primary",
    component: InboxRotationFeature,
    cta: {
      context: "features_inbox_rotation_bottom",
      titleKey: "features.inbox-rotation.cta.title",
      subtitleKey: "features.inbox-rotation.cta.subtitle",
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
