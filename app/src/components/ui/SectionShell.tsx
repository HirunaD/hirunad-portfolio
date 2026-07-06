import { type ReactNode } from "react";
import SectionBackground from "./SectionBackground";

interface SectionShellProps {
  id: string;
  ariaLabelledBy: string;
  tone?: "slate-950" | "slate-900";
  children: ReactNode;
  contentClassName?: string;
}

export default function SectionShell({
  id,
  ariaLabelledBy,
  tone = "slate-950",
  children,
  contentClassName = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
}: SectionShellProps) {
  const backgroundClass =
    tone === "slate-950" ? "bg-slate-950" : "bg-slate-900";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-12 sm:py-16 ${backgroundClass}`}
    >
      <SectionBackground tone={tone} />
      <div className={`relative z-10 ${contentClassName}`}>{children}</div>
    </section>
  );
}
