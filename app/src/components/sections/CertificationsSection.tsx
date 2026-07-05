"use client";

import { motion } from "framer-motion";
import {
  certificationsData,
  certificationsSectionContent,
} from "../../data";
import CertificationCard from "../ui/CertificationCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="bg-white py-16 dark:bg-black sm:py-24"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2
            id="certifications-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            {certificationsSectionContent.title}
          </h2>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            {certificationsSectionContent.description}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {certificationsData.map((certification) => (
            <motion.div key={certification.id} variants={itemVariants}>
              <CertificationCard certification={certification} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
