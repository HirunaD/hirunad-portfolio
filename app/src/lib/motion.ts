export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const cardSpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 28,
};

export const viewportOnce = {
  once: true,
  margin: "-80px",
};

export const premiumCardClasses =
  "rounded-xl border border-amber-500/20 bg-slate-950/50 p-6 shadow-[0_0_20px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:border-amber-400/40 hover:shadow-[0_0_28px_rgba(251,146,60,0.18)]";

export const premiumTagClasses =
  "inline-block rounded-full border border-amber-500/25 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-100/90";
