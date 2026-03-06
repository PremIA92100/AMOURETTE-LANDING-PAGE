import type { Metadata } from 'next'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import AccessibilityPageContent from '@/components/pages/AccessibilityPage'

export const metadata: Metadata = {
  title: getPageMeta('accessibility', 'fr').title,
  description: getPageMeta('accessibility', 'fr').description,
  alternates: {
    canonical: getCanonicalUrl('accessibility', 'fr'),
    ...getAlternatesForMetadata('accessibility'),
  },
}

export default function AccessibilitePage() {
  return <AccessibilityPageContent locale="fr" />
}
