"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Mail, FileText, Clock, User, CheckCircle, Circle, Bell, Star } from "lucide-react"
import { FluidButton } from "@/components/fluid-button"

const tasks = [
  {
    title: "Review Q4 budget proposal",
    time: "2:00 PM",
    status: "pending",
    type: "meeting",
    priority: "high",
  },
  {
    title: "Send follow-up emails",
    time: "3:30 PM",
    status: "completed",
    type: "email",
    priority: "medium",
  },
  {
    title: "Prepare presentation slides",
    time: "4:00 PM",
    status: "in-progress",
    type: "document",
    priority: "high",
  },
  {
    title: "Team standup meeting",
    time: "5:00 PM",
    status: "pending",
    type: "meeting",
    priority: "low",
  },
]

const emails = [
  {
    from: "Sarah Chen",
    subject: "Project Update - Q4 Goals",
    time: "10 min ago",
    unread: true,
    priority: "high",
    preview: "Hi team, I wanted to share the latest updates on our Q4 objectives...",
  },
  {
    from: "Marketing Team",
    subject: "Campaign Performance Report",
    time: "1 hour ago",
    unread: true,
    priority: "medium",
    preview: "This week's campaign metrics show a 23% increase in engagement...",
  },
  {
    from: "John Smith",
    subject: "Re: Budget Approval",
    time: "2 hours ago",
    unread: false,
    priority: "low",
    preview: "Thanks for the quick turnaround on the budget review...",
  },
]

export function ProductivityDemo() {
  const [activeTab, setActiveTab] = useState<"schedule" | "inbox">("schedule")

  return (
    <div className="bg-white h-[500px] flex flex-col">
      {/* Tab Navigation */}
      <div className="flex border-b border-neutral-200">
        <button
          onClick={() => setActiveTab("schedule")}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium transition-colors ${
            activeTab === "schedule"
              ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Today's Schedule</span>
        </button>
        <button
          onClick={() => setActiveTab("inbox")}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium transition-colors ${
            activeTab === "inbox"
              ? "text-green-600 border-b-2 border-green-600 bg-green-50"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
        >
          <Mail className="w-4 h-4" />
          <span>Smart Inbox</span>
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">2</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === "schedule" ? (
          <div className="h-full flex flex-col p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-900">Today, December 14</h3>
              <div className="text-sm text-neutral-500">4 tasks</div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3">
              {tasks.map((task, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center space-x-3 p-3 rounded-lg border transition-all ${
                    task.status === "completed"
                      ? "bg-green-50 border-green-200"
                      : task.status === "in-progress"
                        ? "bg-yellow-50 border-yellow-200"
                        : "bg-neutral-50 border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <button className="flex-shrink-0">
                    {task.status === "completed" ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5 text-neutral-400 hover:text-blue-500" />
                    )}
                  </button>

                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-medium ${
                        task.status === "completed" ? "line-through text-neutral-500" : "text-neutral-900"
                      }`}
                    >
                      {task.title}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      <span className="text-xs text-neutral-500">{task.time}</span>
                      {task.priority === "high" && (
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">High</span>
                      )}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    {task.type === "meeting" && <User className="w-4 h-4 text-blue-500" />}
                    {task.type === "email" && <Mail className="w-4 h-4 text-green-500" />}
                    {task.type === "document" && <FileText className="w-4 h-4 text-purple-500" />}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-2">
                <Bell className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Comet suggests:</p>
                  <p className="text-sm text-blue-700">
                    Block 30 minutes before your 2 PM meeting to review the budget proposal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-900">Priority Inbox</h3>
              <FluidButton variant="outline" size="sm">
                Mark all read
              </FluidButton>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3">
              {emails.map((email, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-sm ${
                    email.unread
                      ? "bg-blue-50 border-blue-200 hover:bg-blue-100"
                      : "bg-neutral-50 border-neutral-200 hover:bg-neutral-100"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2 min-w-0 flex-1">
                      <span
                        className={`text-sm font-medium truncate ${
                          email.unread ? "text-blue-900" : "text-neutral-700"
                        }`}
                      >
                        {email.from}
                      </span>
                      {email.unread && <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>}
                      {email.priority === "high" && <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />}
                    </div>
                    <span className="text-xs text-neutral-500 flex-shrink-0">{email.time}</span>
                  </div>

                  <p
                    className={`text-sm mb-2 truncate ${
                      email.unread ? "font-medium text-neutral-900" : "text-neutral-600"
                    }`}
                  >
                    {email.subject}
                  </p>

                  <p className="text-xs text-neutral-500 line-clamp-2">{email.preview}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-green-900">Comet can:</p>
                  <p className="text-sm text-green-700">
                    Draft replies, schedule sends, and prioritize important messages automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
