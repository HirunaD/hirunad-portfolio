"use client";

import { motion } from "framer-motion";
import { articlesData, articlesSectionContent } from "../../data";
import { fadeUpItem, staggerContainer, viewportOnce } from "../../lib/motion";
import ArticleCard from "../ui/ArticleCard";
import SectionHeading from "../ui/SectionHeading";
import SectionShell from "../ui/SectionShell";

export default function ArticlesSection() {
  return (
    <SectionShell id="articles" ariaLabelledBy="articles-heading" tone="slate-900">
      <SectionHeading
        id="articles-heading"
        title={articlesSectionContent.title}
        description={articlesSectionContent.description}
      />

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {articlesData.map((article) => (
          <motion.div key={article.id} variants={fadeUpItem} className="h-full">
            <ArticleCard article={article} />
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
