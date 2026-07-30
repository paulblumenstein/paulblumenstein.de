import Image from "next/image";
import { type ReactNode } from "react";

type HeroProps = {
  image: { src: string; alt: string };
  eyebrow: string;
  title: ReactNode;
  facts?: string;
  cta?: ReactNode;
  priority?: boolean;
};

/**
 * Full-bleed hero: graded photography, legibility scrim (never a decorative
 * gradient), asymmetric headline overlapping the lower-left edge — see
 * Art-Direction-Konzept §6.
 */
export function Hero({ image, eyebrow, title, facts, cta, priority }: HeroProps) {
  return (
    <div className="relative h-[78vh] min-h-[24rem] overflow-hidden lg:h-[88vh]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover [filter:saturate(.86)_contrast(1.06)_brightness(.97)_sepia(.04)_hue-rotate(-6deg)]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(190deg,transparent_38%,rgba(20,18,15,0.78)_94%)]" />
      <div className="absolute inset-x-[1.1rem] bottom-8 text-abyss-ink lg:inset-x-16 lg:max-w-2xl">
        <span className="block font-sans text-[0.7rem] font-semibold uppercase tracking-[0.11em] text-[#c9cee0]">
          {eyebrow}
        </span>
        <h1 className="mt-2 font-display text-[clamp(2rem,8vw,4.6rem)] leading-[1.03]">
          {title}
        </h1>
        {facts ? (
          <div className="mt-3 font-mono text-xs text-[#d8d4c8]">{facts}</div>
        ) : null}
        {cta ? (
          <div className="mt-4 flex flex-wrap items-center gap-4">{cta}</div>
        ) : null}
      </div>
    </div>
  );
}
