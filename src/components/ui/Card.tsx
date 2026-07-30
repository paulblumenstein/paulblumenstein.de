import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/**
 * Bordered, flat container — no drop shadow, small architectural radius.
 * Photography inside (CardMedia) is clipped to the same radius; media
 * itself never gets its own rounding (see Art-Direction-Konzept, §15).
 */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-panel border border-line bg-paper-elevated",
        className,
      )}
      {...props}
    />
  );
}

export function CardMedia({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("relative aspect-[4/3]", className)} {...props} />;
}

export function CardBody({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5", className)} {...props} />;
}
