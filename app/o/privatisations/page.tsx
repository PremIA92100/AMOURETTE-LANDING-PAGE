import type { Metadata } from 'next'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import PrivatisationsPageContent from '@/components/pages/PrivatisationsPage'

export const metadata: Metadata = {
  title: getPageMeta('privatisations', 'fr').title,
  description: getPageMeta('privatisations', 'fr').description,
  alternates: {
    canonical: getCanonicalUrl('privatisations', 'fr'),
    ...getAlternatesForMetadata('privatisations'),
  },
}

export default function PrivatisationsPage() {
  return <PrivatisationsPageContent locale="fr" />
}
