import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { Rundgang360 } from "@/components/sections/Rundgang360";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getReferenzObjekt } from "@/content/referenzobjekte";

const SLUG = "dachgeschosswohnung-altes-land";

export const metadata: Metadata = {
  title: "Dachgeschosswohnung Altes Land",
  description:
    "Referenzprojekt: Immobilienfotografie, 360°-Rundgang, Exposé-Erstellung und Objektbeschreibung für eine Dachgeschosswohnung in Hollern-Twielenfleth.",
  alternates: { canonical: "/referenzobjekte/dachgeschosswohnung-altes-land" },
};

export default function DachgeschosswohnungAltesLandPage() {
  const obj = getReferenzObjekt(SLUG);
  if (!obj) notFound();

  return (
    <>
      <Hero
        priority
        image={obj.heroImage}
        focus="50% 55%"
        eyebrow={`Referenzobjekt · ${obj.location ?? ""}`}
        title={obj.name}
        facts={obj.heroFacts}
      />

      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Ausgangssituation</Eyebrow>
            <h2 className="mt-2 font-display text-3xl lg:text-4xl">
              Eine Dachgeschosswohnung, die einen neuen Mieter finden sollte
            </h2>
            <p className="mt-4 font-serif text-ink-muted">
              Dachgeschosswohnung im Mehrfamilienhaus, Baujahr 2022. Wohn- und
              Essbereich mit Zugang zur Dachterrasse, zwei weitere Zimmer,
              Einbauküche, ein Bad.
            </p>
            <p className="mt-4 font-serif text-ink-muted">
              Aufzug und Außenstellplatz vorhanden. Zustand neuwertig.
            </p>
            <p className="mt-4 font-serif text-ink-muted">
              Hollern-Twielenfleth liegt im Alten Land, direkt an der Elbe,
              umgeben von Obstplantagen. Stade ist in wenigen Minuten
              erreichbar, ebenso gute Verbindungen Richtung Hamburg.
            </p>
          </div>

          {(() => {
            const facts = obj.grundrissFacts;
            if (!facts) return null;
            return (
              <table className="mt-8 w-full max-w-md font-sans text-sm">
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

      {obj.rundgang360 ? (
        <Section>
          <Container>
            <Eyebrow>360°-Rundgang</Eyebrow>
            <h2 className="mt-2 font-display text-3xl lg:text-4xl">
              Virtuell durch die Wohnung
            </h2>
            <div className="mt-8">
              <Rundgang360
                href={obj.rundgang360.href}
                previewImage={obj.gallery[0]}
              />
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
          <p className="mt-4 max-w-md font-serif text-ink-muted">
            Schreiben Sie mir per{" "}
            <a
              href="mailto:blumenstein.paul@googlemail.com"
              className="text-ink underline hover:text-accent"
            >
              E-Mail
            </a>{" "}
            oder rufen Sie an:{" "}
            <a
              href="tel:+4915114468352"
              className="text-ink underline hover:text-accent"
            >
              +49 151 14468352
            </a>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
