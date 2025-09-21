import { Mail, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/40 bg-gradient-to-t from-muted/10 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/tzman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/tzmanish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:tzmanish97@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground/80 font-light tracking-wide">
              © {new Date().getFullYear()} Manish Kumar Kushwaha
            </p>
            <p className="text-xs text-muted-foreground/60 font-light">
              Crafted with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
