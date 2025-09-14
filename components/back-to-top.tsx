"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const toggleVisibility = () => {
      // Show earlier on mobile for better UX
      const threshold = isMobile ? 200 : 300
      if (window.pageYOffset > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Track scrolling state for desktop auto-hide
      if (!isMobile) {
        setIsScrolling(true)
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false)
        }, 1500) // Hide after 1.5 seconds of no scrolling
      }
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      clearTimeout(scrollTimeout)
    }
  }, [isMobile])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      variant="ghost"
      size="icon"
      className={`fixed z-40 rounded-md bg-background/60 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md hover:bg-background/80 transition-all duration-300 ${
        isMobile 
          ? "bottom-4 right-4 w-11 h-11 active:scale-95" // Larger touch target and active feedback on mobile
          : "bottom-4 right-4 w-9 h-9"
      } ${
        isMobile 
          ? (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none")
          : (isVisible && isScrolling ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none")
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className={`${isMobile ? "w-4 h-4" : "w-3.5 h-3.5"}`} />
    </Button>
  )
}
