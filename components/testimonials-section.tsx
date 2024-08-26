"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { OptimizedAnimatedSection } from "@/components/optimized-animated-section"
import { AuroraOrb } from "@/components/aurora-orb"

interface TestimonialsSectionProps {
  id?: string // Added id prop interface
}

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    company: "Figma",
    content:
      "The Aurora extension transformed how I research and organize design inspiration in Chrome. The AI context understanding is incredible.",
    rating: 5,
    avatar: "/images/sarah-chen.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Software Engineer",
    company: "Stripe",
    content:
      "Finally, a Chrome extension that keeps up with my workflow. The productivity features save me hours every week.",
    rating: 5,
    avatar: "/images/marcus-rodriguez.png",
  },
  {
    name: "Dr. Emily Watson",
    role: "Research Scientist",
    company: "MIT",
    content:
      "Aurora's research capabilities are unmatched. It's like having an AI research assistant built right into Chrome.",
    rating: 5,
    avatar: "/images/emily-watson.png",
  },
]

export function TestimonialsSection({ id }: TestimonialsSectionProps) {
  return (
    <OptimizedAnimatedSection
      id={id} // Pass id prop to OptimizedAnimatedSection
      className="relative py-32 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-indigo-900/10"
    >
      {/* Aurora Orbs */}
      <AuroraOrb
        size={300}
        orbImage="/images/aurora-orb-6.png"
        className="top-20 left-10 w-36 h-36 sm:w-48 sm:h-48 lg:w-[300px] lg:h-[300px]"
        intensity="medium"
        scrollEffect="drift"
        scrollSpeed={0.4}
      />
      <AuroraOrb
        size={200}
        orbImage="/images/aurora-orb-8.png"
        className="bottom-20 right-20 w-32 h-32 sm:w-36 sm:h-36 lg:w-[200px] lg:h-[200px]"
        intensity="low"
        scrollEffect="pulse"
        scrollSpeed={0.6}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-light mb-6 text-neutral-200"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Loved by <em>professionals</em>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Join thousands of users who've transformed their browsing experience with Aurora
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>

              <Quote className="w-6 h-6 text-neutral-600 mb-4" />

              <p className="text-neutral-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-neutral-200">{testimonial.name}</div>
                  <div className="text-sm text-neutral-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 text-neutral-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-neutral-200">50K+</div>
              <div className="text-sm">Active Users</div>
            </div>
            <div className="w-px h-8 bg-neutral-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neutral-200">4.9★</div>
              <div className="text-sm">User Rating</div>
            </div>
            <div className="w-px h-8 bg-neutral-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neutral-200">99.9%</div>
              <div className="text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </OptimizedAnimatedSection>
  )
}
