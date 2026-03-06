import type { Metadata } from 'next'
import { locales, defaultLocale, type Locale } from '@/lib/i18n'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import CookiesPageContent from '@/components/pages/CookiesPage'

export function generateStaticParams() {
  return locales
    .filter((l) => l !== defaultLocale)
    .map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const meta = getPageMeta('cookies', locale as Locale)
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: getCanonicalUrl('cookies', locale),
      ...getAlternatesForMetadata('cookies'),
    },
  }
}

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <CookiesPageContent locale={locale as Locale} />
}
