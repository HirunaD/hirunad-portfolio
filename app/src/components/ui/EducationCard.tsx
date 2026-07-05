import { type Education } from "../../types";

export interface EducationCardProps {
  education: Education;
  isLast?: boolean;
}

export default function EducationCard({
  education,
  isLast = false,
}: EducationCardProps) {
  const { degree, institution, period, description } = education;

  return (
    <article className="relative pb-10 pl-8 last:pb-0">
      <span
        className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-zinc-900 bg-white dark:border-zinc-50 dark:bg-zinc-950"
        aria-hidden="true"
      />
      {!isLast && (
        <span
          className="absolute bottom-0 left-0 top-4 w-px -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800"
          aria-hidden="true"
        />
      )}

      <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {degree}
            </h3>
            <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {institution}
            </p>
          </div>
          <time className="mt-2 shrink-0 text-sm text-zinc-500 sm:mt-0 dark:text-zinc-400">
            {period}
          </time>
        </div>

        {description && (
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
