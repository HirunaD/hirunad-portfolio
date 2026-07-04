"use client";

import { motion } from "framer-motion";
import { skillsData } from "../../data";
import SkillCategoryCard from "../ui/SkillCategoryCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-zinc-50 py-16 dark:bg-zinc-950 sm:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2
            id="skills-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            Skills
          </h2>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            Technologies and tools I use to build reliable, scalable
            applications across the stack.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillsData.map((skillCategory) => (
            <motion.div
              key={skillCategory.category}
              variants={itemVariants}
              className="h-full"
            >
              <SkillCategoryCard skillCategory={skillCategory} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
