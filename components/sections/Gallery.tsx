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

export default function GallerySection({ locale = 'fr' }: { locale?: Locale }) {
  return (
    <section className="relative bg-stone-950 text-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 md:mb-24 text-center">
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

      {/* Masonry / Asymmetric layout */}
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        {/* Row 1: 1 large (span 2) + 1 small */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-lg group"
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6 md:p-8">
              <span className="text-white/0 group-hover:text-white text-sm md:text-base uppercase tracking-[0.3em] font-light transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {galleryImages[0].label}
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOutExpo }}
            className="relative aspect-[3/4] md:aspect-auto overflow-hidden rounded-lg group hidden md:block"
          >
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6">
              <span className="text-white/0 group-hover:text-white text-sm uppercase tracking-[0.3em] font-light transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {galleryImages[1].label}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Row 2: 2 small + 1 large (on mobile: just 2 cols) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="relative aspect-[4/5] overflow-hidden rounded-lg group"
          >
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 md:hidden"
              sizes="50vw"
            />
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 hidden md:block"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6">
              <span className="text-white/0 group-hover:text-white text-sm uppercase tracking-[0.3em] font-light transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {galleryImages[2].label}
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
            className="relative aspect-[4/5] overflow-hidden rounded-lg group md:hidden"
          >
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6">
              <span className="text-white/0 group-hover:text-white text-sm uppercase tracking-[0.3em] font-light transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {galleryImages[2].label}
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
            className="relative aspect-[4/5] overflow-hidden rounded-lg group hidden md:block"
          >
            <Image
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6">
              <span className="text-white/0 group-hover:text-white text-sm uppercase tracking-[0.3em] font-light transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {galleryImages[3].label}
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}
            className="relative col-span-2 md:col-span-1 aspect-[16/9] md:aspect-[4/5] overflow-hidden rounded-lg group hidden md:block"
          >
            <Image
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6">
              <span className="text-white/0 group-hover:text-white text-sm uppercase tracking-[0.3em] font-light transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {galleryImages[4].label}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Row 3: full width cinematic */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg group"
          >
            <Image
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 md:hidden"
              sizes="50vw"
            />
            <Image
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 hidden md:block"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6">
              <span className="text-white/0 group-hover:text-white text-sm uppercase tracking-[0.3em] font-light transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {galleryImages[5].label}
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOutExpo }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg group"
          >
            <Image
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 md:hidden"
              sizes="50vw"
            />
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 hidden md:block"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-6">
              <span className="text-white/0 group-hover:text-white text-sm uppercase tracking-[0.3em] font-light transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                Ambiance
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: easeOutExpo }}
        className="flex justify-center mt-16 md:mt-24 px-6"
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
