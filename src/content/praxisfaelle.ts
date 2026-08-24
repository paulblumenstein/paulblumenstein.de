export type ParameterZeile = {
  parameter: string;
  wert: string;
  quelle?: string;
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
  };
  verfahrensvergleich: {
    verfahren: string;
    ergebnis: string;
    gewichtung: string;
  }[];
  streuung: string;
  massgeblichesVerfahren: string;
  parameter: ParameterZeile[];
  parameterStatus: string;
  hinweise: string[];
  abschluss: string[];
  pdf?: { href: string; label: string };
  referenzobjektSlug?: string;
};

export const praxisfaelle: Praxisfall[] = [
  {
    slug: "werteinschaetzung-stade",
    title: "Werteinschätzung Stade",
    location: "Stade · Niedersachsen",
    heroFacts: "Reihenhaus · 126,38 m² · Sachwertverfahren",
    summary:
      "Wertermittlung nach ImmoWertV für ein Reihenhaus in Stade, Bewertungsstichtag 01.01.2026.",
    bewertungsstichtag: "01.01.2026",
    berichtsdatum: "24.08.2026",
    ergebnis: { wert: "196.592 €", jeQm: "1.555,56 € je m²" },
    objekt: [
      { label: "Objektart", value: "Reihenhaus" },
      { label: "Anschrift", value: "Musterstraße XX, 216XX Stade" },
      { label: "Landkreis", value: "Stade" },
      { label: "Bundesland", value: "Niedersachsen" },
      { label: "Grundstücksfläche", value: "800 m²" },
      { label: "Wohnfläche", value: "126,38 m²" },
      { label: "Brutto-Grundfläche (BGF)", value: "260 m²" },
      { label: "Baujahr", value: "1961" },
      { label: "Gesamtnutzungsdauer", value: "80 Jahre" },
    ],
    grundlagen: [
      { label: "Bewertungsstichtag", value: "01.01.2026" },
      {
        label: "Rechtsstand",
        value: "ImmoWertV in der zum Bewertungsstichtag geltenden Fassung",
      },
      { label: "Maßgebliches Bewertungsverfahren", value: "Sachwertverfahren" },
      { label: "Gewichtung", value: "100 %" },
    ],
    sachwert: {
      ergebnis: "196.591,97 €",
      jeQm: "1.555,56 € je m²",
      schritte: [
        { label: "Gebäudesachwert", value: "79.230,45 €" },
        { label: "Bauliche Anlagen", value: "0,00 €" },
        { label: "Bodenwert", value: "108.000,00 €" },
      ],
    },
    verfahrensvergleich: [
      {
        verfahren: "Sachwertverfahren",
        ergebnis: "196.591,97 €",
        gewichtung: "100 %",
      },
    ],
    streuung: "Keine Angabe im Datenbestand vorhanden.",
    massgeblichesVerfahren: "Sachwertverfahren",
    parameter: [
      {
        parameter: "Normalherstellungskosten",
        wert: "512,5 €/m² BGF",
        quelle: "ImmoWertV / Anlage 4",
      },
      { parameter: "Baupreisindex", wert: "198,2 Index", quelle: "Destatis" },
      {
        parameter: "Regionalfaktor",
        wert: "1 Faktor",
        quelle: "entsprechender Grundstücksmarktbericht / Modell",
      },
      {
        parameter: "Sachwertfaktor",
        wert: "1,05 Faktor",
        quelle: "zuständiger Gutachterausschuss / Grundstücksmarktbericht",
      },
      {
        parameter: "Bodenrichtwert",
        wert: "135 €/m²",
        quelle: "BORIS.NI / Grundstücksmarktbericht",
      },
      {
        parameter: "Umrechnungskoeffizient Boden",
        wert: "1 Faktor",
        quelle: "Grundstücksmarktbericht Niedersachsen 2026 – Gutachterausschuss Stade",
      },
      {
        parameter: "Gesamtnutzungsdauer",
        wert: "80 Jahre",
        quelle: "einschlägige Rechts-/Modellgrundlage",
      },
      {
        parameter: "Restnutzungsdauer (manuell gesetzt)",
        wert: "24 Jahre",
        quelle: "ImmoWertV / Anlage 2 + Objektzustand",
      },
    ],
    parameterStatus: "Manuell fachlich bestätigt",
    hinweise: ["Es liegen keine Hinweise vor."],
    abschluss: [
      "Der ermittelte Wert ist ausschließlich zum genannten Bewertungsstichtag (01.01.2026) aussagekräftig; spätere Änderungen des Grundstückszustands oder der Marktverhältnisse sind darin nicht berücksichtigt.",
      "Die Wertermittlung erfolgte auf Grundlage der im Bericht genannten Objektangaben sowie öffentlich zugänglicher Marktdaten unter Anwendung des Sachwertverfahrens im Sinne des § 6 ImmoWertV. Nicht durch eine benannte Quelle belegte oder vorläufige Angaben sind im Abschnitt „Verwendete Bewertungsparameter“ entsprechend gekennzeichnet.",
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

export function getPraxisfallForReferenzobjekt(referenzobjektSlug: string) {
  return praxisfaelle.find((p) => p.referenzobjektSlug === referenzobjektSlug);
}
