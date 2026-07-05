export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Article {
  id: string;
  title: string;
  platform: string;
  link: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export type CertificationType = "certification" | "competition";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  type: CertificationType;
  year?: string;
}

export interface SectionContent {
  title: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  projects: Project[];
  skills: SkillCategory[];
  articles: Article[];
}
