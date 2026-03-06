import type { Metadata } from 'next'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import LegalPageContent from '@/components/pages/LegalPage'

export const metadata: Metadata = {
  title: getPageMeta('legal', 'fr').title,
  description: getPageMeta('legal', 'fr').description,
  alternates: {
    canonical: getCanonicalUrl('legal', 'fr'),
    ...getAlternatesForMetadata('legal'),
  },
}

export default function MentionsLegalesPage() {
  return <LegalPageContent locale="fr" />
}
