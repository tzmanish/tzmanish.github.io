import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, Award, TrendingUp } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { AnimatedSection } from "@/components/animated-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import { BlogSection } from "@/components/blog-section"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingNav } from "@/components/floating-nav"
import { TypingAnimation } from "@/components/typing-animation"
import { BackToTop } from "@/components/back-to-top"
import { Logo } from "@/components/ui/logo"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <FloatingNav />
      <ThemeToggle />
      <BackToTop />

      {/* Hero Section */}
      <AnimatedSection>
        <section id="hero" className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 hover:scale-110 transition-transform duration-300">
                  <Logo/>
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
              <div className="flex justify-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-1 hover:text-foreground transition-colors duration-300">
                  <MapPin className="w-4 h-4 group-hover:text-foreground transition-colors duration-300" />
                  Bengaluru, India
                </div>
                <div className="flex items-center gap-1 hover:text-foreground transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:tzmanish97@gmail.com" className="hover:underline">
                    tzmanish97@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-1 hover:text-foreground transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+919456522346" className="hover:underline">
                    +91 9456522346
                  </a>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="lg" asChild className="hover-glow">
                  <a href="https://linkedin.com/in/tzman" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="hover-glow">
                  <a href="https://github.com/tzmanish" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="default" size="lg" asChild className="hover-glow">
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

      {/* About Section */}
      <AnimatedSection>
        <section id="about" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-serif">About Me</h2>
            <Card className="mb-8 enhanced-card card-hover-responsive">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Backend Software Engineer with 5+ years' experience in large-scale, compliance-critical financial
                  systems. Proven mentor and cost optimizer, delivering scalable, secure, and high-performance reporting
                  platforms in regulated domains. Currently serving on the principal architect's core team at Societe
                  Generale, leading multi-year initiatives that process 1.7B+ annual reports.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1.7B+</div>
                    <div className="text-sm text-muted-foreground">Reports Processed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">58%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">€2K</div>
                    <div className="text-sm text-muted-foreground">Monthly Savings</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection>
        <section id="education" className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-serif">Education</h2>

            <Card className="mb-8 enhanced-card card-hover-responsive">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Academic Background
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-lg">Bachelor's Degree</h4>
                    <p className="text-muted-foreground font-medium">Indian Institute of Technology (IIT) Roorkee</p>
                    <p className="text-sm text-muted-foreground">2020 • 7.2 CGPA</p>
                  </div>
                  <div className="border-l-2 border-muted pl-4">
                    <h4 className="font-semibold">Higher Secondary (Class 12)</h4>
                    <p className="text-sm text-muted-foreground">Jawahar Navodaya Vidyalaya (JNV) Basdei</p>
                    <p className="text-sm text-muted-foreground">2013-14 • CBSE 93.4%</p>
                  </div>
                  <div className="border-l-2 border-muted pl-4">
                    <h4 className="font-semibold">Secondary (Class 10)</h4>
                    <p className="text-sm text-muted-foreground">Jawahar Navodaya Vidyalaya (JNV) Basdei</p>
                    <p className="text-sm text-muted-foreground">2011-12 • CBSE 9.4 CGPA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection>
        <section id="experience" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-serif">Professional Experience</h2>

            <Card className="mb-8 enhanced-card card-hover-responsive">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Specialist Software Engineer</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      Societe Generale (SG GSC)
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Mar 2020 - Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    Serving on the principal architect's core team to deliver a multi-year initiative unifying
                    regulatory reporting systems, streamlining logic, ensuring DRR compliance, and scaling processing
                    for 1.7B+ annual reports.
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    Led development of an order lifecycle reporting solution with the data engineering team, processing
                    1M+ trade events daily.
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    Reduced runtime (7h → 3h) and lowered cloud costs by 58%, saving €2,000/month by optimizing daily
                    batch processing of data from the central data lake.
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    Mentored junior developers in building a reporting application, providing design direction for the
                    configurable query builder, reviewing pull requests, and resolving technical blockers.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-serif">Technical Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="enhanced-card card-hover-responsive">
                <CardHeader>
                  <CardTitle className="text-lg">Programming</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      Java
                    </Badge>
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      Spring Boot
                    </Badge>
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      JavaScript
                    </Badge>
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      TypeScript
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="enhanced-card card-hover-responsive">
                <CardHeader>
                  <CardTitle className="text-lg">Data Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      MySQL
                    </Badge>
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      Hive QL
                    </Badge>
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      Spark
                    </Badge>
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      Hadoop
                    </Badge>
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      Airflow
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="enhanced-card card-hover-responsive">
                <CardHeader>
                  <CardTitle className="text-lg">Cloud & DevOps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      Azure AKS
                    </Badge>
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      Azure HDInsight
                    </Badge>
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      Docker
                    </Badge>
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      Kubernetes
                    </Badge>
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors">
                      Git
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection>
        <section id="projects" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-serif">Featured Projects</h2>

            <div className="space-y-8">
              <ProjectCard
                title="Shivganga Online Donation Platform"
                description="Full-stack donation platform with administration dashboard"
                period="Dec 2022 - Dec 2023"
                technologies={["Angular", "Spring Boot", "MySQL", "Nginx", "Razorpay", "JWT"]}
                achievements={[
                  "Delivered donation platform increasing engagement by 47% for nonprofit Shivganga",
                  "Engineered end-to-end payment integration using Razorpay with secure transaction handling",
                  "Implemented robust REST APIs with JWT-based authentication and role-based access control",
                  "Configured and deployed on dedicated Unix-based VPS with Nginx reverse proxy for improved performance",
                  "Built comprehensive admin dashboard for donation tracking and user management",
                ]}
                liveUrl="https://shivganga-demo.example.com"
                githubUrl="https://github.com/tzmanish/shivganga-platform"
                isHighlighted={true}
              />

              <ProjectCard
                title="Financial Reporting Automation Suite"
                description="Enterprise-scale regulatory reporting system for financial compliance"
                period="Mar 2020 - Present"
                technologies={["Java", "Spring Boot", "Apache Spark", "Azure", "Kubernetes", "MySQL"]}
                achievements={[
                  "Built scalable reporting system processing 1.7B+ annual regulatory reports",
                  "Optimized batch processing reducing runtime from 7h to 3h, saving €2,000/month in cloud costs",
                  "Implemented data quality controls ensuring 99.9% accuracy in financial reporting",
                  "Led team of 5 developers in delivering multi-year compliance initiative",
                ]}
                githubUrl="https://github.com/tzmanish/financial-reporting-suite"
              />

              <ProjectCard
                title="Real-time Trade Lifecycle Monitor"
                description="High-performance system for monitoring trade events and lifecycle management"
                period="Jan 2021 - Dec 2022"
                technologies={["Java", "Apache Kafka", "Redis", "PostgreSQL", "Docker"]}
                achievements={[
                  "Developed real-time monitoring system processing 1M+ trade events daily",
                  "Implemented event-driven architecture with Apache Kafka for reliable message processing",
                  "Built configurable alerting system reducing incident response time by 60%",
                  "Integrated with existing trading systems via REST APIs and message queues",
                ]}
                liveUrl="https://trade-monitor-demo.example.com"
                githubUrl="https://github.com/tzmanish/trade-lifecycle-monitor"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Blog Section */}
      <AnimatedSection>
        <section id="blog" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-serif">Latest Articles</h2>
            <BlogSection />
          </div>
        </section>
      </AnimatedSection>

      {/* Certifications Section */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-serif">Certifications & Awards</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="enhanced-card card-hover-responsive">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Professional Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Docker and Kubernetes ATP</h4>
                      <p className="text-sm text-muted-foreground">SpringPeople • Jan 2024</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Cloud Developer and DevOps Expert Level</h4>
                      <p className="text-sm text-muted-foreground">
                        SG Cloud Platform Extended Professional Services • Aug 2023
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="enhanced-card card-hover-responsive">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Awards & Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Spot Award - Data Quality Controls</h4>
                      <p className="text-sm text-muted-foreground">Societe Generale • Q4 2024</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Star of the Quarter</h4>
                      <p className="text-sm text-muted-foreground">Societe Generale • Q2 2023</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Spot Award - Azure Cost Optimization</h4>
                      <p className="text-sm text-muted-foreground">Societe Generale • Q1 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section id="contact" className="py-16 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-serif">Get In Touch</h2>
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
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Manish Kumar Kushwaha. Built with Next.js and Tailwind CSS.
            </div>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/tzman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/tzmanish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:tzmanish97@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
