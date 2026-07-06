"use client";

import { motion, type Transition } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

const motionSpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

const focusRingClasses =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

interface HeroPrimaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

interface HeroSecondaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  download?: string;
}

const MotionLink = motion.create(Link);

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 transition-transform duration-300 group-hover:animate-bounce"
      aria-hidden="true"
    >
      <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
      <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
    </svg>
  );
}

const primaryClasses = [
  "group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white",
  "bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600",
  "shadow-[0_0_16px_rgba(249,115,22,0.35)] transition-shadow duration-300",
  "hover:shadow-[0_0_24px_rgba(249,115,22,0.6)]",
  focusRingClasses,
  "sm:w-auto",
].join(" ");

const secondaryClasses = [
  "group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-zinc-50",
  "border border-amber-500/30 bg-white/5 backdrop-blur-md",
  "transition-all duration-300",
  "hover:border-amber-400/60 hover:bg-amber-500/10 hover:shadow-[0_0_18px_rgba(251,146,60,0.28)]",
  focusRingClasses,
  "sm:w-auto",
].join(" ");

const motionInteraction = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: motionSpring,
};

export function HeroPrimaryButton({
  href,
  children,
  className,
}: HeroPrimaryButtonProps) {
  const classes = className ? `${primaryClasses} ${className}` : primaryClasses;

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <motion.a href={href} className={classes} {...motionInteraction}>
        {children}
        <ArrowIcon />
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} className={classes} {...motionInteraction}>
      {children}
      <ArrowIcon />
    </MotionLink>
  );
}

export function HeroSecondaryButton({
  href,
  children,
  className,
  download,
}: HeroSecondaryButtonProps) {
  const classes = className ? `${secondaryClasses} ${className}` : secondaryClasses;

  if (download !== undefined) {
    return (
      <motion.a
        href={href}
        download={download}
        className={classes}
        {...motionInteraction}
      >
        {children}
        <DownloadIcon />
      </motion.a>
    );
  }

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <motion.a href={href} className={classes} {...motionInteraction}>
        {children}
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} className={classes} {...motionInteraction}>
      {children}
    </MotionLink>
  );
}
