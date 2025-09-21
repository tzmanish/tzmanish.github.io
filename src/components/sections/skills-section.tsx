import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/common"

export function SkillsSection() {
  return (
    <AnimatedSection title="Technical Expertise" background="muted">
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
    </AnimatedSection>
  )
}
