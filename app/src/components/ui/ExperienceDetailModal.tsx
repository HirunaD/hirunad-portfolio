"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { experienceCardConfig } from "../../data/experience";
import { type Experience } from "../../types";

interface ExperienceDetailModalProps {
  experience: Experience | null;
  onClose: () => void;
}

export default function ExperienceDetailModal({
  experience,
  onClose,
}: ExperienceDetailModalProps) {
  useEffect(() => {
    if (!experience) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [experience, onClose]);

  return (
    <AnimatePresence>
      {experience && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="experience-modal-title"
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={onClose}
            aria-label={experienceCardConfig.closeLabel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-amber-500/30 bg-slate-950/95 p-6 shadow-[0_0_40px_rgba(251,146,60,0.2)] backdrop-blur-xl sm:p-8"
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
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3
                    id="experience-modal-title"
                    className="text-xl font-semibold text-zinc-50 sm:text-2xl"
                  >
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-amber-400/90">
                    {experience.company}
                  </p>
                </div>
                <time className="mt-2 shrink-0 text-sm text-zinc-400 sm:mt-0">
                  {experience.period}
                </time>
              </div>

              <ul className="mt-6 space-y-3 border-t border-amber-500/15 pt-6">
                {experience.description.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-300 sm:text-base"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                      aria-hidden="true"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                type="button"
                onClick={onClose}
                className="mt-8 inline-flex h-10 items-center justify-center rounded-full border border-amber-500/30 bg-white/5 px-5 text-sm font-semibold text-zinc-50 backdrop-blur-md transition-colors hover:border-amber-400/60 hover:bg-amber-500/10"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {experienceCardConfig.closeLabel}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
