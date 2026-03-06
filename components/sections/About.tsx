'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const aboutText =
  "La vie se resume parfois a des choses simples. Bien manger, rester en famille, aimer ses proches, cuisiner un bon repas. Etant petits a Laguiole, nos parents nous ont appris a cherir les bonnes choses : cueillir de la salade au jardin, manger des carottes crues a pleines dents, cuire une belle cote de boeuf d'Aubrac, tartiner un rocamadour sur du pain grille. Autant de souvenirs d'enfance que nous partageons avec Amourette."

const aboutWords = aboutText.split(' ')

function WordReveal({ words, isInView }: { words: string[]; isInView: boolean }) {
  return (
    <p className="first-letter:text-6xl md:first-letter:text-7xl first-letter:font-serif first-letter:text-amourette first-letter:float-left first-letter:mr-4 md:first-letter:mr-6 first-letter:mt-[-3px] md:first-letter:mt-[-5px] first-letter:leading-[0.8]">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.5 + i * 0.02,
              ease: easeOutExpo,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 md:py-32 bg-paper relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: easeOutExpo }}
              className="text-amourette text-xs font-bold uppercase tracking-[0.5em] mb-10 block"
            >
              Notre Histoire
            </motion.span>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8">
              <motion.div
                initial={{
                  clipPath: 'inset(50% 50% 50% 50% round 12px)',
                }}
                animate={
                  isInView
                    ? { clipPath: 'inset(0% 0% 0% 0% round 12px)' }
                    : {}
                }
                transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
                className="w-full h-full"
              >
                <Image
                  src="/images/devanture-vegetalisee.webp"
                  alt="Devanture Amourette"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </motion.div>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1]">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: easeOutExpo,
                  }}
                  className="block"
                >
                  Notre
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: easeOutExpo,
                  }}
                  className="block italic text-amourette"
                >
                  Philosophie
                </motion.span>
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-16 mt-12 lg:mt-32">
            {/* Decorative line that extends on scroll */}
            <motion.div
              className="h-[1px] bg-amourette/30 origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: easeOutExpo }}
            />

            <div className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed">
              <WordReveal words={aboutWords} isInView={isInView} />
            </div>

            {/* Decorative line */}
            <motion.div
              className="h-[1px] bg-stone-200 origin-right"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 1.2, ease: easeOutExpo }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Terroir',
                  subtitle: 'Produits frais et sources',
                  desc: 'Nous privilegions les circuits courts et la qualite brute.',
                },
                {
                  title: 'Partage',
                  subtitle: 'Une cuisine de coeur',
                  desc: 'Des plats penses pour etre partages et celebres ensemble.',
                },
                {
                  title: 'Vins',
                  subtitle: 'Selection Pointue',
                  desc: "Une carte de vins natures et vivants pour accompagner chaque instant.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 1.4 + i * 0.15,
                    ease: easeOutExpo,
                  }}
                  className="border-t border-stone-200 pt-6"
                >
                  <motion.div
                    className="h-[1px] bg-amourette origin-left mb-4"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.6 + i * 0.15, ease: easeOutExpo }}
                  />
                  <h4 className="text-amourette font-serif text-2xl mb-2">
                    {item.title}
                  </h4>
                  <span className="text-xs uppercase tracking-widest text-stone-400 block mb-3">
                    {item.subtitle}
                  </span>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
