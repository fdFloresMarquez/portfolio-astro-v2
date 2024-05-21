import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://floresfacundo.dev.ar/',
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
  }
})
