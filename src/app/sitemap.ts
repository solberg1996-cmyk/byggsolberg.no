import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

// Offentlige ruter. /design-system er intern (noindex) og utelates.
const staticRoutes = ["", "/tjenester", "/prosjekter", "/om-oss", "/kontakt"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticRoutes,
    ...site.services.map((s) => `/tjenester/${s.slug}`),
    ...projects.map((p) => `/prosjekter/${p.slug}`),
  ];

  return paths.map((path) => ({
    url: new URL(path || "/", siteUrl).toString(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
