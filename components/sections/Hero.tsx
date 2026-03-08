'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Hero({ locale = 'fr' }: { locale?: string }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/25 z-10" />
        <Image
          src="/images/facade-terrasse-animee.webp"
          alt="Amourette Passy Terrasse"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto -mt-20"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: easeOutExpo }}
          className="block text-white/70 text-[10px] md:text-xs uppercase tracking-[0.5em] mb-6 font-medium drop-shadow-md"
        >
          Paris 16ème
        </motion.span>

        <h1 className="text-5xl md:text-9xl lg:text-[10rem] font-serif text-white leading-none tracking-tight drop-shadow-lg">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: easeOutExpo }}
              className="block"
            >
              Amourette
            </motion.span>
          </span>
          <span className="block overflow-hidden mt-2">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: easeOutExpo }}
              className="block italic font-light text-amourette"
            >
              Passy
            </motion.span>
          </span>
        </h1>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1.2 }}
        whileHover={{ opacity: 1 }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/80 font-light">
          {locale === 'fr' ? 'Découvrir' : 'Discover'}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
