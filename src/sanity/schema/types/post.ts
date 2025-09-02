import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'News/Blog',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'publishedAt', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'excerpt', type: 'text' }),
    defineField({ name: 'cover', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'content', type: 'array', of: [{ type: 'block' }] })
  ],
  orderings: [{ name: 'dateDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }]
})