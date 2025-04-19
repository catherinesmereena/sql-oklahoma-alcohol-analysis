"use client"

import { useEffect } from "react"
import { useColorTheme } from "../contexts/color-theme-context"

export function ForcePastelTheme() {
  const { setColorTheme } = useColorTheme()

  useEffect(() => {
    // Force the theme to pastel
    setColorTheme("pastel")
    localStorage.setItem("color-theme", "pastel")

    // Remove any neon-specific classes from the document
    document.documentElement.classList.remove("theme-neon")
    document.documentElement.classList.add("theme-pastel")
  }, [setColorTheme])

  return null
}
