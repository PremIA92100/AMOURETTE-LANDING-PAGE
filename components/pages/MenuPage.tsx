'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import PageLayout from '@/components/layout/PageLayout'
import type { Locale } from '@/lib/i18n'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

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

export default function MenuPageContent({ locale = 'fr' }: { locale?: Locale }) {
  const [activeTab, setActiveTab] = useState('partager')

  return (
    <PageLayout locale={locale}>
      <section className="pt-32 pb-24 bg-paper min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
              className="text-amourette text-xs md:text-sm font-bold uppercase tracking-[0.5em] mb-8 block"
            >
              {locale === 'fr' ? 'Cuisine de Partage' : 'Sharing Cuisine'}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
              className="text-5xl md:text-8xl font-serif text-stone-900 mb-8"
            >
              {locale === 'fr' ? 'La Carte' : 'The Menu'}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
              className="text-stone-500 text-lg md:text-xl font-light"
            >
              Amourette Paris Passy : une cuisine de produits et une terrasse
              sans fin.
            </motion.p>
          </div>

          <div className="flex overflow-x-auto gap-2 md:gap-4 justify-center pb-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-5 py-2.5 md:px-8 md:py-3 text-xs md:text-sm uppercase tracking-widest font-medium whitespace-nowrap rounded-full border transition-all duration-500 ${
                  activeTab === cat.key
                    ? 'bg-amourette text-white border-amourette'
                    : 'bg-transparent text-stone-500 border-stone-300 hover:border-amourette hover:text-amourette'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: easeOutExpo }}
                className="space-y-0"
              >
                {menuData[activeTab].map((item, index) => (
                  <motion.div
                    key={`${item.name}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.04,
                      ease: easeOutExpo,
                    }}
                    className="flex items-center gap-4 py-5 border-b border-stone-200 group"
                  >
                    {item.image && (
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="80px"
                        />
                      </div>
                    )}
                    <div className="flex justify-between items-baseline flex-1 min-w-0">
                      <span className="text-stone-800 font-serif text-lg md:text-xl group-hover:text-amourette transition-colors duration-300 pr-4 truncate">
                        {item.name}
                      </span>
                      <span className="text-amourette text-sm md:text-base font-medium whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
