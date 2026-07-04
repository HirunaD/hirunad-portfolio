// src/data/index.ts
import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Hiruna De Silva",
  role: "Full Stack Software Developer",
  about: "An aspiring software engineer with a strong focus on modern web technologies, database management, and scalable system architectures.",
  
  projects: [
    {
      id: "p1",
      title: "Dual Stack Monitoring Dashboard",
      description: "Implemented a comprehensive monitoring UI utilizing Prometheus, Grafana, and the ELK stack for robust system observability.",
      techStack: ["Go", "Angular", "PostgreSQL", "Prometheus", "Grafana", "ELK"],
      githubUrl: "https://github.com/yourusername/monitor-dashboard",
    },
    {
      id: "p2",
      title: "Learning Management System (LMS)",
      description: "Developed a full-featured LMS for a client, complete with dedicated student and teacher portals.",
      techStack: ["React", "Vite", "Node.js", "Express", "Flask"],
      githubUrl: "https://github.com/yourusername/lms-project",
    },
    {
      id: "p3",
      title: "Restaurant E-Menu Application",
      description: "Designed the UI/UX and developed a responsive digital menu application as a technical frontend implementation.",
      techStack: ["React", "Next.js", "Figma", "Tailwind CSS"],
      liveUrl: "https://your-emenu-live-link.com",
    },
    {
      id: "p4",
      title: "MERN Issue Tracker",
      description: "Built a full-stack issue tracking application to manage tasks, bugs, and development workflows.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/yourusername/issue-tracker",
    }
  ],

  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "Figma"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", ".NET Core", "Go", "Flask"]
    },
    {
      category: "Databases & DevOps",
      skills: ["MongoDB", "PostgreSQL", "Neo4j", "Docker", "Prometheus", "Grafana"]
    }
  ],

  articles: [
    {
      id: "a1",
      title: "TypeScript vs JavaScript: Why You Need a Safety Net",
      platform: "Medium",
      link: "https://medium.com/@yourusername/typescript-vs-javascript"
    }
  ]
};