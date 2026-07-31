import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Paul Blumenstein.",
  alternates: { canonical: "/datenschutz" },
};

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.05em] text-ink-faint">
        {title}
      </h2>
      <div className="mt-3 flex flex-col gap-3">{children}</div>
    </div>
  );
}

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <Section>
        <Container>
          <div className="flex max-w-2xl flex-col gap-8 font-serif text-ink">
            <Block title="Verantwortlicher">
              <p>
                Paul Blumenstein
                <br />
                Burgsiedlung 13, 21680 Stade, Deutschland
                <br />
                Telefon: +49 151 14468352
                <br />
                E-Mail: blumenstein.paul@googlemail.com
              </p>
            </Block>

            <Block title="Hosting">
              <p>
                Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133,
                Walnut, CA 91789, USA gehostet. Beim Aufruf der Website
                verarbeitet Vercel technisch notwendige Daten (u. a.
                IP-Adresse, Datum und Uhrzeit des Zugriffs) in Server-Logfiles,
                um die Website auszuliefern und deren Stabilität und Sicherheit
                zu gewährleisten. Da der Anbieter seinen Sitz außerhalb der
                EU/des EWR hat, wird eine etwaige Datenübermittlung auf
                Grundlage geeigneter Garantien abgesichert (z. B.
                EU-Standardvertragsklauseln).
              </p>
            </Block>

            <Block title="Cookies und Analyse-Tools">
              <p>
                Diese Website verwendet aktuell keine Analyse- oder
                Tracking-Tools und setzt keine Cookies zu Analyse- oder
                Marketingzwecken. Es werden ausschließlich technisch
                notwendige Daten verarbeitet, die für den Betrieb der Website
                erforderlich sind (siehe Abschnitt Hosting).
              </p>
            </Block>

            <Block title="Kontaktformular">
              <p>
                Wenn Sie das Kontaktformular nutzen, werden die von Ihnen
                eingegebenen Daten (Name, E-Mail-Adresse, Nachricht) zum
                Zweck der Bearbeitung Ihrer Anfrage verarbeitet.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die
                Anfrage der Anbahnung eines Vertrags dient, andernfalls Art. 6
                Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                Beantwortung Ihrer Anfrage).
              </p>
              <p>
                Für den technischen Versand nutze ich den Dienst Resend
                (Plus Five Five, Inc., 2261 Market Street #5039, San
                Francisco, CA 94114, USA) als Auftragsverarbeiter. Die
                Übermittlung in die USA ist über EU-Standardvertragsklauseln
                sowie die Zertifizierung von Resend nach dem EU-US Data
                Privacy Framework abgesichert.
              </p>
              <p>
                Ihre Angaben werden gelöscht, sobald Ihre Anfrage
                abschließend bearbeitet ist, sofern keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </Block>

            <Block title="Ihre Rechte">
              <p>
                Sie haben jederzeit das Recht auf Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger sowie den Zweck der Datenverarbeitung sowie ein
                Recht auf Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit und Widerspruch. Sie können
                sich hierzu sowie zu weiteren Fragen zum Datenschutz jederzeit
                unter der oben genannten Adresse an mich wenden. Ihnen steht
                zudem ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde
                zu.
              </p>
            </Block>

            <Block title="SSL-/TLS-Verschlüsselung">
              <p>
                Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-
                Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                daran, dass die Adresszeile des Browsers von „http://“ auf
                „https://“ wechselt.
              </p>
            </Block>
          </div>
        </Container>
      </Section>
    </>
  );
}
