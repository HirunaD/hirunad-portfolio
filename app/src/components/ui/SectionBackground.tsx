"use client";

import { motion } from "framer-motion";

interface SectionBackgroundProps {
  tone?: "slate-950" | "slate-900";
}

export default function SectionBackground({
  tone = "slate-950",
}: SectionBackgroundProps) {
  const vignetteClass =
    tone === "slate-950"
      ? "from-slate-950/20 via-transparent to-slate-950/60"
      : "from-slate-900/20 via-transparent to-slate-900/60";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-orange-600/12 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 25, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 40, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className={`absolute inset-0 bg-linear-to-b ${vignetteClass}`} />
    </div>
  );
}
