"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ResizableNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-out ${
          isScrolled ? "h-16 px-6 pt-4" : "h-20"
        }`}
      >
        <div
          className={`transition-all duration-1000 ease-out ${
            isScrolled
              ? "max-w-4xl mx-auto backdrop-blur-xl shadow-2xl rounded-full px-6 py-3"
              : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full"
          }`}
          style={isScrolled ? { backgroundColor: "#171717" } : {}}
        >
          <div className="flex items-center justify-between h-full">
            <div onClick={scrollToTop} className="flex items-center cursor-pointer group">
              <div className="relative w-8 h-8 mr-3 transition-all duration-1000">
                <Image
                  src="/images/aurora-logo-new.png"
                  alt="Aurora Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span
                className={`font-bold transition-all duration-1000 ease-out ${
                  isScrolled ? "text-lg text-white" : "text-xl text-white"
                }`}
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Aurora
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8 ml-4">
              {[
                { name: "Features", id: "features" },
                { name: "Testimonials", id: "testimonials" },
                { name: "Pricing", id: "pricing" },
                { name: "Questions", id: "faq" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-all duration-1000 ease-out ${
                    isScrolled ? "text-xs hover:text-white" : "text-sm hover:text-white"
                  }`}
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    color: "#d4d4d4",
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <Button
              className={`hidden md:flex transition-all duration-1000 ease-out ${
                isScrolled ? "h-8 px-4 text-xs" : "h-9 px-6 text-sm"
              } font-medium border-0 rounded-lg items-center gap-2 transform hover:scale-[1.02]`}
              style={{
                fontFamily: '"Inter", sans-serif',
                backgroundColor: "#171717",
                color: "#d4d4d4",
                border: "1px solid #1f1f1f",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#d4d4d4"
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Get Aurora
            </Button>

            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-white" : "bg-white"
                  } mb-1 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                ></span>
                <span
                  className={`block w-5 h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-white" : "bg-white"
                  } mb-1 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block w-5 h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-white" : "bg-white"
                  } ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div
            className="fixed top-20 left-4 right-4 backdrop-blur-xl rounded-2xl shadow-2xl p-6"
            style={{
              backgroundColor: "#171717",
              border: "1px solid #1f1f1f",
            }}
          >
            <div className="flex flex-col space-y-4">
              {[
                { name: "Features", id: "features" },
                { name: "Testimonials", id: "testimonials" },
                { name: "Pricing", id: "pricing" },
                { name: "Questions", id: "faq" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-3 px-4 rounded-lg transition-colors duration-200 hover:bg-gray-800/50"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    color: "#d4d4d4",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffffff"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#d4d4d4"
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <Button
              className="w-full mt-4 h-12 px-6 text-sm font-medium border-0 rounded-lg flex items-center justify-center gap-2 transform hover:scale-[1.02]"
              style={{
                fontFamily: '"Inter", sans-serif',
                backgroundColor: "#171717",
                color: "#d4d4d4",
                border: "1px solid #1f1f1f",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#d4d4d4"
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Get Aurora
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
