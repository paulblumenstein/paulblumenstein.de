export type ParameterZeile = {
  parameter: string;
  wert: string;
};

export type Praxisfall = {
  slug: string;
  title: string;
  location: string;
  heroFacts: string;
  summary: string;
  bewertungsstichtag: string;
  berichtsdatum: string;
  ergebnis: { wert: string; jeQm: string };
  objekt: { label: string; value: string }[];
  grundlagen: { label: string; value: string }[];
  sachwert: {
    ergebnis: string;
    jeQm: string;
    schritte: { label: string; value: string }[];
    hinweis: string;
  };
  ertragswert: {
    ergebnis: string;
    jeQm: string;
    schritte: { label: string; value: string }[];
  };
  vergleichswert: { status: string; hinweise: string[] };
  verfahrensvergleich: {
    verfahren: string;
    ergebnis: string;
    gewichtung: string;
  }[];
  streuung: string;
  leitverfahren: string;
  parameter: ParameterZeile[];
  hinweise: string[];
  abschluss: string[];
  pdf: { href: string; label: string };
  referenzobjektSlug?: string;
};

export const praxisfaelle: Praxisfall[] = [
  {
    slug: "werteinschaetzung-stade",
    title: "Werteinschätzung Stade",
    location: "Stade · Niedersachsen",
    heroFacts: "Reihenhaus · 260 m² · Sachwertverfahren",
    summary:
      "Wertermittlung nach ImmoWertV für ein Reihenhaus in Stade, Bewertungsstichtag 01.01.2026.",
    bewertungsstichtag: "01.01.2026",
    berichtsdatum: "21.08.2026",
    ergebnis: { wert: "196.592 €", jeQm: "1.555,56 € je m²" },
    objekt: [
      { label: "Objektart", value: "Reihenhaus" },
      { label: "Anschrift", value: "Graf-Hartwig-Straße XX, 216xx Stade" },
      { label: "Landkreis", value: "Stade" },
      { label: "Bundesland", value: "Niedersachsen" },
      { label: "Grundstücksfläche", value: "800 m²" },
      { label: "Wohn-/Nutzfläche", value: "260 m²" },
      { label: "Baujahr", value: "1961" },
      { label: "Gesamtnutzungsdauer", value: "80 Jahre" },
    ],
    grundlagen: [
      { label: "Bewertungsstichtag", value: "01.01.2026" },
      { label: "Rechtsstand", value: "ImmoWertV in der zum Bewertungsstichtag geltenden Fassung" },
      { label: "Leitverfahren", value: "Sachwertverfahren" },
    ],
    sachwert: {
      ergebnis: "196.591,97 €",
      jeQm: "1.555,56 € je m²",
      schritte: [
        { label: "Gebäudesachwert", value: "79.230,45 €" },
        { label: "Bauliche Anlagen", value: "0,00 €" },
        { label: "Bodenwert", value: "108.000,00 €" },
      ],
      hinweis:
        "Für Außenanlagen ist kein Wert erfasst. Üblich sind 3 bis 5 Prozent des Gebäudesachwerts.",
    },
    ertragswert: {
      ergebnis: "220.301,38 €",
      jeQm: "1.748,37 € je m²",
      schritte: [
        { label: "Gebäudeertragswert", value: "112.301,38 €" },
        { label: "Bodenwert", value: "108.000,00 €" },
      ],
    },
    vergleichswert: {
      status:
        "Nicht belastbar ermittelt und im Gesamtergebnis nicht berücksichtigt.",
      hinweise: [
        "Es liegt noch keine vollständige Vergleichswohnung vor. Kaufpreis und Wohnfläche werden benötigt.",
        "Für das Bewertungsobjekt fehlt die Wohnfläche.",
      ],
    },
    verfahrensvergleich: [
      {
        verfahren: "Sachwertverfahren",
        ergebnis: "196.591,97 €",
        gewichtung: "100 %",
      },
      {
        verfahren: "Ertragswertverfahren",
        ergebnis: "220.301,38 €",
        gewichtung: "Keine Angabe im Datenbestand vorhanden.",
      },
    ],
    streuung: "12,06 %",
    leitverfahren: "Sachwertverfahren",
    parameter: [
      { parameter: "Normalherstellungskosten", wert: "512,5 €/m² BGF" },
      { parameter: "Baupreisindex", wert: "198,2 Index" },
      { parameter: "Regionalfaktor", wert: "1 Faktor" },
      { parameter: "Sachwertfaktor", wert: "1,05 Faktor" },
      { parameter: "Bodenrichtwert", wert: "135 €/m²" },
      { parameter: "Umrechnungskoeffizient Boden", wert: "1 Faktor" },
      { parameter: "Gesamtnutzungsdauer", wert: "80 Jahre" },
      { parameter: "Restnutzungsdauer (manuell gesetzt)", wert: "—" },
      { parameter: "Liegenschaftszinssatz", wert: "3,5 %" },
      { parameter: "Marktübliche Miete", wert: "9,5 €/m²" },
      { parameter: "Bewirtschaftungskosten", wert: "22 %" },
      { parameter: "Mietausfallwagnis", wert: "2 %" },
      { parameter: "Restnutzungsdauer (Ertragswert)", wert: "24 Jahre" },
      { parameter: "Bodenrichtwert (Ertragswert)", wert: "135 €/m²" },
      { parameter: "Umrechnungskoeffizient Boden (Ertragswert)", wert: "1 Faktor" },
      { parameter: "Vergleichspreise", wert: "—" },
    ],
    hinweise: [
      "Sachwertverfahren: Für Außenanlagen ist kein Wert erfasst. Üblich sind 3 bis 5 Prozent des Gebäudesachwerts.",
      "Vergleichswertverfahren: Es liegt noch keine vollständige Vergleichswohnung vor. Kaufpreis und Wohnfläche werden benötigt.",
      "Vergleichswertverfahren: Für das Bewertungsobjekt fehlt die Wohnfläche.",
      "Datenstand: 16 von 16 Parametern sind nicht durch eine benannte Quelle belegt.",
      "Verfahren: Vergleichswertverfahren wurde nicht belastbar ermittelt und im Gesamtergebnis nicht berücksichtigt.",
    ],
    abschluss: [
      "Der ermittelte Wert ist ausschließlich zum genannten Bewertungsstichtag (01.01.2026) aussagekräftig; spätere Änderungen des Grundstückszustands oder der Marktverhältnisse sind darin nicht berücksichtigt.",
      "Die Wertermittlung erfolgte auf Grundlage der im Bericht genannten Objektangaben sowie öffentlich zugänglicher Marktdaten unter Anwendung der Verfahren Sachwertverfahren und Ertragswertverfahren im Sinne des § 6 ImmoWertV. Nicht durch eine benannte Quelle belegte oder vorläufige Angaben sind entsprechend gekennzeichnet.",
      "Es handelt sich um eine überschlägige Wertermittlung, nicht um ein förmliches Verkehrswertgutachten im Sinne des § 194 BauGB und nicht um das Gutachten einer öffentlich bestellten und vereidigten oder nach DIN EN ISO/IEC 17024 zertifizierten sachverständigen Person. Eine Ortsbesichtigung sowie eine Prüfung von Grundbuch, Baulasten, Altlasten oder Bauakte waren nicht Gegenstand dieser Wertermittlung.",
      "Für eine Verwendung, die ein förmliches Verkehrswertgutachten voraussetzt — etwa gegenüber Gerichten, Finanzbehörden oder im Rahmen einer Zwangsversteigerung —, ist die Beauftragung einer entsprechend qualifizierten sachverständigen Person erforderlich.",
    ],
    pdf: {
      href: "/documents/werteinschaetzung-stade-sachwertverfahren.pdf",
      label: "Vollständigen Bericht als PDF öffnen",
    },
    referenzobjektSlug: "reihenhaus-stade",
  },
];

export function getPraxisfall(slug: string) {
  return praxisfaelle.find((p) => p.slug === slug);
}
