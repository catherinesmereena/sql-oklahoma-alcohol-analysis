"use client"

import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useColorTheme } from "@/app/contexts/color-theme-context"
import { CustomThemeCreator } from "./custom-theme-creator"

export function ColorThemeToggle() {
  const { colorTheme, setColorTheme, customThemes } = useColorTheme()

  return (
    <div className="flex items-center gap-2">
      <CustomThemeCreator />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="border-[color:var(--theme-primary)] dark:border-[color:var(--theme-primary)]/70"
          >
            <Palette className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle color theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setColorTheme("pastel")} className="flex items-center gap-2">
            <div className="flex">
              <div className="w-3 h-3 rounded-full bg-lavender"></div>
              <div className="w-3 h-3 rounded-full bg-blush -ml-1"></div>
              <div className="w-3 h-3 rounded-full bg-mint -ml-1"></div>
            </div>
            <span>Pastel</span>
            {colorTheme === "pastel" && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setColorTheme("ocean")} className="flex items-center gap-2">
            <div className="flex">
              <div className="w-3 h-3 rounded-full bg-sky-400"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500 -ml-1"></div>
              <div className="w-3 h-3 rounded-full bg-cyan-300 -ml-1"></div>
            </div>
            <span>Ocean</span>
            {colorTheme === "ocean" && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setColorTheme("forest")} className="flex items-center gap-2">
            <div className="flex">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 -ml-1"></div>
              <div className="w-3 h-3 rounded-full bg-lime-300 -ml-1"></div>
            </div>
            <span>Forest</span>
            {colorTheme === "forest" && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setColorTheme("sunset")} className="flex items-center gap-2">
            <div className="flex">
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-orange-500 -ml-1"></div>
              <div className="w-3 h-3 rounded-full bg-rose-400 -ml-1"></div>
            </div>
            <span>Sunset</span>
            {colorTheme === "sunset" && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setColorTheme("neon")} className="flex items-center gap-2">
            <div className="flex">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#00ff41" }}></div>
              <div className="w-3 h-3 rounded-full -ml-1" style={{ backgroundColor: "#ff00ff" }}></div>
              <div className="w-3 h-3 rounded-full -ml-1" style={{ backgroundColor: "#00ffff" }}></div>
            </div>
            <span>Neon</span>
            {colorTheme === "neon" && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>

          {customThemes.length > 0 && (
            <>
              <DropdownMenuSeparator />
              {customThemes.map((theme) => (
                <DropdownMenuItem
                  key={theme.id}
                  onClick={() => setColorTheme(theme.id)}
                  className="flex items-center gap-2"
                >
                  <div className="flex">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.primary }}></div>
                    <div className="w-3 h-3 rounded-full -ml-1" style={{ backgroundColor: theme.secondary }}></div>
                    <div className="w-3 h-3 rounded-full -ml-1" style={{ backgroundColor: theme.accent }}></div>
                  </div>
                  <span>{theme.name}</span>
                  {colorTheme === theme.id && <span className="ml-auto">✓</span>}
                </DropdownMenuItem>
              ))}
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
