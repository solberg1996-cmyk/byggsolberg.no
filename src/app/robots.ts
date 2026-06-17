import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/design-system",
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
