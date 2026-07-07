"use client";

import { motion } from "framer-motion";
import { articleCardConfig } from "../../data/articles";
import { cardSpring, premiumCardClasses, premiumTagClasses } from "../../lib/motion";
import { type Article } from "../../types";
import { PremiumSecondaryButton } from "./PremiumButton";

export interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { title, description, platform, link, publishedAt } = article;

  return (
    <article className="relative h-full">
      <motion.div
        className="group relative h-full"
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.99 }}
        transition={cardSpring}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(251,191,36,0.45), rgba(249,115,22,0.45), transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />

        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl border border-amber-400/50"
          animate={{ opacity: [0.2, 0.65, 0.2] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <div
          className={`relative flex ${articleCardConfig.cardHeightClass} flex-col overflow-hidden ${premiumCardClasses}`}
        >
          <div className="flex shrink-0 items-start justify-between gap-3">
            <span className={premiumTagClasses}>{platform}</span>
            <time dateTime={publishedAt} className="shrink-0 text-xs text-zinc-400">
              {publishedAt}
            </time>
          </div>

          <h3 className="mt-4 line-clamp-3 text-lg font-semibold leading-snug tracking-tight text-zinc-50">
            {title}
          </h3>

          <p
            className={`mt-3 min-h-0 flex-1 ${articleCardConfig.descriptionLineClampClass} text-sm leading-relaxed text-zinc-400`}
          >
            {description}
          </p>

          <div className="mt-auto border-t border-amber-500/15 pt-4">
            <PremiumSecondaryButton
              href={link}
              size="compact"
              showIcon
              className="w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {articleCardConfig.readOnLabel} {platform}
              <span className="sr-only">: {title}</span>
            </PremiumSecondaryButton>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
