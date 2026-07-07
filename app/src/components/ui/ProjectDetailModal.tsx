"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { projectCardConfig } from "../../data/projects";
import { premiumTagClasses } from "../../lib/motion";
import { type Project } from "../../types";
import { PremiumPrimaryButton, PremiumSecondaryButton } from "./PremiumButton";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-60 flex items-center justify-center px-4 pb-4 pt-20 sm:pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={onClose}
            aria-label={projectCardConfig.closeLabel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative z-10 max-h-[calc(100dvh-6.5rem)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-amber-500/30 bg-slate-950/95 p-6 shadow-[0_0_40px_rgba(251,146,60,0.2)] backdrop-blur-xl sm:max-h-[calc(100dvh-7.5rem)] sm:p-8"
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-40"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(251,191,36,0.15), rgba(249,115,22,0.15), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h3
                id="project-modal-title"
                className="text-xl font-semibold text-zinc-50 sm:text-2xl"
              >
                {project.title}
              </h3>

              <p className="mt-6 border-t border-amber-500/15 pt-6 text-sm leading-relaxed text-zinc-300 sm:text-base">
                {project.description}
              </p>

              <ul
                className="mt-6 flex flex-wrap gap-2"
                aria-label="Technologies used"
              >
                {project.techStack.map((tech, index) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.35 }}
                  >
                    <span className={premiumTagClasses}>{tech}</span>
                  </motion.li>
                ))}
              </ul>

              {(project.githubUrl ?? project.liveUrl) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <PremiumSecondaryButton
                      href={project.githubUrl}
                      size="compact"
                      showIcon
                      className="w-auto"
                    >
                      GitHub
                    </PremiumSecondaryButton>
                  )}
                  {project.liveUrl && (
                    <PremiumPrimaryButton
                      href={project.liveUrl}
                      size="compact"
                      className="w-auto"
                    >
                      Live Demo
                    </PremiumPrimaryButton>
                  )}
                </div>
              )}

              <motion.button
                type="button"
                onClick={onClose}
                className="mt-8 inline-flex h-10 items-center justify-center rounded-full border border-amber-500/30 bg-white/5 px-5 text-sm font-semibold text-zinc-50 backdrop-blur-md transition-colors hover:border-amber-400/60 hover:bg-amber-500/10"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {projectCardConfig.closeLabel}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
