"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, User, GraduationCap, Briefcase, Code, BookOpen, Mail, ArrowUp } from "lucide-react"
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

export function Navbar() {
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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    // Mobile: Sticky footer navigation with integrated back to top
    if (isMobile) {
        return (
            <nav
                className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
                    }`}
            >
                <div className="bg-background/95 backdrop-blur-md border-t border-border/60 px-4 py-3 shadow-lg">
                    <div className="flex justify-center items-center gap-2 max-w-2xl mx-auto">
                        {/* Navigation Items */}
                        <div className="flex gap-1">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <Button
                                        key={item.id}
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => scrollToSection(item.id)}
                                        className={`w-9 h-9 rounded-lg transition-all duration-300 active:scale-95 ${activeSection === item.id
                                                ? "bg-primary text-primary-foreground shadow-md"
                                                : "hover:bg-muted text-muted-foreground hover:text-foreground"
                                            }`}
                                        title={item.label}
                                    >
                                        <Icon className="w-3.5 h-3.5" />
                                    </Button>
                                )
                            })}
                        </div>
                        
                        {/* Separator */}
                        <div className="w-px h-6 bg-border/40"></div>
                        
                        {/* Back to Top Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={scrollToTop}
                            className="w-9 h-9 rounded-lg transition-all duration-300 active:scale-95 hover:bg-muted text-muted-foreground hover:text-foreground"
                            title="Back to Top"
                        >
                            <ArrowUp className="w-3.5 h-3.5" />
                        </Button>
                    </div>
                </div>
            </nav>
        )
    }

    // Desktop: Vertical navigation on right side + separate back to top button
    return (
        <>
            {/* Desktop Navigation */}
            <nav
                className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${isVisible && isScrolling ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
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
                                    className={`w-8 h-8 rounded-sm transition-all duration-300 ${activeSection === item.id
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

            {/* Desktop Back to Top Button */}
            <Button
                onClick={scrollToTop}
                variant="ghost"
                size="icon"
                className={`fixed z-40 rounded-md bg-background/60 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md hover:bg-background/80 transition-all duration-300 bottom-4 right-4 w-9 h-9 ${isVisible && isScrolling ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                aria-label="Back to top"
            >
                <ArrowUp className="w-3.5 h-3.5" />
            </Button>
        </>
    )
}
