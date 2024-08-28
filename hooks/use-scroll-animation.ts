"use client"

import { useEffect, useState } from "react"

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollY
}

export function useInView(threshold = 0.1) {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold })

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold])

  return [setRef, inView] as const
}
