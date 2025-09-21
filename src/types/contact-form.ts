import { z } from "zod"

// Common validation schemas
export const emailSchema = z
  .string()
  .email("Please enter a valid email address")
  .max(100, "Email must be less than 100 characters")

export const nameSchema = z
  .string()
  .min(2, "Name must be at least 2 characters")
  .max(50, "Name must be less than 50 characters")

// Contact form validation schema
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
})

// Type inference from schema
export type ContactFormData = z.infer<typeof contactFormSchema>
