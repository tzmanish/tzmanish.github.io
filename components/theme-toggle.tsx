"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme()
  const isMobile = useIsMobile()

  const handleThemeChange = () => {
    document.documentElement.classList.add("changing-theme")
    setTheme()
    setTimeout(() => {
      document.documentElement.classList.remove("changing-theme")
    }, 100)
  }

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={`fixed top-4 right-4 z-50 rounded-md bg-background/60 backdrop-blur-sm border border-border/50 shadow-sm ${
          isMobile 
            ? "w-10 h-10" // Larger touch target on mobile
            : "w-9 h-9"
        }`}
      >
        <Sun className={`${isMobile ? "h-5 w-5" : "h-4 w-4"}`} />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeChange}
      className={`fixed top-4 right-4 z-50 rounded-md bg-background/60 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md hover:bg-background/80 transition-all duration-300 ${
        isMobile 
          ? "w-10 h-10 active:scale-95" // Larger touch target and active feedback on mobile
          : "w-9 h-9"
      }`}
    >
      <Sun
        className={`transition-all duration-300 ${
          isMobile ? "h-5 w-5" : "h-4 w-4"
        } ${
          theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`absolute transition-all duration-300 ${
          isMobile ? "h-5 w-5" : "h-4 w-4"
        } ${
          theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
