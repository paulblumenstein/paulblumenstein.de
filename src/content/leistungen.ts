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
        desc: "Ein Termin für Fotos, Grundriss und Objektbeschreibung.",
      },
      {
        name: "Lage- und Umfeldrecherche",
        desc: "Die Lage kurz und konkret eingeordnet.",
      },
      {
        name: "Objektmerkmale herausarbeiten",
        desc: "Die Stärken der Immobilie gezielt herausgearbeitet.",
      },
    ],
  },
  {
    name: "Visuelle Präsentation",
    items: [
      {
        name: "Immobilienfotografie",
        desc: "Fotos für Exposé, Inserate und Anzeigen.",
      },
      {
        name: "360°-Rundgänge",
        desc: "Ein virtueller Rundgang zum Online-Besichtigen.",
      },
      {
        name: "Grundrissaufbereitung",
        desc: "Der Grundriss klar und einheitlich aufbereitet.",
      },
      {
        name: "Virtual Staging",
        desc: "Leere Räume virtuell möbliert.",
      },
    ],
  },
  {
    name: "Vermarktung",
    items: [
      {
        name: "Exposé-Erstellung",
        desc: "Bilder, Text und Daten in einem Dokument.",
      },
      {
        name: "Objektbeschreibung",
        desc: "Die Besonderheiten der Immobilie in Worten.",
      },
      {
        name: "Immobilieninserate",
        desc: "Einheitliche Anzeigen für alle Portale.",
      },
      {
        name: "Social-Media-Content & Instagram-Reels",
        desc: "Reels und Beiträge für Instagram.",
      },
      {
        name: "Digitale Immobilienvermarktung",
        desc: "Fotografie, Text und Vermarktung gemeinsam gedacht.",
      },
    ],
  },
];
