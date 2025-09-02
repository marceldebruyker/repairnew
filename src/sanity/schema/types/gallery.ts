import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Galerie (Startseite)',
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      title: 'Bilder',
      type: 'array',
      of: [{
        type: 'image',
        options: { hotspot: true },
        fields: [{ name: 'alt', type: 'string', title: 'Alt-Text', validation: (r) => r.required() }]
      }]
    })
  ]
})