"use client";

import { motion } from "framer-motion";
import { socialLinks } from "../../data";
import Button from "../ui/Button";
import SocialIcon from "../ui/SocialIcon";

const fadeInVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const socialLinkClasses =
  "inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50";

const emailLink = socialLinks.find((link) => link.url.startsWith("mailto:"));
const secondaryLinks = socialLinks.filter((link) => !link.url.startsWith("mailto:"));

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-zinc-50 py-16 dark:bg-zinc-950 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <motion.div
        className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6 lg:px-8"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2
          id="contact-heading"
          className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
        >
          Get In Touch
        </h2>

        <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Have a project in mind or want to connect? I&apos;m always open to
          discussing new opportunities, collaborations, or just a friendly chat
          about technology.
        </p>

        {emailLink && (
          <div className="mt-8">
            <Button href={emailLink.url} variant="primary">
              {emailLink.label}
            </Button>
          </div>
        )}

        {secondaryLinks.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {secondaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClasses}
              >
                <SocialIcon name={link.name} />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
