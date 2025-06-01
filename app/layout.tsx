import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ProjectFlow - Manage Projects Like a Pro",
  description:
    "Streamline your workflow, boost team productivity, and deliver projects on time with our intuitive project management platform.",
  keywords: "project management, team collaboration, productivity, workflow, task management",
  authors: [{ name: "ProjectFlow Team" }],
  openGraph: {
    title: "ProjectFlow - Manage Projects Like a Pro",
    description:
      "Streamline your workflow, boost team productivity, and deliver projects on time with our intuitive project management platform.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
