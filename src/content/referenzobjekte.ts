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
const STADE_BASE = "/images/referenzobjekte/reihenhaus-stade";
const HOLLERN_BASE = "/images/referenzobjekte/dachgeschosswohnung-altes-land";

export const referenzobjekte: ReferenzObjekt[] = [
  {
    slug: "stadtblick-pfullendorf",
    name: "Stadtblick Pfullendorf",
    status: "abgeschlossen",
    location: "Pfullendorf · Baden-Württemberg",
    heroFacts: "55,84 m² · 2 Zimmer · Balkon",
    summary:
      "Neuvermietung einer Wohnung in Pfullendorf — von der Aufnahme bis zur Mieterauswahl.",
    services: [
      "Immobilienfotografie",
      "Virtual Staging",
      "Exposé-Erstellung",
      "Objektbeschreibung",
      "Immobilieninserat",
      "Besichtigungen",
      "Begleitung der Neuvermietung",
    ],
    heroImage: {
      src: `${BASE}/balkon-terrasse.jpg`,
      alt: "Überdachte Terrasse mit Blick über Pfullendorf, Stadtblick Pfullendorf",
    },
    // Reihenfolge erzählt bewusst die Wohnung: Wohnzimmer → Bad → Küche → Essbereich → weitere Räume.
    gallery: [
      {
        src: `${BASE}/wohnzimmer-balkon.jpg`,
        alt: "Helles Wohnzimmer mit großzügigem Blick auf Balkon und Umgebung, Stadtblick Pfullendorf",
      },
      { src: `${BASE}/bad.jpg`, alt: "Bad mit Dusche" },
      { src: `${BASE}/kueche-detail.jpg`, alt: "Küchenzeile im Detail" },
      { src: `${BASE}/kueche-esstisch.jpg`, alt: "Essbereich und Wohnbereich" },
      { src: `${BASE}/schlafzimmer.jpg`, alt: "Schlafzimmer" },
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
  {
    slug: "reihenhaus-stade",
    name: "Reihenmittelhaus Stade",
    status: "aktuell",
    location: "Stade · Niedersachsen",
    heroFacts: "126,38 m² · 5 Zimmer · Garten",
    summary:
      "Verkauf eines Reihenmittelhauses in Stade — von der Aufnahme bis zur Begleitung des Verkaufs.",
    services: [
      "Immobilienfotografie",
      "360°-Rundgang (Ogulo)",
      "Exposé-Erstellung",
      "Objektbeschreibung",
      "Immobilieninserat",
      "Begleitung des Verkaufs",
    ],
    heroImage: {
      src: `${STADE_BASE}/wintergarten.jpg`,
      alt: "Wintergarten mit Essbereich und Blick in den Garten, Reihenmittelhaus Stade",
    },
    // Reihenfolge erzählt den Rundgang: Ankommen → Wohnbereiche im Keller → Küche → Bad → Zimmer im Dachgeschoss → Garten → Dachterrasse als Abschluss.
    gallery: [
      {
        src: `${STADE_BASE}/eingang.jpg`,
        alt: "Eingangsbereich mit Treppe, Reihenmittelhaus Stade",
      },
      {
        src: `${STADE_BASE}/loungebereich-durchblick.jpg`,
        alt: "Durchblick vom Spielzimmer in den Loungebereich im Keller",
      },
      {
        src: `${STADE_BASE}/loungebereich.jpg`,
        alt: "Loungebereich im Keller mit Natursteinwand",
      },
      { src: `${STADE_BASE}/kueche.jpg`, alt: "Küche" },
      { src: `${STADE_BASE}/bad.jpg`, alt: "Bad mit Eckbadewanne und Dusche" },
      {
        src: `${STADE_BASE}/zimmer-dachgeschoss.jpg`,
        alt: "Zimmer im Dachgeschoss mit Dachfenstern",
      },
      {
        src: `${STADE_BASE}/terrasse-garten.jpg`,
        alt: "Terrasse und Garten",
      },
      {
        src: `${STADE_BASE}/dachterrasse.jpg`,
        alt: "Dachterrasse mit Blick ins Grüne",
      },
    ],
    grundriss: {
      src: `${STADE_BASE}/grundriss-kellergeschoss.jpg`,
      alt: "Grundriss Kellergeschoss, Reihenmittelhaus Stade",
    },
    grundrissFacts: [
      { label: "Kaufpreis", value: "349.000 €" },
      { label: "Wohnfläche", value: "126,38 m²" },
      { label: "Grundstück", value: "260 m²" },
      { label: "Badezimmer", value: "2" },
      { label: "Letzte Modernisierung", value: "2022" },
      { label: "Heizung", value: "Buderus Gas-Brennwert" },
    ],
  },
  {
    slug: "dachgeschosswohnung-altes-land",
    name: "Dachgeschosswohnung Altes Land",
    status: "abgeschlossen",
    location: "Hollern-Twielenfleth · Niedersachsen",
    heroFacts: "87,14 m² · 3 Zimmer · Dachterrasse",
    summary:
      "Neuvermietung einer Dachgeschosswohnung im Alten Land — von der Aufnahme bis zum Inserat.",
    services: [
      "Immobilienfotografie",
      "360°-Rundgang (Ogulo)",
      "Exposé-Erstellung",
      "Objektbeschreibung",
      "Immobilieninserat",
    ],
    heroImage: {
      src: `${HOLLERN_BASE}/dachterrasse.jpg`,
      alt: "Dachterrasse mit Blick über Hollern-Twielenfleth, Dachgeschosswohnung Altes Land",
    },
    // Reihenfolge erzählt den Rundgang: Wohnzimmer aus zwei Perspektiven → Küche → Flur → Bad → Außenansicht → Treppenhaus.
    gallery: [
      {
        src: `${HOLLERN_BASE}/wohnzimmer.jpg`,
        alt: "Wohn- und Essbereich mit großen Fensterflächen, Dachgeschosswohnung Altes Land",
      },
      {
        src: `${HOLLERN_BASE}/wohnzimmer-perspektive-zwei.jpg`,
        alt: "Wohnbereich, zweite Perspektive",
      },
      { src: `${HOLLERN_BASE}/kueche.jpg`, alt: "Einbauküche" },
      {
        src: `${HOLLERN_BASE}/flur.jpg`,
        alt: "Flur mit Garderobe",
      },
      { src: `${HOLLERN_BASE}/bad.jpg`, alt: "Bad mit Dusche" },
      {
        src: `${HOLLERN_BASE}/aussenansicht.jpg`,
        alt: "Außenansicht des Mehrfamilienhauses",
      },
      {
        src: `${HOLLERN_BASE}/treppenhaus-aufzug.jpg`,
        alt: "Treppenhaus mit Aufzug",
      },
    ],
    grundrissFacts: [
      { label: "Miete", value: "1.018,54 €" },
      { label: "Wohnfläche", value: "87,14 m²" },
      { label: "Badezimmer", value: "1" },
      { label: "Baujahr", value: "2022" },
      { label: "Etage", value: "2" },
      { label: "Stellplatz", value: "Außenstellplatz" },
      { label: "Aufzug", value: "Ja" },
      { label: "Einbauküche", value: "Ja" },
      { label: "Dachterrasse", value: "Ja" },
      { label: "Fahrradraum", value: "Ja" },
      { label: "Abstellraum", value: "Ja" },
    ],
    rundgang360: {
      href: "https://tour.ogulo.com/PuvO",
      label: "360°-Rundgang in neuem Tab öffnen",
    },
  },
];

export function getReferenzObjekt(slug: string) {
  return referenzobjekte.find((obj) => obj.slug === slug);
}
