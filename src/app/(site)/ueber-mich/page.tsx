import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";

const ARBEITSWEISE_ITEMS = [
  "Professionelle Immobilienfotografie",
  "Virtuelle 360°-Rundgänge",
  "Exposé-Erstellung",
  "Hochwertige Objektbeschreibungen",
  "Digitale Vermarktung",
  "Social-Media-Content",
  "Strukturierte Aufbereitung aller relevanten Objektinformationen",
];

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Professionelle digitale Aufbereitung von Immobilien — Fotografie, Exposés, Objektbeschreibungen und visuelle Vermarktung.",
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
              Mein Schwerpunkt liegt auf der professionellen digitalen
              Aufbereitung von Immobilien – von der Fotografie über Exposés
              und Objektbeschreibungen bis hin zur visuellen Vermarktung.
            </p>
            <p>Dabei verfolge ich einen einfachen Grundsatz:</p>
            <p className="font-display text-2xl italic leading-snug text-ink lg:text-3xl">
              Jede Immobilie soll so präsentiert werden, dass Interessenten
              bereits online einen realistischen, hochwertigen und
              vollständigen Eindruck erhalten.
            </p>
          </div>

          <div className="mt-20 flex flex-col lg:mt-28">
            <div className="grid grid-cols-1 gap-4 border-t border-line py-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Qualität
              </div>
              <div className="flex max-w-2xl flex-col gap-5 font-serif text-ink-muted">
                <p className="font-display text-xl italic text-ink lg:text-2xl">
                  Qualität beginnt vor der Kamera.
                </p>
                <p>
                  Professionelle Immobilienvermarktung besteht nicht nur aus
                  guten Bildern. Sie beginnt mit einer strukturierten
                  Vorbereitung, einer durchdachten Präsentation und einer
                  klaren Kommunikation.
                </p>
                <p>
                  Deshalb betrachte ich jede Immobilie als individuelles
                  Projekt. Ich arbeite mit dem Ziel, Informationen
                  verständlich aufzubereiten, Besonderheiten sichtbar zu
                  machen und Eigentümer sowie Hausverwaltungen im
                  Vermarktungsprozess zu entlasten.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-line py-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Mein Anspruch
              </div>
              <div className="max-w-2xl">
                <p className="font-display text-xl italic leading-snug text-ink lg:text-2xl">
                  Ich glaube nicht an laute Werbung.
                  <br />
                  Ich glaube an Qualität. An Präzision. An Zuverlässigkeit.
                  <br />
                  Und daran, dass langfristiges Vertrauen wichtiger ist als
                  kurzfristige Aufmerksamkeit.
                </p>
                <p className="mt-5 font-serif text-ink-muted">
                  Deshalb verzichte ich bewusst auf übertriebene Versprechen
                  oder künstliche Selbstdarstellung. Lieber zeige ich echte
                  Projekte, echte Ergebnisse und lasse die Arbeit für sich
                  sprechen.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-line py-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Arbeitsweise
              </div>
              <div>
                <div className="flex max-w-2xl flex-col gap-5 font-serif text-ink-muted">
                  <p>Jede Immobilie erzählt ihre eigene Geschichte.</p>
                  <p>
                    Mein Ziel ist es, diese Geschichte professionell
                    sichtbar zu machen. Dazu gehören – je nach Projekt –
                    unter anderem:
                  </p>
                </div>
                <ul className="mt-6 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-2 font-sans text-sm text-ink sm:grid-cols-2">
                  {ARBEITSWEISE_ITEMS.map((item) => (
                    <li key={item} className="border-t border-line py-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 max-w-2xl font-serif text-ink-muted">
                  Alles aus einer Hand. Mit klaren Prozessen. Und mit dem
                  Anspruch, Eigentümer und Hausverwaltungen bestmöglich zu
                  unterstützen.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-b border-line py-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Blick nach vorn
              </div>
              <div className="flex max-w-2xl flex-col gap-5 font-serif text-ink-muted">
                <p>
                  Ich baue mein Unternehmen Schritt für Schritt auf. Nicht
                  mit großen Versprechen, sondern mit jedem erfolgreich
                  umgesetzten Projekt.
                </p>
                <p>
                  Mein Ziel ist eine Marke, die für Qualität,
                  Verlässlichkeit und moderne Immobilienvermarktung steht –
                  heute ebenso wie in Zukunft.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
