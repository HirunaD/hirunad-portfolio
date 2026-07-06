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
      className="flex min-h-screen flex-col items-center justify-center bg-slate-900 py-12 sm:py-16"
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
              className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl"
            >
              {aboutSectionContent.title}
            </h2>
            <p className="mt-3 text-lg text-zinc-400">
              {aboutSectionContent.description}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-xl border border-slate-700/80 bg-slate-950/60 p-8 backdrop-blur-sm"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-400">
              {profileData.role}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-300">
              {profileData.about}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
