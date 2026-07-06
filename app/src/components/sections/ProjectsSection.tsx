"use client";

import { motion } from "framer-motion";
import { projectsData, projectsSectionContent } from "../../data";
import { fadeUpItem, staggerContainer, viewportOnce } from "../../lib/motion";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";
import SectionShell from "../ui/SectionShell";

export default function ProjectsSection() {
  return (
    <SectionShell id="projects" ariaLabelledBy="projects-heading" tone="slate-900">
      <SectionHeading
        id="projects-heading"
        title={projectsSectionContent.title}
        description={projectsSectionContent.description}
      />

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {projectsData.map((project) => (
          <motion.div key={project.id} variants={fadeUpItem} className="h-full">
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
