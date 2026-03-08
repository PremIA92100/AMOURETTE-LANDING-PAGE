'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const aboutText =
  "Chez Amourette, on cuisine comme on reçoit chez soi. Des produits choisis avec soin, des recettes qui ont du caractère, et cette envie simple de bien faire les choses. Pas de chichi, juste le plaisir de partager un bon moment à table."

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

const cardData = [
  {
    title: 'Terroir',
    subtitle: 'Produits frais et sourcés',
    desc: 'Nous privilégions les circuits courts et la qualité brute des produits.',
  },
  {
    title: 'Partage',
    subtitle: 'Une cuisine de cœur',
    desc: 'Des plats pensés pour être partagés et célébrés ensemble.',
  },
  {
    title: 'Vins',
    subtitle: 'Sélection pointue',
    desc: "Une carte de vins soigneusement choisis pour les amateurs les plus exigeants.",
  },
]

function AboutCard({ item }: { item: typeof cardData[number] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: easeOutExpo }}
      className="border-t border-stone-200 pt-6"
    >
      <motion.div
        className="h-[1px] bg-amourette origin-left mb-4"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
      />
      <h4 className="text-amourette font-serif text-2xl mb-2">
        {item.title}
      </h4>
      <span className="text-xs uppercase tracking-widest text-stone-400 block mb-3">
        {item.subtitle}
      </span>
      <p className="text-stone-500 text-base leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 md:py-32 bg-paper relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start"
        >
          {/* Left column: image + title */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: easeOutExpo }}
              className="text-amourette text-xs font-bold uppercase tracking-[0.5em] mb-8 md:mb-10 block"
            >
              Notre Histoire
            </motion.span>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 md:mb-8">
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
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-stone-900 leading-[1.1]">
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

          {/* Right column: text + cards */}
          <div className="lg:col-span-7 space-y-12 md:space-y-16 mt-8 lg:mt-32">
            <motion.div
              className="h-[1px] bg-amourette/30 origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: easeOutExpo }}
            />

            <div className="text-lg md:text-2xl text-stone-600 font-light leading-relaxed">
              <WordReveal words={aboutWords} isInView={isInView} />
            </div>

            <motion.div
              className="h-[1px] bg-stone-200 origin-right"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 1.2, ease: easeOutExpo }}
            />

            {/* Cards - each triggers independently */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cardData.map((item) => (
                <AboutCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
