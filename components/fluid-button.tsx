"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FluidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export function FluidButton({ variant = "default", size = "md", className, children, ...props }: FluidButtonProps) {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ease-in-out",
    "focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2 focus:ring-offset-black focus:outline-none",
    {
      "bg-neutral-900 text-neutral-200 hover:bg-neutral-800 hover:text-white": variant === "default",
      "bg-transparent text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200": variant === "ghost",
      "bg-transparent text-neutral-400 border border-neutral-700 hover:bg-neutral-800 hover:text-neutral-200 hover:border-neutral-600":
        variant === "outline",
      "px-3 py-2 text-sm": size === "sm",
      "px-4 py-2.5 text-sm": size === "md",
      "px-6 py-3 text-base": size === "lg",
    },
    className,
  )

  return (
    <motion.button
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 1,
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
