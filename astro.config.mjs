// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://penguinmails.com",
  output: "server",
  adapter: vercel(),
  env: {
    schema: {
      PUBLIC_APP_ROOT_URL: envField.string({
        context: "client",
        access: "public",
      }),
      PUBLIC_SIGNUP_URL: envField.string({
        context: "client",
        access: "public",
      }),
      PUBLIC_WATCH_DEMO_URL: envField.string({
        context: "client",
        access: "public",
      }),
      PUBLIC_BOOK_DEMO_EMAIL: envField.string({
        context: "client",
        access: "public",
      }),
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: "manual",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
