import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const viewport: Viewport = {
  themeColor: "#2196F3",
}

export const metadata: Metadata = {
  title: "Susanin - Откройте новый маршрут, создайте впечатления",
  description: "Susanin — сервис планирования маршрутов в путешествии, основанный на коллективе из местных жителей",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192" },
      { url: "/icon-512.png", sizes: "512x512" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Susanin",
    statusBarStyle: "default",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}