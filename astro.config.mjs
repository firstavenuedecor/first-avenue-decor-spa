import { defineConfig } from 'astro/config'

// https://astro.build/config
import vue from '@astrojs/vue'
import netlify from '@astrojs/netlify/functions'

// https://github.com/vitejs/vite/tree/main/packages/plugin-vue
const vueConfig = {}

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://www.firstavenuedecor.com',
  integrations: [vue(vueConfig)],
  output: 'server',
  trailingSlash: 'never',
  adapter: netlify()
})