import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request, preferredLocale, locals } = context;

  // Only run detection on the root path
  if (url.pathname === "/") {
    // If the browser prefers Spanish and we aren't already on a locale-prefixed path
    if (preferredLocale === "es") {
      return context.redirect("/es/");
    }
  }

  return next();
});
