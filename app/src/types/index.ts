// src/types/index.ts

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

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  projects: Project[];
  skills: SkillCategory[];
  articles: Article[];
}