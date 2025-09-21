import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/common/animated-section"

export function AboutSection() {
  return (
    <AnimatedSection id="about" title="About Me">
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
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Data Pipelines</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Mentees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">58%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  )
}
