export const defaultLocale = 'en'
export const fallbackLocale = 'en'

export const locales = [
  { code: 'en', iso: 'en-US', file: 'en.json' },
  { code: 'es', iso: 'es-ES', file: 'es.json' }
]

export const dateTimeFormats = {
  'en-US': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
  },
  'es-ES': {
    short: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  }
}

export const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency', currency: 'USD'
    }
  },
  'es-ES': {
    currency: {
      style: 'currency', currency: 'EUR'
    }
  }
}

export default {
  numberFormats,
  dateTimeFormats,
  locales
}