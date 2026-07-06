"use client";

import { motion } from "framer-motion";
import { cardSpring, premiumCardClasses } from "../../lib/motion";
import { type Certification } from "../../types";

export interface CertificationCardProps {
  certification: Certification;
}

const typeStyles = {
  certification: "border-amber-500/25 bg-amber-500/10 text-amber-100/90",
  competition:
    "border-orange-500/30 bg-orange-500/15 text-orange-100/90",
};

const typeLabels = {
  certification: "Certification",
  competition: "Competition",
};

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  const { title, issuer, type, year } = certification;

  return (
    <motion.article
      className={`flex h-full flex-col ${premiumCardClasses}`}
      whileHover={{ scale: 1.02 }}
      transition={cardSpring}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${typeStyles[type]}`}
        >
          {typeLabels[type]}
        </span>
        {year && (
          <time className="shrink-0 text-xs text-zinc-400">{year}</time>
        )}
      </div>

      <h3 className="mt-4 flex-1 text-base font-semibold leading-snug text-zinc-50">
        {title}
      </h3>

      <p className="mt-3 text-sm text-zinc-400">{issuer}</p>
    </motion.article>
  );
}
