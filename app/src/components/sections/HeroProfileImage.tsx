"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface HeroProfileImageProps {
  name: string;
}

export default function HeroProfileImage({ name }: HeroProfileImageProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="group relative shrink-0">
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.button
          type="button"
          className="relative h-64 w-64 cursor-pointer sm:h-72 sm:w-72 lg:h-80 lg:w-80"
          style={{ perspective: 1200 }}
          onClick={() => setIsFlipped((flipped) => !flipped)}
          whileHover={{
            scale: 1.05,
            filter: "drop-shadow(0 0 28px rgba(251, 146, 60, 0.55))",
          }}
          whileTap={{ scale: 0.98 }}
          aria-label={`${name} profile photo — click to flip`}
        >
          <div
            className="absolute inset-0 scale-95 rounded-full bg-linear-to-br from-amber-400/50 via-orange-500/40 to-orange-600/50 blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:blur-3xl"
            aria-hidden="true"
          />

          <motion.div
            className="relative h-full w-full"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 overflow-hidden rounded-full ring-2 ring-amber-500/40"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Image
                src="/profile.png"
                alt={`${name} profile photo`}
                width={320}
                height={320}
                priority
                unoptimized
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-full bg-linear-to-br from-amber-500 via-orange-500 to-orange-700 p-6 text-center ring-2 ring-amber-400/50"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <span className="text-3xl" aria-hidden="true">
                👋
              </span>
              <span className="text-sm font-semibold leading-snug text-white sm:text-base">
                Nice to meet you!
              </span>
              <span className="text-xs text-amber-100/90">Click to flip back</span>
            </div>
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}
