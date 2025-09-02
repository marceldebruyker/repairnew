import type { StructureResolver } from 'sanity/desk'

const singletonTypes = new Set(['gallery', 'siteSettings'])

export const structure: StructureResolver = (S) =>
  S.list().title('Inhalte').items([
    S.listItem().title('Events').child(S.documentTypeList('event')),
    S.listItem().title('News/Blog').child(S.documentTypeList('post')),
    S.listItem()
      .title('Galerie (Startseite)')
      .child(S.editor().schemaType('gallery').documentId('gallery')),
    S.listItem()
      .title('Seiteneinstellungen')
      .child(S.editor().schemaType('siteSettings').documentId('siteSettings'))
  ])