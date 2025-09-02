export type SanitySlug = { current: string }

export type EventDoc = {
  _id: string
  title: string
  slug: SanitySlug
  start: string
  end?: string
  location?: string
  bookingUrl?: string
  hero?: any
  description?: any
  cancelled?: boolean
}

export type PostDoc = {
  _id: string
  title: string
  slug: SanitySlug
  publishedAt?: string
  date?: string
  excerpt?: string
  cover?: any
  content?: any
}

