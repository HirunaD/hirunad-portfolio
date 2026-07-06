"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { navLinks, profileData } from "../../data";
import { useActiveSection } from "../../lib/useActiveSection";
import NavLink, { navListVariants } from "./NavLink";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hrefs = useMemo(() => navLinks.map((link) => link.href), []);
  const activeSection = useActiveSection(hrefs);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center"
          onClick={closeMenu}
          aria-label={`${profileData.name} - Home`}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/logo.jpg"
              alt={`${profileData.name} logo`}
              width={60}
              height={40}
              unoptimized
              priority
              className="rounded-sm transition-[filter] duration-300 group-hover:drop-shadow-[0_0_12px_rgba(251,146,60,0.55)]"
            />
          </motion.div>
        </Link>

        <motion.ul
          className="hidden items-center gap-7 md:flex"
          variants={navListVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map(({ name, href }) => (
            <NavLink
              key={name}
              name={name}
              href={href}
              isActive={activeSection === href.replace("#", "")}
              variant="desktop"
            />
          ))}
        </motion.ul>

        <motion.button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 md:hidden dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
          whileTap={{ scale: 0.92 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? (
              <motion.svg
                key="close"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="menu"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="overflow-hidden border-t border-zinc-200 bg-white md:hidden dark:border-zinc-800 dark:bg-black"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          >
            <motion.ul
              className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
              variants={navListVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map(({ name, href }) => (
                <NavLink
                  key={name}
                  name={name}
                  href={href}
                  isActive={activeSection === href.replace("#", "")}
                  variant="mobile"
                  onClick={closeMenu}
                />
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
