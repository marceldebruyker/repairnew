export const NEXT_EVENT = `
*[_type == "event" && !cancelled && dateTime(start) >= now()]
| order(dateTime(start) asc)[0]{
  _id, title, slug, start, end, location, bookingUrl, hero, description
}`

export const EVENTS_PAGE = `
{
  "upcoming": *[_type == "event" && !cancelled && dateTime(start) >= now()]
    | order(dateTime(start) asc){
      _id, title, slug, start, end, location, hero
    },
  "past": *[_type == "event" && dateTime(start) < now()]
    | order(dateTime(start) desc)[0...200]{
      _id, title, slug, start, end, location, hero
    }
}`

export const HOMEPAGE_GALLERY = `
*[_type == "gallery" && _id == "gallery"][0]{
  images[]{..., asset->}
}`

export const NEWS_LIST = `
*[_type == "post"] | order(dateTime(publishedAt) desc)[0...6]{
  _id, title, slug, publishedAt, excerpt, cover
}`

export const POST_BY_SLUG = `
*[_type == "post" && slug.current == $slug][0]{
  title, publishedAt, excerpt, cover, content
}`

export const EVENT_BY_SLUG = `
*[_type == "event" && slug.current == $slug][0]{
  title, start, end, location, hero, description, bookingUrl, cancelled
}`