import { AnimatedSection, ProjectCard } from "@/components/common"

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" title="Featured Projects">
      <div className="space-y-8">
        <ProjectCard
          title="Shivganga Online Donation Platform"
          description="Full-stack donation platform with administration dashboard"
          period="Dec 2022 - Dec 2023"
          technologies={["Angular", "Spring Boot", "MySQL", "Nginx", "Razorpay", "JWT"]}
          achievements={[
            "Delivered donation platform increasing engagement by 47% for nonprofit Shivganga",
            "Engineered end-to-end payment integration using Razorpay with secure transaction handling",
            "Implemented robust REST APIs with JWT-based authentication and role-based access control",
            "Configured and deployed on dedicated Unix-based VPS with Nginx reverse proxy for improved performance",
            "Built comprehensive admin dashboard for donation tracking and user management",
          ]}
          liveUrl="https://shivganga-demo.example.com"
          githubUrl="https://github.com/tzmanish/shivganga-platform"
          isHighlighted={true}
        />

        <ProjectCard
          title="Financial Reporting Automation Suite"
          description="Enterprise-scale regulatory reporting system for financial compliance"
          period="Mar 2020 - Present"
          technologies={["Java", "Spring Boot", "Apache Spark", "Azure", "Kubernetes", "MySQL"]}
          achievements={[
            "Built scalable reporting system processing 1.7B+ annual regulatory reports",
            "Optimized batch processing reducing runtime from 7h to 3h, saving €2,000/month in cloud costs",
            "Implemented data quality controls ensuring 99.9% accuracy in financial reporting",
            "Led team of 5 developers in delivering multi-year compliance initiative",
          ]}
          githubUrl="https://github.com/tzmanish/financial-reporting-suite"
        />

        <ProjectCard
          title="Real-time Trade Lifecycle Monitor"
          description="High-performance system for monitoring trade events and lifecycle management"
          period="Jan 2021 - Dec 2022"
          technologies={["Java", "Apache Kafka", "Redis", "PostgreSQL", "Docker"]}
          achievements={[
            "Developed real-time monitoring system processing 1M+ trade events daily",
            "Implemented event-driven architecture with Apache Kafka for reliable message processing",
            "Built configurable alerting system reducing incident response time by 60%",
            "Integrated with existing trading systems via REST APIs and message queues",
          ]}
          liveUrl="https://trade-monitor-demo.example.com"
          githubUrl="https://github.com/tzmanish/trade-lifecycle-monitor"
        />
      </div>
    </AnimatedSection>
  )
}
