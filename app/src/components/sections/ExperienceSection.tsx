"use client";

import { motion } from "framer-motion";
import { experienceData, experienceSectionContent } from "../../data";
import { fadeUpItem, staggerContainer, viewportOnce } from "../../lib/motion";
import ExperienceCard from "../ui/ExperienceCard";
import SectionHeading from "../ui/SectionHeading";
import SectionShell from "../ui/SectionShell";

export default function ExperienceSection() {
  return (
    <SectionShell id="experience" ariaLabelledBy="experience-heading" tone="slate-950">
      <SectionHeading
        id="experience-heading"
        title={experienceSectionContent.title}
        description={experienceSectionContent.description}
      />

      <motion.div
        className="relative mx-auto max-w-3xl border-l border-amber-500/20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {experienceData.map((experience, index) => (
          <motion.div key={experience.id} variants={fadeUpItem}>
            <ExperienceCard
              experience={experience}
              isLast={index === experienceData.length - 1}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
