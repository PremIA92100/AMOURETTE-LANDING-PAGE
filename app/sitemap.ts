import { MetadataRoute } from 'next'
import { slugMap, locales, type Section } from '@/lib/i18n'

const baseUrl = 'https://www.amourette-passy.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const [section, slugsByLocale] of Object.entries(slugMap)) {
    for (const locale of locales) {
      const slug = slugsByLocale[locale as keyof typeof slugsByLocale]
      const alternates: Record<string, string> = {}

      for (const altLocale of locales) {
        const altSlug = slugsByLocale[altLocale as keyof typeof slugsByLocale]
        alternates[altLocale] = `${baseUrl}${altSlug}`
      }
      alternates['x-default'] = `${baseUrl}${slugsByLocale.fr}`

      entries.push({
        url: `${baseUrl}${slug}`,
        lastModified: new Date(),
        changeFrequency:
          section === 'home'
            ? 'weekly'
            : section === 'menus'
              ? 'weekly'
              : 'monthly',
        priority:
          section === 'home'
            ? 1.0
            : section === 'menus'
              ? 0.9
              : (section as Section) === 'photos' ||
                  (section as Section) === 'reservation'
                ? 0.8
                : 0.7,
        alternates: {
          languages: alternates,
        },
      })
    }
  }

  return entries
}
