/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";
import { fileURLToPath } from "node:url";

export default getViteConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
  resolve: {
    alias: {
      "astro:env/client": fileURLToPath(
        new URL("./src/test/mocks/astro-env.ts", import.meta.url),
      ),
    },
  },
});
