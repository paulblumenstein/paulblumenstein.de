import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ReferenceObjectCard } from "@/components/sections/ReferenceObjectCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { referenzobjekte, STATUS_LABEL } from "@/content/referenzobjekte";
import { leistungsKategorien } from "@/content/leistungen";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        priority
        image={{
          src: "/images/referenzobjekte/stadtblick-pfullendorf/wohnzimmer-balkon.jpg",
          alt: "Helles Wohnzimmer mit großzügigem Blick auf Balkon und Umgebung",
        }}
        eyebrow="Immobilienvermarktung"
        title={
          <>
            Der erste Eindruck
            <br />
            entsteht online.
          </>
        }
        cta={
          <>
            <Button
              variant="primary"
              tone="dark"
              href="/referenzobjekte/stadtblick-pfullendorf"
            >
              Referenzobjekt ansehen
            </Button>
            <Button variant="text" tone="dark" href="#leistungen">
              Leistungen
            </Button>
          </>
        }
      />

      <Section id="leistungen">
        <Container>
          <Eyebrow>Leistungen</Eyebrow>
          <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
            Damit Ihre Immobilie überzeugt, bevor der erste Interessent vor
            der Tür steht
          </h2>
          <p className="mt-4 max-w-xl font-serif text-ink-muted">
            Ein Interessent entscheidet online in Sekunden, ob er sich eine
            Immobilie überhaupt ansehen möchte. Ich bereite Fotos, Exposé und
            Anzeigen so auf, dass mehr passende Interessenten anfragen — und
            Sie bessere Voraussetzungen für Verkauf oder Vermietung haben.
          </p>

          <div className="mt-12 flex flex-col gap-10">
            {leistungsKategorien.map((kategorie) => (
              <div key={kategorie.name}>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                  {kategorie.name}
                </h3>
                <div className="mt-3 flex flex-col">
                  {kategorie.items.map((service) => (
                    <div
                      key={service.name}
                      className="grid grid-cols-1 gap-1 border-t border-line py-4 last:border-b lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-8"
                    >
                      <div className="font-sans text-sm font-semibold">
                        {service.name}
                      </div>
                      <div className="max-w-md font-sans text-sm text-ink-muted">
                        {service.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Referenzobjekt</Eyebrow>
          <h2 className="mt-2 max-w-md font-display text-3xl lg:text-4xl">
            So sieht das in der Praxis aus
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {referenzobjekte.map((obj) => (
              <ReferenceObjectCard
                key={obj.slug}
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

      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Meine Haltung</Eyebrow>
            <blockquote className="mt-3 font-serif text-2xl italic leading-snug lg:text-3xl">
              „Ich zeige eine Immobilie nicht, um sie möglichst schön
              aussehen zu lassen. Ich zeige sie so, dass Interessenten
              schneller verstehen, was sie ausmacht — und sich schneller
              entscheiden können.“
            </blockquote>
          </div>
        </Container>
      </Section>

      <Section tone="abyss">
        <Container>
          <Eyebrow className="text-[#9aa4c8]">Kontakt</Eyebrow>
          <h2 className="mt-2 max-w-md font-display text-3xl lg:text-4xl">
            Eine Immobilie in Stade oder Umgebung zu vermarkten?
          </h2>
          <p className="mt-3 max-w-md font-serif text-[#c9c4b6]">
            Schreiben Sie mir kurz, worum es geht — ich melde mich zurück.
          </p>
          <div className="mt-6">
            <Button variant="primary" tone="dark" href="/kontakt">
              Kontakt aufnehmen
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
