"use client";

import { motion } from "framer-motion";
import { profileData } from "../../data";
import Button from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-1 items-center bg-zinc-50 dark:bg-black"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <motion.div
          className="flex max-w-3xl flex-col gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            {profileData.role}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50"
          >
            {profileData.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-400"
          >
            {profileData.headline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4"
          >
            <Button href="#projects" variant="primary" className="w-full sm:w-auto">
              View Projects
            </Button>
            <Button href="#contact" variant="outline" className="w-full sm:w-auto">
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
