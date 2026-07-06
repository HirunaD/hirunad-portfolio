"use client";

import { motion } from "framer-motion";
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
    <motion.article
      className={`flex h-full flex-col ${premiumCardClasses}`}
      whileHover={{ scale: 1.02 }}
      transition={cardSpring}
    >
      <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
        {category}
      </h3>

      <ul
        className="mt-4 flex flex-wrap gap-2"
        aria-label={`${category} skills`}
      >
        {skills.map((skill) => (
          <li key={skill}>
            <span className={premiumTagClasses}>{skill}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
