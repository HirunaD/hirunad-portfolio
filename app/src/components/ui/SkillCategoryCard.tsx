"use client";

import { motion } from "framer-motion";
import { skillCardConfig } from "../../data/skills";
import { cardSpring, premiumCardClasses, premiumTagClasses } from "../../lib/motion";
import { type SkillCategory } from "../../types";

export interface SkillCategoryCardProps {
  skillCategory: SkillCategory;
}

export default function SkillCategoryCard({
  skillCategory,
}: SkillCategoryCardProps) {
  const { category, skills } = skillCategory;

  return (
    <article className="relative h-full">
      <motion.div
        className="group relative h-full"
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
          className={`relative flex ${skillCardConfig.cardHeightClass} flex-col overflow-hidden ${premiumCardClasses}`}
        >
          <h3 className="shrink-0 text-lg font-semibold tracking-tight text-zinc-50">
            {category}
          </h3>

          <ul
            className="mt-auto flex flex-wrap content-end gap-2 pt-4"
            aria-label={`${category} skills`}
          >
            {skills.map((skill) => (
              <li key={skill}>
                <span className={premiumTagClasses}>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </article>
  );
}
