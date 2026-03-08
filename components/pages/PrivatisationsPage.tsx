'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageLayout from '@/components/layout/PageLayout'
import type { Locale } from '@/lib/i18n'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function PrivatisationsPageContent({ locale = 'fr' }: { locale?: Locale }) {
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
              Privatisations
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
                className="space-y-6 text-stone-600 text-lg font-light leading-relaxed"
              >
                <p>
                  Nous sommes heureux de vous accueillir pour vos événements
                  d&apos;affaires ou familiaux. Nous proposons des privatisations ou
                  des semi-privatisations pour accueillir de grandes tablées :
                  menu assis ou cocktail en fonction de l&apos;événement.
                </p>
                <p>
                  En hiver, nous pouvons recevoir des groupes allant jusqu&apos;à 60
                  personnes pour un repas assis (salle privative à l&apos;étage). En
                  été, la belle terrasse nous permet de recevoir jusqu&apos;à 200
                  personnes assises, 300 en mode cocktail.
                </p>
                <p>
                  Contactez-nous pour toute demande au{' '}
                  <a
                    href="tel:0952861447"
                    className="text-amourette hover:underline font-medium"
                  >
                    09 52 86 14 47
                  </a>
                  , nous serons ravis de vous faire une proposition commerciale
                  adaptée à vos besoins.
                </p>
                <p className="text-amourette font-serif text-xl italic">
                  L&apos;équipe d&apos;Amourette
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden"
              >
                <Image
                  src="/images/terrasse-vue-aerienne.webp"
                  alt="Terrasse Amourette - Privatisation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
