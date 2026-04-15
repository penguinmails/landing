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
        default: "https://penguinmails.vercel.app/",
      }),
      PUBLIC_SIGNUP_PATH: envField.string({
        context: "client",
        access: "public",
        default: "/signup",
      }),
      PUBLIC_WATCH_DEMO_URL: envField.string({
        context: "client",
        access: "public",
        default: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      }),
      PUBLIC_BOOK_DEMO_EMAIL: envField.string({
        context: "client",
        access: "public",
        default: "support@penguinmails.com",
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
