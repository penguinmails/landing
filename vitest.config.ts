/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
  resolve: {
    alias: {
      "astro:env/client": new URL(
        "./src/test/mocks/astro-env.ts",
        import.meta.url,
      ).pathname,
    },
  },
});
