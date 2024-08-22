"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FluidCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function FluidCard({ children, className, hover = true }: FluidCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-lg border border-neutral-800 bg-neutral-900 p-6 shadow-lg",
        "transition-all duration-200 ease-in-out",
        hover && "hover:bg-neutral-800 hover:border-neutral-700",
        className,
      )}
      initial={{ borderRadius: 8 }}
      whileHover={
        hover
          ? {
              borderRadius: 12,
              transition: { duration: 0.2 },
            }
          : {}
      }
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 1,
      }}
    >
      {children}
    </motion.div>
  )
}
