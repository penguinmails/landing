const SIGNUP_BASE_URL = "https://penguinmails.vercel.app/signup";
export const APP_ROOT_URL = "https://penguinmails.vercel.app/";
export const WATCH_DEMO_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
export const BOOK_DEMO_EMAIL = "mailto:support@penguinmails.com";

type BillingPeriod = "monthly" | "annually";
type PlanId = "starter" | "growth" | "scale" | "pro";
type UtmSource = "landing_page" | "pricing_page" | "cta_bottom";

interface SignupUrlOptions {
  context: UtmSource;
  plan?: PlanId;
  billing?: BillingPeriod;
}

export function buildSignupUrl(options: SignupUrlOptions) {
  const url = new URL(SIGNUP_BASE_URL);

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
