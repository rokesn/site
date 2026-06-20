import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  integrations: [tailwind()],
  site: "https://여기여.site",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
