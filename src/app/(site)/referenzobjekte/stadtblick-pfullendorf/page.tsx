import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Field } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { getReferenzObjekt } from "@/content/referenzobjekte";

const SLUG = "stadtblick-pfullendorf";

export const metadata: Metadata = {
  title: "Stadtblick Pfullendorf",
  description:
    "Referenzprojekt: Immobilienfotografie, Exposé-Erstellung und eigenständig durchgeführte Nachvermietung für eine Wohnung in Pfullendorf.",
  alternates: { canonical: "/referenzobjekte/stadtblick-pfullendorf" },
};

export default function StadtblickPfullendorfPage() {
  const obj = getReferenzObjekt(SLUG);
  if (!obj) notFound();

  return (
    <>
      <Hero
        priority
        image={obj.heroImage}
        eyebrow={`Referenzobjekt · ${obj.location ?? ""}`}
        title={obj.name}
        facts={obj.heroFacts}
      />

      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Ausgangssituation</Eyebrow>
            <h2 className="mt-2 font-display text-3xl lg:text-4xl">
              Eine Wohnung, die neu vermietet werden sollte
            </h2>
            <p className="mt-4 font-serif text-ink-muted">{obj.summary}</p>
          </div>
          <div className="mt-10 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
            Maßnahmen
          </div>
          <ul className="mt-3 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-2 font-sans text-sm text-ink sm:grid-cols-2">
            {obj.services.map((service) => (
              <li key={service} className="border-t border-line py-2">
                {service}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="py-0 lg:py-0">
        <Gallery images={obj.gallery} />
      </Section>

      {obj.grundriss ? (
        <Section>
          <Container>
            <Eyebrow>Grundriss</Eyebrow>
            <h2 className="mt-2 font-display text-3xl lg:text-4xl">
              Fakten statt Bauchgefühl
            </h2>
            <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start">
              <div className="relative aspect-[3/4] w-full max-w-sm border border-line bg-paper-elevated lg:w-96">
                <Image
                  src={obj.grundriss.src}
                  alt={obj.grundriss.alt}
                  fill
                  sizes="(min-width: 64rem) 24rem, 100vw"
                  className="object-contain p-4"
                />
              </div>
              {(() => {
                const facts = obj.grundrissFacts;
                if (!facts) return null;
                return (
                  <table className="w-full max-w-md font-sans text-sm">
                    <tbody>
                      {facts.map((fact, i) => (
                        <tr
                          key={fact.label}
                          className={
                            i === facts.length - 1
                              ? "font-semibold"
                              : "border-b border-line"
                          }
                        >
                          <td className="py-2.5">{fact.label}</td>
                          <td className="py-2.5 text-right font-mono text-ink-muted">
                            {fact.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
              })()}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container>
          <Eyebrow>Kontakt</Eyebrow>
          <h2 className="mt-2 font-display text-3xl lg:text-4xl">
            Fragen zu diesem Projekt?
          </h2>
          <div className="mt-8 flex max-w-sm flex-col gap-6">
            <Field label="Name" name="name" type="text" placeholder="Vor- und Nachname" />
            <Field label="E-Mail" name="email" type="email" placeholder="name@beispiel.de" />
            <Field
              label="Nachricht"
              name="message"
              multiline
              rows={3}
              placeholder="Ihr Anliegen"
            />
            <div>
              <Button variant="primary" tone="light" type="button">
                Absenden
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
