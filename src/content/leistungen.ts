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
        desc: "Ein einziger Termin vor Ort genügt — die Grundlage für Fotos, Grundriss und Beschreibung entsteht in einem Schritt, nicht in dreien.",
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
        desc: "Der erste Eindruck entscheidet online in Sekunden — hochwertige, einheitlich bearbeitete Aufnahmen wirken sofort professioneller als Standardfotos.",
      },
      {
        name: "360°-Rundgänge",
        desc: "Interessenten gehen die Wohnung online durch, bevor sie sich für eine Besichtigung entscheiden — wer dann kommt, ist ernsthaft interessiert. Das spart Ihnen Zeit bei jedem Termin.",
      },
      {
        name: "Grundrissaufbereitung",
        desc: "Ein klarer Grundriss lässt Interessenten die Immobilie auf einen Blick verstehen — ganz ohne Rückfragen oder Missverständnisse.",
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
        desc: "Ein Exposé ist oft der erste echte Kontakt mit Ihrer Immobilie — es soll überzeugen, nicht nur informieren.",
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
        desc: "Mehr Sichtbarkeit bedeutet mehr qualifizierte Anfragen — ein gutes Reel erreicht oft ein Vielfaches der klassischen Portale.",
      },
      {
        name: "Digitale Immobilienvermarktung",
        desc: "Sie sprechen mit einer Person statt mit mehreren Dienstleistern — das spart Abstimmungsaufwand und sorgt für einen einheitlichen Auftritt von Anfang bis Ende.",
      },
    ],
  },
];
