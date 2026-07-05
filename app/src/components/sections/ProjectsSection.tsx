"use client";

import { motion } from "framer-motion";
import { projectsData, projectsSectionContent } from "../../data";
import ProjectCard from "../ui/ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-white py-16 dark:bg-black sm:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2
            id="projects-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            {projectsSectionContent.title}
          </h2>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            {projectsSectionContent.description}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
