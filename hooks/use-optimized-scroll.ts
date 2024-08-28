"use client"

import { useEffect, useState, useCallback } from "react"

// Throttled scroll hook for better performance
export function useOptimizedScrollAnimation() {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    // Use requestAnimationFrame for smooth updates
    requestAnimationFrame(() => {
      setScrollY(window.scrollY)
    })
  }, [])

  useEffect(() => {
    // Throttle scroll events
    let ticking = false

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [handleScroll])

  return scrollY
}

// Optimized intersection observer hook
export function useOptimizedInView(threshold = 0.1) {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Use requestAnimationFrame for smooth state updates
        requestAnimationFrame(() => {
          setInView(entry.isIntersecting)
        })
      },
      {
        threshold,
        rootMargin: "50px", // Start animation slightly before element is visible
      },
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold])

  return [setRef, inView] as const
}
