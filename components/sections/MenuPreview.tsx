'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { slugMap } from '@/lib/i18n'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const categories = [
  { key: 'partager', label: 'A Partager' },
  { key: 'entrees', label: 'Entrees' },
  { key: 'plats', label: 'Plats' },
  { key: 'desserts', label: 'Desserts' },
]

const menuData: Record<string, { name: string; price: string }[]> = {
  partager: [
    { name: 'Tarama blanc extra', price: '14,00 EUR' },
    { name: 'Petites fritures de calamars, spicy mayo', price: '18,00 EUR' },
    { name: 'Nems poulet, sucrine, menthe', price: '15,00 EUR' },
    { name: 'Foie gras de canard, chutney de mangue', price: '28,00 EUR' },
  ],
  entrees: [
    { name: 'Veloute de butternut, noisettes grillees', price: '12,00 EUR' },
    { name: 'Poireaux fondants, vinaigrette truffee', price: '15,00 EUR' },
    { name: "Salade d'endives, roquefort et noix", price: '16,00 EUR' },
    { name: 'Thon epice, guacamole avocat', price: '23,00 EUR' },
    { name: 'Tartare de bar, burrata, poutargue', price: '28,00 EUR' },
    { name: "Coeur de saumon fume a l'aneth, blinis", price: '28,00 EUR' },
    { name: "Carpaccio de Saint-Jacques, huile d'olive citron", price: '22,00 EUR' },
  ],
  plats: [
    { name: 'Gratin de macaroni, jambon, emmental et truffes', price: '28,00 EUR' },
    { name: 'Lasagne de legumes grilles, tomate basilic', price: '22,00 EUR' },
    { name: 'Salade thai, saumon cru, citron soja', price: '28,00 EUR' },
    { name: 'Risotto cremeux, gambas plancha', price: '38,00 EUR' },
    { name: 'Noix de Saint-Jacques juste snackees', price: '38,00 EUR' },
    { name: 'Saumon laque miso, gingembre, coriandre', price: '32,00 EUR' },
    { name: 'Bar plancha beurre blanc aux agrumes', price: '38,00 EUR' },
    { name: 'Steak tartare tradition, frites', price: '26,00 EUR' },
    { name: 'Bacon burger Aubrac', price: '28,00 EUR' },
    { name: 'Paillard de poulet extra grille au citron', price: '28,00 EUR' },
    { name: 'Plat mijote de boeuf', price: '26,00 EUR' },
    { name: 'Entrecote argentine bearnaise', price: '47,00 EUR' },
  ],
  desserts: [
    { name: "Comte 24 mois, pain du coin grille", price: '12,00 EUR' },
    { name: 'Brioche perdue caramelisee', price: '14,00 EUR' },
    { name: 'Creme brulee pistache, noisettes', price: '12,00 EUR' },
    { name: 'Clafoutis de saison', price: '12,00 EUR' },
    { name: 'Pavlova fruits rouges', price: '22,00 EUR' },
    { name: 'Salade de mangue passion', price: '14,00 EUR' },
    { name: 'Petit pot de glace et sorbet, Philippe Faur', price: '8,00 EUR' },
    { name: 'Gateau au chocolat, creme anglaise maison', price: '14,00 EUR' },
  ],
}

function MenuItem({ item, index }: { item: { name: string; price: string }; index: number }) {
  return (
    <motion.div
      key={item.name}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: easeOutExpo,
      }}
      className="group relative py-5 cursor-default"
    >
      <div className="flex justify-between items-baseline w-full gap-4">
        <span className="text-stone-800 font-serif text-base md:text-xl md:group-hover:text-amourette transition-colors duration-300">
          {item.name}
        </span>
        <span className="text-stone-500 text-sm md:text-base font-light whitespace-nowrap shrink-0 opacity-100 md:opacity-70 md:group-hover:opacity-100 transition-opacity duration-300">
          {item.price}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-stone-200">
        <div className="h-full bg-amourette origin-left scale-x-0 md:group-hover:scale-x-100 transition-transform duration-300 ease-out" />
      </div>
    </motion.div>
  )
}

export default function MenuPreview({ locale = 'fr' }: { locale?: Locale }) {
  const [activeTab, setActiveTab] = useState('partager')

  return (
    <section className="py-20 md:py-32 bg-paper relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-100/40 via-paper to-paper" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="text-amourette text-xs md:text-sm font-bold uppercase tracking-[0.5em] mb-8 block"
          >
            Cuisine de Partage
          </motion.span>

          <h2 className="text-4xl md:text-8xl font-serif text-stone-900 mb-12 md:mb-16">
            La Carte
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
            className="text-stone-600 text-lg md:text-2xl font-light leading-relaxed mb-12 md:mb-16 max-w-3xl mx-auto"
          >
            Une cuisine sincere et vivante, qui evolue au gre des saisons et
            des arrivages.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeOutExpo }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="flex overflow-x-auto gap-2 md:gap-4 justify-center pb-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`relative px-5 py-2.5 md:px-8 md:py-3 min-h-[44px] text-xs md:text-sm uppercase tracking-widest font-medium whitespace-nowrap rounded-full border transition-all duration-500 ${
                  activeTab === cat.key
                    ? 'bg-amourette text-white border-amourette'
                    : 'bg-transparent text-stone-500 border-stone-300 md:hover:border-amourette md:hover:text-amourette'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: easeOutExpo }}
            >
              {menuData[activeTab].map((item, index) => (
                <MenuItem key={item.name} item={item} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeOutExpo }}
          className="flex flex-col items-center mt-12 md:mt-16"
        >
          <Link
            href={slugMap.menus[locale]}
            className="group inline-flex items-center gap-4 px-8 py-5 md:px-12 md:py-6 min-h-[44px] bg-stone-900 text-paper rounded-full md:hover:bg-amourette transition-all duration-500 shadow-xl md:hover:shadow-amourette/20"
          >
            <span className="uppercase tracking-widest text-sm font-medium">
              {locale === 'fr' ? 'Voir la carte complete' : 'See full menu'}
            </span>
            <span className="md:group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
