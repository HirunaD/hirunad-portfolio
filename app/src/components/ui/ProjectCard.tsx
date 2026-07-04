import { type Project } from "../../types";

export interface ProjectCardProps {
  project: Project;
}

const linkClasses =
  "inline-flex items-center text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50";

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, techStack, githubUrl, liveUrl } = project;

  return (
    <article className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
        {techStack.map((tech) => (
          <li key={tech}>
            <span className="inline-block rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              {tech}
            </span>
          </li>
        ))}
      </ul>

      {(githubUrl ?? liveUrl) && (
        <div className="mt-6 flex flex-wrap gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              GitHub
              <span className="sr-only"> for {title}</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              Live
              <span className="sr-only"> demo for {title}</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
