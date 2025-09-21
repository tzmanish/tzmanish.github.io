export interface BlogPost {
  id: string
  title: string
  excerpt: string
  publishedAt: string
  readTime: number
  url: string
  tags?: string[]
}