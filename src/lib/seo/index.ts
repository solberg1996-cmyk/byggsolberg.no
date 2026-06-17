import type { Metadata } from "next";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";

// TODO: bytt til faktisk produksjonsdomene før lansering hvis det avviker.
export const siteUrl = "https://www.byggsolberg.no";

type BuildMetadataArgs = {
  /** Sidespesifikk tittel (uten firmanavn – root-template legger det til). */
  title?: string;
  description?: string;
  /** Sti fra rot, f.eks. "/kontakt". */
  path?: string;
};

/** Bygger per-side metadata med kanonisk URL og Open Graph. */
export function buildMetadata({
  title,
  description,
  path = "/",
}: BuildMetadataArgs = {}): Metadata {
  const url = new URL(path, siteUrl).toString();
  const desc = description ?? site.tagline;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: title ? `${title} · ${site.name}` : site.name,
      description: desc,
      url,
      siteName: site.name,
      locale: "nb_NO",
      type: "website",
      // TODO (fase 2): legg til ekte OG-bilder når foto er på plass.
    },
  };
}

/** Metadata for root-layouten. Setter base-URL og tittel-template. */
export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} · Tømrer i Tønsberg`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    siteName: site.name,
    locale: "nb_NO",
    type: "website",
    url: siteUrl,
  },
};

/**
 * JSON-LD for lokalt byggefirma (structured data). Konservativ – utelater
 * rating/org.nr til vi har reelle data. Utvides i fase 2.
 */
export function localBusinessJsonLd() {
  const ratings = testimonials.map((t) => t.rating ?? 5);
  const average = ratings.reduce((sum, r) => sum + r, 0) / ratings.length;

  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.name,
    description: site.tagline,
    url: siteUrl,
    telephone: site.phone,
    email: site.email,
    sameAs: [site.instagram],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Vestfold",
      addressCountry: "NO",
    },
    areaServed: site.areas.map((name) => ({ "@type": "City", name })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: average.toFixed(1),
      reviewCount: testimonials.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.rating ?? 5),
        bestRating: "5",
      },
      reviewBody: t.quote,
    })),
  };
}
