// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://penguinmails.com",
  output: "server",
  adapter: vercel(),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: "manual",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

