import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Beruflicher Weg von Paul Blumenstein — von der Immobilienbranche über die Finanzberatung zurück in die Immobilienvermarktung, vom Bodensee bis nach Stade.",
  alternates: { canonical: "/ueber-mich" },
};

const STATIONEN = [
  {
    label: "Wer ich bin",
    text: "Paul Blumenstein. Immobilienvermarktung in Stade und Umgebung.",
  },
  {
    label: "Einstieg",
    text: "2019 Einstieg in die Immobilienbranche.",
  },
  {
    label: "Finanzberatung",
    text: "Parallel dazu Erfahrung in der Finanzberatung — daher ein Verständnis für Immobilienfinanzierung und wirtschaftliche Zusammenhänge.",
  },
  {
    label: "Fokus",
    text: "Bewusste Rückkehr in die Immobilienbranche, mit klarem Fokus auf eine langfristige Tätigkeit in diesem Bereich.",
  },
  {
    label: "Qualifikation",
    text: "Externenprüfung zum Immobilienkaufmann bei der IHK, in mehreren Teilen bereits bestanden.",
  },
  {
    label: "Weg",
    text: "Beruflich vom Bodensee bis in den Landkreis Stade und die Metropolregion Hamburg.",
  },
] as const;

export default function UeberMichPage() {
  return (
    <>
      <PageHeader
        eyebrow="Über mich"
        title="Vom Bodensee in den Landkreis Stade."
      />
      <Section>
        <Container>
          <div className="flex flex-col">
            {STATIONEN.map((station, i) => (
              <div
                key={station.label}
                className={`grid grid-cols-1 gap-4 border-t border-line py-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12 ${
                  i === STATIONEN.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                  {station.label}
                </div>
                <p className="max-w-2xl font-serif text-ink-muted">
                  {station.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
