"use client"

import { motion, MotionConfig } from "framer-motion"
import { Download, Search, Brain, MessageSquare, Zap } from "lucide-react"
import { AuroraOrb } from "@/components/aurora-orb"
import { OptimizedAnimatedSection } from "@/components/optimized-animated-section"
import { FAQItem } from "@/components/faq-item"
import { FluidCard } from "@/components/fluid-card"
import { AnimatedText } from "@/components/animated-text"
import { OptimizedAuroraGlow } from "@/components/optimized-aurora-glow"
import { useOptimizedScrollAnimation } from "@/hooks/use-optimized-scroll"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { OptimizedEnhancedBrowserMockup } from "@/components/optimized-enhanced-browser-mockup"
import { ResizableNavigation } from "@/components/resizable-navigation"
import { useEffect } from "react"

const faqData = [
  {
    question: "What platforms does Aurora support?",
    answer:
      "Aurora is available as a Chrome extension for all platforms that support Chrome. Simply install it from the Chrome Web Store and start browsing smarter.",
  },
  {
    question: "How do I install Aurora?",
    answer:
      "Simply click 'Add to Chrome' and install Aurora from the Chrome Web Store. The setup process takes less than 30 seconds and Aurora will automatically integrate with your existing Chrome browser.",
  },
  {
    question: "What search engines does Aurora work with?",
    answer:
      "Aurora enhances your existing Chrome browsing experience by adding AI-powered features on top of any search engine you use, including Google, Bing, and DuckDuckGo.",
  },
  {
    question: "Is my data secure with Aurora?",
    answer:
      "Absolutely. Aurora processes most AI features locally in your browser and uses end-to-end encryption for any cloud features. We never sell your data or share it with third parties.",
  },
]

const features = [
  {
    icon: Brain,
    title: "AI-Powered Productivity",
    description:
      "Transform your digital workspace into an intelligent companion that learns, adapts, and anticipates. Aurora orchestrates your tasks with the grace of understanding your unique workflow.",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Search,
    title: "Intelligent Search",
    description:
      "Discover information with the elegance of thought itself. Aurora weaves together knowledge from across your digital universe, delivering insights that feel like intuition.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: MessageSquare,
    title: "Context Understanding",
    description:
      "Experience browsing that transcends the ordinary. Aurora perceives not just what you see, but what you seek, crafting experiences that feel effortlessly prescient.",
    color: "from-green-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Automate repetitive tasks and streamline your workflow",
    color: "from-orange-500 to-red-600",
  },
]

// Preload all orb images on component mount
const orbImages = [
  "/images/aurora-orb-1.png",
  "/images/aurora-orb-2.png",
  "/images/aurora-orb-3.png",
  "/images/aurora-orb-4.png",
  "/images/aurora-orb-5.png",
  "/images/aurora-orb-6.png",
  "/images/aurora-orb-7.png",
  "/images/aurora-orb-8.png",
  "/images/aurora-orb-9.png",
  "/images/aurora-orb-10.png",
]

export default function AuroraLanding() {
  const scrollY = useOptimizedScrollAnimation()

  // Preload all orb images immediately when component mounts
  useEffect(() => {
    orbImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-black text-neutral-200 overflow-x-hidden scroll-smooth">
        <ResizableNavigation />

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.1)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.1)_360deg)]"></div>
          </div>

          <AuroraOrb
            size={400}
            orbImage="/images/aurora-orb-4.png"
            className="top-20 -left-20 w-32 h-32 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]"
            intensity="high"
            scrollEffect="parallax"
            scrollSpeed={0.3}
          />
          <AuroraOrb
            size={300}
            orbImage="/images/aurora-orb-2.png"
            className="bottom-20 -right-10 w-28 h-28 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[300px] lg:h-[300px]"
            intensity="medium"
            scrollEffect="drift"
            scrollSpeed={0.5}
          />
          <AuroraOrb
            size={250}
            orbImage="/images/aurora-orb-9.png"
            className="top-1/3 right-1/4 hidden lg:block"
            intensity="low"
            scrollEffect="pulse"
            scrollSpeed={0.4}
          />

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 pt-40 pb-16">
            <AnimatedText delay={0.2} className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
              <span
                style={{
                  fontFamily: '"Playfair Display", "Times New Roman", serif',
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                <em
                  style={{
                    background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontStyle: "italic",
                  }}
                >
                  Aurora
                </em>{" "}
                <span style={{ fontWeight: 200 }}>is here</span>
              </span>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="mb-8"
              >
                <motion.button
                  className="group relative bg-white text-black hover:bg-neutral-50 rounded-full px-8 py-4 text-lg font-medium shadow-2xl border-2 border-white/20"
                  style={{
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: "-0.01em",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <span className="flex items-center">
                    <Download className="w-5 h-5 mr-3" />
                    Add to Chrome
                  </span>

                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/20 blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.button>
              </motion.div>
            </AnimatedText>

            <AnimatedText delay={0.4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="relative z-10 mt-32"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="max-w-5xl mx-auto">
                  <div className="relative">
                    <div
                      className="absolute rounded-2xl bg-neutral-800 border border-neutral-700 opacity-40"
                      style={{
                        top: 12,
                        left: 12,
                        right: 0,
                        bottom: 0,
                        filter: "blur(1px)",
                        transform: "translateZ(0)",
                      }}
                    />

                    <div
                      className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl border border-neutral-700 overflow-hidden"
                      style={{
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                        willChange: "transform",
                      }}
                    >
                      <div
                        className="bg-neutral-800/90 px-4 py-2 flex items-center space-x-3 border-b border-neutral-700/50"
                        style={{ height: "44px" }}
                      >
                        <div className="flex space-x-1.5">
                          <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                        </div>

                        <div className="flex-1 bg-neutral-700/50 rounded-md px-3 py-1 flex items-center border border-neutral-600/50">
                          <div className="mr-2 flex-shrink-0">
                            <OptimizedAuroraGlow size="sm" intensity="medium" />
                          </div>
                          <span className="text-neutral-300 text-xs truncate">aurora://demo</span>
                        </div>
                      </div>

                      <div className="relative pointer-events-none">
                        <video
                          className="w-full h-auto"
                          autoPlay
                          muted
                          loop
                          playsInline
                          disablePictureInPicture
                          controlsList="nodownload nofullscreen noremoteplayback"
                          style={{
                            maxHeight: "600px",
                            pointerEvents: "none",
                          }}
                        >
                          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CtSYQwWgD3v3HDe3HMRPnHbvGOk-kaXh3PummSve3zBthBpdmBguFtRkVS.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                        <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2 pointer-events-none">
                          <OptimizedAuroraGlow size="sm" intensity="low" />
                          <span
                            className="text-xs text-neutral-300"
                            style={{
                              fontFamily: '"Playfair Display", "Times New Roman", serif',
                              fontWeight: 300,
                              letterSpacing: "-0.01em",
                            }}
                          >
                            Aurora
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedText>
          </div>
        </section>

        {/* Core Features Section - Enhanced Elegant Design */}
        <OptimizedAnimatedSection id="features" className="relative py-48 bg-black overflow-hidden">
          {/* Enhanced Background Layers - Match Hero's Simplicity */}
          <div className="absolute inset-0">
            {/* Simple radial gradient like hero */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>

            {/* Simple conic gradient like hero */}
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.05)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.05)_360deg)]"></div>

            {/* Very subtle additional depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.08),transparent_50%)]"></div>
          </div>

          <AuroraOrb
            size={600}
            orbImage="/images/aurora-orb-3.png"
            className="top-0 -left-20 w-36 h-36 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:top-0 lg:-left-40 lg:w-[600px] lg:h-[600px]"
            intensity="high"
            scrollEffect="rotate"
            scrollSpeed={0.4}
          />
          <AuroraOrb
            size={450}
            orbImage="/images/aurora-orb-8.png"
            className="bottom-0 -right-32 w-32 h-32 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
            intensity="medium"
            scrollEffect="drift"
            scrollSpeed={0.6}
          />
          <AuroraOrb
            size={320}
            orbImage="/images/aurora-orb-5.png"
            className="top-1/3 right-1/5 w-28 h-28 md:w-48 md:h-48 lg:w-80 lg:h-80"
            intensity="low"
            scrollEffect="pulse"
            scrollSpeed={0.5}
          />
          <AuroraOrb
            size={280}
            orbImage="/images/aurora-orb-1.png"
            className="bottom-1/4 left-1/6 w-30 h-30 lg:block"
            intensity="low"
            scrollEffect="parallax"
            scrollSpeed={0.3}
          />
          <AuroraOrb
            size={200}
            orbImage="/images/aurora-orb-7.png"
            className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:block"
            intensity="low"
            scrollEffect="drift"
            scrollSpeed={0.8}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            {/* Header Section */}
            <div className="text-center mb-40">
              <AnimatedText delay={0.1}>
                <motion.h2
                  className="text-lg font-medium text-neutral-300 mb-8"
                  style={{
                    fontFamily: '"Playfair Display", "Times New Roman", serif',
                    fontWeight: 300,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Aurora is
                </motion.h2>
              </AnimatedText>

              <AnimatedText delay={0.2}>
                <h3
                  className="text-4xl md:text-5xl lg:text-6xl font-light mb-12 text-neutral-200"
                  style={{ fontFamily: "Georgia, serif", lineHeight: 0.9 }}
                >
                  <em>intelligent</em>
                </h3>
              </AnimatedText>

              <AnimatedText delay={0.3}>
                <p
                  className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-4xl mx-auto font-light"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  <em>
                    A companion that never forgets. With AI that understands your context and connects everything you
                    read, watch, or listen to, Aurora transforms the way you work and learn online.
                  </em>
                </p>
              </AnimatedText>
            </div>

            {/* First Feature - Effortless Capture */}
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-48">
              {/* Browser Demo - Mobile first, Desktop right */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="lg:col-span-7 lg:order-2 order-1"
              >
                <OptimizedEnhancedBrowserMockup url="aurora://capture" theme="dark">
                  <div className="bg-neutral-900 h-[500px]"></div>
                </OptimizedEnhancedBrowserMockup>
              </motion.div>

              {/* Text Content - Mobile second, Desktop left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="lg:col-span-5 lg:order-1 order-2 space-y-10"
              >
                <div className="space-y-8">
                  <h4
                    className="text-4xl md:text-5xl font-light text-neutral-200 leading-tight"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Effortless <em>Capture</em>
                  </h4>

                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-light">
                      <em className="text-neutral-300" style={{ fontFamily: "Georgia, serif" }}>
                        Turn moments into memory.
                      </em>{" "}
                      Aurora transforms your browsing into a living archive. Save YouTube videos, PDFs, podcasts,
                      articles, or notes in a click and watch them become part of your personal knowledgebase.
                    </p>

                    <div className="space-y-3 pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                        <p className="text-lg text-neutral-300 font-light" style={{ fontFamily: "Georgia, serif" }}>
                          <em>Seamless capture across formats</em>
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                        <p className="text-lg text-neutral-300 font-light" style={{ fontFamily: "Georgia, serif" }}>
                          <em>Auto-organization with zero effort</em>
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                        <p className="text-lg text-neutral-300 font-light" style={{ fontFamily: "Georgia, serif" }}>
                          <em>A knowledgebase that builds itself</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Second Feature - Synthesized Search */}
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-48">
              {/* Browser Demo - Mobile first, Desktop left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="lg:col-span-7 lg:order-1 order-1"
              >
                <OptimizedEnhancedBrowserMockup url="aurora://search" theme="dark">
                  <div className="bg-neutral-900 h-[500px]"></div>
                </OptimizedEnhancedBrowserMockup>
              </motion.div>

              {/* Text Content - Mobile second, Desktop right */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="lg:col-span-5 lg:order-2 order-2 space-y-10"
              >
                <div className="space-y-8">
                  <h4
                    className="text-4xl md:text-5xl font-light text-neutral-200 leading-tight"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Synthesized <em>Search</em>
                  </h4>

                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-light">
                      <em className="text-neutral-300" style={{ fontFamily: "Georgia, serif" }}>
                        Answers woven from everything you know.
                      </em>{" "}
                      Aurora doesn't just retrieve, it connects. Ask one question and Aurora draws insights from across
                      your saved universe: papers, podcasts, videos, and notes, all synthesized into clarity.
                    </p>

                    <div className="space-y-3 pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                        <p className="text-lg text-neutral-300 font-light" style={{ fontFamily: "Georgia, serif" }}>
                          <em>Cross-source understanding</em>
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                        <p className="text-lg text-neutral-300 font-light" style={{ fontFamily: "Georgia, serif" }}>
                          <em>AI-powered, grounded answers</em>
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                        <p className="text-lg text-neutral-300 font-light" style={{ fontFamily: "Georgia, serif" }}>
                          <em>Retrieval that feels like intuition</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Third Feature - Conversational Knowledgebase */}
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              {/* Browser Demo - Mobile first, Desktop right */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                className="lg:col-span-7 lg:order-2 order-1"
              >
                <OptimizedEnhancedBrowserMockup url="aurora://chat" theme="dark">
                  <div className="bg-neutral-900 h-[500px]"></div>
                </OptimizedEnhancedBrowserMockup>
              </motion.div>

              {/* Text Content - Mobile second, Desktop left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="lg:col-span-5 lg:order-1 order-2 space-y-10"
              >
                <div className="space-y-8">
                  <h4
                    className="text-4xl md:text-5xl font-light text-neutral-200 leading-tight"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Conversational <em>Knowledgebase</em>
                  </h4>

                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-light">
                      <em className="text-neutral-300" style={{ fontFamily: "Georgia, serif" }}>
                        Chat with your digital memory.
                      </em>{" "}
                      With Aurora Chat, your archive becomes a true assistant. Dive into research, follow up on notes,
                      or explore connections across everything you've saved as naturally as talking to a friend.
                    </p>

                    <div className="space-y-3 pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                        <p className="text-lg text-neutral-300 font-light" style={{ fontFamily: "Georgia, serif" }}>
                          <em>Conversational recall of your content</em>
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                        <p className="text-lg text-neutral-300 font-light" style={{ fontFamily: "Georgia, serif" }}>
                          <em>Deep, contextual understanding</em>
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                        <p className="text-lg text-neutral-300 font-light" style={{ fontFamily: "Georgia, serif" }}>
                          <em>Personalized answers that evolve with you</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </OptimizedAnimatedSection>

        {/* Testimonials Section */}
        <TestimonialsSection id="testimonials" />

        {/* Pricing Section */}
        <PricingSection id="pricing" />

        {/* FAQ Section */}
        <OptimizedAnimatedSection
          id="faq"
          className="relative py-32 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-blue-900/20"
        >
          <AuroraOrb
            size={250}
            orbImage="/images/aurora-orb-9.png"
            className="top-20 -left-20 w-40 h-40 sm:w-48 sm:h-48 md:left-20 lg:w-[250px] lg:h-[250px]"
            intensity="medium"
            scrollEffect="scale"
            scrollSpeed={0.3}
          />
          <AuroraOrb
            size={180}
            orbImage="/images/aurora-orb-7.png"
            className="bottom-20 right-20 hidden sm:block sm:w-36 sm:h-36 lg:w-[180px] lg:h-[180px]"
            intensity="low"
            scrollEffect="parallax"
            scrollSpeed={0.7}
          />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
            <AnimatedText className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-light text-neutral-200" style={{ fontFamily: "Georgia, serif" }}>
                <em>FAQ</em>
              </h2>
            </AnimatedText>

            <FluidCard className="space-y-0 bg-neutral-900/50 backdrop-blur-sm border-neutral-800/50 overflow-hidden">
              {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </FluidCard>
          </div>
        </OptimizedAnimatedSection>

        {/* Final CTA Section */}
        <OptimizedAnimatedSection className="relative py-32 bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_50%)]"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>

          <AuroraOrb
            size={400}
            orbImage="/images/aurora-orb-1.png"
            className="top-10 -right-20 w-48 h-48 sm:w-64 sm:h-64 md:right-10 lg:w-[400px] lg:h-[400px]"
            intensity="high"
            scrollEffect="drift"
            scrollSpeed={0.4}
          />
          <AuroraOrb
            size={300}
            orbImage="/images/aurora-orb-6.png"
            className="bottom-20 left-10 hidden sm:block sm:w-56 sm:h-56 lg:w-[300px] lg:h-[300px]"
            intensity="medium"
            scrollEffect="pulse"
            scrollSpeed={0.6}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <AnimatedText className="mb-16">
              <h2 className="text-4xl font-light mb-8 text-neutral-200">
                <span
                  style={{
                    fontFamily: '"Playfair Display", "Times New Roman", serif',
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Aurora
                </span>{" "}
                is the Chrome extension that thinks with you.
              </h2>
              <p className="text-xl text-neutral-400 mb-12 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
                <em>Boost your focus, streamline your workflow, and turn curiosity into momentum.</em>
              </p>
            </AnimatedText>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="mb-16"
              style={{ willChange: "transform, opacity" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="mb-8"
              >
                <motion.button
                  className="group relative bg-white text-black hover:bg-neutral-50 rounded-full px-8 py-4 text-lg font-medium shadow-2xl border-2 border-white/20"
                  style={{
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: "-0.01em",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <span className="flex items-center">
                    <Download className="w-5 h-5 mr-3" />
                    Add to Chrome
                  </span>

                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/20 blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </OptimizedAnimatedSection>

        {/* Footer */}
        <footer className="bg-black border-t border-neutral-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                style={{ willChange: "transform" }}
              >
                <OptimizedAuroraGlow size="lg" intensity="medium" />
                <span
                  className="text-xl font-semibold text-neutral-200"
                  style={{
                    fontFamily: '"Playfair Display", "Times New Roman", serif',
                    fontWeight: 300,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Aurora
                </span>
              </motion.div>
              <div className="text-sm text-neutral-500">© 2024 Aurora. All rights reserved.</div>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  )
}
