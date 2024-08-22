"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface FluidDemoCardProps {
  title: string
  description: string
  icon: ReactNode
  children: ReactNode
  className?: string
}

export function FluidDemoCard({ title, description, icon, children, className }: FluidDemoCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        "relative rounded-lg border border-neutral-800 bg-neutral-900 p-6 shadow-lg",
        "transition-all duration-200 ease-in-out",
        className,
      )}
      initial={{ borderRadius: 8 }}
      whileHover={{
        borderRadius: 12,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Hover Background */}
      {isHovered && (
        <motion.div
          layoutId="demo-card-hover"
          className="absolute inset-0 bg-neutral-800 rounded-lg"
          transition={{
            type: "spring",
            bounce: 0.15,
            duration: 0.5,
          }}
        />
      )}

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-4">
          <motion.div
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
            className="text-purple-400"
          >
            {icon}
          </motion.div>
          <div>
            <h3
              className={cn(
                "font-semibold transition-colors duration-150",
                isHovered ? "text-neutral-200" : "text-neutral-300",
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "text-sm transition-colors duration-150",
                isHovered ? "text-neutral-300" : "text-neutral-400",
              )}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">{children}</div>
      </div>
    </motion.div>
  )
}
