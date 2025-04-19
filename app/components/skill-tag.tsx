"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

interface SkillTagProps {
  name: string
  level: SkillLevel
  color?: string
}

export default function SkillTag({ name, level, color = "lavender" }: SkillTagProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Define size based on skill level
  const getSize = () => {
    switch (level) {
      case "Expert":
        return "text-sm font-medium py-1.5 px-3"
      case "Advanced":
        return "text-sm py-1.5 px-3"
      case "Intermediate":
        return "text-xs py-1 px-2.5"
      case "Beginner":
        return "text-xs py-0.5 px-2"
      default:
        return "text-xs py-1 px-2.5"
    }
  }

  // Define background color based on color prop
  const getBackgroundColor = () => {
    switch (color) {
      case "lavender":
        return isHovered
          ? "bg-lavender/40 dark:bg-lavender/30 text-gray-800 dark:text-white"
          : "bg-lavender/20 dark:bg-lavender/10 text-gray-700 dark:text-gray-200"
      case "blush":
        return isHovered
          ? "bg-blush/40 dark:bg-blush/30 text-gray-800 dark:text-white"
          : "bg-blush/20 dark:bg-blush/10 text-gray-700 dark:text-gray-200"
      case "mint":
        return isHovered
          ? "bg-mint/40 dark:bg-mint/30 text-gray-800 dark:text-white"
          : "bg-mint/20 dark:bg-mint/10 text-gray-700 dark:text-gray-200"
      case "purple":
        return isHovered
          ? "bg-purple-200/70 dark:bg-purple-900/50 text-gray-800 dark:text-white"
          : "bg-purple-200/40 dark:bg-purple-900/30 text-gray-700 dark:text-gray-200"
      default:
        return isHovered
          ? "bg-lavender/40 dark:bg-lavender/30 text-gray-800 dark:text-white"
          : "bg-lavender/20 dark:bg-lavender/10 text-gray-700 dark:text-gray-200"
    }
  }

  return (
    <Badge
      className={cn("transition-all duration-300 cursor-default mb-2", getSize(), getBackgroundColor())}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variant="outline"
    >
      {name}
      {isHovered && <span className="ml-1.5 text-xs opacity-80">• {level}</span>}
    </Badge>
  )
}
