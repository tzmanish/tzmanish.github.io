import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import { ThemeProvider, ThemeColorMeta } from "@/components/common"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Manish Kumar Kushwaha - Backend Software Engineer | Java, Spring Boot Expert",
  description:
    "Backend Software Engineer with 5+ years experience in large-scale financial systems at Societe Generale. Expert in Java, Spring Boot, Apache Spark, and regulatory compliance. IIT Roorkee graduate specializing in scalable, high-performance systems.",
  keywords: [
    "Backend Engineer",
    "Java Developer",
    "Coder",
    "Societe Generale",
    "IIT Roorkee",
    "JNV Basdei"
  ],
  authors: [{ name: "Manish Kumar Kushwaha" }],
  creator: "Manish Kumar Kushwaha",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://manishkushwaha.dev",
    title: "Manish Kumar Kushwaha - Backend Software Engineer",
    description: "Backend Software Engineer with 5+ years experience in large-scale financial systems. Java, Spring Boot, and regulatory compliance expert.",
    siteName: "Manish Kumar Kushwaha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manish Kumar Kushwaha - Backend Software Engineer",
    description: "Backend Software Engineer with 5+ years experience in large-scale financial systems. Java, Spring Boot, and regulatory compliance expert.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta name="theme-color" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ThemeColorMeta />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
