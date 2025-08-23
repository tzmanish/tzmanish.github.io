"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Calendar, TrendingUp } from "lucide-react"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  period: string
  technologies: string[]
  achievements: string[]
  liveUrl?: string
  githubUrl?: string
  isHighlighted?: boolean
}

export function ProjectCard({
  title,
  description,
  period,
  technologies,
  achievements,
  liveUrl,
  githubUrl,
  isHighlighted = false,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className={`card-hover-responsive enhanced-card ${isHighlighted ? "ring-2 ring-primary/20" : ""}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle
              className="text-xl hover:text-primary transition-colors cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {title}
            </CardTitle>
            <CardDescription className="text-base mt-1">{description}</CardDescription>
          </div>
          <Badge variant="outline" className="flex items-center gap-1 shrink-0">
            <Calendar className="w-3 h-3" />
            {period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="hover:bg-primary/10 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div
          className={`space-y-2 text-muted-foreground mb-4 transition-all duration-300 ${
            isExpanded ? "max-h-none" : "max-h-24 overflow-hidden"
          }`}
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-2">
              <TrendingUp className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>{achievement}</span>
            </div>
          ))}
        </div>

        {achievements.length > 2 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mb-4 text-primary hover:text-primary/80"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </Button>
        )}

        <div className="flex gap-2">
          {liveUrl && (
            <Button variant="outline" size="sm" asChild className="button-hover-responsivebg-transparent">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" asChild className="button-hover-responsivebg-transparent">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
