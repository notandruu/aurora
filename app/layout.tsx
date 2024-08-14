import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aurora - Agentic Assistant for Google Chrome",
  description:
    "Transform your browsing experience with Aurora, the AI-powered Chrome extension that learns, adapts, and anticipates your needs. Boost focus, streamline workflow, and turn curiosity into momentum.",
  keywords: [
    "Chrome extension",
    "AI assistant",
    "productivity",
    "browser automation",
    "intelligent browsing",
    "workflow optimization",
    "agentic AI",
  ],
  authors: [{ name: "Aurora Team" }],
  creator: "Aurora",
  publisher: "Aurora",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/aurora-logo-new.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aurora-extension.com",
    siteName: "Aurora",
    title: "Aurora - Agentic Assistant for Google Chrome",
    description:
      "Transform your browsing experience with Aurora, the AI-powered Chrome extension that learns, adapts, and anticipates your needs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aurora - AI-Powered Chrome Extension",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AuroraExtension",
    creator: "@AuroraExtension",
    title: "Aurora - Agentic Assistant for Google Chrome",
    description:
      "Transform your browsing experience with Aurora, the AI-powered Chrome extension that learns, adapts, and anticipates your needs.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://aurora-extension.com",
  },
  verification: {
    google: "your-actual-google-verification-code-here",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/aurora-logo-new.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/aurora-logo-new.png" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
