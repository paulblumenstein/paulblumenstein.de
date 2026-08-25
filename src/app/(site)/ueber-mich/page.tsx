import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Beruflicher Weg von Paul Blumenstein — von der Immobilienbranche über die Finanzberatung zurück in die Immobilienvermarktung, vom Bodensee bis nach Stade.",
  alternates: { canonical: "/ueber-mich" },
};

export default function UeberMichPage() {
  return (
    <>
      <Container className="pt-20 pb-8 lg:pt-32">
        <Eyebrow>Über mich</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] lg:text-7xl">
          Vom Bodensee in den Landkreis Stade.
        </h1>
      </Container>

      <Container className="pt-16 pb-24 lg:pt-28 lg:pb-40">
        <p className="font-display text-2xl lg:text-3xl">Paul Blumenstein</p>
        <p className="mt-2 max-w-xs font-serif text-ink-muted">
          Immobilien in Stade und Umgebung.
        </p>

        <p className="mt-20 max-w-2xl font-serif text-xl leading-snug lg:mt-28 lg:text-2xl">
          Der Weg in die Immobilienbranche führte über eine
          Berufsausbildung zum Immobilienkaufmann (IHK) und eine Station in
          Finanzberatung und Vertrieb — bevor die Entscheidung fiel, sich
          langfristig auf Immobilien zu konzentrieren.
        </p>

        <div className="mt-16 grid max-w-lg grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-20">
          <div>
            <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
              Vorher
            </div>
            <div className="mt-2 font-serif text-ink">
              Finanzberatung &amp; Vertrieb
            </div>
          </div>
          <div>
            <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
              Qualifikation
            </div>
            <div className="mt-2 font-serif text-ink">
              Externenprüfung zum Immobilienkaufmann (IHK) — Abschluss 2026
            </div>
          </div>
        </div>

        <p className="mt-20 font-sans text-xs text-ink-faint lg:mt-28">
          Beruflich vom Bodensee bis in den Landkreis Stade und die
          Metropolregion Hamburg.
        </p>
      </Container>
    </>
  );
}
