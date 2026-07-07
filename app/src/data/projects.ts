import { Project } from "../types";

export const projectCardConfig = {
  cardHeightClass: "h-[430px]",
  descriptionLineClampClass: "line-clamp-5",
  readMoreLabel: "Read more",
  closeLabel: "Close",
};

export const projectsData: Project[] = [
  {
    id: "p1",
    title: "Intelligent Document Information Extraction and Processing Toolkit",
    description:
      "Developed an AI-powered web application that automatically extracts, classifies, and structures content from Sri Lankan Extraordinary Gazettes, tracks amendments and version history in Neo4j, and enables domain-specific search, analysis, and retrieval for legal and policy users across government sectors nationwide. Designed, developed, and integrated the full-stack application with intelligent document extraction capabilities, implementing a Neo4j graph database to save and retrieve all legal document data.",
    techStack: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "NLP",
      "LangChain",
      "Neo4j",
      "Vector Databases",
      "RESTful APIs",
    ],
    githubUrl: "https://github.com/Amayuru1999/GovDocLex",
  },
  {
    id: "p2",
    title: "Reservation Management System",
    description:
      "Developed a microservices-based Reservation Management System with separate frontend and backend services containerized using Docker. Implemented secure RESTful APIs, stall reservation workflows, and efficient data handling with MongoDB and Redis caching. Contributed as both a frontend and backend developer, building the UI in React.js with Redux for state management and developing scalable backend services with Node.js and Express.js. Integrated backend analytics services with the frontend, ensuring smooth data flow and real-time reservation insights.",
    techStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "MongoDB",
      "Kafka",
      "Redis",
    ],
    githubUrl: "https://github.com/Amayuru1999/EC8208-Software-Architecture-Project",
  },
  {
    id: "p3",
    title: "StudyBuddy - Personalized Study Plan & Note Generator",
    description:
      "Designing and developing an AI-powered StudyBuddy platform to help CS and Engineering students make informed academic decisions through personalized study planning and structured note generation.",
    techStack: [
      "React-Vite",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "LLM API",
      "REST APIs",
    ],
    githubUrl: "https://github.com/HirunaD/studybuddy-frontend",
  },
  {
    id: "p4",
    title: "Restaurant Management System",
    description:
      "Participating in a software group project implementing a Restaurant Management System for Leon's Kitchen, Galle.",
    techStack: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "MUI",
      "Bootstrap",
      "Stripe",
      "Jest",
      "Cypress",
      "Selenium-Webdriver",
      "Mocha",
      "Postman",
    ],
    githubUrl: "https://github.com/Amayuru1999/Leon-s-Kitchen-Galle",
  },
  {
    id: "p5",
    title: "Cake Shop Management System",
    description:
      "Developed an e-commerce platform using React.js with Tailwind CSS for the front-end. Integrated user-friendly features like product browsing, cart management, and dynamic routing with React Router.",
    techStack: [
      "React.js",
      "TypeScript",
      "MUI",
      "Tailwind CSS",
      "Easy-Peasy",
    ],
    githubUrl: "https://github.com/HirunaD/Sweet-Delights",
  },
];
