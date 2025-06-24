// @ts-check
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import icon from "astro-icon";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    svg: true,
    session: true
  },

  adapter: netlify(),
  integrations: [react(), icon()]
});