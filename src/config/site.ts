// Site configuration
export const SITE_CONFIG = {
  name: "Manish Kumar Kushwaha",
  title: "Backend Software Engineer | Java, Spring Boot Expert",
  description: "Backend Software Engineer with 5+ years experience in large-scale financial systems at Societe Generale. Expert in Java, Spring Boot, Apache Spark, and regulatory compliance.",
  url: "https://manishkushwaha.dev",
  author: {
    name: "Manish Kumar Kushwaha",
    email: "hello@manishkushwaha.dev",
    twitter: "@tzmanish",
    github: "tzmanish",
    linkedin: "manishkushwaha-dev"
  }
} as const

// Navigation links
export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" }
] as const

// Social links
export const SOCIAL_LINKS = {
  github: "https://github.com/tzmanish",
  linkedin: "https://linkedin.com/in/manishkushwaha-dev",
  twitter: "https://twitter.com/tzmanish",
  email: "mailto:hello@manishkushwaha.dev"
} as const
