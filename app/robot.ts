import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://herman-riah19.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/en/",
          "/fr/",
        ],
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
