import { Link } from "@/types/link"

export const ABOUT = {
    name: "Manish Kumar Kushwaha",
    titles: [
        "Backend Software Engineer",
        "Java & Spring Boot Expert",
        "Distributed Systems Designer",
        "Cloud-Native Solutions Builder",
        "Video Game Enthusiast",
        "API Craftsman",
        "Code Whisperer",
        "Microservices Architect",
        "Bug Detective",
        "Scalable Systems Engineer",
        "Optimization Obsessed",
    ],
    description: "Backend Software Engineer with 5+ years' experience in large-scale, compliance-critical financial systems. Proven mentor and cost optimizer, delivering scalable, secure, and high-performance reporting platforms in regulated domains. Currently serving on the principal architect's core team at Societe Generale, leading multi-year initiatives that process 1.7B+ annual reports.",
    website: {
        title: "Manish Kumar Kushwaha - Portfolio",
        displayValue: "manishkushwaha.dev",
        target: "https://manishkushwaha.dev"
    } as Link,
    contact: {
        email: {
            title: "email",
            displayValue: "hello@manishkushwaha.dev",
            target: "mailto:hello@manishkushwaha.dev"
        } as Link,
        location: "Bengaluru, India",
        phone: {
            title: "email",
            displayValue:"+91 9456522346",
            target: "tel:+919456522346"
        } as Link,
    },
    socialProfiles: [
        {
            title: "LinkedIn",
            displayValue: "linkedin.com/in/tzman",
            target: "https://linkedin.com/in/tzman"   
        },
        {
            title: "GitHub",
            displayValue: "github.com/tzmanish",
            target: "https://github.com/tzmanish"  
        }
    ] as Link[]
}
