import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { AnimatedSection, TypingAnimation } from "@/components/common"
import { Logo } from "@/components/ui/logo"

export function HeroSection() {
  return (
    <AnimatedSection>
      <section id="hero" className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 hover:scale-110 transition-transform duration-300">
                <Logo />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif gradient-text">
              Manish Kumar Kushwaha
            </h1>
            <div className="text-xl text-muted-foreground mb-6 h-8">
              <TypingAnimation
                texts={[
                  "Backend Software Engineer",
                  "Java & Spring Boot Expert",
                  "Distributed Systems Designer",
                  "Cloud-Native Solutions Builder",
                  "Video Game Enthusiast",
                  "API Craftsman",
                  "Code Whisperer",
                  "Microservices Architect",
                  "Bug Detective",
                  "Scalable Systems Engineer",
                  "Optimization Obsessed",
                ]}
                className="font-medium"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center justify-center gap-1 hover:text-foreground transition-colors duration-300">
                <MapPin className="w-4 h-4 group-hover:text-foreground transition-colors duration-300" />
                Bengaluru, India
              </div>
              <div className="flex items-center justify-center gap-1 hover:text-foreground transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:tzmanish97@gmail.com" className="hover:underline">
                  tzmanish97@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-1 hover:text-foreground transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <a href="tel:+919456522346" className="hover:underline">
                  +91 9456522346
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button variant="outline" asChild className="hover-glow w-full sm:w-auto">
                <a href="https://linkedin.com/in/tzman" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild className="hover-glow w-full sm:w-auto">
                <a href="https://github.com/tzmanish" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="default" asChild className="hover-glow w-full sm:w-auto">
                <a href="/resume-manish-kushwaha.pdf" download>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
