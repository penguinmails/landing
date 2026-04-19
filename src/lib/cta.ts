import { PUBLIC_APP_ROOT_URL, PUBLIC_SIGNUP_PATH } from "astro:env/client";

type BillingPeriod = "monthly" | "annually";
type PlanId = "starter" | "growth" | "scale" | "pro";
export type UtmSource =
  | "landing_page"
  | "pricing_page"
  | "cta_bottom"
  | "features_mailbox"
  | "features_mailbox_bottom"
  | "features_free_mailbox"
  | "features_free_mailbox_bottom"
  | "features_warmups"
  | "features_warmups_bottom"
  | "features_analytics"
  | "features_analytics_bottom"
  | "features_unified_inbox"
  | "features_unified_inbox_bottom"
  | "features_rotation"
  | "features_rotation_bottom";

interface SignupUrlOptions {
  context: UtmSource;
  plan?: PlanId;
  billing?: BillingPeriod;
}

export function buildSignupUrl(options: SignupUrlOptions) {
  const normalizedPath = PUBLIC_SIGNUP_PATH.startsWith("/")
    ? PUBLIC_SIGNUP_PATH
    : `/${PUBLIC_SIGNUP_PATH}`;

  const url = new URL(normalizedPath, PUBLIC_APP_ROOT_URL);

  url.searchParams.set("utm_source", options.context);
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_campaign", "pricing");

  if (options.plan) {
    url.searchParams.set("plan", options.plan);
  }

  if (options.billing) {
    url.searchParams.set("billing", options.billing);
  }

  return url.toString();
}
