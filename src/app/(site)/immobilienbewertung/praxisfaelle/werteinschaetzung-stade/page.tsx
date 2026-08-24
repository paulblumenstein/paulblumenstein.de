import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { getPraxisfall } from "@/content/praxisfaelle";
import { getReferenzObjekt } from "@/content/referenzobjekte";
import { wertermittlungsverfahren } from "@/content/immobilienbewertung";

const SLUG = "werteinschaetzung-stade";

export const metadata: Metadata = {
  title: "Werteinschätzung Stade — Praxisfall",
  description:
    "Praxisfall: Wertermittlung eines Reihenhauses in Stade nach ImmoWertV, Sachwertverfahren, Bewertungsstichtag 01.01.2026.",
  alternates: {
    canonical: "/immobilienbewertung/praxisfaelle/werteinschaetzung-stade",
  },
};

function FactTable({
  rows,
  className,
}: {
  rows: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <table className={`w-full font-sans text-sm ${className ?? ""}`}>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={row.label}
            className={i === rows.length - 1 ? "" : "border-b border-line"}
          >
            <td className="py-2.5 text-ink-muted">{row.label}</td>
            <td className="py-2.5 text-right font-mono">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function WerteinschaetzungStadePage() {
  const fall = getPraxisfall(SLUG);
  if (!fall) notFound();

  const sachwertverfahren = wertermittlungsverfahren.find(
    (v) => v.id === "sachwertverfahren",
  );
  const referenzobjekt = fall.referenzobjektSlug
    ? getReferenzObjekt(fall.referenzobjektSlug)
    : undefined;

  return (
    <>
      <Container className="pt-16 pb-8 lg:pt-24 lg:pb-12">
        <Eyebrow>Praxisfall · Immobilienbewertung</Eyebrow>
        <h1 className="mt-2 max-w-2xl font-display text-4xl leading-[1.05] lg:text-6xl">
          {fall.title}
        </h1>
        <p className="mt-5 max-w-xl font-serif text-lg text-ink-muted lg:text-xl">
          {fall.objekt.find((f) => f.label === "Objektart")?.value},
          Baujahr {fall.objekt.find((f) => f.label === "Baujahr")?.value} ·{" "}
          {fall.objekt.find((f) => f.label === "Wohn-/Nutzfläche")?.value}{" "}
          Wohnfläche auf{" "}
          {fall.objekt.find((f) => f.label === "Grundstücksfläche")?.value}{" "}
          Grundstück · Bewertungsstichtag {fall.bewertungsstichtag}
        </p>

        <div className="mt-10 border-t border-line pt-6">
          <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
            Ermittelter Wert
          </div>
          <div className="mt-2 font-display text-5xl lg:text-6xl">
            {fall.ergebnis.wert}
          </div>
          <div className="mt-1 font-mono text-sm text-ink-muted">
            {fall.ergebnis.jeQm} · Sachwertverfahren
          </div>
          <p className="mt-4 max-w-md font-sans text-xs text-ink-faint">
            Überschlägige Wertermittlung nach ImmoWertV, kein
            Verkehrswertgutachten im Sinne des § 194 BauGB.
          </p>
        </div>
      </Container>

      <Section>
        <Container>
          <Eyebrow>Objektübersicht</Eyebrow>
          <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
            Bewertungsgrundlagen
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-16 lg:grid-cols-2">
            <FactTable rows={fall.objekt} />
            <FactTable rows={fall.grundlagen} className="mt-8 lg:mt-0" />
          </div>
        </Container>
      </Section>

      {sachwertverfahren ? (
        <Section className="bg-paper-sunken">
          <Container>
            <Eyebrow>Wie wurde der Wert ermittelt?</Eyebrow>
            <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
              {sachwertverfahren.title}
            </h2>
            <p className="mt-4 max-w-xl font-serif text-ink-muted">
              {sachwertverfahren.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
              {sachwertverfahren.highlights.map((step, i) => (
                <span key={step} className="flex items-center gap-3">
                  <span className="border-l-2 border-line-strong py-1 pl-3 font-sans text-sm text-ink">
                    {step}
                  </span>
                  {i < sachwertverfahren.highlights.length - 1 ? (
                    <span className="font-mono text-xs text-ink-faint">→</span>
                  ) : null}
                </span>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container>
          <Eyebrow>Sachwertverfahren</Eyebrow>
          <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
            Rechenschritte
          </h2>
          <div className="mt-8 max-w-md">
            <FactTable
              rows={[
                ...fall.sachwert.schritte,
                { label: "Ergebnis", value: fall.sachwert.ergebnis },
              ]}
            />
          </div>
          <p className="mt-4 max-w-md font-sans text-xs text-ink-faint">
            {fall.sachwert.hinweis}
          </p>
        </Container>
      </Section>

      <Section className="bg-paper-sunken">
        <Container>
          <Eyebrow>Verfahrensvergleich</Eyebrow>
          <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
            Im Gesamtergebnis berücksichtigte Verfahren
          </h2>
          <div className="mt-8 max-w-2xl overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b border-line-strong text-left text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                  <th className="py-2.5 font-normal">Verfahren</th>
                  <th className="py-2.5 font-normal">Ergebnis</th>
                  <th className="py-2.5 text-right font-normal">
                    Gewichtung
                  </th>
                </tr>
              </thead>
              <tbody>
                {fall.verfahrensvergleich.map((row) => (
                  <tr key={row.verfahren} className="border-b border-line">
                    <td className="py-2.5">{row.verfahren}</td>
                    <td className="py-2.5 font-mono">{row.ergebnis}</td>
                    <td className="py-2.5 text-right">{row.gewichtung}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex max-w-2xl flex-wrap gap-x-10 gap-y-2 font-sans text-sm text-ink-muted">
            <span>Leitverfahren: {fall.leitverfahren}</span>
            <span>Streuung der Verfahren: {fall.streuung}</span>
          </div>
          <p className="mt-4 max-w-md font-sans text-xs text-ink-faint">
            Vergleichswertverfahren: {fall.vergleichswert.status}
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Vollständiger Bericht</Eyebrow>
          <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
            Verwendete Bewertungsparameter
          </h2>
          <p className="mt-4 max-w-xl font-serif text-ink-muted">
            Datenstand: 16 von 16 Parametern sind nicht durch eine benannte
            Quelle belegt.
          </p>
          <div className="mt-8 max-w-2xl overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b border-line-strong text-left text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                  <th className="py-2.5 font-normal">Parameter</th>
                  <th className="py-2.5 text-right font-normal">Wert</th>
                </tr>
              </thead>
              <tbody>
                {fall.parameter.map((row) => (
                  <tr key={row.parameter} className="border-b border-line">
                    <td className="py-2.5 text-ink-muted">{row.parameter}</td>
                    <td className="py-2.5 text-right font-mono">
                      {row.wert}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 flex max-w-xl flex-col gap-3 font-sans text-xs text-ink-faint">
            {fall.abschluss.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10">
            <Button variant="primary" tone="light" href={fall.pdf.href}>
              {fall.pdf.label}
            </Button>
          </div>
        </Container>
      </Section>

      {referenzobjekt ? (
        <Section className="bg-paper-sunken">
          <Container>
            <Eyebrow>Referenzobjekt</Eyebrow>
            <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
              {referenzobjekt.name}
            </h2>
            <p className="mt-4 max-w-md font-serif text-ink-muted">
              Zu diesem Objekt liegt außerdem ein Referenzprojekt mit
              Fotografie, Exposé und Vermarktung vor.
            </p>
            <div className="mt-6">
              <Button
                variant="text"
                tone="light"
                href={`/referenzobjekte/${referenzobjekt.slug}`}
              >
                Zum Referenzobjekt →
              </Button>
            </div>
          </Container>
        </Section>
      ) : null}

      <Section tone="abyss">
        <Container>
          <Eyebrow className="text-[#9aa4c8]">Immobilienbewertung</Eyebrow>
          <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
            Sie möchten eine Werteinschätzung für Ihre Immobilie?
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              tone="dark"
              href="/immobilienbewertung#anfrage"
            >
              Bewertung anfragen
            </Button>
            <Button
              variant="text"
              tone="dark"
              href="/immobilienbewertung"
            >
              Zur Immobilienbewertung
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
