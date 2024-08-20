"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, RotateCcw, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { OptimizedAuroraGlow } from "@/components/optimized-aurora-glow"
import { memo } from "react"

interface OptimizedEnhancedBrowserMockupProps {
  children: React.ReactNode
  url?: string
  className?: string
  theme?: "dark" | "light"
}

// Memoized browser mockup for better performance
export const OptimizedEnhancedBrowserMockup = memo(function OptimizedEnhancedBrowserMockup({
  children,
  url = "aurora://new-tab",
  className = "",
  theme = "dark",
}: OptimizedEnhancedBrowserMockupProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Background browser frame - using transform for GPU acceleration */}
      <div
        className="absolute rounded-xl bg-neutral-800 border border-neutral-700 opacity-60"
        style={{
          top: 8,
          left: 8,
          right: 0,
          bottom: 0,
          filter: "blur(0.5px)",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      />

      {/* Main browser frame */}
      <motion.div
        className={cn(
          "relative rounded-xl overflow-hidden border",
          theme === "dark" ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200",
        )}
        style={{
          boxShadow:
            theme === "dark"
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              : "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)",
          willChange: "transform",
          contain: "layout style paint",
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
      >
        {/* Optimized browser header */}
        <div
          className={cn(
            "px-4 py-2 flex items-center space-x-3 border-b",
            theme === "dark" ? "bg-neutral-800/90 border-neutral-700/50" : "bg-neutral-50 border-neutral-200",
          )}
          style={{ height: "44px" }}
        >
          {/* Traffic Lights */}
          <div className="flex space-x-1.5">
            {["bg-red-500", "bg-yellow-500", "bg-green-500"].map((color, index) => (
              <motion.div
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${color}`}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                style={{ willChange: "transform" }}
              />
            ))}
          </div>

          {/* Navigation */}
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
                transition={{ duration: 0.1 }}
                style={{ willChange: "transform" }}
              >
                <Icon className="w-3 h-3" />
              </motion.button>
            ))}
          </div>

          {/* Optimized URL Bar */}
          <div
            className={cn(
              "flex-1 rounded-md px-3 py-1 flex items-center border text-xs",
              theme === "dark"
                ? "bg-neutral-700/50 border-neutral-600/50 text-neutral-300"
                : "bg-white border-neutral-300 text-neutral-700",
            )}
          >
            <div className="mr-2 flex-shrink-0">
              <OptimizedAuroraGlow size="sm" intensity="medium" />
            </div>
            <span className="truncate">{url}</span>
          </div>

          {/* Controls */}
          <motion.button
            className={cn(
              "p-1 rounded transition-colors",
              theme === "dark" ? "hover:bg-neutral-700 text-neutral-500" : "hover:bg-neutral-200 text-neutral-600",
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            style={{ willChange: "transform" }}
          >
            <MoreHorizontal className="w-3 h-3" />
          </motion.button>
        </div>

        {/* Browser Content */}
        <div className={theme === "dark" ? "bg-neutral-900" : "bg-white"}>{children}</div>
      </motion.div>
    </div>
  )
})
