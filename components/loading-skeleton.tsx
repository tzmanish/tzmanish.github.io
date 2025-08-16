import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Hero skeleton */}
      <div className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="w-20 h-20 bg-muted rounded-full mx-auto" />
          <div className="h-12 bg-muted rounded-lg max-w-md mx-auto" />
          <div className="h-6 bg-muted rounded max-w-sm mx-auto" />
          <div className="flex justify-center gap-4">
            <div className="h-10 w-24 bg-muted rounded" />
            <div className="h-10 w-24 bg-muted rounded" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="enhanced-card">
              <CardHeader>
                <div className="h-6 bg-muted rounded max-w-xs" />
                <div className="h-4 bg-muted rounded max-w-md" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded" />
                  <div className="h-4 bg-muted rounded max-w-3/4" />
                  <div className="h-4 bg-muted rounded max-w-1/2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
