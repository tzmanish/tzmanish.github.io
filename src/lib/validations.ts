import { z } from "zod"

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
})

// Project schema
export const projectSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  technologies: z.array(z.string()).min(1, "At least one technology is required"),
  demoUrl: z.string().url().optional(),
  sourceUrl: z.string().url().optional(),
  imageUrl: z.string().url().optional(),
})

// Experience schema
export const experienceSchema = z.object({
  id: z.string(),
  company: z.string().min(1, "Company is required"),
  position: z.string().min(1, "Position is required"),
  duration: z.string().min(1, "Duration is required"),
  description: z.array(z.string()),
  technologies: z.array(z.string()).optional(),
})

// Type inference from schemas
export type ContactFormData = z.infer<typeof contactFormSchema>
export type Project = z.infer<typeof projectSchema>
export type Experience = z.infer<typeof experienceSchema>
