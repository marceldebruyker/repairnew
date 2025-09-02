import { client } from '../lib/sanity'

const POSTS_QUERY = `*[_type == "post" && defined(slug.current) && dateTime(publishedAt) <= now()]{
  "slug": slug.current,
  "lastmod": coalesce(publishedAt, _updatedAt)
}`

const EVENTS_QUERY = `*[_type == "event" && defined(slug.current)]{
  "slug": slug.current,
  "lastmod": coalesce(start, _updatedAt)
}`

export async function GET({ request }: { request: Request }) {
  const origin = new URL(request.url).origin
  const [posts, events] = await Promise.all([
    client.fetch<any[]>(POSTS_QUERY),
    client.fetch<any[]>(EVENTS_QUERY),
  ])

  const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const urls: { loc: string; lastmod?: string; priority?: string }[] = [
    { loc: `${origin}/`, priority: '1.0' },
    { loc: `${origin}/events`, priority: '0.8' },
    { loc: `${origin}/news`, priority: '0.7' },
    ...events.map((e) => ({ loc: `${origin}/events/${e.slug}`, lastmod: e.lastmod })),
    ...posts.map((p) => ({ loc: `${origin}/news/${p.slug}`, lastmod: p.lastmod })),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls
      .map(
        (u) =>
          `<url>` +
          `<loc>${escape(u.loc)}</loc>` +
          (u.lastmod ? `<lastmod>${new Date(u.lastmod).toISOString()}</lastmod>` : '') +
          (u.priority ? `<priority>${u.priority}</priority>` : '') +
          `</url>`
      )
      .join('') +
    `</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  })
}
