"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profileData } from "../../data";
import Button from "../ui/Button";
import { resumeData } from "../../data/resume";

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
      className="flex min-h-screen flex-col items-center justify-center bg-slate-950 py-12 sm:py-16"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <motion.div
            className="flex max-w-3xl flex-col gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-sm font-medium uppercase tracking-widest text-zinc-400"
            >
              {profileData.role}
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl"
            >
              {profileData.name}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl"
            >
              {profileData.headline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Button href="#projects" variant="primary" className="w-full sm:w-auto">
                View Projects
              </Button>
              <Button
                href={resumeData.href}
                download={resumeData.download}
                variant="outline"
                className="w-full sm:w-auto"
              >
                {resumeData.label}
              </Button>
              <Button href="#contact" variant="outline" className="w-full sm:w-auto">
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="group relative shrink-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="absolute inset-0 scale-95 rounded-full bg-gradient-to-br from-amber-400/50 via-orange-500/40 to-orange-600/50 blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:blur-3xl"
                aria-hidden="true"
              />
              <Image
                src="/profile.png"
                alt={`${profileData.name} profile photo`}
                width={320}
                height={320}
                priority
                unoptimized
                className="relative z-10 h-64 w-64 rounded-full object-cover object-top ring-2 ring-amber-500/40 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
