import { type Article } from "../../types";

export interface ArticleCardProps {
  article: Article;
}

const linkClasses =
  "inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300";

export default function ArticleCard({ article }: ArticleCardProps) {
  const { title, description, platform, link, publishedAt } = article;

  return (
    <article className="group flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {platform}
        </p>
        <time
          dateTime={publishedAt}
          className="shrink-0 text-xs text-zinc-500 dark:text-zinc-400"
        >
          {publishedAt}
        </time>
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-700 dark:text-zinc-50 dark:group-hover:text-zinc-200">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
        >
          Read on {platform}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">: {title}</span>
        </a>
      </div>
    </article>
  );
}
