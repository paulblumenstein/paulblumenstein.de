export type GalleryImage = {
  src: string;
  alt: string;
};

export type ReferenzObjekt = {
  slug: string;
  name: string;
  status: "abgeschlossen" | "aktuell";
  location?: string;
  /** Short fact line for the hero, e.g. "55,84 m² · 2 Zimmer · Balkon" — derived once here, not retyped per page. */
  heroFacts?: string;
  summary: string;
  services: string[];
  /** Only set this when a metric genuinely belongs to THIS object — never borrow one from another project. */
  stat?: { value: string; label: string };
  heroImage: GalleryImage;
  /** Any number of images — the Gallery component lays out whatever is here. */
  gallery: GalleryImage[];
  grundriss?: GalleryImage;
  grundrissFacts?: { label: string; value: string }[];
  expose?: { href: string; label: string };
  rundgang360?: { href: string; label: string };
  video?: { href: string; label: string };
};

export const STATUS_LABEL: Record<ReferenzObjekt["status"], string> = {
  abgeschlossen: "Abgeschlossenes Referenzprojekt",
  aktuell: "Aktuelles Projekt",
};

const BASE = "/images/referenzobjekte/stadtblick-pfullendorf";

export const referenzobjekte: ReferenzObjekt[] = [
  {
    slug: "stadtblick-pfullendorf",
    name: "Stadtblick Pfullendorf",
    status: "abgeschlossen",
    location: "Pfullendorf · Baden-Württemberg",
    heroFacts: "55,84 m² · 2 Zimmer · Balkon",
    summary:
      "Ein vollständig abgeschlossenes Referenzprojekt — von der ersten Aufnahme bis zur eigenständig durchgeführten Nachvermietung.",
    services: [
      "Professionelle Immobilienfotografie",
      "Virtual Staging",
      "Exposé-Erstellung",
      "Erstellung des Immobilieninserats",
      "Hochwertige Objektbeschreibung",
      "Digitale Vermarktung",
      "Eigenständige Organisation und Durchführung des gesamten Nachvermietungsprozesses",
      "Kommunikation und Koordination im Rahmen der Nachvermietung",
      "Durchführung der Besichtigungen",
      "Auswahl geeigneter Nachmieter für den Vermieter",
    ],
    heroImage: {
      src: `${BASE}/wohnzimmer-balkon.jpg`,
      alt: "Helles Wohnzimmer mit großzügigem Blick auf Balkon und Umgebung, Stadtblick Pfullendorf",
    },
    // Reihenfolge erzählt bewusst die Wohnung: Bad → Küche → Essbereich → weitere Räume.
    gallery: [
      { src: `${BASE}/bad.jpg`, alt: "Bad mit Dusche" },
      { src: `${BASE}/kueche-detail.jpg`, alt: "Küchenzeile im Detail" },
      { src: `${BASE}/kueche-esstisch.jpg`, alt: "Essbereich und Wohnbereich" },
      { src: `${BASE}/schlafzimmer.jpg`, alt: "Schlafzimmer" },
      {
        src: `${BASE}/balkon-terrasse.jpg`,
        alt: "Überdachte Terrasse mit Blick über Pfullendorf",
      },
    ],
    grundriss: { src: `${BASE}/grundriss.jpg`, alt: "Grundriss Wohnung 4" },
    grundrissFacts: [
      { label: "Wohnen / Essen / Kochen", value: "22,38 m²" },
      { label: "Schlafen", value: "13,71 m²" },
      { label: "Bad", value: "5,54 m²" },
      { label: "Foyer", value: "24,70 m²" },
      { label: "Balkon (überdacht)", value: "14,22 m²" },
      { label: "Gesamtfläche", value: "55,84 m²" },
    ],
  },
];

export function getReferenzObjekt(slug: string) {
  return referenzobjekte.find((obj) => obj.slug === slug);
}
