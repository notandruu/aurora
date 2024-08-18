"use client"

import { motion } from "framer-motion"
import { useOptimizedInView } from "@/hooks/use-optimized-scroll"
import type { ReactNode } from "react"
import { memo } from "react"

interface OptimizedAnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  id?: string // Added id prop support
}

// Memoized animated section with optimized animations
export const OptimizedAnimatedSection = memo(function OptimizedAnimatedSection({
  children,
  className = "",
  delay = 0,
  id, // Added id parameter
}: OptimizedAnimatedSectionProps) {
  const [ref, inView] = useOptimizedInView(0.1)

  return (
    <motion.section
      ref={ref}
      id={id} // Added id attribute to section element
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        type: "tween", // Use tween instead of spring for better performance
      }}
      style={{
        willChange: inView ? "auto" : "transform, opacity",
        contain: "layout style paint",
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
})
