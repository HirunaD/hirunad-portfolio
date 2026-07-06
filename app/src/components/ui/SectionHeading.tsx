"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer, viewportOnce } from "../../lib/motion";

interface SectionHeadingProps {
  id: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  id,
  title,
  description,
  align = "left",
  className = "mb-10 max-w-2xl",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <motion.div
      className={`${className} ${alignClass}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.h2
        id={id}
        variants={fadeUpItem}
        className="hero-gradient-text text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUpItem}
          className="mt-3 text-lg leading-relaxed text-zinc-400"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
