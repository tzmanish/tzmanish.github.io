import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"
import { AnimatedSection } from "@/components/common"

export function EducationSection() {
  return (
    <AnimatedSection id="education" title="Education" background="muted">
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
    </AnimatedSection>
  )
}
