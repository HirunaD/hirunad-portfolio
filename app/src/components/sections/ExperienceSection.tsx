"use client";

import { motion } from "framer-motion";
import { experienceData, experienceSectionContent } from "../../data";
import ExperienceCard from "../ui/ExperienceCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-zinc-50 py-16 dark:bg-zinc-950 sm:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2
            id="experience-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            {experienceSectionContent.title}
          </h2>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            {experienceSectionContent.description}
          </p>
        </div>

        <motion.div
          className="relative mx-auto max-w-3xl border-l border-zinc-200 dark:border-zinc-800"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {experienceData.map((experience, index) => (
            <motion.div key={experience.id} variants={itemVariants}>
              <ExperienceCard
                experience={experience}
                isLast={index === experienceData.length - 1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
