import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schema'
import { structure } from './src/sanity/structure'

export default defineConfig({
  name: 'repaircafe-leonberg',
  title: 'Repair Café Leonberg',
  projectId: 'zw2uji8t',
  dataset: 'production',
  plugins: [deskTool({ structure }), visionTool()],
  schema: { types: schemaTypes }
})