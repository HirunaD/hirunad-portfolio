"use client";

import { motion } from "framer-motion";
import { cardSpring, premiumCardClasses } from "../../lib/motion";
import { type Experience } from "../../types";

export interface ExperienceCardProps {
  experience: Experience;
  isLast?: boolean;
}

export default function ExperienceCard({
  experience,
  isLast = false,
}: ExperienceCardProps) {
  const { role, company, period, description } = experience;

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
            <h3 className="text-lg font-semibold text-zinc-50">{role}</h3>
            <p className="mt-1 text-sm font-medium text-amber-400/80">{company}</p>
          </div>
          <time className="mt-2 shrink-0 text-sm text-zinc-400 sm:mt-0">{period}</time>
        </div>

        <ul className="mt-4 space-y-2">
          {description.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-relaxed text-zinc-400"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400/70"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </article>
  );
}
