'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { slugMap } from '@/lib/i18n'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const galleryImages = [
  { src: '/images/amourette-640411.jpg', alt: 'Amourette Paris Passy - Ambiance', label: 'Ambiance' },
  { src: '/images/amourette-640409.jpg', alt: 'Amourette Paris Passy - Terrasse', label: 'Terrasse' },
  { src: '/images/amourette-640444.jpg', alt: 'Amourette Paris Passy - Interieur', label: 'Interieur' },
  { src: '/images/amourette-640410.jpg', alt: 'Amourette Paris Passy - Salle', label: 'Salle' },
  { src: '/images/amourette-640412.jpg', alt: 'Amourette Paris Passy - Bar', label: 'Bar' },
  { src: '/images/amourette-640406.jpg', alt: 'Amourette Paris Passy - Decoration', label: 'Decoration' },
]

function GalleryImage({
  src,
  alt,
  label,
  className,
  sizes,
}: {
  src: string
  alt: string
  label: string
  className: string
  sizes: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className={`relative overflow-hidden rounded-lg group ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover md:transition-transform md:duration-700 md:group-hover:scale-[1.02]"
        sizes={sizes}
      />
      <div className="absolute inset-0 hidden md:flex bg-black/0 group-hover:bg-black/30 transition-all duration-500 items-end p-6">
        <span className="text-white/0 group-hover:text-white text-sm uppercase tracking-[0.3em] font-light transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {label}
        </span>
      </div>
    </motion.div>
  )
}

export default function GallerySection({ locale = 'fr' }: { locale?: Locale }) {
  return (
    <section className="relative bg-stone-950 text-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 md:mb-24 text-center">
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

      {/* Mobile: single column, full width, 8px gap */}
      <div className="px-4 md:hidden flex flex-col gap-2">
        {galleryImages.map((img) => (
          <GalleryImage
            key={img.src}
            src={img.src}
            alt={img.alt}
            label={img.label}
            className="aspect-[4/3] w-full"
            sizes="100vw"
          />
        ))}
      </div>

      {/* Desktop: asymmetric masonry */}
      <div className="hidden md:block px-8 max-w-7xl mx-auto">
        {/* Row 1: 1 large + 2 small */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <GalleryImage
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            label={galleryImages[0].label}
            className="col-span-2 aspect-[16/9]"
            sizes="66vw"
          />
          <GalleryImage
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            label={galleryImages[1].label}
            className="aspect-[16/9]"
            sizes="33vw"
          />
        </div>

        {/* Row 2: 2 small + 1 large */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <GalleryImage
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            label={galleryImages[2].label}
            className="aspect-[4/5]"
            sizes="33vw"
          />
          <GalleryImage
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            label={galleryImages[3].label}
            className="col-span-2 aspect-[16/9]"
            sizes="66vw"
          />
        </div>

        {/* Row 3: 2 equal */}
        <div className="grid grid-cols-2 gap-6">
          <GalleryImage
            src={galleryImages[4].src}
            alt={galleryImages[4].alt}
            label={galleryImages[4].label}
            className="aspect-[4/3]"
            sizes="50vw"
          />
          <GalleryImage
            src={galleryImages[5].src}
            alt={galleryImages[5].alt}
            label={galleryImages[5].label}
            className="aspect-[4/3]"
            sizes="50vw"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: easeOutExpo }}
        className="flex justify-center mt-12 md:mt-24 px-6"
      >
        <Link
          href={slugMap.photos[locale]}
          className="px-10 py-4 min-h-[44px] flex items-center bg-amourette text-white font-bold uppercase tracking-widest md:hover:bg-white md:hover:text-stone-900 transition-colors duration-500"
        >
          {locale === 'fr' ? 'Toutes les photos' : 'All photos'}
        </Link>
      </motion.div>
    </section>
  )
}
