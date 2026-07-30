import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Wie ich Immobilien für die Vermarktung vorbereite — Fotografie, Exposés und Objektbeschreibungen mit Fokus auf schnelles Verständnis für Interessenten.",
  alternates: { canonical: "/ueber-mich" },
};

export default function UeberMichPage() {
  return (
    <>
      <PageHeader
        eyebrow="Über mich"
        title="Immobilien verdienen mehr als eine Anzeige."
      />
      <Section>
        <Container>
          <div className="flex max-w-2xl flex-col gap-5 font-serif text-ink-muted">
            <p>
              Eine Immobilie ist für viele Menschen einer der größten
              Vermögenswerte ihres Lebens. Entsprechend sollte auch ihre
              Präsentation diesem Anspruch gerecht werden.
            </p>
            <p>
              Mein Schwerpunkt liegt auf der digitalen Aufbereitung von
              Immobilien — von der Fotografie über Exposés und
              Objektbeschreibungen bis hin zur Vermarktung.
            </p>
            <p>Dabei verfolge ich einen einfachen Grundsatz:</p>
            <p className="font-display text-2xl italic leading-snug text-ink lg:text-3xl">
              Jedes Bild soll eine Frage beantworten — und die Reihenfolge
              der Bilder den Besucher durch die Immobilie führen.
            </p>
          </div>

          <div className="mt-20 flex flex-col lg:mt-28">
            <div className="grid grid-cols-1 gap-4 border-t border-line py-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Ausgangspunkt
              </div>
              <div className="flex max-w-2xl flex-col gap-5 font-serif text-ink-muted">
                <p>
                  Mich stört nicht die Bildqualität auf dem Immobilienmarkt.
                  Mich stört, dass viele Vermarktungen keine klare Idee
                  haben — es werden Fotos gemacht, ein Standardexposé
                  erstellt, die Immobilie online gestellt. Dabei beginnt die
                  Entscheidung eines Interessenten lange vor der
                  Besichtigung.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-line py-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Überzeugung
              </div>
              <div className="max-w-2xl">
                <p className="font-serif text-ink-muted">
                  Der Unterschied liegt für mich nicht in der Kamera,
                  sondern darin, dass ich Immobilien aus Sicht der
                  Vermarktung betrachte. Ich will keine möglichst schönen
                  Bilder erstellen, sondern Immobilien so präsentieren, dass
                  Interessenten schneller verstehen, was das Objekt
                  ausmacht.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-line py-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Für Eigentümer bedeutet das
              </div>
              <div className="max-w-2xl">
                <p className="font-serif text-ink-muted">
                  Sie investieren nicht in Fotos. Sie investieren in eine
                  Präsentation, die den Wert Ihrer Immobilie sichtbar macht,
                  mehr passende Interessenten anspricht — und dadurch die
                  Chancen auf den bestmöglichen Verkaufspreis oder die
                  bestmögliche Vermietung verbessert.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-b border-line py-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Ablauf
              </div>
              <div className="flex max-w-2xl flex-col gap-5 font-serif text-ink-muted">
                <p>
                  Ein Auftrag läuft typischerweise so ab: erstes Gespräch,
                  Klärung des Objekts, Terminvereinbarung, Aufnahme vor Ort,
                  Auswahl und Bearbeitung der Medien, Erstellung der
                  vereinbarten Vermarktungsunterlagen, Übergabe an Sie. Je
                  nach Auftrag können weitere Leistungen hinzukommen.
                </p>
                <p>Ich fotografiere mit einer Sony A7C.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
