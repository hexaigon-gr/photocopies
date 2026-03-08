import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://fotoilioupoli.gr";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/", "/admin/"],
  },
  sitemap: `${BASE_URL}/sitemap.xml`,
});

export default robots;
