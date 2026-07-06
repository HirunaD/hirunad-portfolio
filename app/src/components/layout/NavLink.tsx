"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavLinkProps {
  name: string;
  href: string;
  isActive: boolean;
  variant: "desktop" | "mobile";
  onClick?: () => void;
}

const navItemVariants = {
  hidden: { opacity: 0, y: -14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 28,
    },
  },
};

export default function NavLink({
  name,
  href,
  isActive,
  variant,
  onClick,
}: NavLinkProps) {
  if (variant === "mobile") {
    return (
      <motion.li variants={navItemVariants}>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href={href}
            onClick={onClick}
            aria-current={isActive ? "page" : undefined}
            className={`group relative block overflow-hidden rounded-lg px-3 py-2.5 text-base font-semibold transition-colors duration-300 ${
              isActive
                ? "text-zinc-900 dark:text-zinc-50"
                : "text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="mobile-nav-pill"
                className="absolute inset-0 rounded-lg bg-zinc-100 dark:bg-zinc-800/80"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            {!isActive && (
              <span
                className="absolute inset-0 rounded-lg bg-zinc-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-zinc-800/80"
                aria-hidden="true"
              />
            )}
            <span className="relative z-10">{name}</span>
          </Link>
        </motion.div>
      </motion.li>
    );
  }

  return (
    <motion.li variants={navItemVariants}>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
        <Link
          href={href}
          onClick={onClick}
          aria-current={isActive ? "page" : undefined}
          className={`group relative px-1 py-1 text-sm font-semibold transition-colors duration-300 ${
            isActive
              ? "text-zinc-900 dark:text-zinc-50"
              : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          }`}
        >
          <span className="relative z-10">{name}</span>

          {isActive ? (
            <motion.span
              layoutId="desktop-nav-underline"
              className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-linear-to-r from-amber-400 via-orange-500 to-orange-600"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          ) : (
            <span
              className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 rounded-full bg-linear-to-r from-amber-400 via-orange-500 to-orange-600 transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"
              aria-hidden="true"
            />
          )}
        </Link>
      </motion.div>
    </motion.li>
  );
}

export const navListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};
