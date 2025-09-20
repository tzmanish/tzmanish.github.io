"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
  title?: string
  background?: 'default' | 'muted' | 'primary'
}

export function AnimatedSection({ 
  children, 
  className = "", 
  delay = 80,
  id,
  title,
  background = 'default'
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const backgroundClasses = {
    default: '',
    muted: 'bg-muted/30',
    primary: 'bg-primary/5'
  }

  // If no id or title provided, render as before (for custom sections like hero)
  if (!id && !title) {
    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${className}`}
      >
        {children}
      </div>
    )
  }

  // Render with section structure
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <section id={id} className={`py-16 px-4 ${backgroundClasses[background]} ${className}`}>
        <div className="max-w-4xl mx-auto">
          {title && (
            <div className="relative text-center mb-16">
              <div className="inline-flex items-center gap-4 group">
                <div className="h-px w-8 bg-muted-foreground/30 group-hover:bg-primary/60 transition-colors duration-500"></div>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground group-hover:text-primary transition-colors duration-300 font-serif">
                  {title}
                </h2>
                <div className="h-px w-8 bg-muted-foreground/30 group-hover:bg-primary/60 transition-colors duration-500"></div>
              </div>
            </div>
          )}
          {children}
        </div>
      </section>
    </div>
  )
}
