"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface OptimizedAuroraGlowProps {
  size?: "sm" | "md" | "lg"
  intensity?: "low" | "medium" | "high"
  className?: string
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
}

const glowIntensity = {
  low: "drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  medium: "drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]",
  high: "drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]",
}

export function OptimizedAuroraGlow({ size = "md", intensity = "medium", className }: OptimizedAuroraGlowProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      animate={{
        filter: [
          glowIntensity[intensity],
          `${glowIntensity[intensity]} drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]`,
          glowIntensity[intensity],
        ],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <img src="/images/aurora-logo-new.png" alt="Aurora" className={cn(sizeClasses[size], "object-contain")} />
    </motion.div>
  )
}
