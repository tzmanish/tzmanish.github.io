export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  sourceUrl?: string
  imageUrl?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string[]
  technologies?: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  duration: string
  description?: string
  grade?: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialUrl?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  publishedAt: string
  readTime: number
  url: string
  tags?: string[]
}
