"use client";

import { motion } from "framer-motion";
import {
  type KeyboardEvent,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { experienceCardConfig } from "../../data/experience";
import { cardSpring, premiumCardClasses } from "../../lib/motion";
import { type Experience } from "../../types";
import ExperienceDetailModal from "./ExperienceDetailModal";

export interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { role, company, period, description } = experience;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClipped, setIsClipped] = useState(false);
  const descriptionContainerRef = useRef<HTMLDivElement>(null);
  const descriptionContentRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const container = descriptionContainerRef.current;
    const content = descriptionContentRef.current;

    if (!container || !content) {
      return;
    }

    const updateClippedState = () => {
      setIsClipped(content.scrollHeight > container.clientHeight + 1);
    };

    updateClippedState();

    const resizeObserver = new ResizeObserver(updateClippedState);
    resizeObserver.observe(container);
    resizeObserver.observe(content);

    return () => resizeObserver.disconnect();
  }, [description]);

  const openModal = () => setIsModalOpen(true);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal();
    }
  };

  return (
    <>
      <article className="relative">
        <motion.span
          className="absolute -left-8 top-7 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-amber-400 bg-slate-950"
          animate={{
            boxShadow: [
              "0 0 8px rgba(251,191,36,0.35)",
              "0 0 18px rgba(251,146,60,0.75)",
              "0 0 8px rgba(251,191,36,0.35)",
            ],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <motion.div
          role="button"
          tabIndex={0}
          onClick={openModal}
          onKeyDown={handleKeyDown}
          aria-haspopup="dialog"
          aria-label={`View details for ${role} at ${company}`}
          className="group relative cursor-pointer"
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
            className={`relative flex ${experienceCardConfig.cardHeightClass} flex-col overflow-hidden ${premiumCardClasses}`}
          >
            <div className="flex shrink-0 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 pr-2">
                <h3 className="text-lg font-semibold text-zinc-50">{role}</h3>
                <p className="mt-1 line-clamp-2 text-sm font-medium text-amber-400/80">
                  {company}
                </p>
              </div>
              <time className="mt-2 shrink-0 text-sm text-zinc-400 sm:mt-0">
                {period}
              </time>
            </div>

            <div
              ref={descriptionContainerRef}
              className="mt-4 min-h-0 flex-1 overflow-hidden"
            >
              <ul ref={descriptionContentRef} className="space-y-2">
                {description.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-zinc-400"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400/70"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {isClipped && (
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-amber-400 transition-colors group-hover:text-amber-300">
                {experienceCardConfig.readMoreLabel}
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
          </div>
        </motion.div>
      </article>

      <ExperienceDetailModal
        experience={isModalOpen ? experience : null}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
