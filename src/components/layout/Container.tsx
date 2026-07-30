import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Horizontal max-width + margin only — pair with <Section> for vertical rhythm. */
export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto max-w-[90rem] px-[1.1rem] lg:px-16", className)}
      {...props}
    />
  );
}
