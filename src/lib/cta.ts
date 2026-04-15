import { PUBLIC_SIGNUP_URL } from "astro:env/client";

type BillingPeriod = "monthly" | "annually";
type PlanId = "starter" | "growth" | "scale" | "pro";
type UtmSource = "landing_page" | "pricing_page" | "cta_bottom";

interface SignupUrlOptions {
  context: UtmSource;
  plan?: PlanId;
  billing?: BillingPeriod;
}

export function buildSignupUrl(options: SignupUrlOptions) {
  const url = new URL(PUBLIC_SIGNUP_URL);

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
