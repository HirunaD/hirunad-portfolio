"use client";

import { motion } from "framer-motion";
import { educationData, educationSectionContent } from "../../data";
import { fadeUpItem, staggerContainer, viewportOnce } from "../../lib/motion";
import EducationCard from "../ui/EducationCard";
import SectionHeading from "../ui/SectionHeading";
import SectionShell from "../ui/SectionShell";

export default function EducationSection() {
  return (
    <SectionShell id="education" ariaLabelledBy="education-heading" tone="slate-900">
      <SectionHeading
        id="education-heading"
        title={educationSectionContent.title}
        description={educationSectionContent.description}
      />

      <motion.div
        className="relative mx-auto max-w-3xl border-l border-amber-500/20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {educationData.map((education, index) => (
          <motion.div key={education.id} variants={fadeUpItem}>
            <EducationCard
              education={education}
              isLast={index === educationData.length - 1}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
