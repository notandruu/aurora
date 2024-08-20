"use client"

import type React from "react"
import { ArrowLeft, ArrowRight, RotateCcw, MoreHorizontal } from "lucide-react"

interface BrowserMockupProps {
  children: React.ReactNode
  url?: string
  className?: string
}

export function BrowserMockup({ children, url = "comet://new-tab", className = "" }: BrowserMockupProps) {
  return (
    <div className={`bg-neutral-900 rounded-xl overflow-hidden shadow-2xl ${className}`}>
      {/* Browser Header */}
      <div className="bg-neutral-800 px-4 py-3 flex items-center space-x-4">
        {/* Traffic Lights */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-neutral-700 rounded">
            <ArrowLeft className="w-4 h-4 text-neutral-400" />
          </button>
          <button className="p-1 hover:bg-neutral-700 rounded">
            <ArrowRight className="w-4 h-4 text-neutral-400" />
          </button>
          <button className="p-1 hover:bg-neutral-700 rounded">
            <RotateCcw className="w-4 h-4 text-neutral-400" />
          </button>
        </div>

        {/* URL Bar */}
        <div className="flex-1 bg-neutral-700 rounded-lg px-4 py-2 flex items-center">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mr-3 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-neutral-300 text-sm">{url}</span>
        </div>

        {/* Controls */}
        <button className="p-1 hover:bg-neutral-700 rounded">
          <MoreHorizontal className="w-4 h-4 text-neutral-400" />
        </button>
      </div>

      {/* Browser Content */}
      <div className="bg-white">{children}</div>
    </div>
  )
}
