"use client"

import { motion } from "framer-motion"

interface CosmicOrbProps {
  size?: number
  gradient: string
  className?: string
  animate?: boolean
}

export function CosmicOrb({ size = 200, gradient, className = "", animate = true }: CosmicOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: gradient,
        filter: "blur(1px)",
      }}
      animate={
        animate
          ? {
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }
          : {}
      }
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  )
}
