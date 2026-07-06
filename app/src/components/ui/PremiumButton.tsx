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

interface PremiumButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "default" | "compact";
  showIcon?: boolean;
  download?: string;
  target?: string;
  rel?: string;
}

const MotionLink = motion.create(Link);

function ArrowIcon({ compact }: { compact: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`transition-transform duration-300 group-hover:translate-x-1 ${compact ? "h-3.5 w-3.5" : "h-4 w-4"}`}
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

function DownloadIcon({ compact }: { compact: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`transition-transform duration-300 group-hover:animate-bounce ${compact ? "h-3.5 w-3.5" : "h-4 w-4"}`}
      aria-hidden="true"
    >
      <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
      <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
    </svg>
  );
}

function ExternalIcon({ compact }: { compact: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${compact ? "h-3.5 w-3.5" : "h-4 w-4"}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4.25a.75.75 0 0 1 1.5 0v4.25A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.31v2.409a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-.75-.75h-3.969a.75.75 0 0 0 0 1.5h2.409l-9.193 8.64a.75.75 0 0 0-.053 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const motionInteraction = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: motionSpring,
};

function getSizeClasses(size: "default" | "compact") {
  return size === "compact"
    ? "h-9 px-4 text-xs"
    : "h-12 px-6 text-sm sm:w-auto";
}

function isExternalHref(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export function PremiumPrimaryButton({
  href,
  children,
  className,
  size = "default",
  showIcon = true,
  target,
  rel,
}: PremiumButtonProps) {
  const classes = [
    "group inline-flex w-full items-center justify-center gap-2 rounded-full font-semibold text-white",
    "bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600",
    "shadow-[0_0_16px_rgba(249,115,22,0.35)] transition-shadow duration-300",
    "hover:shadow-[0_0_24px_rgba(249,115,22,0.6)]",
    focusRingClasses,
    getSizeClasses(size),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const icon = showIcon ? <ArrowIcon compact={size === "compact"} /> : null;

  if (isExternalHref(href)) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        {...motionInteraction}
      >
        {children}
        {icon}
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} className={classes} {...motionInteraction}>
      {children}
      {icon}
    </MotionLink>
  );
}

export function PremiumSecondaryButton({
  href,
  children,
  className,
  size = "default",
  showIcon = false,
  download,
  target,
  rel,
}: PremiumButtonProps) {
  const classes = [
    "group inline-flex w-full items-center justify-center gap-2 rounded-full font-semibold text-zinc-50",
    "border border-amber-500/30 bg-white/5 backdrop-blur-md",
    "transition-all duration-300",
    "hover:border-amber-400/60 hover:bg-amber-500/10 hover:shadow-[0_0_18px_rgba(251,146,60,0.28)]",
    focusRingClasses,
    getSizeClasses(size),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const icon = download ? (
    <DownloadIcon compact={size === "compact"} />
  ) : showIcon ? (
    <ExternalIcon compact={size === "compact"} />
  ) : null;

  if (download !== undefined) {
    return (
      <motion.a
        href={href}
        download={download}
        className={classes}
        {...motionInteraction}
      >
        {children}
        {icon}
      </motion.a>
    );
  }

  if (isExternalHref(href)) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        {...motionInteraction}
      >
        {children}
        {icon}
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} className={classes} {...motionInteraction}>
      {children}
      {icon}
    </MotionLink>
  );
}
