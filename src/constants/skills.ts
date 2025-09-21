import type { SkillGroup } from '@/types'

// Skills categories and items
export const SKILLS: SkillGroup[] = [
    {
        id: "programming-languages_frameworks",
        name: "Programming Languages & Frameworks",
        skills: ["Java 21", "Spring Boot 3.x", "Python", "JavaScript", "TypeScript"]
    },
    {
        id: "frontend_web",
        name: "Frontend & Web",
        skills: ["Next.js", "React", "HTML/CSS", "Tailwind CSS"]
    },
    {
        id: "databases",
        name: "Databases",
        skills: ["MySQL", "PostgreSQL", "Oracle DB"]
    },
    {
        id: "big-data_analytics",
        name: "Big Data & Analytics",
        skills: ["Hive QL", "Spark", "Hadoop", "Airflow"]
    },
    {
        id: "cloud_devops",
        name: "Cloud & DevOps",
        skills: ["Azure AKS", "Azure HDInsight", "Docker", "Kubernetes", "CI/CD", "Git"]
    },
    {
        id: "scripting_system-administration",
        name: "Scripting & System Administration",
        skills: ["Bash Scripting", "PowerShell", "SSH"]
    },
    {
        id: "development-tools",
        name: "Development Tools",
        skills: ["VS Code", "DBeaver", "Eclipse"]
    },
]