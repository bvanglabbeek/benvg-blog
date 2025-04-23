// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://benvanglabbeek.com", // ← optional but nice to personalize
  integrations: [mdx(), sitemap()],
  output: "static" // 👈 explicitly tell Astro you're building a static site
});

