import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'start', type: 'datetime', validation: (r) => r.required() }),
    defineField({ name: 'end', type: 'datetime' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'hero', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bookingUrl', type: 'url', title: 'Anmeldung/Info (optional)' }),
    defineField({ name: 'cancelled', type: 'boolean', initialValue: false })
  ],
  orderings: [{ name: 'startAsc', by: [{ field: 'start', direction: 'asc' }] }]
})