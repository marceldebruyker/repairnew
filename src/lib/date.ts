const locale = 'de-DE'

export function formatDate(dateLike?: string | number | Date) {
  try {
    if (!dateLike) return ''
    return new Date(dateLike).toLocaleDateString(locale)
  } catch {
    return ''
  }
}

export function formatDateTime(dateLike?: string | number | Date) {
  try {
    if (!dateLike) return ''
    return new Date(dateLike).toLocaleString(locale, { dateStyle: 'full', timeStyle: 'short' })
  } catch {
    return ''
  }
}

