"use client";

import { motion } from "framer-motion";
import { aboutSectionContent, profileData } from "../../data";

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

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white py-16 dark:bg-black sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
            >
              {aboutSectionContent.title}
            </h2>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
              {aboutSectionContent.description}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              {profileData.role}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {profileData.about}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
