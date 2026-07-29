// @ts-check
import { defineConfig } from "astro/config";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  site: "https://alecjranzato.github.io",
  base: isDev ? "/" : "/portfolio",
});
