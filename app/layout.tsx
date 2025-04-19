import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ColorThemeProvider } from "./contexts/color-theme-context"
// Import the ForcePastelTheme component
import { ForcePastelTheme } from "./components/force-pastel-theme"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Catherine Smereena Dommaty | Portfolio",
  description:
    "Data Science and Analytics professional with expertise in search relevance, ranking models, and NLP-based query understanding.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ColorThemeProvider>
            <ForcePastelTheme />
            {children}
          </ColorThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
