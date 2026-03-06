import type { Metadata } from 'next'
import { locales, defaultLocale, type Locale } from '@/lib/i18n'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import LegalPageContent from '@/components/pages/LegalPage'

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
  const meta = getPageMeta('legal', locale as Locale)
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: getCanonicalUrl('legal', locale),
      ...getAlternatesForMetadata('legal'),
    },
  }
}

export default async function LegalNoticesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <LegalPageContent locale={locale as Locale} />
}
