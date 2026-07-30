import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  /** "abyss" = deliberate dark register (hero-adjacent CTA bands), never a theme toggle. */
  tone?: "paper" | "abyss";
};

/** Vertical section rhythm: 3rem mobile → 6rem desktop, per the Art-Direction-Konzept. */
export function Section({
  className,
  tone = "paper",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-12 lg:py-24",
        tone === "abyss" && "bg-abyss text-abyss-ink",
        className,
      )}
      {...props}
    />
  );
}
