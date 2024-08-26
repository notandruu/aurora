"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-neutral-800/50 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-neutral-200 pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-neutral-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-6">
              <p className="text-neutral-400 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
