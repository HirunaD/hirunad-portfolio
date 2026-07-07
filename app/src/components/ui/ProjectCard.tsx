"use client";

import { motion } from "framer-motion";
import {
  type KeyboardEvent,
  type MouseEvent,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { projectCardConfig } from "../../data/projects";
import { cardSpring, premiumCardClasses, premiumTagClasses } from "../../lib/motion";
import { type Project } from "../../types";
import { PremiumPrimaryButton, PremiumSecondaryButton } from "./PremiumButton";
import ProjectDetailModal from "./ProjectDetailModal";

export interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, techStack, githubUrl, liveUrl } = project;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClipped, setIsClipped] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const descriptionElement = descriptionRef.current;

    if (!descriptionElement) {
      return;
    }

    const updateClippedState = () => {
      setIsClipped(
        descriptionElement.scrollHeight > descriptionElement.clientHeight + 1,
      );
    };

    updateClippedState();

    const resizeObserver = new ResizeObserver(updateClippedState);
    resizeObserver.observe(descriptionElement);

    return () => resizeObserver.disconnect();
  }, [description]);

  const openModal = () => setIsModalOpen(true);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal();
    }
  };

  const stopCardClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <article className="relative h-full">
        <motion.div
          role="button"
          tabIndex={0}
          onClick={openModal}
          onKeyDown={handleKeyDown}
          aria-haspopup="dialog"
          aria-label={`View details for ${title}`}
          className="group relative h-full cursor-pointer"
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.99 }}
          transition={cardSpring}
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(251,191,36,0.45), rgba(249,115,22,0.45), transparent)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />

          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl border border-amber-400/50"
            animate={{ opacity: [0.2, 0.65, 0.2] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />

          <div
            className={`relative flex ${projectCardConfig.cardHeightClass} flex-col overflow-hidden ${premiumCardClasses}`}
          >
            <h3 className="shrink-0 text-lg font-semibold tracking-tight text-zinc-50">
              {title}
            </h3>

            <p
              ref={descriptionRef}
              className={`mt-3 ${projectCardConfig.descriptionLineClampClass} text-sm leading-relaxed text-zinc-400`}
            >
              {description}
            </p>

            {isClipped && (
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 transition-colors group-hover:text-amber-300">
                {projectCardConfig.readMoreLabel}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}

            <div className="mt-auto pt-4">
              <ul
                className="flex flex-wrap gap-2"
                aria-label="Technologies used"
              >
                {techStack.map((tech) => (
                  <li key={tech}>
                    <span className={premiumTagClasses}>{tech}</span>
                  </li>
                ))}
              </ul>

              {(githubUrl ?? liveUrl) && (
                <div
                  className="mt-4 flex flex-wrap gap-3 border-t border-amber-500/15 pt-4"
                  onClick={stopCardClick}
                  onKeyDown={(event) => event.stopPropagation()}
                  role="presentation"
                >
                  {githubUrl && (
                    <PremiumSecondaryButton
                      href={githubUrl}
                      size="compact"
                      showIcon
                      className="w-auto"
                      target="_blank"
                      rel="noopener noreferrer"
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
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <span className="sr-only"> for {title}</span>
                    </PremiumPrimaryButton>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </article>

      <ProjectDetailModal
        project={isModalOpen ? project : null}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
