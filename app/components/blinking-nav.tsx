"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavItemProps {
  href: string
  children: React.ReactNode
  isActive: boolean
}

function NavItem({ href, children, isActive }: NavItemProps) {
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        className={cn("transition-all duration-300", isActive && "bg-lavender/30 dark:bg-lavender/20 font-medium")}
      >
        {children}
      </Button>
    </Link>
  )
}

export default function BlinkingNav() {
  const [activeSection, setActiveSection] = useState("about")
  const [isBlinking, setIsBlinking] = useState(true)

  // Handle scroll to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Create blinking effect for 5 seconds when page loads
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev)
    }, 800)

    const timeout = setTimeout(() => {
      clearInterval(interval)
      setIsBlinking(false)
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
      <NavItem href="#about" isActive={activeSection === "about" && isBlinking}>
        About
      </NavItem>
      <NavItem href="#skills" isActive={activeSection === "skills" && isBlinking}>
        Skills
      </NavItem>
      <NavItem href="#projects" isActive={activeSection === "projects" && isBlinking}>
        Projects
      </NavItem>
      <NavItem href="#education" isActive={activeSection === "education" && isBlinking}>
        Education
      </NavItem>
      <NavItem href="#contact" isActive={activeSection === "contact" && isBlinking}>
        Get In Touch
      </NavItem>
    </div>
  )
}
