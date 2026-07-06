"use client";

import { motion } from "framer-motion";
import { heroTypewriterTitles, profileData } from "../../data";
import { useTypewriter } from "../../lib/useTypewriter";
import { resumeData } from "../../data/resume";
import { HeroPrimaryButton, HeroSecondaryButton } from "./HeroActionButtons";
import HeroBackground from "./HeroBackground";
import HeroProfileImage from "./HeroProfileImage";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HeroSection() {
  const typewriterText = useTypewriter(heroTypewriterTitles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 py-12 sm:py-16"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <motion.div
            className="flex max-w-3xl flex-col gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80"
            >
              {profileData.role}
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="hero-gradient-text text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {profileData.name}
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex min-h-10 items-center sm:min-h-11"
              aria-live="polite"
            >
              <p className="text-lg font-medium text-zinc-300 sm:text-xl">
                <span className="text-amber-400/90">{typewriterText}</span>
                <motion.span
                  className="ml-0.5 inline-block h-[1.1em] w-0.5 translate-y-px bg-amber-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <HeroPrimaryButton href="#projects" className="w-full sm:w-auto">
                View Projects
              </HeroPrimaryButton>
              <HeroSecondaryButton
                href={resumeData.href}
                download={resumeData.download}
                className="w-full sm:w-auto"
              >
                {resumeData.label}
              </HeroSecondaryButton>
              <HeroPrimaryButton href="#contact" className="w-full sm:w-auto">
                Get In Touch
              </HeroPrimaryButton>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <HeroProfileImage name={profileData.name} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
