// Skills categories and items
export const SKILLS = {
  "Programming Languages": [
    "Java",
    "Python", 
    "JavaScript",
    "TypeScript",
    "SQL"
  ],
  "Frameworks & Libraries": [
    "Spring Boot",
    "Spring Framework",
    "Apache Spark",
    "React",
    "Next.js",
    "Hibernate",
    "JPA"
  ],
  "Databases": [
    "Oracle",
    "PostgreSQL",
    "MongoDB",
    "Redis"
  ],
  "Tools & Technologies": [
    "Apache Kafka",
    "Docker",
    "Kubernetes",
    "Git",
    "Jenkins",
    "Maven",
    "Gradle"
  ],
  "Cloud & DevOps": [
    "AWS",
    "CI/CD",
    "Microservices",
    "RESTful APIs",
    "Linux/Unix"
  ]
} as const

// Experience data
export const EXPERIENCE_DATA = [
  {
    id: "sg-backend-engineer",
    company: "Societe Generale",
    position: "Backend Software Engineer",
    duration: "2019 - Present",
    description: [
      "Developed and maintained large-scale financial systems handling millions of transactions",
      "Implemented regulatory compliance solutions for global banking operations",
      "Optimized database queries resulting in 40% performance improvement",
      "Led migration of legacy systems to microservices architecture"
    ],
    technologies: ["Java", "Spring Boot", "Oracle", "Apache Spark", "Kafka"]
  }
  // Add more experiences as needed
] as const

// Projects data
export const PROJECTS_DATA = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and TypeScript",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://manishkushwaha.dev",
    sourceUrl: "https://github.com/tzmanish/portfolio"
  }
  // Add more projects as needed
] as const
