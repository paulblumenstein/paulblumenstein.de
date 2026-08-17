import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { referenzobjekte } from "@/content/referenzobjekte";

const STATIC_ROUTES = [
  "",
  "/referenzobjekte",
  "/immobilienbewertung",
  "/ueber-mich",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const objectRoutes = referenzobjekte.map((obj) => `/referenzobjekte/${obj.slug}`);
  return [...STATIC_ROUTES, ...objectRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
  }));
}
