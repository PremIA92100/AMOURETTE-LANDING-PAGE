'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageLayout from '@/components/layout/PageLayout'
import type { Locale } from '@/lib/i18n'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const ambiancePhotos = [
  { src: '/images/amourette-640411.jpg', alt: 'Amourette Paris Passy' },
  { src: '/images/amourette-640409.jpg', alt: 'Amourette Paris Passy' },
  { src: '/images/amourette-640444.jpg', alt: 'Amourette Paris Passy' },
  { src: '/images/amourette-640410.jpg', alt: 'Amourette Paris Passy' },
  { src: '/images/amourette-640412.jpg', alt: 'Amourette Paris Passy' },
  { src: '/images/amourette-640406.jpg', alt: 'Amourette Paris Passy' },
  { src: '/images/amourette-640436.jpg', alt: 'Amourette Paris Passy' },
  { src: '/images/amourette-640442.jpg', alt: 'Amourette Paris Passy' },
  { src: '/images/amourette-640446.jpg', alt: 'Amourette Paris Passy' },
]

const cartePhotos = [
  { src: '/images/amourette-640415.jpg', alt: 'La Carte - Amourette' },
  { src: '/images/amourette-640401.jpg', alt: 'La Carte - Amourette' },
  { src: '/images/amourette-640402.jpg', alt: 'La Carte - Amourette' },
  { src: '/images/amourette-640403.jpg', alt: 'La Carte - Amourette' },
  { src: '/images/amourette-640404.jpg', alt: 'La Carte - Amourette' },
  { src: '/images/amourette-640420.jpg', alt: 'La Carte - Amourette' },
  { src: '/images/amourette-640433.jpg', alt: 'La Carte - Amourette' },
  { src: '/images/amourette-640416.jpg', alt: 'La Carte - Amourette' },
  { src: '/images/amourette-640418.jpg', alt: 'La Carte - Amourette' },
  { src: '/images/amourette-640400.jpg', alt: 'La Carte - Amourette' },
  { src: '/images/amourette-640414.jpg', alt: 'La Carte - Amourette' },
  { src: '/images/amourette-640435.jpg', alt: 'La Carte - Amourette' },
]

function PhotoGrid({ photos, title }: { photos: { src: string; alt: string }[]; title: string }) {
  return (
    <div className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: easeOutExpo }}
        className="text-3xl md:text-5xl font-serif text-stone-900 mb-8 text-center"
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: easeOutExpo }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function PhotosPageContent({ locale = 'fr' }: { locale?: Locale }) {
  return (
    <PageLayout locale={locale}>
      <section className="pt-32 pb-24 bg-paper min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="text-5xl md:text-8xl font-serif text-stone-900 mb-4"
            >
              Photos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
              className="text-stone-500 text-lg font-light"
            >
              Amourette Paris Passy
            </motion.p>
          </div>

          <PhotoGrid photos={ambiancePhotos} title="Amourette Paris Passy" />
          <PhotoGrid photos={cartePhotos} title={locale === 'fr' ? 'La Carte' : 'The Menu'} />
        </div>
      </section>
    </PageLayout>
  )
}
