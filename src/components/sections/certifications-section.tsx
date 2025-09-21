import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"
import { AnimatedSection } from "@/components/common"

export function CertificationsSection() {
  return (
    <AnimatedSection title="Certifications & Awards" background="muted">
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
    </AnimatedSection>
  )
}
