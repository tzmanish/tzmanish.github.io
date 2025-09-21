import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, TrendingUp } from "lucide-react"
import { AnimatedSection } from "@/components/common"

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" title="Professional Experience">
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
    </AnimatedSection>
  )
}
