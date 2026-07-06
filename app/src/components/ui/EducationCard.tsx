"use client";

import { motion } from "framer-motion";
import { cardSpring, premiumCardClasses } from "../../lib/motion";
import { type Education } from "../../types";

export interface EducationCardProps {
  education: Education;
  isLast?: boolean;
}

export default function EducationCard({
  education,
  isLast = false,
}: EducationCardProps) {
  const { degree, institution, period, description } = education;

  return (
    <article className="relative pb-10 pl-8 last:pb-0">
      <span
        className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-amber-400 bg-slate-950 shadow-[0_0_10px_rgba(251,146,60,0.5)]"
        aria-hidden="true"
      />
      {!isLast && (
        <span
          className="absolute bottom-0 left-0 top-4 w-px -translate-x-1/2 bg-amber-500/25"
          aria-hidden="true"
        />
      )}

      <motion.div
        className={premiumCardClasses}
        whileHover={{ scale: 1.02 }}
        transition={cardSpring}
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-zinc-50">{degree}</h3>
            <p className="mt-1 text-sm font-medium text-amber-400/80">
              {institution}
            </p>
          </div>
          <time className="mt-2 shrink-0 text-sm text-zinc-400 sm:mt-0">
            {period}
          </time>
        </div>

        {description && (
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        )}
      </motion.div>
    </article>
  );
}
