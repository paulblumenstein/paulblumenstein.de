export type Leistung = {
  name: string;
  desc: string;
};

export type LeistungsKategorie = {
  name: string;
  items: Leistung[];
};

export const leistungsKategorien: LeistungsKategorie[] = [
  {
    name: "Vorbereitung & Analyse",
    items: [
      {
        name: "Objektaufnahme",
        desc: "Ein Termin vor Ort liefert die Grundlage für Fotos, Grundriss und Objektbeschreibung — ohne mehrfache Ortstermine.",
      },
      {
        name: "Lage- und Umfeldrecherche",
        desc: "Interessenten erfahren, was die Lage tatsächlich ausmacht — das schafft Vertrauen, noch bevor sie zum ersten Mal vor Ort waren.",
      },
      {
        name: "Objektmerkmale herausarbeiten",
        desc: "Die eigentlichen Stärken einer Immobilie sind selten auf den ersten Blick sichtbar — ich arbeite sie gezielt heraus, statt sie dem Zufall zu überlassen.",
      },
    ],
  },
  {
    name: "Visuelle Präsentation",
    items: [
      {
        name: "Immobilienfotografie",
        desc: "Fotos sind für die meisten Interessenten der erste Kontakt mit der Immobilie — noch vor dem Exposé, noch vor der Anfrage.",
      },
      {
        name: "360°-Rundgänge",
        desc: "Interessenten gehen die Wohnung online durch, bevor sie sich für eine Besichtigung entscheiden — wer dann kommt, ist ernsthaft interessiert. Das spart Ihnen Zeit bei jedem Termin.",
      },
      {
        name: "Grundrissaufbereitung",
        desc: "Ein Grundriss zeigt die Aufteilung auf einen Blick — viele Rückfragen erübrigen sich dadurch von selbst.",
      },
      {
        name: "Virtual Staging",
        desc: "Leere Räume wirken oft unpersönlich und schwer vorstellbar — virtuelle Möblierung zeigt das Potenzial einer Immobilie, ganz ohne echte Möbel bewegen zu müssen.",
      },
    ],
  },
  {
    name: "Vermarktung",
    items: [
      {
        name: "Exposé-Erstellung",
        desc: "Ein Exposé ist oft der Moment, in dem aus Interesse eine Anfrage wird — es soll überzeugen, nicht nur informieren.",
      },
      {
        name: "Objektbeschreibung",
        desc: "Besonderheiten, die Ihnen selbstverständlich erscheinen, werden für Außenstehende erst durch die richtigen Worte sichtbar.",
      },
      {
        name: "Immobilieninserate",
        desc: "Ein einheitlicher Auftritt über alle Kanäle hinweg wirkt seriöser als unterschiedliche Anzeigen in wechselnder Qualität.",
      },
      {
        name: "Social-Media-Content & Instagram-Reels",
        desc: "Ein Reel erreicht oft Menschen, die nie aktiv nach einer Immobilie gesucht hätten — zusätzlich zu den klassischen Portalen.",
      },
      {
        name: "Digitale Immobilienvermarktung",
        desc: "Eine Ansprechperson für Fotografie, Text und Vermarktung — ohne Abstimmung zwischen mehreren Dienstleistern.",
      },
    ],
  },
];
