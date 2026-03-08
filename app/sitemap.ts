import type { MetadataRoute } from "next";
import { routing } from "@/lib/i18n/routing";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://fotoilioupoli.gr";

const SERVICE_SLUGS = [
  "blueprints",
  "photocopies",
  "digital-printing",
  "binding",
  "laminating",
  "scanning",
  "usb-printing",
  "business-cards",
  "stationery",
];

const sitemap = (): MetadataRoute.Sitemap => {
  const entries: MetadataRoute.Sitemap = [];

  // Home page
  for (const locale of routing.locales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });
  }

  // Service pages
  for (const slug of SERVICE_SLUGS) {
    for (const locale of routing.locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
};

export default sitemap;
