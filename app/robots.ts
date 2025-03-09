import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/about", "/contact", "/services", "/privacy", "/terms"],
      },
    ],

    sitemap: "https://mdesk.tech/sitemap.xml",
  };
}
