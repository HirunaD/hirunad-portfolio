"use client";

import { motion } from "framer-motion";
import { aboutSectionContent, profileData } from "../../data";
import { cardSpring, fadeUpItem, premiumCardClasses, staggerContainer, viewportOnce } from "../../lib/motion";
import SectionHeading from "../ui/SectionHeading";
import SectionShell from "../ui/SectionShell";

export default function AboutSection() {
  return (
    <SectionShell id="about" ariaLabelledBy="about-heading" tone="slate-900">
      <motion.div
        className="mx-auto max-w-3xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <SectionHeading
          id="about-heading"
          title={aboutSectionContent.title}
          description={aboutSectionContent.description}
          align="center"
          className="mb-8"
        />

        <motion.div
          variants={fadeUpItem}
          className={`group relative overflow-hidden ${premiumCardClasses} hover:border-amber-400/55 hover:shadow-[0_0_40px_rgba(251,146,60,0.28)]`}
          whileHover={{ scale: 1.02, y: -6 }}
          transition={cardSpring}
        >
          <div
            className="pointer-events-none absolute -inset-1 rounded-xl bg-gradient-to-br from-amber-500/25 via-orange-500/10 to-amber-600/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-200/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80 transition-colors duration-300 group-hover:text-amber-300">
              {profileData.role}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200">
              {profileData.about}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
