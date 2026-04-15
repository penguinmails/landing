import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, preferredLocale } = context;

  // Auto-detect browser language on the root path
  if (url.pathname === "/") {
    // Astro reads the browser's Accept-Language header and matches it
    // against the locales configured in astro.config.mjs
    if (preferredLocale === "es") {
      return context.redirect("/es/");
    }
  }

  return next();
});
