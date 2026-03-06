import type { Metadata } from 'next'
import { locales, defaultLocale, type Locale } from '@/lib/i18n'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import AccessibilityPageContent from '@/components/pages/AccessibilityPage'

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
  const meta = getPageMeta('accessibility', locale as Locale)
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: getCanonicalUrl('accessibility', locale),
      ...getAlternatesForMetadata('accessibility'),
    },
  }
}

export default async function AccessibilityPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <AccessibilityPageContent locale={locale as Locale} />
}
