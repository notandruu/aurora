"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Globe, User, MessageCircle } from "lucide-react"

const searchSuggestions = [
  "Best restaurants near me",
  "How to learn React in 2024",
  "Climate change solutions",
  "Summarize this article",
]

const demoCycles = [
  {
    query: "Best restaurants near me",
    chromeResults: [
      {
        title: "OpenTable - Restaurant Reservations",
        url: "https://www.opentable.com",
        snippet: "Find and book restaurants near you. View menus, photos, and reviews.",
      },
      {
        title: "Yelp - Restaurant Reviews & Ratings",
        url: "https://www.yelp.com/restaurants",
        snippet: "Discover local restaurants with reviews, photos, and ratings from real diners.",
      },
    ],
    auroraResponse: {
      thinking: "Finding nearby restaurants...",
      response: "Found 3 great spots! The Garden Bistro has availability at 7 PM. Should I book it?",
      suggestions: ["Book table", "See menu", "Get directions"],
    },
  },
  {
    query: "How to learn React in 2024",
    chromeResults: [
      {
        title: "React – A JavaScript library for building user interfaces",
        url: "https://react.dev",
        snippet: "The library for web and native user interfaces. React lets you build user interfaces.",
      },
      {
        title: "Learn React - Codecademy",
        url: "https://www.codecademy.com/learn/react-101",
        snippet: "Learn React with interactive lessons and projects. Build real applications.",
      },
    ],
    auroraResponse: {
      thinking: "Creating learning path...",
      response: "Start with React docs, then build 3 projects. I can create a study schedule for you.",
      suggestions: ["Create schedule", "Find projects", "Join community"],
    },
  },
  {
    query: "Climate change solutions",
    chromeResults: [
      {
        title: "Climate Change Solutions | Project Drawdown",
        url: "https://drawdown.org/solutions",
        snippet: "The most comprehensive plan ever proposed to reverse global warming.",
      },
      {
        title: "Climate Solutions - NASA Climate Change",
        url: "https://climate.nasa.gov/solutions",
        snippet: "Learn about climate change solutions including renewable energy and carbon capture.",
      },
    ],
    auroraResponse: {
      thinking: "Analyzing climate data...",
      response: "Top solutions: renewable energy, better agriculture, carbon capture. Want personal actions?",
      suggestions: ["Personal tips", "Career paths", "Local groups"],
    },
  },
  {
    query: "Best laptop for coding",
    chromeResults: [
      {
        title: "Best Programming Laptops 2024 - TechRadar",
        url: "https://www.techradar.com/best/programming-laptops",
        snippet: "Top laptops for developers including MacBook Pro, ThinkPad, and Dell XPS.",
      },
      {
        title: "Developer Laptop Guide - Stack Overflow",
        url: "https://stackoverflow.blog/laptop-guide",
        snippet: "What developers look for in a laptop: performance, battery, keyboard quality.",
      },
    ],
    auroraResponse: {
      thinking: "Comparing specs...",
      response: "MacBook Pro M3 leads for battery life. ThinkPad X1 for Linux. What's your budget?",
      suggestions: ["Under $1500", "Premium options", "Compare specs"],
    },
  },
]

export function SearchInterface() {
  const [currentCycle, setCurrentCycle] = useState(0)
  const [phase, setPhase] = useState<
    "suggestions" | "typing" | "searching" | "results" | "aurora-thinking" | "aurora-response"
  >("suggestions")
  const [typedQuery, setTypedQuery] = useState("")

  useEffect(() => {
    const cycleTimer = setInterval(() => {
      const cycle = demoCycles[currentCycle]

      switch (phase) {
        case "suggestions":
          setTimeout(() => setPhase("typing"), 1500)
          break

        case "typing":
          if (typedQuery.length < cycle.query.length) {
            setTimeout(() => {
              setTypedQuery(cycle.query.slice(0, typedQuery.length + 1))
            }, 60)
          } else {
            setTimeout(() => setPhase("searching"), 300)
          }
          break

        case "searching":
          setTimeout(() => setPhase("results"), 1000)
          break

        case "results":
          setTimeout(() => setPhase("aurora-thinking"), 1200)
          break

        case "aurora-thinking":
          setTimeout(() => setPhase("aurora-response"), 800)
          break

        case "aurora-response":
          setTimeout(() => {
            setCurrentCycle((prev) => (prev + 1) % demoCycles.length)
            setPhase("suggestions")
            setTypedQuery("")
          }, 2500)
          break
      }
    }, 100)

    return () => clearInterval(cycleTimer)
  }, [currentCycle, phase, typedQuery])

  const currentDemo = demoCycles[currentCycle]

  return (
    <div className="bg-white h-[500px] flex">
      {/* Main Chrome Browser - 3/4 width */}
      <div className="flex-1 flex flex-col">
        {/* Chrome Search Bar */}
        <div className="bg-white border-b border-neutral-200 p-4">
          <div className="flex items-center space-x-3 p-3 border border-neutral-300 rounded-full bg-white shadow-sm">
            <Search className="w-4 h-4 text-neutral-500" />
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search Google or type a URL"
                value={typedQuery}
                readOnly
                className="w-full outline-none text-neutral-900 placeholder-neutral-500 bg-transparent pointer-events-none text-sm"
              />
              {phase === "typing" && typedQuery.length < currentDemo.query.length && (
                <motion.div
                  className="absolute right-0 top-0 w-0.5 h-4 bg-blue-500"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Chrome Content */}
        <div className="flex-1 bg-white p-4 overflow-hidden">
          <AnimatePresence mode="wait">
            {phase === "suggestions" && (
              <motion.div
                key="suggestions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-light text-neutral-800 mb-2">Search Google</h2>
                  <p className="text-neutral-600">or type a URL</p>
                </div>

                <div className="max-w-md mx-auto">
                  <p className="text-sm text-neutral-600 mb-3">Popular searches:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {searchSuggestions.slice(0, 3).map((suggestion, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200"
                      >
                        <Search className="w-4 h-4 text-neutral-400" />
                        <span className="text-sm text-neutral-700">{suggestion}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {phase === "searching" && (
              <motion.div
                key="searching"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center py-16"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
                  />
                  <p className="text-neutral-600">Searching...</p>
                </div>
              </motion.div>
            )}

            {(phase === "results" || phase === "aurora-thinking" || phase === "aurora-response") && (
              <motion.div
                key={`results-${currentCycle}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <div className="text-sm text-neutral-600 mb-4">About 2,340,000 results (0.45 seconds)</div>

                {currentDemo.chromeResults.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center space-x-2 text-sm">
                      <Globe className="w-4 h-4 text-neutral-500" />
                      <span className="text-green-700">{result.url}</span>
                    </div>
                    <h3 className="text-xl text-blue-600 hover:underline cursor-pointer">{result.title}</h3>
                    <p className="text-neutral-700 text-sm leading-relaxed">{result.snippet}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Aurora AI Assistant Sidebar - 1/4 width */}
      <div className="w-80 bg-neutral-900 border-l border-neutral-800 flex flex-col">
        {/* Aurora Header */}
        <div className="p-4 border-b border-neutral-800 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 text-sm">Aurora Assistant</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-neutral-400">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Aurora Content - Fixed height, no scroll */}
        <div className="flex-1 p-4 flex items-center justify-center overflow-hidden">
          <div className="w-full">
            <AnimatePresence mode="wait">
              {(phase === "suggestions" || phase === "typing" || phase === "searching" || phase === "results") && (
                <motion.div
                  key="waiting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <MessageCircle className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                  <p className="text-neutral-400 text-sm">I'm here to help with your search</p>
                </motion.div>
              )}

              {phase === "aurora-thinking" && (
                <motion.div
                  key="thinking"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-neutral-300 text-sm mb-3">{currentDemo.auroraResponse.thinking}</p>
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-purple-500 rounded-full"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {phase === "aurora-response" && (
                <motion.div
                  key={`response-${currentCycle}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700 mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                      </div>
                      <div className="flex-1">
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-neutral-200 text-sm leading-relaxed mb-3"
                        >
                          {currentDemo.auroraResponse.response}
                        </motion.p>

                        <div className="space-y-2">
                          {currentDemo.auroraResponse.suggestions.map((suggestion, index) => (
                            <motion.button
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.1 }}
                              className="block w-full text-left px-3 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg text-xs text-neutral-300 transition-colors border border-neutral-600"
                            >
                              {suggestion}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-2 bg-neutral-800 rounded-full border border-neutral-700">
                      <User className="w-3 h-3 text-neutral-400" />
                      <span className="text-xs text-neutral-400">Powered by Aurora AI</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Aurora Input - Fixed at bottom */}
        <div className="p-4 border-t border-neutral-800 flex-shrink-0">
          <div className="flex items-center space-x-2 p-3 bg-neutral-800 border border-neutral-700 rounded-lg">
            <MessageCircle className="w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Ask Aurora anything..."
              className="flex-1 bg-transparent outline-none text-neutral-300 placeholder-neutral-500 text-sm pointer-events-none"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  )
}
