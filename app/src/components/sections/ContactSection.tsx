"use client";

import { motion } from "framer-motion";
import { contactSectionContent, socialLinks } from "../../data";
import { resumeData } from "../../data/resume";
import { fadeUpItem, staggerContainer, viewportOnce } from "../../lib/motion";
import {
  PremiumPrimaryButton,
  PremiumSecondaryButton,
} from "../ui/PremiumButton";
import SectionHeading from "../ui/SectionHeading";
import SectionShell from "../ui/SectionShell";
import SocialIcon from "../ui/SocialIcon";

const emailLink = socialLinks.find((link) => link.url.startsWith("mailto:"));
const secondaryLinks = socialLinks.filter(
  (link) => !link.url.startsWith("mailto:"),
);

export default function ContactSection() {
  return (
    <SectionShell
      id="contact"
      ariaLabelledBy="contact-heading"
      tone="slate-950"
      contentClassName="mx-auto w-full max-w-2xl px-4 text-center sm:px-6 lg:px-8"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <SectionHeading
          id="contact-heading"
          title={contactSectionContent.title}
          description={contactSectionContent.description}
          align="center"
          className="mb-0"
        />

        <motion.div
          variants={fadeUpItem}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          {emailLink && (
            <PremiumPrimaryButton
              href={emailLink.url}
              className="w-full sm:w-auto"
            >
              {emailLink.label}
            </PremiumPrimaryButton>
          )}
          <PremiumSecondaryButton
            href={resumeData.href}
            download={resumeData.download}
            className="w-full sm:w-auto"
          >
            {resumeData.label}
          </PremiumSecondaryButton>
        </motion.div>

        {secondaryLinks.length > 0 && (
          <motion.div
            variants={fadeUpItem}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {secondaryLinks.map((link) => (
              <PremiumSecondaryButton
                key={link.name}
                href={link.url}
                size="compact"
                showIcon
                className="w-auto"
              >
                <SocialIcon name={link.name} />
                {link.label}
              </PremiumSecondaryButton>
            ))}
          </motion.div>
        )}
      </motion.div>
    </SectionShell>
  );
}
