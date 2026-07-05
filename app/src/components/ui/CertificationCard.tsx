import { type Certification } from "../../types";

export interface CertificationCardProps {
  certification: Certification;
}

const typeStyles = {
  certification:
    "border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300",
  competition:
    "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300",
};

const typeLabels = {
  certification: "Certification",
  competition: "Competition",
};

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  const { title, issuer, type, year } = certification;

  return (
    <article className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${typeStyles[type]}`}
        >
          {typeLabels[type]}
        </span>
        {year && (
          <time className="shrink-0 text-xs text-zinc-500 dark:text-zinc-400">
            {year}
          </time>
        )}
      </div>

      <h3 className="mt-4 flex-1 text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>

      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{issuer}</p>
    </article>
  );
}
