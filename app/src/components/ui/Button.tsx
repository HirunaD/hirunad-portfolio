import Link from "next/link";
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

export type ButtonVariant = "primary" | "outline";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200",
  outline:
    "border border-zinc-300 bg-transparent text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800",
};

const baseClasses =
  "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-600";

type BaseButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

export type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonAsLinkProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

function shouldUseNativeAnchor(
  href: string,
  anchorProps: Omit<ButtonAsLinkProps, keyof BaseButtonProps | "href">,
): boolean {
  return (
    href.startsWith("mailto:") ||
    href.startsWith("http") ||
    anchorProps.download !== undefined
  );
}

function getButtonClasses(
  variant: ButtonVariant,
  className?: string,
): string {
  return [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");
}

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    className,
    children,
    href,
    ...rest
  } = props;

  const classes = getButtonClasses(variant, className);

  if (href !== undefined) {
    const anchorProps = rest as Omit<
      ButtonAsLinkProps,
      keyof BaseButtonProps | "href"
    >;

    if (shouldUseNativeAnchor(href, anchorProps)) {
      return (
        <a href={href} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as Omit<ButtonAsButtonProps, keyof BaseButtonProps | "href">)}
    >
      {children}
    </button>
  );
}
