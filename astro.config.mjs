// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://benvanglabbeek.com", // ← optional but nice to personalize
  integrations: [mdx(), sitemap()],
    redirects: {
    '/about-me': '/about',
    '/2023/07/we-all-want-to-be-explorers-and-dreamers/' :'/blog/we-all-want-to-be-explorers-and-dreamers',
    '/2023/07/the-appalachian-trail-our-first-segment/':'/blog/the-appalachian-trail-our-first-segment',
    '/2023/10/navigating-uncertainty-harness-the-power-of-frequent-customer-feedback/':'/blog/navigating-uncertainty',
    '/2023/07/my-new-cozy-blanket/':'/blog/my-new-cozy-blanket',
    '/2023/07/how-to-build-social-capital/':'/blog/how-to-build-social-capital',
    '/2023/07/the-value-of-social-capital/':'/blog/the-value-of-social-capital',
    '/2018/04/the-birth-of-the-vg-kanban/':'/blog/the-birth-of-the-vg-kanban',
    '/2016/09/dont-copy-spotify-make-it-your-own/':'/blog/dont-copy-spotify-make-it-your-own',
  },
  output: "static" // 👈 explicitly tell Astro you're building a static site
});

