"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Optimizing Spring Boot Applications for Financial Systems",
    excerpt:
      "Learn how to build high-performance, scalable Spring Boot applications that can handle millions of financial transactions while maintaining regulatory compliance.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Spring Boot", "Performance", "Finance"],
    slug: "optimizing-spring-boot-financial-systems",
  },
  {
    title: "Cost Optimization Strategies in Azure Cloud",
    excerpt:
      "Practical techniques I used to reduce cloud costs by 58% at Societe Generale, including resource optimization, monitoring, and architectural improvements.",
    date: "2023-12-10",
    readTime: "6 min read",
    tags: ["Azure", "Cost Optimization", "DevOps"],
    slug: "azure-cost-optimization-strategies",
  },
  {
    title: "Building Scalable Data Pipelines with Apache Spark",
    excerpt:
      "A comprehensive guide to designing and implementing data processing pipelines that can handle billions of records efficiently and reliably.",
    date: "2023-11-22",
    readTime: "10 min read",
    tags: ["Apache Spark", "Big Data", "Architecture"],
    slug: "scalable-data-pipelines-spark",
  },
  {
    title: "Mentoring Junior Developers: Lessons from 5 Years",
    excerpt:
      "Key insights and strategies for effectively mentoring junior developers, fostering growth, and building strong engineering teams in fast-paced environments.",
    date: "2023-10-08",
    readTime: "5 min read",
    tags: ["Leadership", "Mentoring", "Career"],
    slug: "mentoring-junior-developers-lessons",
  },
]

export function BlogSection() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-lg text-muted-foreground">
          Sharing insights on backend engineering, cloud architecture, and team leadership
        </p>
      </div>

      <div className="grid gap-6">
        {blogPosts.map((post, index) => (
          <Card key={post.slug} className="enhanced-card card-hover-responsive group">
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
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="hover:bg-primary/10 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="group-hover:text-primary transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg" className="button-hover-responsivebg-transparent">
          <BookOpen className="w-4 h-4 mr-2" />
          View All Articles
        </Button>
      </div>
    </div>
  )
}
