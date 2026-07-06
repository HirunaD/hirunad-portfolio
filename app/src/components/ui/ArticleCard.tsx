"use client";

import { motion } from "framer-motion";
import { cardSpring, premiumCardClasses } from "../../lib/motion";
import { type Article } from "../../types";
import { PremiumPrimaryButton } from "./PremiumButton";

export interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { title, description, platform, link, publishedAt } = article;

  return (
    <motion.article
      className={`flex h-full flex-col ${premiumCardClasses}`}
      whileHover={{ scale: 1.02 }}
      transition={cardSpring}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-widest text-amber-400/80">
          {platform}
        </p>
        <time dateTime={publishedAt} className="shrink-0 text-xs text-zinc-400">
          {publishedAt}
        </time>
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-zinc-50">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {description}
      </p>

      <div className="mt-6 border-t border-amber-500/15 pt-4">
        <PremiumPrimaryButton href={link} size="compact" className="w-auto">
          Read Article
          <span className="sr-only">: {title}</span>
        </PremiumPrimaryButton>
      </div>
    </motion.article>
  );
}
