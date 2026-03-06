import type { Metadata } from 'next'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import CookiesPageContent from '@/components/pages/CookiesPage'

export const metadata: Metadata = {
  title: getPageMeta('cookies', 'fr').title,
  description: getPageMeta('cookies', 'fr').description,
  alternates: {
    canonical: getCanonicalUrl('cookies', 'fr'),
    ...getAlternatesForMetadata('cookies'),
  },
}

export default function CookiesPage() {
  return <CookiesPageContent locale="fr" />
}
