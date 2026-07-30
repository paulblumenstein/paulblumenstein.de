import Image from "next/image";
import Link from "next/link";
import { Card, CardMedia, CardBody } from "@/components/ui/Card";

type ReferenceObjectCardProps = {
  href: string;
  image: { src: string; alt: string };
  location: string;
  title: string;
  meta?: string;
  /** Match the surrounding heading hierarchy — h3 under an h2 lead-in, h2 when the card grid follows directly after the page's h1. */
  headingLevel?: "h2" | "h3";
};

export function ReferenceObjectCard({
  href,
  image,
  location,
  title,
  meta,
  headingLevel: Heading = "h3",
}: ReferenceObjectCardProps) {
  return (
    <Link href={href} className="group block">
      <Card>
        <CardMedia>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 64rem) 33vw, (min-width: 40rem) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035] [filter:saturate(.86)_contrast(1.06)_brightness(.97)_sepia(.04)_hue-rotate(-6deg)]"
          />
        </CardMedia>
        <CardBody>
          <div className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-ink-faint">
            {location}
          </div>
          <Heading className="mt-1 font-display text-lg">{title}</Heading>
          {meta ? (
            <div className="mt-2 font-sans text-sm text-ink-muted">{meta}</div>
          ) : null}
        </CardBody>
      </Card>
    </Link>
  );
}
