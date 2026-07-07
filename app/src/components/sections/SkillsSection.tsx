"use client";

import { motion } from "framer-motion";
import { skillsData, skillsSectionContent } from "../../data";
import { fadeUpItem, staggerContainer, viewportOnce } from "../../lib/motion";
import SectionHeading from "../ui/SectionHeading";
import SectionShell from "../ui/SectionShell";
import SkillCategoryCard from "../ui/SkillCategoryCard";

export default function SkillsSection() {
  return (
    <SectionShell id="skills" ariaLabelledBy="skills-heading" tone="slate-950">
      <SectionHeading
        id="skills-heading"
        title={skillsSectionContent.title}
        description={skillsSectionContent.description}
      />

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {skillsData.map((skillCategory) => (
          <motion.div key={skillCategory.category} variants={fadeUpItem} className="h-full">
            <SkillCategoryCard skillCategory={skillCategory} />
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
