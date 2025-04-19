"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type BuiltInTheme = "pastel" | "ocean" | "forest" | "sunset" | "neon"

interface CustomTheme {
  id: string
  name: string
  primary: string
  secondary: string
  accent: string
}

interface ColorThemeContextType {
  colorTheme: string
  setColorTheme: (theme: string) => void
  customThemes: CustomTheme[]
  saveCustomTheme: (theme: CustomTheme) => void
  deleteCustomTheme: (themeId: string) => void
  isCustomTheme: boolean
  currentThemeColors: {
    primary: string
    secondary: string
    accent: string
  }
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined)

const BUILT_IN_THEMES = {
  pastel: {
    primary: "#e6e6fa", // lavender
    secondary: "#ffd1dc", // blush
    accent: "#98fb98", // mint
  },
  ocean: {
    primary: "#38bdf8", // sky-400
    secondary: "#3b82f6", // blue-500
    accent: "#67e8f9", // cyan-300
  },
  forest: {
    primary: "#10b981", // emerald-500
    secondary: "#4ade80", // green-400
    accent: "#bef264", // lime-300
  },
  sunset: {
    primary: "#fbbf24", // amber-400
    secondary: "#f97316", // orange-500
    accent: "#fb7185", // rose-400
  },
  neon: {
    primary: "#00ff41", // neon green
    secondary: "#ff00ff", // neon pink
    accent: "#00ffff", // neon cyan
  },
}

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
  // Get the saved theme from localStorage or default to "pastel"
  const [colorTheme, setColorTheme] = useState<string>("pastel")
  const [customThemes, setCustomThemes] = useState<CustomTheme[]>([])
  const [isCustomTheme, setIsCustomTheme] = useState(false)
  const [currentThemeColors, setCurrentThemeColors] = useState(BUILT_IN_THEMES.pastel)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load saved theme and custom themes on mount
  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== "undefined") {
      // Load custom themes
      const savedCustomThemes = localStorage.getItem("custom-themes")
      if (savedCustomThemes) {
        try {
          setCustomThemes(JSON.parse(savedCustomThemes))
        } catch (e) {
          console.error("Error parsing custom themes:", e)
        }
      }

      // Load active theme
      const savedTheme = localStorage.getItem("color-theme")
      if (savedTheme) {
        setColorTheme(savedTheme)
      } else {
        setColorTheme("pastel")
        localStorage.setItem("color-theme", "pastel")
      }

      setIsInitialized(true)
    }
  }, [])

  // Update theme colors when theme changes
  useEffect(() => {
    if (!isInitialized) return

    // Check if it's a built-in theme
    if (Object.keys(BUILT_IN_THEMES).includes(colorTheme)) {
      setIsCustomTheme(false)
      setCurrentThemeColors(BUILT_IN_THEMES[colorTheme as BuiltInTheme])
    } else {
      // It's a custom theme
      const customTheme = customThemes.find((theme) => theme.id === colorTheme)
      if (customTheme) {
        setIsCustomTheme(true)
        setCurrentThemeColors({
          primary: customTheme.primary,
          secondary: customTheme.secondary,
          accent: customTheme.accent,
        })
      } else {
        // Fallback to default if theme not found
        setColorTheme("pastel")
        setIsCustomTheme(false)
        setCurrentThemeColors(BUILT_IN_THEMES.pastel)
      }
    }

    // Save theme to localStorage
    localStorage.setItem("color-theme", colorTheme)

    // Apply theme class to the document for built-in themes
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove(
        "theme-pastel",
        "theme-ocean",
        "theme-forest",
        "theme-sunset",
        "theme-neon",
      )

      if (!isCustomTheme && Object.keys(BUILT_IN_THEMES).includes(colorTheme)) {
        document.documentElement.classList.add(`theme-${colorTheme}`)
      }

      // Apply custom theme colors directly as CSS variables
      document.documentElement.style.setProperty("--theme-primary", currentThemeColors.primary)
      document.documentElement.style.setProperty("--theme-secondary", currentThemeColors.secondary)
      document.documentElement.style.setProperty("--theme-accent", currentThemeColors.accent)
      document.documentElement.style.setProperty("--theme-gradient-from", currentThemeColors.primary)
      document.documentElement.style.setProperty("--theme-gradient-via", currentThemeColors.secondary)
      document.documentElement.style.setProperty("--theme-gradient-to", currentThemeColors.accent)
    }
  }, [colorTheme, customThemes, isCustomTheme, currentThemeColors, isInitialized])

  // Save custom theme
  const saveCustomTheme = (theme: CustomTheme) => {
    const updatedThemes = [...customThemes, theme]
    setCustomThemes(updatedThemes)
    localStorage.setItem("custom-themes", JSON.stringify(updatedThemes))
    setColorTheme(theme.id) // Apply the new theme immediately
  }

  // Delete custom theme
  const deleteCustomTheme = (themeId: string) => {
    const updatedThemes = customThemes.filter((theme) => theme.id !== themeId)
    setCustomThemes(updatedThemes)
    localStorage.setItem("custom-themes", JSON.stringify(updatedThemes))

    // If the deleted theme was active, switch to default
    if (colorTheme === themeId) {
      setColorTheme("pastel")
    }
  }

  return (
    <ColorThemeContext.Provider
      value={{
        colorTheme,
        setColorTheme,
        customThemes,
        saveCustomTheme,
        deleteCustomTheme,
        isCustomTheme,
        currentThemeColors,
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  )
}

export function useColorTheme() {
  const context = useContext(ColorThemeContext)
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider")
  }
  return context
}
