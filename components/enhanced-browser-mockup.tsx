"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, RotateCcw, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

interface EnhancedBrowserMockupProps {
  children: React.ReactNode
  url?: string
  className?: string
  theme?: "dark" | "light"
}

export function EnhancedBrowserMockup({
  children,
  url = "aurora://new-tab",
  className = "",
  theme = "dark",
}: EnhancedBrowserMockupProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Background browser frame - slightly offset */}
      <div className="absolute top-2 left-2 right-0 bottom-0 rounded-xl bg-neutral-800 border border-neutral-700 opacity-60 blur-[0.5px]" />

      {/* Main browser frame */}
      <motion.div
        className={cn(
          "relative rounded-xl overflow-hidden border shadow-2xl",
          theme === "dark" ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200",
        )}
        style={{
          boxShadow:
            theme === "dark"
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              : "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)",
        }}
        initial={{ borderRadius: 12 }}
        whileHover={{
          borderRadius: 16,
          transition: { duration: 0.2 },
        }}
      >
        {/* Very thin browser header */}
        <div
          className={cn(
            "px-4 py-2 flex items-center space-x-3 border-b",
            theme === "dark" ? "bg-neutral-800/90 border-neutral-700/50" : "bg-neutral-50 border-neutral-200",
          )}
          style={{ height: "44px" }} // Very thin header
        >
          {/* Traffic Lights - smaller */}
          <div className="flex space-x-1.5">
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-red-500"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-yellow-500"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-green-500"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>

          {/* Navigation - smaller buttons */}
          <div className="flex items-center space-x-1">
            {[ArrowLeft, ArrowRight, RotateCcw].map((Icon, index) => (
              <motion.button
                key={index}
                className={cn(
                  "p-1 rounded transition-colors",
                  theme === "dark" ? "hover:bg-neutral-700 text-neutral-500" : "hover:bg-neutral-200 text-neutral-600",
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-3 h-3" />
              </motion.button>
            ))}
          </div>

          {/* Compact URL Bar */}
          <motion.div
            className={cn(
              "flex-1 rounded-md px-3 py-1 flex items-center border text-xs",
              theme === "dark"
                ? "bg-neutral-700/50 border-neutral-600/50 text-neutral-300"
                : "bg-white border-neutral-300 text-neutral-700",
            )}
            whileFocus={{
              borderColor: theme === "dark" ? "#6366f1" : "#3b82f6",
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="w-3 h-3 rounded-full mr-2 flex items-center justify-center relative flex-shrink-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {/* Compact glow layers */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-sm opacity-80"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 blur-md opacity-60"
                animate={{
                  scale: [1.2, 1.6, 1.2],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <div className="w-full h-full rounded-full overflow-hidden relative z-10">
                <img src="/images/aurora-logo.png" alt="Aurora Logo" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <span className="truncate">{url}</span>
          </motion.div>

          {/* Minimal controls */}
          <motion.button
            className={cn(
              "p-1 rounded transition-colors",
              theme === "dark" ? "hover:bg-neutral-700 text-neutral-500" : "hover:bg-neutral-200 text-neutral-600",
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MoreHorizontal className="w-3 h-3" />
          </motion.button>
        </div>

        {/* Browser Content */}
        <div className={theme === "dark" ? "bg-neutral-900" : "bg-white"}>{children}</div>
      </motion.div>
    </div>
  )
}
