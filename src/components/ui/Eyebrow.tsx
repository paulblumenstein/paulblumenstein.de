import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "block font-sans text-[0.7rem] font-semibold uppercase tracking-[0.11em] text-ink-muted",
        className,
      )}
      {...props}
    />
  );
}
