/**
 * Environment configuration
 * Validates and provides type-safe access to environment variables
 */

const requiredEnvVars = {
  NODE_ENV: process.env.NODE_ENV || 'development',
} as const

const optionalEnvVars = {
  // Site configuration
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'Manish Kumar Kushwaha',
  
  // Analytics
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
  
  // Contact form
  NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
} as const

// Validate required environment variables
function validateEnv() {
  for (const [key, value] of Object.entries(requiredEnvVars)) {
    if (!value) {
      throw new Error(`Missing required environment variable: ${key}`)
    }
  }
}

// Only validate in production
if (process.env.NODE_ENV === 'production') {
  validateEnv()
}

export const env = {
  ...requiredEnvVars,
  ...optionalEnvVars,
  // Computed values
  isDevelopment: requiredEnvVars.NODE_ENV === 'development',
  isProduction: requiredEnvVars.NODE_ENV === 'production',
  isTest: requiredEnvVars.NODE_ENV === 'test',
} as const

export type Env = typeof env
