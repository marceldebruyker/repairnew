import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from 'sanity:client'

// Re-export client from @sanity/astro
export const client = sanityClient

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)