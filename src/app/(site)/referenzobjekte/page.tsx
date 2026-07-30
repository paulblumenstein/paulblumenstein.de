import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";
import { referenzobjekte, STATUS_LABEL } from "@/content/referenzobjekte";

export const metadata: Metadata = {
  title: "Referenzobjekte",
  description: "Ein abgeschlossenes Referenzprojekt von Paul Blumenstein.",
  alternates: { canonical: "/referenzobjekte" },
};

export default function ReferenzobjektePage() {
  return (
    <>
      <PageHeader
        eyebrow="Referenzobjekte"
        title="Ein abgeschlossenes Projekt"
        lede="Ausgangssituation und Maßnahmen eines abgeschlossenen Projekts — wie ich tatsächlich arbeite."
      />
      <Section>
        <Container>
          <div className="flex flex-col">
            {referenzobjekte.map((obj) => (
              <Link
                key={obj.slug}
                href={`/referenzobjekte/${obj.slug}`}
                className="group grid grid-cols-1 gap-8 border-t border-line py-12 first:pt-0 lg:grid-cols-2 lg:items-center"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-paper-elevated">
                  <Image
                    src={obj.heroImage.src}
                    alt={obj.heroImage.alt}
                    fill
                    sizes="(min-width: 64rem) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] [filter:saturate(.86)_contrast(1.06)_brightness(.97)_sepia(.04)_hue-rotate(-6deg)]"
                  />
                </div>
                <div>
                  <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                    {obj.location}
                  </div>
                  <h2 className="mt-2 font-display text-3xl lg:text-4xl">
                    {obj.name}
                  </h2>
                  <div className="mt-2 font-sans text-sm text-ink-muted">
                    {STATUS_LABEL[obj.status]}
                  </div>
                  <p className="mt-4 max-w-md font-serif text-ink-muted">
                    {obj.summary}
                  </p>
                  <span className="mt-6 inline-block font-sans text-sm font-semibold uppercase tracking-[0.08em] text-ink group-hover:text-accent">
                    Projekt ansehen →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
