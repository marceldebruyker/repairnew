import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Seiteneinstellungen',
  type: 'document',
  fields: [
    defineField({ name: 'brandTitle', type: 'string', initialValue: 'Repair Café Leonberg' }),
    defineField({ name: 'primaryColor', type: 'string', initialValue: '#059669' }),
    defineField({ name: 'contactEmail', type: 'string' }),
    defineField({ name: 'contactPhone', type: 'string' }),
    defineField({
      name: 'social',
      type: 'object',
      fields: [
        { name: 'instagram', type: 'url' },
        { name: 'facebook', type: 'url' }
      ]
    })
  ]
})