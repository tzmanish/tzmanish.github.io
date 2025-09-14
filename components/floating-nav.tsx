"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, User, GraduationCap, Briefcase, Code, BookOpen, Mail } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code },
  { id: "blog", label: "Blog", icon: BookOpen },
  { id: "contact", label: "Contact", icon: Mail },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      const scrollY = window.scrollY
      // Show navigation earlier on mobile
      const threshold = isMobile ? 200 : 300
      setIsVisible(scrollY > threshold)

      // Track scrolling state for desktop auto-hide
      if (!isMobile) {
        setIsScrolling(true)
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false)
        }, 1500) // Hide after 1.5 seconds of no scrolling
      }

      // Find active section
      const sections = navItems.map((item) => document.getElementById(item.id))
      const currentSection = sections.find((section) => {
        if (!section) return false
        const rect = section.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [isMobile])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // On mobile, show horizontal nav at bottom instead of vertical on side
  if (isMobile) {
    return (
      <nav
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-md px-2 py-1.5 shadow-sm">
          <div className="flex gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="icon"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-9 h-9 rounded-sm transition-all duration-300 active:scale-95 ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                  title={item.label}
                >
                  <Icon className="w-4 h-4" />
                </Button>
              )
            })}
          </div>
        </div>
      </nav>
    )
  }

  // Desktop version - vertical nav on right side
  return (
    <nav
      className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${
        isVisible && isScrolling ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
      }`}
    >
      <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-md p-1.5 shadow-sm">
        <div className="flex flex-col gap-0.5">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="icon"
                onClick={() => scrollToSection(item.id)}
                className={`w-8 h-8 rounded-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                title={item.label}
              >
                <Icon className="w-4 h-4" />
              </Button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
