"use client"

import { motion } from "framer-motion"
import { useOptimizedScrollAnimation } from "@/hooks/use-optimized-scroll"
import { useState, useEffect } from "react"

interface AuroraOrbProps {
  size: number
  orbImage: string
  className?: string
  intensity?: "low" | "medium" | "high"
  scrollEffect?: "parallax" | "drift" | "pulse" | "rotate" | "scale"
  scrollSpeed?: number
}

export function AuroraOrb({
  size,
  orbImage,
  className = "",
  intensity = "medium",
  scrollEffect = "drift",
  scrollSpeed = 0.5,
}: AuroraOrbProps) {
  const scrollY = useOptimizedScrollAnimation()
  const [imageLoaded, setImageLoaded] = useState(false)

  // Preload the image
  useEffect(() => {
    const img = new Image()
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setImageLoaded(true) // Still show orb even if image fails
    img.src = orbImage
  }, [orbImage])

  const intensityConfig = {
    low: { blur: 60, opacity: 0.4, scale: 1.2 },
    medium: { blur: 80, opacity: 0.6, scale: 1.4 },
    high: { blur: 100, opacity: 0.8, scale: 1.6 },
  }

  const config = intensityConfig[intensity]

  // Calculate scroll-based transforms
  const getScrollTransform = () => {
    const offset = scrollY * scrollSpeed

    switch (scrollEffect) {
      case "parallax":
        return { y: -offset * 0.5, rotate: 0, scale: 1 }
      case "drift":
        return { y: -offset * 0.3, x: Math.sin(offset * 0.01) * 20, rotate: 0, scale: 1 }
      case "pulse":
        return { y: 0, rotate: 0, scale: 1 + Math.sin(offset * 0.02) * 0.1 }
      case "rotate":
        return { y: -offset * 0.2, rotate: offset * 0.1, scale: 1 }
      case "scale":
        return { y: -offset * 0.1, rotate: 0, scale: 1 + offset * 0.0005 }
      default:
        return { y: 0, rotate: 0, scale: 1 }
    }
  }

  const scrollTransform = getScrollTransform()

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        willChange: "transform, opacity",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        imageLoaded
          ? {
              opacity: 1,
              scale: 1,
              y: scrollTransform.y,
              x: scrollTransform.x || 0,
              rotate: scrollTransform.rotate,
            }
          : { opacity: 0, scale: 0.8 }
      }
      transition={{
        opacity: { duration: 1, ease: "easeOut" },
        scale: { duration: 1, ease: "easeOut" },
        y: { duration: 0, ease: "linear" },
        x: { duration: 0, ease: "linear" },
        rotate: { duration: 0, ease: "linear" },
      }}
    >
      {/* Glow container with proper overflow handling */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          transform: `scale(${config.scale})`,
          filter: `blur(${config.blur}px)`,
          opacity: config.opacity,
          willChange: "transform",
        }}
      >
        <img
          src={orbImage || "/placeholder.svg"}
          alt=""
          className="w-full h-full object-cover rounded-full"
          style={{
            transform: `scale(${scrollTransform.scale})`,
            willChange: "transform",
          }}
        />
      </div>

      {/* Main orb image */}
      <img
        src={orbImage || "/placeholder.svg"}
        alt=""
        className="w-full h-full object-cover rounded-full relative z-10"
        style={{
          transform: `scale(${scrollTransform.scale})`,
          willChange: "transform",
        }}
      />
    </motion.div>
  )
}
