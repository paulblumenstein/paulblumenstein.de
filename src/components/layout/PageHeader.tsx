import { type ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
};

/** Simple, sober header for non-hero pages (legal pages, contact). */
export function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <Container className="pt-16 lg:pt-24">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-2 font-display text-4xl lg:text-5xl">{title}</h1>
      {lede ? (
        <p className="mt-4 max-w-xl font-serif text-ink-muted">{lede}</p>
      ) : null}
    </Container>
  );
}
