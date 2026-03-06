import type { Metadata } from 'next'
import { locales, defaultLocale, type Locale } from '@/lib/i18n'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import PageLayout from '@/components/layout/PageLayout'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import MenuPreview from '@/components/sections/MenuPreview'
import GallerySection from '@/components/sections/Gallery'
import ContactSection from '@/components/sections/ContactSection'

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
  const meta = getPageMeta('home', locale as Locale)
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: getCanonicalUrl('home', locale),
      ...getAlternatesForMetadata('home'),
    },
  }
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = locale as Locale

  return (
    <PageLayout locale={loc}>
      <Hero locale={loc} />
      <About />
      <MenuPreview locale={loc} />
      <GallerySection locale={loc} />
      <ContactSection locale={loc} />
    </PageLayout>
  )
}
