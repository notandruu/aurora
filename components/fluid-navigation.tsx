"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Menu, X } from "lucide-react"
import { useClickAway } from "@/hooks/use-click-away"
import { OptimizedAuroraGlow } from "@/components/optimized-aurora-glow"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export function FluidNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const scrollToSection = useSmoothScroll()

  useClickAway(menuRef, () => setIsMenuOpen(false))

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "")
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Floating Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-neutral-900/90 backdrop-blur-xl border border-neutral-800/50 rounded-2xl px-4 py-3 shadow-2xl"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center space-x-3">
            <OptimizedAuroraGlow size="md" intensity="high" />
            <span
              className="text-lg font-light text-neutral-100"
              style={{
                fontFamily: '"Playfair Display", "Times New Roman", serif',
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              <em>Aurora</em>
            </span>
          </div>
        </motion.div>

        {/* Floating Navigation - Desktop */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="hidden md:block bg-neutral-900/90 backdrop-blur-xl border border-neutral-800/50 rounded-2xl px-2 py-2 shadow-2xl"
        >
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="relative px-4 py-2 text-sm font-light text-neutral-300 rounded-xl transition-colors duration-300 hover:text-white"
                onHoverStart={() => setHoveredItem(item.label)}
                onHoverEnd={() => setHoveredItem(null)}
                whileTap={{ scale: 0.95 }}
                style={{
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: "-0.01em",
                }}
              >
                {hoveredItem === item.label && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-white/10 rounded-xl border border-white/20"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                <span className="relative z-10 transition-colors duration-300">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.nav>

        {/* Floating CTA Button - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="hidden md:block bg-neutral-900/90 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-2 shadow-2xl"
          whileHover={{ scale: 1.02 }}
        >
          <button
            className="px-4 py-2 text-sm font-light text-neutral-300 hover:text-neutral-100 rounded-xl transition-colors duration-300 flex items-center"
            style={{
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: "-0.01em",
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Add to Chrome
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden" ref={menuRef}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="bg-neutral-900/90 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-2 shadow-2xl"
          >
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-neutral-300 hover:text-neutral-100 transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </motion.div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full right-0 mt-2 w-64 bg-neutral-900/95 backdrop-blur-xl border border-neutral-800/50 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="p-4">
                  <div className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.label}
                        onClick={() => handleNavClick(item.href)}
                        className="block w-full px-4 py-3 text-left text-neutral-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-light"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.2 }}
                        style={{
                          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-neutral-700/50">
                    <button
                      className="w-full px-4 py-3 text-neutral-300 hover:text-neutral-100 rounded-xl transition-colors duration-300 flex items-center justify-center font-light"
                      style={{
                        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                        letterSpacing: "-0.01em",
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Add to Chrome
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
