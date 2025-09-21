import { Mail, Linkedin, MapPin } from "lucide-react"
import { AnimatedSection, ContactForm } from "@/components/common"

export function ContactSection() {
  return (
    <AnimatedSection id="contact" title="Get In Touch" background="primary">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-xl font-semibold mb-4">Let's discuss your project</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're looking for a backend engineer, need consultation on system architecture, or want to
            collaborate on an interesting project, I'd love to hear from you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:tzmanish97@gmail.com" className="hover:text-primary transition-colors">
                    tzmanish97@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-muted-foreground">
                  <a
                    href="https://linkedin.com/in/tzman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    linkedin.com/in/tzman
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-muted-foreground">Bengaluru, India</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </AnimatedSection>
  )
}
