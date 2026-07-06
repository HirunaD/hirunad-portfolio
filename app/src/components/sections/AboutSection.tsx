"use client";

import { motion } from "framer-motion";
import { aboutSectionContent, profileData } from "../../data";
import { fadeUpItem, premiumCardClasses, staggerContainer, viewportOnce } from "../../lib/motion";
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

        <motion.div variants={fadeUpItem} className={premiumCardClasses}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400/80">
            {profileData.role}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-300">
            {profileData.about}
          </p>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
