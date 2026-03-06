'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { slugMap } from '@/lib/i18n'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const galleryImages = [
  { src: '/images/amourette-640411.jpg', alt: 'Amourette Paris Passy - Ambiance' },
  { src: '/images/amourette-640409.jpg', alt: 'Amourette Paris Passy - Terrasse' },
  { src: '/images/amourette-640444.jpg', alt: 'Amourette Paris Passy - Interieur' },
  { src: '/images/amourette-640410.jpg', alt: 'Amourette Paris Passy - Salle' },
  { src: '/images/amourette-640412.jpg', alt: 'Amourette Paris Passy - Bar' },
  { src: '/images/amourette-640406.jpg', alt: 'Amourette Paris Passy - Decoration' },
]

export default function GallerySection({ locale = 'fr' }: { locale?: Locale }) {
  return (
    <section className="relative bg-stone-950 text-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 md:mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
          className="text-amourette text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4 block"
        >
          Ambiance
        </motion.span>
        <h2 className="text-4xl md:text-7xl font-serif">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
              className="block"
            >
              L&apos;Esprit
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
              className="block italic text-amourette"
            >
              du Lieu
            </motion.span>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 px-2 md:px-4">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: easeOutExpo }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: easeOutExpo }}
        className="flex justify-center mt-12 md:mt-20 px-6"
      >
        <Link
          href={slugMap.photos[locale]}
          className="px-10 py-4 bg-amourette text-white font-bold uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-colors duration-500"
        >
          {locale === 'fr' ? 'Toutes les photos' : 'All photos'}
        </Link>
      </motion.div>
    </section>
  )
}
