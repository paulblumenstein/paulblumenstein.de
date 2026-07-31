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
          <div className="flex flex-col">
            <div className="grid grid-cols-1 gap-4 border-t border-line py-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Wer ich bin
              </div>
              <p className="max-w-2xl font-serif text-ink-muted">
                Paul Blumenstein. Ich vermarkte Immobilien in Stade und
                Umgebung.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-line py-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Was ich anbiete
              </div>
              <p className="max-w-2xl font-serif text-ink-muted">
                Fotografie, Exposés, Objektbeschreibungen und die Vermarktung
                Ihrer Immobilie — von der Aufnahme bis zur Übergabe.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-line py-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Mein Schwerpunkt
              </div>
              <p className="max-w-2xl font-serif text-ink-muted">
                Bilder und Texte, die Interessenten schnell verstehen lassen,
                was eine Immobilie ausmacht — nicht nur gute Fotos.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-b border-line py-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Wie ich arbeite
              </div>
              <p className="max-w-2xl font-serif text-ink-muted">
                Gespräch, Ortstermin, Aufnahme, Auswahl und Bearbeitung,
                Übergabe der fertigen Unterlagen. Kamera: Sony A7C.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
