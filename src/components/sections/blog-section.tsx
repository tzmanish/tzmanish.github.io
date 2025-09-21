"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import { AnimatedSection } from "@/components/common/animated-section"
import type { BlogPost } from "@/types"

const blogPosts: BlogPost[] = [
  {
    id: "optimizing-spring-boot-financial-systems",
    title: "Optimizing Spring Boot Applications for Financial Systems",
    excerpt:
      "Learn how to build high-performance, scalable Spring Boot applications that can handle millions of financial transactions while maintaining regulatory compliance.",
    publishedAt: "2024-01-15",
    readTime: 8,
    tags: ["Spring Boot", "Performance", "Finance"],
    url: "/not-found",
  },
  {
    id: "azure-cost-optimization-strategies",
    title: "Cost Optimization Strategies in Azure Cloud",
    excerpt:
      "Practical techniques I used to reduce cloud costs by 58% at Societe Generale, including resource optimization, monitoring, and architectural improvements.",
    publishedAt: "2023-12-10",
    readTime: 6,
    tags: ["Azure", "Cost Optimization", "DevOps"],
    url: "/not-found",
  },
  {
    id: "scalable-data-pipelines-spark",
    title: "Building Scalable Data Pipelines with Apache Spark",
    excerpt:
      "A comprehensive guide to designing and implementing data processing pipelines that can handle billions of records efficiently and reliably.",
    publishedAt: "2023-11-22",
    readTime: 10,
    tags: ["Apache Spark", "Big Data", "Architecture"],
    url: "/not-found",
  },
  {
    id: "mentoring-junior-developers-lessons",
    title: "Mentoring Junior Developers: Lessons from 5 Years",
    excerpt:
      "Key insights and strategies for effectively mentoring junior developers, fostering growth, and building strong engineering teams in fast-paced environments.",
    publishedAt: "2023-10-08",
    readTime: 5,
    tags: ["Leadership", "Mentoring", "Career"],
    url: "/not-found",
  },
]

export function BlogSection() {
  const COLLAPSED_COUNT = 2
  const [showAll, setShowAll] = useState(false)
  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, COLLAPSED_COUNT)

  return (
    <AnimatedSection id="blog" title="Latest Articles">
      <div className="space-y-8">
        <div className="text-center mb-8">
          <p className="text-lg text-muted-foreground">
            Sharing insights on backend engineering, cloud architecture, and team leadership
          </p>
        </div>

        <div className="grid gap-6">
          {displayedPosts.map((post, index) => (
            <Card key={post.id} className="enhanced-card card-hover-responsive group">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-base leading-relaxed">{post.excerpt}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime} min read
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.map((tag) => (
                      <Badge key={tag} variant="secondary" className="hover:bg-primary/10 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group-hover:text-primary transition-colors"
                    onClick={() => window.location.href = post.url}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="button-hover-responsivebg-transparent"
              onClick={() => setShowAll(true)}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              View All Articles
            </Button>
          </div>
        )}
      </div>
    </AnimatedSection>
  )
}
