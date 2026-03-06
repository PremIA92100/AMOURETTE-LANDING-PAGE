import type { Metadata } from 'next'
import { locales, defaultLocale, type Locale } from '@/lib/i18n'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import ReservationPageContent from '@/components/pages/ReservationPage'

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
  const meta = getPageMeta('reservation', locale as Locale)
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: getCanonicalUrl('reservation', locale),
      ...getAlternatesForMetadata('reservation'),
    },
  }
}

export default async function BookTablePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <ReservationPageContent locale={locale as Locale} />
}
