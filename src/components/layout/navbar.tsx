"use client"

import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Home, User, GraduationCap, Briefcase, Code, BookOpen, Mail, ArrowUp } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

// Configuration
const NAV_ITEMS = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "blog", label: "Blog", icon: BookOpen },
    { id: "contact", label: "Contact", icon: Mail },
] as const

const CONSTANTS = {
    SCROLL_HIDE_DELAY: 200, // ms
    RIGHT_EDGE_THRESHOLD: 100, // px
    ACTIVE_SECTION_OFFSET: 100, // px
    MOBILE_SCROLL_THRESHOLD: 100, // px
} as const

// Custom hook for navigation state management
function useNavigationState() {
    const [activeSection, setActiveSection] = useState("hero")
    const [isVisible, setIsVisible] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isNearRightEdge, setIsNearRightEdge] = useState(false)
    const isMobile = useIsMobile()

    // Scroll and mouse event handlers
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY
        setIsVisible(isMobile ? scrollY > CONSTANTS.MOBILE_SCROLL_THRESHOLD : true)

        if (!isMobile) {
            setIsScrolling(prev => true) // Always set to true on scroll
        }

        // Active section detection
        const sections = NAV_ITEMS.map((item) => document.getElementById(item.id))
        const currentSection = sections.find((section) => {
            if (!section) return false
            const rect = section.getBoundingClientRect()
            return rect.top <= CONSTANTS.ACTIVE_SECTION_OFFSET && rect.bottom >= CONSTANTS.ACTIVE_SECTION_OFFSET
        })

        if (currentSection) {
            setActiveSection(currentSection.id)
        }
    }, [isMobile])

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isMobile) {
            const isNearEdge = window.innerWidth - e.clientX <= CONSTANTS.RIGHT_EDGE_THRESHOLD
            setIsNearRightEdge(isNearEdge)
        }
    }, [isMobile])

    const handleMouseEnter = useCallback(() => setIsHovered(true), [])
    const handleMouseLeave = useCallback(() => setIsHovered(false), [])

    // Auto-hide timeout
    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout | null = null

        if (!isMobile) {
            if (isScrolling) {
                // Set timeout to hide navigation after delay
                scrollTimeout = setTimeout(() => {
                    // Double-check conditions when timeout fires
                    setIsScrolling(prev => {
                        // Only hide if still not hovered and not near right edge
                        return (!isHovered && !isNearRightEdge) ? false : prev
                    })
                }, CONSTANTS.SCROLL_HIDE_DELAY)
            }
        }

        return () => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout)
            }
        }
    }, [isMobile, isScrolling, isHovered, isNearRightEdge])

    // Additional safety: force hide when conditions are met
    useEffect(() => {
        if (!isMobile && isScrolling && !isHovered && !isNearRightEdge) {
            const forceHideTimeout = setTimeout(() => {
                setIsScrolling(false)
            }, CONSTANTS.SCROLL_HIDE_DELAY + 100) // Slightly longer delay as backup

            return () => clearTimeout(forceHideTimeout)
        }
    }, [isMobile, isScrolling, isHovered, isNearRightEdge])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })
        
        if (!isMobile) {
            window.addEventListener("mousemove", handleMouseMove, { passive: true })
        }

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [handleScroll, handleMouseMove, isMobile])

    return {
        activeSection,
        isVisible,
        isScrolling,
        isHovered,
        isNearRightEdge,
        isMobile,
        handleMouseEnter,
        handleMouseLeave,
    }
}

// Navigation utilities
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

export function Navbar() {
    const {
        activeSection,
        isVisible,
        isScrolling,
        isHovered,
        isNearRightEdge,
        isMobile,
        handleMouseEnter,
        handleMouseLeave,
    } = useNavigationState()

    // Determine visibility for desktop navigation
    const shouldShowDesktop = isVisible && (isScrolling || isHovered || isNearRightEdge)

    if (isMobile) {
        return <MobileNavigation {...{ activeSection, isVisible, scrollToSection, scrollToTop }} />
    }

    return <DesktopNavigation {...{ activeSection, shouldShowDesktop, handleMouseEnter, handleMouseLeave, scrollToSection, scrollToTop }} />
}

// Mobile Navigation Component
function MobileNavigation({
    activeSection,
    isVisible,
    scrollToSection,
    scrollToTop,
}: {
    activeSection: string
    isVisible: boolean
    scrollToSection: (id: string) => void
    scrollToTop: () => void
}) {
    return (
        <nav
            className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
            }`}
        >
            <div className="bg-background/95 backdrop-blur-md border-t border-border/60 px-4 py-3 shadow-lg">
                <div className="flex justify-center items-center gap-2 max-w-2xl mx-auto">
                    {/* Navigation Items */}
                    <div className="flex gap-1">
                        {NAV_ITEMS.map((item) => {
                            const Icon = item.icon
                            return (
                                <Button
                                    key={item.id}
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-9 h-9 rounded-lg transition-all duration-300 active:scale-95 ${
                                        activeSection === item.id
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
                    <div className="w-px h-6 bg-border/40" />
                    
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

// Desktop Navigation Component
function DesktopNavigation({
    activeSection,
    shouldShowDesktop,
    handleMouseEnter,
    handleMouseLeave,
    scrollToSection,
    scrollToTop,
}: {
    activeSection: string
    shouldShowDesktop: boolean
    handleMouseEnter: () => void
    handleMouseLeave: () => void
    scrollToSection: (id: string) => void
    scrollToTop: () => void
}) {
    return (
        <>
            {/* Navigation Menu */}
            <nav
                className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${
                    shouldShowDesktop ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-md p-1.5 shadow-sm">
                    <div className="flex flex-col gap-0.5">
                        {NAV_ITEMS.map((item) => {
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

            {/* Back to Top Button */}
            <Button
                onClick={scrollToTop}
                variant="ghost"
                size="icon"
                className={`fixed z-40 rounded-md bg-background/60 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md hover:bg-background/80 transition-all duration-300 bottom-4 right-4 w-9 h-9 ${
                    shouldShowDesktop ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
                }`}
                aria-label="Back to top"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ArrowUp className="w-3.5 h-3.5" />
            </Button>
        </>
    )
}
