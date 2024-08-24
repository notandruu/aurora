"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Mic, Search } from "lucide-react"
import { FluidButton } from "@/components/fluid-button"

const demoMessages = [
  { type: "user", content: "Help me find the best laptop for video editing under $2000" },
  {
    type: "ai",
    content: "I'll help you find the perfect laptop for video editing. Let me search and compare options for you...",
    actions: ["Searching Amazon", "Analyzing specs", "Reading reviews", "Comparing prices"],
  },
  {
    type: "ai",
    content:
      "Found 3 excellent options! The MacBook Pro M2 offers superior performance and battery life, while the ASUS ProArt provides great value with professional color accuracy. The Dell XPS 15 balances power and portability perfectly.",
  },
  {
    type: "ai",
    content:
      "Based on your video editing needs, I recommend the MacBook Pro M2. Should I add it to your cart or would you like to see more details?",
    suggestions: ["Add to cart", "Compare all three", "Show more options", "Check availability"],
  },
]

export function AIChatDemo() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [showActions, setShowActions] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentMessage < demoMessages.length - 1) {
        setIsTyping(true)
        setTimeout(() => {
          setCurrentMessage((prev) => prev + 1)
          setIsTyping(false)
          if (currentMessage === 0) setShowActions(true)
        }, 1500)
      } else {
        // Reset the demo
        setTimeout(() => {
          setCurrentMessage(0)
          setShowActions(false)
        }, 5000)
      }
    }, 3500)

    return () => clearInterval(timer)
  }, [currentMessage])

  return (
    <div className="bg-neutral-900 rounded-lg border border-neutral-800 h-[500px] flex flex-col">
      {/* Chat Header */}
      <div className="border-b border-neutral-800 p-4 flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
        </div>
        <div>
          <h3 className="font-semibold text-sm text-neutral-200">Aurora Assistant</h3>
          <p className="text-xs text-neutral-400">AI-powered shopping companion</p>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-neutral-400">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <AnimatePresence>
          {demoMessages.slice(0, currentMessage + 1).map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-lg p-3 ${
                  message.type === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-neutral-800 text-neutral-200 border border-neutral-700"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>

                {message.actions && showActions && (
                  <div className="mt-3 space-y-2">
                    {message.actions.map((action, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-center space-x-2 text-xs text-neutral-400"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span>{action}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {message.suggestions && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.suggestions.map((suggestion, i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-3 py-1 bg-neutral-700 hover:bg-neutral-600 rounded-full text-xs text-neutral-300 transition-colors"
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-neutral-800 p-4">
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-neutral-500 flex items-center">
            <Search className="w-4 h-4 mr-2 text-neutral-500" />
            Ask me anything about shopping...
          </div>
          <FluidButton variant="ghost" size="sm">
            <Mic className="w-4 h-4" />
          </FluidButton>
          <FluidButton size="sm">
            <Send className="w-4 h-4" />
          </FluidButton>
        </div>
      </div>
    </div>
  )
}
