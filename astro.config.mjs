import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://saniketgroup.com",
  base: "/",
  image: {
    domains: ["images.unsplash.com", "yashwani2000.com"]
  },
  prefetch: true,
  integrations: [tailwind(), sitemap(), compressor({ gzip: false, brotli: true })],
  output: "static",
  experimental: {
    clientPrerender: true, directRenderScript: true
  }});
