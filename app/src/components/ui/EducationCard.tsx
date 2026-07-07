"use client";

import { motion } from "framer-motion";
import { educationCardConfig } from "../../data/education";
import { cardSpring, premiumCardClasses } from "../../lib/motion";
import { type Education } from "../../types";

export interface EducationCardProps {
  education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
  const { degree, institution, period, description } = education;

  return (
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
        className="group relative"
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
          className={`relative flex ${educationCardConfig.cardHeightClass} flex-col overflow-hidden ${premiumCardClasses}`}
        >
          <div className="flex shrink-0 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 pr-2">
              <h3 className="text-lg font-semibold text-zinc-50">{degree}</h3>
              <p className="mt-1 line-clamp-2 text-sm font-medium text-amber-400/80">
                {institution}
              </p>
            </div>
            <time className="mt-2 shrink-0 text-sm text-zinc-400 sm:mt-0">
              {period}
            </time>
          </div>

          {description && (
            <p className="mt-auto pt-4 text-sm leading-relaxed text-zinc-400">
              {description}
            </p>
          )}
        </div>
      </motion.div>
    </article>
  );
}
