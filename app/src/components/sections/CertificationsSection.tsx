"use client";

import { motion } from "framer-motion";
import {
  certificationsData,
  certificationsSectionContent,
} from "../../data";
import { fadeUpItem, staggerContainer, viewportOnce } from "../../lib/motion";
import CertificationCard from "../ui/CertificationCard";
import SectionHeading from "../ui/SectionHeading";
import SectionShell from "../ui/SectionShell";

export default function CertificationsSection() {
  return (
    <SectionShell
      id="certifications"
      ariaLabelledBy="certifications-heading"
      tone="slate-950"
    >
      <SectionHeading
        id="certifications-heading"
        title={certificationsSectionContent.title}
        description={certificationsSectionContent.description}
      />

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {certificationsData.map((certification) => (
          <motion.div key={certification.id} variants={fadeUpItem}>
            <CertificationCard certification={certification} />
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
