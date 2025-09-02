import { client } from '../lib/sanity'

const POSTS_QUERY = `*[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))]
  | order(coalesce(dateTime(publishedAt), dateTime(_updatedAt), dateTime(_createdAt)) desc)[0...20]{
  title, excerpt, cover, "slug": slug.current,
  "date": coalesce(publishedAt, _updatedAt, _createdAt)
}`

export async function GET({ request }: { request: Request }) {
  const origin = new URL(request.url).origin
  const posts = await client.fetch<any[]>(POSTS_QUERY)
  const escape = (s: string) => s?.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') ?? ''

  const items = posts
    .map((p) => `
      <item>
        <title>${escape(p.title)}</title>
        <link>${origin}/news/${p.slug}</link>
        <guid>${origin}/news/${p.slug}</guid>
        <pubDate>${new Date(p.date).toUTCString()}</pubDate>
        ${p.excerpt ? `<description>${escape(p.excerpt)}</description>` : ''}
      </item>`)
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Repair Café Leonberg – News</title>
        <link>${origin}/news</link>
        <description>Neuigkeiten vom Repair Café Leonberg</description>
        ${items}
      </channel>
    </rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cache-Control': 'public, s-maxage=1800, max-age=0' },
  })
}

