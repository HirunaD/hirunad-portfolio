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

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute bottom-0 left-0 top-0 w-px overflow-hidden" aria-hidden="true">
          <motion.div
            className="h-full w-full origin-top bg-linear-to-b from-amber-400 via-orange-500/50 to-amber-500/15"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-0 bg-linear-to-b from-amber-300/50 via-orange-400/20 to-transparent"
            animate={{ opacity: [0.15, 0.55, 0.15] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="flex flex-col gap-8 pl-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {educationData.map((education) => (
            <motion.div key={education.id} variants={fadeUpItem}>
              <EducationCard education={education} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}
