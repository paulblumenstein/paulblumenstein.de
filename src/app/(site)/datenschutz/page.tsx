import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";
import { siteConfig } from "@/config/site";

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
                E-Mail: {siteConfig.email}
              </p>
            </Block>

            <Block title="Hosting und Zugriffsdaten">
              <p>
                Diese Website wird bei Vercel Inc., 440 N Barranca Avenue
                #4133, Covina, CA 91723, USA gehostet. Beim Aufruf der
                Website verarbeitet Vercel technisch notwendige Zugriffsdaten
                (u. a. IP-Adresse, aufgerufene Seite, Datum und Uhrzeit des
                Zugriffs, Browsertyp) in Server-Logfiles, um die Website
                auszuliefern und deren Stabilität und Sicherheit zu
                gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an einem sicheren und
                funktionsfähigen Betrieb der Website).
              </p>
              <p>
                Da Vercel seinen Sitz in den USA hat, erfolgt die
                Datenübermittlung auf Grundlage von
                EU-Standardvertragsklauseln; zusätzlich ist Vercel nach dem
                EU-U.S. Data Privacy Framework zertifiziert.
              </p>
            </Block>

            <Block title="Domain und DNS">
              <p>
                Der Domainname paulblumenstein.de ist bei GoDaddy.com, LLC,
                2155 E GoDaddy Way, Tempe, AZ 85284, USA registriert; GoDaddy
                stellt außerdem die DNS-Auflösung (Nameserver) bereit, über
                die Ihr Browser beim Aufruf der Website an den Hosting-Server
                weitergeleitet wird. Dabei können bei GoDaddy technisch
                notwendige Zugriffsdaten (u. a. IP-Adresse, Zeitpunkt der
                Anfrage) anfallen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse an einem sicheren und
                funktionsfähigen Betrieb der Website).
              </p>
              <p>
                Da GoDaddy seinen Sitz in den USA hat, erfolgt die
                Datenübermittlung auf Grundlage von
                EU-Standardvertragsklauseln.
              </p>
            </Block>

            <Block title="Kontaktformular">
              <p>
                Wenn Sie das Kontaktformular nutzen, werden die von Ihnen
                eingegebenen Daten verarbeitet: Name, E-Mail-Adresse und
                Nachricht sowie – bei einer Bewertungsanfrage – die
                freiwilligen Angaben zur Immobilie (z. B. Anlass, Objektart,
                Ort, Baujahr, Wohn- und Grundstücksfläche, Nutzung).
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die
                Anfrage der Anbahnung eines Vertrags dient (etwa eine
                Bewertungs- oder Vermarktungsanfrage), andernfalls Art. 6
                Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                Beantwortung Ihrer Anfrage).
              </p>
              <p>
                Für den technischen Versand nutze ich den Dienst Resend
                (Plus Five Five, Inc., 2261 Market Street #5039, San
                Francisco, CA 94114, USA) als Auftragsverarbeiter. Die
                Übermittlung in die USA ist über EU-Standardvertragsklauseln
                sowie die Zertifizierung von Resend nach dem EU-U.S. Data
                Privacy Framework abgesichert.
              </p>
              <p>
                Ihre Angaben aus dem Formular werden gelöscht, sobald Ihre
                Anfrage abschließend bearbeitet ist und sich daraus keine
                weitere Aufbewahrungspflicht ergibt (z. B. bei einem
                folgenden Auftrag); andernfalls richtet sich die
                Speicherdauer nach den gesetzlichen Aufbewahrungsfristen.
              </p>
            </Block>

            <Block title="E-Mail-Postfach (Google)">
              <p>
                Eingehende Nachrichten – sowohl über das Kontaktformular als
                auch direkt per E-Mail – werden in einem E-Mail-Postfach von
                Google Ireland Limited, Gordon House, Barrow Street, Dublin
                4, Irland empfangen und dort gespeichert. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. b DSGVO, soweit die Nachricht der
                Anbahnung eines Vertrags dient, andernfalls Art. 6 Abs. 1
                lit. f DSGVO (berechtigtes Interesse an funktionierender
                Kommunikation).
              </p>
              <p>
                Da Google auch Server außerhalb der EU/des EWR betreibt, kann
                eine Datenübermittlung in Drittländer, insbesondere die USA,
                erfolgen; diese ist über EU-Standardvertragsklauseln
                abgesichert.
              </p>
            </Block>

            <Block title="Cookies, Analyse und Tracking">
              <p>
                Diese Website setzt keine Cookies zu Analyse-, Marketing-
                oder Trackingzwecken ein und verwendet keine Dienste wie
                Google Analytics, Google Tag Manager, Meta Pixel oder
                vergleichbare Werkzeuge. Verarbeitet werden ausschließlich
                die technisch notwendigen Zugriffsdaten, die im Abschnitt
                „Hosting und Zugriffsdaten“ beschrieben sind.
              </p>
            </Block>

            <Block title="Ihre Rechte">
              <p>
                Sie haben das Recht auf Auskunft über die zu Ihrer Person
                gespeicherten Daten sowie auf Berichtigung, Löschung oder
                Einschränkung der Verarbeitung dieser Daten. Außerdem steht
                Ihnen ein Recht auf Datenübertragbarkeit sowie ein
                Widerspruchsrecht gegen Verarbeitungen zu, die auf Art. 6
                Abs. 1 lit. f DSGVO gestützt sind. Sie können sich hierzu
                jederzeit unter der oben genannten Adresse an mich wenden.
              </p>
            </Block>

            <Block title="Beschwerderecht">
              <p>
                Ihnen steht außerdem ein Beschwerderecht bei einer
                Datenschutz-Aufsichtsbehörde zu. Für meinen Sitz in
                Niedersachsen ist dies:
                <br />
                Der Landesbeauftragte für den Datenschutz Niedersachsen
                <br />
                Prinzenstraße 5, 30159 Hannover
                <br />
                lfd.niedersachsen.de
              </p>
            </Block>

            <Block title="SSL-/TLS-Verschlüsselung">
              <p>
                Diese Website ist aus Sicherheitsgründen durchgehend
                SSL-/TLS-verschlüsselt, erkennbar an „https://“ in der
                Adresszeile Ihres Browsers.
              </p>
            </Block>
          </div>
        </Container>
      </Section>
    </>
  );
}
