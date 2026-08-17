export type Wertermittlungsverfahren = {
  id: string;
  label: string;
  title: string;
  description: string;
  highlights: string[];
  eignung: string[];
};

export type AblaufSchritt = {
  title: string;
  text: string;
};

export type SelectOption = {
  value: string;
  label: string;
};

/** Faktoren, aus deren Zusammenspiel sich der Immobilienwert ergibt — bewusst als flache Liste, keine Gewichtung suggeriert. */
export const wertfaktoren: string[] = [
  "Lage",
  "Grundstück",
  "Gebäude",
  "Wohn- bzw. Nutzfläche",
  "Baujahr",
  "Zustand",
  "Ausstattung",
  "Modernisierungen",
  "Restnutzungsdauer",
  "Rechtliche Gegebenheiten",
  "Bodenwert",
  "Erzielbare Erträge",
  "Vergleichsdaten",
  "Aktuelle Marktverhältnisse",
  "Objektspezifische Besonderheiten",
];

export const wertermittlungsverfahren: Wertermittlungsverfahren[] = [
  {
    id: "vergleichswertverfahren",
    label: "Vergleichswertverfahren",
    title: "Was erzielen vergleichbare Immobilien am Markt?",
    description:
      "Beim Vergleichswertverfahren wird der Wert einer Immobilie anhand geeigneter Vergleichspreise bzw. Vergleichsfaktoren vergleichbarer Objekte abgeleitet. Dabei werden die Eigenschaften des Bewertungsobjekts berücksichtigt und die Vergleichsdaten objektspezifisch angepasst.",
    highlights: [
      "Vergleichspreise",
      "Vergleichsfaktoren",
      "Lage",
      "Grundstücks- und Gebäudemerkmale",
      "Wohn-/Nutzfläche",
      "Objektspezifische Anpassungen",
    ],
    eignung: [
      "Eigentumswohnungen",
      "Einfamilienhäuser",
      "Zweifamilienhäuser",
      "vergleichbare Wohnimmobilien",
    ],
  },
  {
    id: "ertragswertverfahren",
    label: "Ertragswertverfahren",
    title: "Was ist die Immobilie aus ihrer nachhaltigen Ertragskraft wert?",
    description:
      "Das Ertragswertverfahren stellt die nachhaltig erzielbaren Erträge in den Mittelpunkt. Es eignet sich insbesondere für Immobilien, deren Wert wesentlich durch die Erzielung von Mieten oder anderen Erträgen bestimmt wird.",
    highlights: [
      "Marktüblich erzielbare Erträge",
      "Rohertrag",
      "Bewirtschaftungskosten",
      "Reinertrag",
      "Bodenwert",
      "Liegenschaftszinssatz",
      "Restnutzungsdauer",
      "Kapitalisierung",
    ],
    eignung: [
      "Mehrfamilienhäuser",
      "vermietete Wohnimmobilien",
      "Gewerbeimmobilien",
      "gemischt genutzte Immobilien",
    ],
  },
  {
    id: "sachwertverfahren",
    label: "Sachwertverfahren",
    title: "Was ist Grundstück und Gebäude als Substanz wert?",
    description:
      "Das Sachwertverfahren betrachtet den Wert des Grundstücks sowie der baulichen und sonstigen Anlagen und berücksichtigt anschließend die Marktanpassung.",
    highlights: [
      "Bodenwert",
      "Bauliche Anlagen",
      "Herstellungskosten",
      "Alterswertminderung",
      "Außenanlagen",
      "Sachwertfaktor",
      "Marktanpassung",
    ],
    eignung: [
      "Einfamilienhäuser",
      "Zweifamilienhäuser",
      "individuell errichtete Wohnhäuser",
      "Objekte, bei denen Vergleichs- oder Ertragsdaten weniger aussagekräftig sind",
    ],
  },
];

/** Minimalistischer Ablauf vom Objekt zum Verkehrswert — als ruhige Schrittfolge, keine Formel. */
export const verkehrswertSchritte: string[] = [
  "Objektdaten",
  "Geeignete Wertermittlungsverfahren",
  "Verfahrenswert(e)",
  "Marktanpassung / objektspezifische Merkmale",
  "Würdigung",
  "Verkehrswert / Marktwert",
];

export const ablaufSchritte: AblaufSchritt[] = [
  {
    title: "Immobilie und Bewertungsanlass",
    text: "Erfassung der relevanten Objekt- und Grundstücksdaten sowie des Bewertungsanlasses.",
  },
  {
    title: "Unterlagen und Daten",
    text: "Prüfung der verfügbaren Objektunterlagen und relevanten Marktdaten.",
  },
  {
    title: "Auswahl des Verfahrens",
    text: "Auswahl des geeigneten Wertermittlungsverfahrens bzw. der geeigneten Verfahren entsprechend Objektart und Datenlage.",
  },
  {
    title: "Wertermittlung",
    text: "Durchführung der Bewertung unter Berücksichtigung der relevanten wertbeeinflussenden Merkmale.",
  },
  {
    title: "Einordnung des Ergebnisses",
    text: "Ableitung und fachliche Würdigung des Ergebnisses im Kontext des aktuellen Immobilienmarktes.",
  },
  {
    title: "Besprechung",
    text: "Erläuterung des Ergebnisses und der wesentlichen wertbestimmenden Faktoren.",
  },
];

export const objektarten: string[] = [
  "Eigentumswohnungen",
  "Einfamilienhäuser",
  "Zweifamilienhäuser",
  "Mehrfamilienhäuser",
  "Wohn- und Geschäftshäuser",
  "Vermietete Immobilien",
  "Ausgewählte Gewerbe- und Anlageimmobilien",
  "Grundstücke",
];

export const benoetigteAngaben: string[] = [
  "Adresse / Lage",
  "Grundstücksfläche",
  "Wohn- bzw. Nutzfläche",
  "Baujahr",
  "Objektart",
  "Zimmer",
  "Zustand",
  "Modernisierungen",
  "Ausstattung",
  "Stellplätze / Garagen",
  "Bestehende Mietverhältnisse",
  "Aktuelle Mieten",
  "Grundstücks- und Gebäudedaten",
  "Grundriss",
  "Relevante Unterlagen",
  "Besondere Rechte oder Belastungen, soweit bekannt",
];

export const ANLASS_OPTIONS: SelectOption[] = [
  { value: "verkauf", label: "Verkauf" },
  { value: "kaufentscheidung", label: "Kaufentscheidung" },
  { value: "vermoegensuebersicht", label: "Vermögensübersicht" },
  { value: "finanzierung", label: "Finanzierung" },
  { value: "erbschaft", label: "Erbschaft" },
  { value: "scheidung", label: "Scheidung / Vermögensauseinandersetzung" },
  { value: "sonstiger-anlass", label: "Sonstiger Anlass" },
];

export const OBJEKTART_OPTIONS: SelectOption[] = [
  { value: "eigentumswohnung", label: "Eigentumswohnung" },
  { value: "einfamilienhaus", label: "Einfamilienhaus" },
  { value: "zweifamilienhaus", label: "Zweifamilienhaus" },
  { value: "mehrfamilienhaus", label: "Mehrfamilienhaus" },
  { value: "wohn-geschaeftshaus", label: "Wohn- und Geschäftshaus" },
  { value: "gewerbeimmobilie", label: "Gewerbeimmobilie" },
  { value: "grundstueck", label: "Grundstück" },
  { value: "sonstige", label: "Sonstige" },
];

export const NUTZUNG_OPTIONS: SelectOption[] = [
  { value: "selbst-genutzt", label: "Selbst genutzt" },
  { value: "vermietet", label: "Vermietet" },
  { value: "teilweise-vermietet", label: "Teilweise vermietet" },
  { value: "unbekannt", label: "Unbekannt" },
];
