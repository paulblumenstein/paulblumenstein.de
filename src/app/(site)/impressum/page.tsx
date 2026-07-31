import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Paul Blumenstein.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <Section>
        <Container>
          <div className="flex max-w-2xl flex-col gap-8 font-serif text-ink">
            <div>
              <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.05em] text-ink-faint">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="mt-3">
                Paul Blumenstein
                <br />
                Einzelunternehmen
                <br />
                Burgsiedlung 13
                <br />
                21680 Stade
                <br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.05em] text-ink-faint">
                Kontakt
              </h2>
              <p className="mt-3">
                Telefon: +49 151 14468352
                <br />
                E-Mail: blumenstein.paul@googlemail.com
              </p>
            </div>

            <div>
              <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.05em] text-ink-faint">
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <p className="mt-3">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                <br />
                DE370384527
              </p>
            </div>

            <div>
              <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.05em] text-ink-faint">
                Hinweis gemäß § 19 UStG
              </h2>
              <p className="mt-3">
                Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine
                Umsatzsteuer berechnet und ausgewiesen.
              </p>
            </div>

            <div>
              <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.05em] text-ink-faint">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-3">
                Paul Blumenstein
                <br />
                Burgsiedlung 13, 21680 Stade
              </p>
            </div>

            <div>
              <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.05em] text-ink-faint">
                Verbraucherstreitbeilegung
              </h2>
              <p className="mt-3">
                Ich bin nicht verpflichtet und nicht bereit, an einem
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
