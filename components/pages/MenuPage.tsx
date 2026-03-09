'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import PageLayout from '@/components/layout/PageLayout'
import type { Locale } from '@/lib/i18n'
import { getMessages } from '@/lib/i18n'
import { menuData, categoryKeys } from '@/lib/menu-data'

function formatPrice(raw: string): string {
  const num = parseFloat(raw.replace(',', '.').replace(/[^0-9.]/g, ''))
  if (isNaN(num)) return raw
  return num % 1 === 0 ? `${Math.round(num)}€` : `${num.toFixed(2).replace('.', ',')}€`
}

export default function MenuPageContent({ locale = 'fr' }: { locale?: Locale }) {
  const [openKey, setOpenKey] = useState<string | null>(null)
  const messages = getMessages(locale)
  const t = messages.menuPage

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key))
  }

  const pdfHref = locale === 'fr' ? '/pdf/carte-amourette.pdf' : '/pdf/menu-amourette-en.pdf'

  return (
    <PageLayout locale={locale}>
      <section className="pt-32 pb-24 bg-paper min-h-screen">
        <div className="container mx-auto px-5 md:px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-serif text-stone-900 mb-4"
            >
              {t.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-amourette text-xs md:text-sm font-medium uppercase tracking-[0.3em] mb-6"
              style={{ fontVariantCaps: 'all-small-caps' }}
            >
              {t.subtitle}
            </motion.p>

            {/* PDF Download */}
            <motion.a
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              download
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-stone-600 hover:text-amourette transition-colors duration-300 text-sm font-medium"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <path d="M8 2v8m0 0L5 7m3 3l3-3M3 12h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.downloadPdf}
            </motion.a>
          </div>

          {/* Accordion */}
          <div className="max-w-3xl mx-auto">
            {categoryKeys.map((catKey, catIndex) => {
              const isOpen = openKey === catKey
              const items = menuData[catKey]
              const categoryLabel = t.categories[catKey as keyof typeof t.categories]

              return (
                <motion.div
                  key={catKey}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: catIndex * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b border-[#D4AF37]/20"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggle(catKey)}
                    className="w-full min-h-14 flex items-center justify-between py-5 md:py-6 group cursor-pointer"
                  >
                    <span className="font-serif text-xl md:text-2xl text-stone-900 transition-all duration-300 group-hover:text-amourette group-hover:translate-x-1.5 inline-block">
                      {categoryLabel}
                    </span>
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-[#D4AF37] text-xs md:text-sm font-medium">
                        {items.length}
                      </span>
                      <motion.svg
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-stone-400"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { type: 'spring', stiffness: 350, damping: 35 },
                          opacity: { duration: 0.25 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 md:pb-8">
                          {items.map((item, index) => (
                            <motion.div
                              key={`${item.name}-${index}`}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.04,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              className="flex items-center gap-3 md:gap-4 py-4 md:py-5 group/item"
                            >
                              {item.image && (
                                <div className="relative w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0">
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 40px, 64px"
                                  />
                                </div>
                              )}
                              <div className="flex items-baseline flex-1 min-w-0 gap-2">
                                <span className="font-serif text-base md:text-lg text-stone-800 shrink-0 transition-all duration-300 group-hover/item:font-medium">
                                  {item.name}
                                </span>
                                <span className="flex-1 border-b border-dotted border-stone-300 min-w-[1rem] self-end mb-[0.2em]" />
                                <span className="text-amourette text-sm md:text-base font-medium whitespace-nowrap shrink-0">
                                  {formatPrice(item.price)}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
