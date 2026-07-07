"use client";

import { motion } from "framer-motion";
import {
  certificationCardConfig,
  certificationTypeLabels,
} from "../../data/certifications";
import { cardSpring, premiumCardClasses } from "../../lib/motion";
import { type Certification } from "../../types";

export interface CertificationCardProps {
  certification: Certification;
}

const typeStyles = {
  certification: "border-amber-500/25 bg-amber-500/10 text-amber-100/90",
  competition: "border-orange-500/30 bg-orange-500/15 text-orange-100/90",
};

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  const { title, issuer, type, year } = certification;

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
          className={`relative flex ${certificationCardConfig.cardHeightClass} flex-col overflow-hidden ${premiumCardClasses}`}
        >
          <div className="flex shrink-0 items-start justify-between gap-3">
            <span
              className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${typeStyles[type]}`}
            >
              {certificationTypeLabels[type]}
            </span>
            {year && (
              <time className="shrink-0 text-xs text-zinc-400">{year}</time>
            )}
          </div>

          <h3 className="mt-4 line-clamp-4 text-base font-semibold leading-snug text-zinc-50">
            {title}
          </h3>

          <p className="mt-auto pt-4 text-sm text-zinc-400">{issuer}</p>
        </div>
      </motion.div>
    </article>
  );
}
