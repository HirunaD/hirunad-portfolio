import { SkillCategory } from "../types";

export const skillCardConfig = {
  cardHeightClass: "h-[200px]",
};

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C#",
      "C++",
      "Haskell",
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MUI",
      "REST APIs",
    ],
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL", "Neo4j"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "Kubernetes"],
  },
  {
    category: "Tooling",
    skills: ["Git", "GitHub", "VS Code", "Jira"],
  },
  {
    category: "Testing",
    skills: ["Jest", "Selenium", "Mocha"],
  },
  {
    category: "State Management",
    skills: ["Redux Toolkit", "Zustand", "Easy-Peasy"],
  },
];
