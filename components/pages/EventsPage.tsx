'use client'

import { motion } from 'framer-motion'
import PageLayout from '@/components/layout/PageLayout'
import type { Locale } from '@/lib/i18n'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function EventsPageContent({ locale = 'fr' }: { locale?: Locale }) {
  return (
    <PageLayout locale={locale}>
      <section className="pt-32 pb-24 bg-paper min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="text-5xl md:text-8xl font-serif text-stone-900 mb-16 text-center"
            >
              {locale === 'fr' ? 'Événements' : 'Events'}
            </motion.h1>

            <div className="space-y-12">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
                className="border border-stone-200 rounded-xl p-8 md:p-12"
              >
                <span className="text-amourette text-xs font-bold uppercase tracking-widest">
                  31/12/2025 - 01/01/2026 | 19h00 - 02h00
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mt-4 mb-4">
                  Réveillon du 31 décembre 2025
                </h2>
                <p className="text-stone-500 text-lg font-light leading-relaxed mb-4">
                  Pour le réveillon du 31 décembre 2025, Amourette vous propose
                  un menu de fête gourmand. N&apos;hésitez pas à réserver dès
                  maintenant !
                </p>
                <span className="inline-block text-amourette font-bold text-xl">
                  140,00 EUR
                </span>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: easeOutExpo }}
                className="border border-stone-200 rounded-xl p-8 md:p-12"
              >
                <span className="text-amourette text-xs font-bold uppercase tracking-widest">
                  06/12/2025 - 31/12/2025 | 12h00 - 23h00
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mt-4 mb-4">
                  Repas d&apos;affaires fin d&apos;année
                </h2>
                <p className="text-stone-500 text-lg font-light leading-relaxed">
                  Vous souhaitez réunir vos collaborateurs pour un événement de
                  fin d&apos;année ? Nous sommes heureux de vous accueillir chez
                  Amourette pour vos repas d&apos;affaires. Le restaurant est
                  privatisable dans son intégralité et peut accueillir
                  jusqu&apos;à 60 personnes en hiver. Contactez-nous pour toute
                  demande au 09 52 86 14 47, nous serons ravis de vous faire une
                  proposition commerciale adaptée à vos besoins.
                </p>
              </motion.article>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
