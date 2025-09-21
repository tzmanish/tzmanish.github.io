import { ThemeToggle } from "@/components/common"
import { 
  BlogSection,
  HeroSection,
  AboutSection,
  EducationSection,
  ExperienceSection,
  SkillsSection,
  ProjectsSection,
  CertificationsSection,
  ContactSection
} from "@/components/sections"
import { ScrollProgress, Navbar, Footer } from "@/components/layout"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <ScrollProgress />
      <Navbar />
      <ThemeToggle />

      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <CertificationsSection />
      <ContactSection />
      
      <Footer />
    </div>
  )
}
