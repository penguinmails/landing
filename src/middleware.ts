import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, preferredLocale, cookies } = context;

  // Only run detection on the root path
  if (url.pathname === "/") {
    // Check if user has explicitly chosen a language via the UI
    const localeCookie = cookies.get("locale");
    const hasExplicitLocale = localeCookie?.value === "en" || localeCookie?.value === "es";

    // If the browser prefers Spanish and user hasn't explicitly chosen a language
    if (preferredLocale === "es" && !hasExplicitLocale) {
      return context.redirect("/es/");
    }
  }

  return next();
});
