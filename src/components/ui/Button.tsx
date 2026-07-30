import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * Two variants only, by design: a filled primary action and an underline
 * text link. No third "outline" style — see the Art-Direction-Konzept.
 */
const button = cva(
  "inline-flex items-center justify-center font-sans text-sm font-semibold transition-colors duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
  {
    variants: {
      variant: {
        primary: "rounded-control px-6 py-3",
        text: "bg-transparent p-0",
      },
      tone: {
        light: "",
        dark: "",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        tone: "light",
        class:
          "border border-ink bg-ink text-paper hover:border-accent hover:bg-accent hover:text-on-accent",
      },
      {
        variant: "primary",
        tone: "dark",
        class:
          "border border-abyss-ink bg-abyss-ink text-abyss hover:border-abyss-accent hover:bg-abyss-accent",
      },
      { variant: "text", tone: "light", class: "text-ink" },
      { variant: "text", tone: "dark", class: "text-abyss-ink" },
    ],
    defaultVariants: {
      variant: "primary",
      tone: "light",
    },
  },
);

type Variant = VariantProps<typeof button>["variant"];
type Tone = VariantProps<typeof button>["tone"];

type CommonProps = {
  variant?: Variant;
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

export type ButtonProps = CommonProps &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className">)
    | ({ href?: never } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">)
  );

export function Button({ className, variant, tone, children, ...props }: ButtonProps) {
  const classes = cn(button({ variant, tone }), className);
  const content =
    variant === "text" ? <span className="link-underline">{children}</span> : children;

  if (props.href) {
    const { href, ...rest } = props as { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
