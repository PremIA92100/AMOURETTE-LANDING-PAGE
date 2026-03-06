'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useSpring(0, { stiffness: 300, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 300, damping: 28 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    setIsVisible(true)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        setIsHovering(true)
      }
    }

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  const size = isHovering ? 40 : 12

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        className="rounded-full bg-white"
        animate={{
          width: size,
          height: size,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </motion.div>
  )
}
