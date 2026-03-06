import { slugMap, locales, defaultLocale, type Section } from './i18n'

const baseUrl = 'https://www.amourette-passy.fr'

export function getHreflangLinks(section: Section) {
  const slugsByLocale = slugMap[section]

  return [
    ...locales.map((locale) => ({
      rel: 'alternate' as const,
      hreflang: locale,
      href: `${baseUrl}${slugsByLocale[locale]}`,
    })),
    {
      rel: 'alternate' as const,
      hreflang: 'x-default',
      href: `${baseUrl}${slugsByLocale[defaultLocale]}`,
    },
  ]
}

export function getAlternatesForMetadata(section: Section) {
  const links = getHreflangLinks(section)
  return {
    languages: Object.fromEntries(links.map((link) => [link.hreflang, link.href])),
  }
}

export function getCanonicalUrl(section: Section, locale: string): string {
  return `${baseUrl}${slugMap[section][locale as keyof (typeof slugMap)[typeof section]]}`
}
