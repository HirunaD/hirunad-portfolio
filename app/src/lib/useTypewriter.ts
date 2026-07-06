"use client";

import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter(
  titles: string[],
  {
    typingSpeed = 70,
    deletingSpeed = 40,
    pauseDuration = 2200,
  }: UseTypewriterOptions = {},
) {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (titles.length === 0) {
      return;
    }

    const currentTitle = titles[titleIndex];

    if (!isDeleting && displayText === currentTitle) {
      const pauseTimer = window.setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => window.clearTimeout(pauseTimer);
    }

    if (isDeleting && displayText === "") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = window.setTimeout(
      () => {
        const nextLength = isDeleting
          ? displayText.length - 1
          : displayText.length + 1;

        setDisplayText(currentTitle.slice(0, nextLength));
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => window.clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    titleIndex,
    titles,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
}
