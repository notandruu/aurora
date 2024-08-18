"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function AnimatedText({ children, className = "", delay = 0 }: AnimatedTextProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={className}
    >
      <motion.div variants={itemVariants}>{children}</motion.div>
    </motion.div>
  )
}
