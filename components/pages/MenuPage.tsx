'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import PageLayout from '@/components/layout/PageLayout'
import type { Locale } from '@/lib/i18n'

const categories = [
  { key: 'partager', label: 'Entre Amis' },
  { key: 'entrees', label: 'Entrées' },
  { key: 'plats', label: 'Plats' },
  { key: 'desserts', label: 'Fromages & Desserts' },
  { key: 'cocktails', label: 'Cocktails' },
]

type MenuItem = { name: string; price: string; image?: string }

const menuData: Record<string, MenuItem[]> = {
  partager: [
    { name: 'Tarama blanc extra', price: '14,00 EUR' },
    { name: 'Petites fritures de calamars, spicy mayo', price: '18,00 EUR', image: '/images/amourette-640401.jpg' },
    { name: 'Nems poulet, sucrine, menthe', price: '15,00 EUR' },
    { name: 'Foie gras de canard, chutney de mangue', price: '28,00 EUR', image: '/images/amourette-640402.jpg' },
  ],
  entrees: [
    { name: 'Velouté de butternut, noisettes grillées', price: '12,00 EUR' },
    { name: 'Petites fritures de calamars, spicy mayo', price: '18,00 EUR' },
    { name: 'Poireaux fondants, vinaigrette truffée', price: '15,00 EUR' },
    { name: "Salade d'endives, roquefort et noix", price: '16,00 EUR' },
    { name: 'Thon épicé, guacamole avocat', price: '23,00 EUR', image: '/images/amourette-640403.jpg' },
    { name: 'Tartare de bar, burrata, poutargue', price: '28,00 EUR', image: '/images/amourette-640404.jpg' },
    { name: "Cœur de saumon fumé à l'aneth, blinis", price: '28,00 EUR' },
    { name: 'Foie gras de canard, chutney de mangue', price: '28,00 EUR' },
    { name: 'Nems poulet, sucrine, menthe', price: '15,00 EUR' },
    { name: "Carpaccio de Saint-Jacques, huile d'olive citron", price: '22,00 EUR', image: '/images/amourette-640415.jpg' },
  ],
  plats: [
    { name: 'Gratin de macaroni, jambon, emmental et truffes', price: '28,00 EUR' },
    { name: 'Lasagne de légumes grillés, tomate basilic', price: '22,00 EUR' },
    { name: 'Salade thai, saumon cru, citron soja', price: '28,00 EUR' },
    { name: 'Risotto crémeux, gambas plancha', price: '38,00 EUR', image: '/images/amourette-640420.jpg' },
    { name: 'Noix de Saint-Jacques juste snackées', price: '38,00 EUR', image: '/images/amourette-640433.jpg' },
    { name: 'Saumon laqué miso, gingembre, coriandre', price: '32,00 EUR', image: '/images/amourette-640416.jpg' },
    { name: 'Bar plancha beurre blanc aux agrumes', price: '38,00 EUR', image: '/images/amourette-640418.jpg' },
    { name: 'Steak tartare tradition, frites', price: '26,00 EUR', image: '/images/amourette-640400.jpg' },
    { name: 'Bacon burger Aubrac', price: '28,00 EUR' },
    { name: 'Paillard de poulet extra grillé au citron', price: '28,00 EUR' },
    { name: 'Plat mijoté de bœuf', price: '26,00 EUR' },
    { name: 'Entrecôte argentine béarnaise', price: '47,00 EUR', image: '/images/amourette-640414.jpg' },
  ],
  desserts: [
    { name: "Comté 24 mois, pain du coin grillé", price: '12,00 EUR' },
    { name: 'Brioche perdue caramélisée', price: '14,00 EUR' },
    { name: 'Crème brûlée pistache, noisettes', price: '12,00 EUR' },
    { name: 'Clafoutis de saison', price: '12,00 EUR' },
    { name: 'Pavlova fruits rouges', price: '22,00 EUR', image: '/images/amourette-640435.jpg' },
    { name: 'Salade de mangue passion', price: '14,00 EUR' },
    { name: 'Petit pot de glace et sorbet, Philippe Faur maître glacier', price: '8,00 EUR' },
    { name: 'Gâteau au chocolat, crème anglaise maison', price: '14,00 EUR' },
  ],
  cocktails: [
    { name: 'Aperol Spritz', price: '15,00 EUR' },
    { name: 'Classique Mojito', price: '15,00 EUR' },
    { name: 'Gin To Basilic', price: '15,00 EUR' },
    { name: 'Moscow Mule', price: '15,00 EUR' },
    { name: 'Negroni', price: '15,00 EUR' },
    { name: 'Porn Star Martini, un peu de champagne', price: '17,00 EUR' },
    { name: 'Miss Amourette', price: '18,00 EUR' },
    { name: 'TNT Tequila Patron', price: '20,00 EUR' },
  ],
}

function formatPrice(raw: string): string {
  const num = parseFloat(raw.replace(',', '.').replace(/[^0-9.]/g, ''))
  if (isNaN(num)) return raw
  return num % 1 === 0 ? `${Math.round(num)}€` : `${num.toFixed(2).replace('.', ',')}€`
}

export default function MenuPageContent({ locale = 'fr' }: { locale?: Locale }) {
  const [openKey, setOpenKey] = useState<string | null>(null)

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key))
  }

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
              {locale === 'fr' ? 'La Carte' : 'The Menu'}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-amourette text-xs md:text-sm font-medium uppercase tracking-[0.3em]"
              style={{ fontVariantCaps: 'all-small-caps' }}
            >
              {locale === 'fr' ? 'Produits frais, fait maison' : 'Fresh products, homemade'}
            </motion.p>
          </div>

          {/* Accordion */}
          <div className="max-w-3xl mx-auto">
            {categories.map((cat, catIndex) => {
              const isOpen = openKey === cat.key
              const items = menuData[cat.key]

              return (
                <motion.div
                  key={cat.key}
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
                    onClick={() => toggle(cat.key)}
                    className="w-full min-h-14 flex items-center justify-between py-5 md:py-6 group cursor-pointer"
                  >
                    <span className="font-serif text-xl md:text-2xl text-stone-900 transition-all duration-300 group-hover:text-amourette group-hover:translate-x-1.5 inline-block">
                      {cat.label}
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
