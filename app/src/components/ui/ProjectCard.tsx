"use client";

import { motion } from "framer-motion";
import { cardSpring, premiumCardClasses, premiumTagClasses } from "../../lib/motion";
import { type Project } from "../../types";
import { PremiumPrimaryButton, PremiumSecondaryButton } from "./PremiumButton";

export interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, techStack, githubUrl, liveUrl } = project;

  return (
    <motion.article
      className={`flex h-full flex-col ${premiumCardClasses}`}
      whileHover={{ scale: 1.02 }}
      transition={cardSpring}
    >
      <h3 className="text-lg font-semibold tracking-tight text-zinc-50">{title}</h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
        {techStack.map((tech) => (
          <li key={tech}>
            <span className={premiumTagClasses}>{tech}</span>
          </li>
        ))}
      </ul>

      {(githubUrl ?? liveUrl) && (
        <div className="mt-6 flex flex-wrap gap-3 border-t border-amber-500/15 pt-4">
          {githubUrl && (
            <PremiumSecondaryButton
              href={githubUrl}
              size="compact"
              showIcon
              className="w-auto"
            >
              GitHub
              <span className="sr-only"> for {title}</span>
            </PremiumSecondaryButton>
          )}
          {liveUrl && (
            <PremiumPrimaryButton
              href={liveUrl}
              size="compact"
              className="w-auto"
            >
              Live Demo
              <span className="sr-only"> for {title}</span>
            </PremiumPrimaryButton>
          )}
        </div>
      )}
    </motion.article>
  );
}
