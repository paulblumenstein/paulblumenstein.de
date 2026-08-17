import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { ContactForm } from "@/components/sections/ContactForm";
import { cn } from "@/lib/cn";
import {
  ablaufSchritte,
  benoetigteAngaben,
  objektarten,
  verkehrswertSchritte,
  wertermittlungsverfahren,
  wertfaktoren,
} from "@/content/immobilienbewertung";

export const metadata: Metadata = {
  title: "Immobilienbewertung",
  description:
    "Fundierte Immobilienbewertung und Verkehrswertermittlung in Stade und Umgebung — Vergleichswert-, Ertragswert- und Sachwertverfahren je nach Objektart und Datenlage.",
  alternates: { canonical: "/immobilienbewertung" },
};

export default function ImmobilienbewertungPage() {
  return (
    <>
      <Container className="pt-16 pb-8 lg:pt-24 lg:pb-12">
        <Eyebrow>Immobilienbewertung</Eyebrow>
        <h1 className="mt-2 max-w-2xl font-display text-4xl leading-[1.05] lg:text-6xl">
          Was ist Ihre Immobilie wert?
        </h1>
        <p className="mt-5 max-w-xl font-serif text-lg text-ink-muted lg:text-xl">
          Eine Einschätzung des aktuellen Werts — nach Lage, Zustand und
          Marktlage.
        </p>
        <div className="mt-8">
          <Button variant="primary" tone="light" href="#anfrage">
            Bewertung anfragen
          </Button>
        </div>
      </Container>

      <Section>
        <Container>
          <Eyebrow>Immobilienwert</Eyebrow>
          <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
            Mehr als Wohnfläche mal Quadratmeterpreis
          </h2>
          <p className="mt-4 max-w-xl font-serif text-ink-muted">
            Ein Immobilienwert ergibt sich nicht aus einer einfachen Formel.
            Er entsteht aus dem Zusammenspiel vieler Faktoren:
          </p>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
            {wertfaktoren.map((faktor) => (
              <div
                key={faktor}
                className="border-t border-line pt-3 font-sans text-sm text-ink"
              >
                {faktor}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper-sunken">
        <Container>
          <Eyebrow>Wertermittlungsverfahren</Eyebrow>
          <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
            Drei Wege zum Immobilienwert
          </h2>
          <p className="mt-4 max-w-2xl font-serif text-ink-muted">
            Welches Verfahren bzw. welche Verfahren zur Anwendung kommen,
            richtet sich nach der Art des Bewertungsobjekts, den
            Gepflogenheiten des gewöhnlichen Geschäftsverkehrs und der
            verfügbaren Datenlage.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {wertermittlungsverfahren.map((verfahren) => (
              <Card key={verfahren.id} className="flex flex-col bg-paper-elevated">
                <CardBody className="flex flex-1 flex-col p-6 lg:p-8">
                  <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                    {verfahren.label}
                  </div>
                  <h3 className="mt-3 font-display text-xl leading-snug">
                    {verfahren.title}
                  </h3>
                  <p className="mt-4 font-serif text-sm text-ink-muted">
                    {verfahren.description}
                  </p>
                  <div className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                    Berücksichtigt
                  </div>
                  <ul className="mt-2 flex flex-col gap-1 font-sans text-sm text-ink">
                    {verfahren.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                    Typische Eignung
                  </div>
                  <p className="mt-2 font-serif text-sm text-ink-muted">
                    {verfahren.eignung.join(", ")}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>

          <blockquote className="mt-12 max-w-2xl border-l-2 border-line-strong pl-6 font-serif text-xl italic leading-snug text-ink-muted lg:text-2xl">
            „Nicht jede Immobilie wird nach demselben Schema bewertet. Die
            Wahl des geeigneten Verfahrens richtet sich nach Objektart,
            Marktgepflogenheiten und der Qualität der verfügbaren Daten. Je
            nach Bewertungsobjekt können ein oder mehrere Verfahren
            herangezogen werden.“
          </blockquote>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Verkehrswert</Eyebrow>
          <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
            Vom Verfahrenswert zum Verkehrswert
          </h2>
          <p className="mt-4 max-w-xl font-serif text-ink-muted">
            Der Verkehrswert wird nicht unmittelbar aus einem einzelnen
            Rechenergebnis übernommen. Die angewendeten Verfahren werden
            hinsichtlich ihrer Aussagefähigkeit gewürdigt — unter anderem
            anhand der allgemeinen Wertverhältnisse, besonderer
            objektspezifischer Grundstücksmerkmale, der Lage, des Zustands,
            rechtlicher Gegebenheiten, der Marktverhältnisse und der
            Datenqualität.
          </p>

          <div className="mt-10 flex flex-col items-start">
            {verkehrswertSchritte.map((schritt, i) => {
              const isLast = i === verkehrswertSchritte.length - 1;
              return (
                <div key={schritt} className="flex flex-col items-start">
                  <div
                    className={cn(
                      "border-l-2 py-3 pl-4 font-sans text-sm text-ink",
                      isLast ? "border-accent font-semibold" : "border-line-strong",
                    )}
                  >
                    {schritt}
                  </div>
                  {!isLast ? (
                    <div className="pl-4 py-0.5 font-mono text-xs text-ink-faint">
                      ↓
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex max-w-xl flex-col gap-3 font-sans text-xs text-ink-faint">
            <p>
              Der Verkehrswert (Marktwert) ist nach § 194 BauGB der Preis, der
              im gewöhnlichen Geschäftsverkehr nach den rechtlichen und
              tatsächlichen Eigenschaften, der sonstigen Beschaffenheit und
              der Lage ohne Rücksicht auf ungewöhnliche oder persönliche
              Verhältnisse zu erzielen wäre.
            </p>
            <p>
              Die Bewertung stellt eine fundierte Immobilienbewertung bzw.
              Verkehrswertermittlung dar. Sie ersetzt kein Gutachten eines
              öffentlich bestellten und vereidigten Sachverständigen, soweit
              ein solches im Einzelfall — etwa für gerichtliche oder
              behördliche Zwecke — erforderlich ist.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-paper-sunken">
        <Container>
          <Eyebrow>Ablauf</Eyebrow>
          <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
            So läuft eine Bewertung ab
          </h2>
          <div className="mt-10 flex flex-col">
            {ablaufSchritte.map((schritt, i) => (
              <div
                key={schritt.title}
                className={cn(
                  "grid grid-cols-1 gap-2 border-t border-line py-8 lg:grid-cols-[8rem_minmax(0,1fr)] lg:gap-12",
                  i === ablaufSchritte.length - 1 && "border-b",
                )}
              >
                <div className="font-mono text-sm text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-sans text-base font-semibold">
                    {schritt.title}
                  </h3>
                  <p className="mt-2 max-w-xl font-serif text-ink-muted">
                    {schritt.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Objektarten</Eyebrow>
          <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
            Für welche Immobilien?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {objektarten.map((objektart) => (
              <div
                key={objektart}
                className="border-t border-line pt-3 font-sans text-sm text-ink"
              >
                {objektart}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-xl font-serif text-ink-muted">
            Ob und welches Verfahren für ein konkretes Objekt geeignet ist,
            wird im Einzelfall anhand der Objektart und Datenlage beurteilt.
          </p>
        </Container>
      </Section>

      <Section className="bg-paper-sunken">
        <Container>
          <Eyebrow>Unterlagen</Eyebrow>
          <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
            Was hilft bei der Bewertung?
          </h2>
          <p className="mt-4 max-w-xl font-serif text-ink-muted">
            Für eine belastbare Bewertung sind insbesondere folgende
            Informationen hilfreich:
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {benoetigteAngaben.map((angabe) => (
              <div
                key={angabe}
                className="border-t border-line pt-3 font-sans text-sm text-ink"
              >
                {angabe}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-xl font-serif text-ink-muted">
            Nicht jede dieser Angaben muss von Anfang an vorliegen — was
            fehlt, klären wir gemeinsam.
          </p>
        </Container>
      </Section>

      <Section tone="abyss">
        <Container>
          <Eyebrow className="text-[#9aa4c8]">Bewertungsanfrage</Eyebrow>
          <h2 className="mt-2 max-w-lg font-display text-3xl lg:text-4xl">
            Sie möchten wissen, welchen Wert Ihre Immobilie am aktuellen
            Markt hat?
          </h2>
          <p className="mt-3 max-w-md font-serif text-[#c9c4b6]">
            Lassen Sie die Immobilie anhand ihrer individuellen Eigenschaften
            und der für das Objekt geeigneten Wertermittlungsverfahren
            einordnen.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button variant="primary" tone="dark" href="#anfrage">
              Bewertung anfragen
            </Button>
            <Button variant="text" tone="dark" href="tel:+4915114468352">
              Gespräch vereinbaren
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="anfrage">
        <Container className="flex flex-col gap-16 lg:flex-row lg:gap-24">
          <div className="flex flex-col gap-6 font-serif lg:max-w-xs lg:shrink-0">
            <div>
              <Eyebrow>Bewertung anfragen</Eyebrow>
              <p className="mt-3 max-w-xs font-serif text-ink-muted">
                Je mehr Sie zur Immobilie angeben, desto gezielter kann ich
                die Bewertung vorbereiten — vieles davon lässt sich aber auch
                im Gespräch klären.
              </p>
            </div>
            <div>
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Telefon
              </div>
              <a
                href="tel:+4915114468352"
                className="mt-1 block text-lg hover:text-accent"
              >
                +49 151 14468352
              </a>
            </div>
            <div>
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                E-Mail
              </div>
              <a
                href="mailto:blumenstein.paul@googlemail.com"
                className="mt-1 block text-lg hover:text-accent"
              >
                blumenstein.paul@googlemail.com
              </a>
            </div>
          </div>

          <ContactForm variant="bewertung" eyebrow="Angaben zur Immobilie" />
        </Container>
      </Section>
    </>
  );
}
