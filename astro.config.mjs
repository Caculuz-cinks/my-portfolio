// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://design.isaiahadeleke.com",
  trailingSlash: "ignore",
  // Fetch the next page on hover so navigation feels instant without a client router.
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  build: { inlineStylesheets: "auto" },
});
