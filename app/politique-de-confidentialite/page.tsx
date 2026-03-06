import type { Metadata } from 'next'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import PrivacyPageContent from '@/components/pages/PrivacyPage'

export const metadata: Metadata = {
  title: getPageMeta('privacy', 'fr').title,
  description: getPageMeta('privacy', 'fr').description,
  alternates: {
    canonical: getCanonicalUrl('privacy', 'fr'),
    ...getAlternatesForMetadata('privacy'),
  },
}

export default function PrivacyPage() {
  return <PrivacyPageContent locale="fr" />
}
