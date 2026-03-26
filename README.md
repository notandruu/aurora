# Aurora

An AI browser extension that lets you chat with any webpage, PDF, or image without leaving your tab. Aurora connects to Claude Sonnet 4.6, GPT-4o, and Gemini 2.0 Flash through a persistent sidebar, builds a personal knowledge base from your highlights and saved content, and lets you query everything you have collected with a single prompt.

## Features

- **Chat with any content** - ask questions about the current webpage, a PDF, or an uploaded image directly from the sidebar
- **Multi-model support** - switch between Claude Sonnet 4.6, GPT-4o, and Gemini 2.0 Flash per session
- **Knowledge base** - highlights and saved content are indexed and searchable across sessions
- **Unified query** - query your entire collected knowledge base with one prompt
- **Prompt library** - built-in and custom prompt management for repeated workflows
- **Drag and drop** - drop files directly into the sidebar for instant analysis
- **Sidebar UI** - everything happens in-tab, no context switching

## Landing Page Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 19 + shadcn/ui + Radix UI |
| Styling | Tailwind CSS v3 |
| Language | TypeScript |
| Animations | Framer Motion |
| Fonts | Geist Sans + Geist Mono |

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).
