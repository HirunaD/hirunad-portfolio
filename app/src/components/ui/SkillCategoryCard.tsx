import { type SkillCategory } from "../../types";

export interface SkillCategoryCardProps {
  skillCategory: SkillCategory;
}

export default function SkillCategoryCard({
  skillCategory,
}: SkillCategoryCardProps) {
  const { category, skills } = skillCategory;

  return (
    <article className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {category}
      </h3>

      <ul
        className="mt-4 flex flex-wrap gap-2"
        aria-label={`${category} skills`}
      >
        {skills.map((skill) => (
          <li key={skill}>
            <span className="inline-block rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
