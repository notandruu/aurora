"use client"

import { motion } from "framer-motion"
import { Check, Zap, Crown } from "lucide-react"
import { OptimizedAnimatedSection } from "@/components/optimized-animated-section"
import { FluidButton } from "@/components/fluid-button"
import { AuroraOrb } from "@/components/aurora-orb"

interface PricingSectionProps {
  id?: string // Added id prop interface
}

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for getting started",
    icon: Zap,
    features: ["Basic AI search", "Tab organization", "Simple automation", "5 AI queries/day", "Standard support"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "12",
    description: "For power users and professionals",
    icon: Crown,
    features: [
      "Unlimited AI queries",
      "Advanced automation",
      "Priority support",
      "Custom workflows",
      "Team collaboration",
      "Advanced analytics",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
]

export function PricingSection({ id }: PricingSectionProps) {
  return (
    <OptimizedAnimatedSection
      id={id} // Pass id prop to OptimizedAnimatedSection
      className="relative py-32 bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>

      {/* Aurora Orbs */}
      <AuroraOrb
        size={400}
        orbImage="/images/aurora-orb-3.png"
        className="top-10 -left-20 w-40 h-40 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px]"
        intensity="medium"
        scrollEffect="rotate"
        scrollSpeed={0.3}
      />
      <AuroraOrb
        size={350}
        orbImage="/images/aurora-orb-7.png"
        className="bottom-20 -right-20 w-36 h-36 sm:w-56 sm:h-56 lg:w-[350px] lg:h-[350px]"
        intensity="low"
        scrollEffect="parallax"
        scrollSpeed={0.5}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-light mb-6 text-neutral-200"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Simple <em>pricing</em>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className={`relative bg-neutral-900/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular ? "border-purple-500/50 ring-1 ring-purple-500/20" : "border-neutral-800/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <plan.icon
                  className={`w-12 h-12 mx-auto mb-4 ${plan.popular ? "text-purple-400" : "text-neutral-400"}`}
                />
                <h3 className="text-2xl font-semibold text-neutral-200 mb-2">{plan.name}</h3>
                <p className="text-neutral-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-neutral-200">${plan.price}</span>
                  <span className="text-neutral-400 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <FluidButton
                className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700" : ""}`}
              >
                {plan.cta}
              </FluidButton>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-400 mb-4">All plans include 14-day free trial • No credit card required</p>
          <div className="flex items-center justify-center space-x-6 text-sm text-neutral-500">
            <span>✓ Cancel anytime</span>
            <span>✓ Data export</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </OptimizedAnimatedSection>
  )
}
