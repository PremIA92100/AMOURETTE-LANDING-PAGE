'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Loader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
          >
            <div className="relative overflow-hidden">
              <motion.h1
                className="text-5xl md:text-8xl font-serif text-paper tracking-tight"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 1.2, delay: 0.3, ease: easeOutExpo }}
              >
                Amourette
              </motion.h1>
              <motion.div
                className="absolute bottom-0 left-0 h-[1px] bg-amourette"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.8, ease: easeOutExpo }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  )
}
