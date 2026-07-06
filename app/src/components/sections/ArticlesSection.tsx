"use client";

import { motion } from "framer-motion";
import { articlesData, articlesSectionContent } from "../../data";
import ArticleCard from "../ui/ArticleCard";

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

export default function ArticlesSection() {
  return (
    <section
      id="articles"
      className="flex min-h-screen flex-col items-center justify-center bg-slate-900 py-12 sm:py-16"
      aria-labelledby="articles-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2
            id="articles-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            {articlesSectionContent.title}
          </h2>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            {articlesSectionContent.description}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {articlesData.map((article) => (
            <motion.div key={article.id} variants={itemVariants} className="h-full">
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
