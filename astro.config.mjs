import { defineConfig } from 'astro/config';

// https://astro.build/config
import vue from '@astrojs/vue';

// https://github.com/vitejs/vite/tree/main/packages/plugin-vue
import netlify from "@astrojs/netlify/functions";
const vueConfig = {};

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [vue(vueConfig)],
  output: "server",
  adapter: netlify()
});