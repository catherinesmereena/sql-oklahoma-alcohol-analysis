"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Palette, Save, Trash2 } from "lucide-react"
import { useColorTheme } from "@/app/contexts/color-theme-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CustomTheme {
  id: string
  name: string
  primary: string
  secondary: string
  accent: string
}

export function CustomThemeCreator() {
  const { colorTheme, setColorTheme, saveCustomTheme, deleteCustomTheme, customThemes } = useColorTheme()
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"create" | "manage">("create")
  const [themeName, setThemeName] = useState("")
  const [primaryColor, setPrimaryColor] = useState("#E6E6FA") // lavender
  const [secondaryColor, setSecondaryColor] = useState("#FFD1DC") // blush
  const [accentColor, setAccentColor] = useState("#98FB98") // mint
  const [error, setError] = useState("")
  const [previewStyle, setPreviewStyle] = useState({})

  // Update preview when colors change
  useEffect(() => {
    setPreviewStyle({
      background: `linear-gradient(135deg, ${primaryColor}50, ${secondaryColor}40, ${accentColor}50)`,
    })
  }, [primaryColor, secondaryColor, accentColor])

  const handleSaveTheme = () => {
    if (!themeName.trim()) {
      setError("Please enter a theme name")
      return
    }

    // Check if name already exists
    if (customThemes.some((theme) => theme.name.toLowerCase() === themeName.toLowerCase())) {
      setError("A theme with this name already exists")
      return
    }

    saveCustomTheme({
      id: `custom-${Date.now()}`,
      name: themeName,
      primary: primaryColor,
      secondary: secondaryColor,
      accent: accentColor,
    })

    // Reset form
    setThemeName("")
    setError("")
    setActiveTab("manage")
  }

  const handleApplyTheme = (themeId: string) => {
    setColorTheme(themeId)
    setOpen(false)
  }

  const handleDeleteTheme = (themeId: string) => {
    deleteCustomTheme(themeId)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-[color:var(--theme-primary)] dark:border-[color:var(--theme-primary)]/70"
        >
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Create custom theme</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Custom Color Themes</DialogTitle>
          <DialogDescription>Create and manage your own custom color themes for the portfolio.</DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "create" | "manage")} className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="create">Create Theme</TabsTrigger>
            <TabsTrigger value="manage">Manage Themes</TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-4 py-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="theme-name" className="text-right">
                  Theme Name
                </Label>
                <Input
                  id="theme-name"
                  value={themeName}
                  onChange={(e) => setThemeName(e.target.value)}
                  placeholder="My Custom Theme"
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="primary-color" className="text-right">
                  Primary Color
                </Label>
                <div className="col-span-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: primaryColor }}></div>
                  <Input
                    id="primary-color"
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-full h-10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="secondary-color" className="text-right">
                  Secondary Color
                </Label>
                <div className="col-span-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: secondaryColor }}></div>
                  <Input
                    id="secondary-color"
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-full h-10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="accent-color" className="text-right">
                  Accent Color
                </Label>
                <div className="col-span-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: accentColor }}></div>
                  <Input
                    id="accent-color"
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-full h-10"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Label className="mb-2 block">Preview</Label>
              <div className="h-24 rounded-lg overflow-hidden" style={previewStyle}>
                <div className="h-full w-full flex items-center justify-center">
                  <div className="bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-lg">
                    <span className="font-medium">Theme Preview</span>
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </TabsContent>

          <TabsContent value="manage" className="py-4">
            {customThemes.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>You haven't created any custom themes yet.</p>
                <Button variant="link" onClick={() => setActiveTab("create")}>
                  Create your first theme
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {customThemes.map((theme) => (
                  <div
                    key={theme.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex">
                        <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: theme.primary }}></div>
                        <div
                          className="w-4 h-4 rounded-full border -ml-1"
                          style={{ backgroundColor: theme.secondary }}
                        ></div>
                        <div
                          className="w-4 h-4 rounded-full border -ml-1"
                          style={{ backgroundColor: theme.accent }}
                        ></div>
                      </div>
                      <span className="font-medium">{theme.name}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleApplyTheme(theme.id)}
                        className={colorTheme === theme.id ? "border-green-500 text-green-600" : ""}
                      >
                        {colorTheme === theme.id ? "Applied" : "Apply"}
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleDeleteTheme(theme.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        <DialogFooter>
          {activeTab === "create" && (
            <Button onClick={handleSaveTheme} className="gap-2">
              <Save className="h-4 w-4" /> Save Theme
            </Button>
          )}
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
