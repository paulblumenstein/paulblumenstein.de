import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";
import { ReferenceObjectCard } from "@/components/sections/ReferenceObjectCard";
import { referenzobjekte, STATUS_LABEL } from "@/content/referenzobjekte";

export const metadata: Metadata = {
  title: "Referenzobjekte",
  description: "Abgeschlossene und aktuelle Referenzprojekte von Paul Blumenstein.",
  alternates: { canonical: "/referenzobjekte" },
};

export default function ReferenzobjektePage() {
  return (
    <>
      <PageHeader
        eyebrow="Referenzobjekte"
        title="Projekte"
        lede="Jedes Projekt mit den Leistungen, die dort tatsächlich erbracht wurden."
      />
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {referenzobjekte.map((obj) => (
              <ReferenceObjectCard
                key={obj.slug}
                headingLevel="h2"
                href={`/referenzobjekte/${obj.slug}`}
                image={obj.heroImage}
                location={obj.location ?? ""}
                title={obj.name}
                meta={STATUS_LABEL[obj.status]}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
