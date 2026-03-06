import type { Metadata } from 'next'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import PhotosPageContent from '@/components/pages/PhotosPage'

export const metadata: Metadata = {
  title: getPageMeta('photos', 'fr').title,
  description: getPageMeta('photos', 'fr').description,
  alternates: {
    canonical: getCanonicalUrl('photos', 'fr'),
    ...getAlternatesForMetadata('photos'),
  },
}

export default function PhotosPage() {
  return <PhotosPageContent locale="fr" />
}
