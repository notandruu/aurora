"use client"

import { motion } from "framer-motion"
import { memo } from "react"

interface OptimizedCosmicOrbProps {
  size?: number
  gradient: string
  className?: string
  animate?: boolean
}

// Memoized and optimized cosmic orb component
export const OptimizedCosmicOrb = memo(function OptimizedCosmicOrb({
  size = 200,
  gradient,
  className = "",
  animate = true,
}: OptimizedCosmicOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: gradient,
        filter: "blur(1px)",
        willChange: animate ? "transform" : "auto",
        contain: "layout style paint",
        transform: "translateZ(0)", // Force GPU acceleration
      }}
      animate={
        animate
          ? {
              scale: [1, 1.05, 1],
              rotate: [0, 360],
            }
          : {}
      }
      transition={{
        scale: {
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          repeatType: "reverse",
        },
        rotate: {
          duration: 40, // Slower rotation for better performance
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        },
      }}
    />
  )
})
