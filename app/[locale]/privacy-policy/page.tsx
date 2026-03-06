import type { Metadata } from 'next'
import { locales, defaultLocale, type Locale } from '@/lib/i18n'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import PrivacyPageContent from '@/components/pages/PrivacyPage'

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
  const meta = getPageMeta('privacy', locale as Locale)
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: getCanonicalUrl('privacy', locale),
      ...getAlternatesForMetadata('privacy'),
    },
  }
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <PrivacyPageContent locale={locale as Locale} />
}
