import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'
import sanity from '@sanity/astro'
import react from '@astrojs/react'

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: 'zw2uji8t',
      dataset: 'production',
      useCdn: true,
      studioBasePath: '/admin',
    }),
  ],
})