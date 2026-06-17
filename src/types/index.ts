// Delte innholdstyper for nettsiden. Brukes av innholdsdata (content/),
// seksjoner og fase 2 (Sanity/CMS-integrasjon).

export type Testimonial = {
  quote: string;
  name: string;
  location?: string;
  projectType?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
};

export type Service = {
  slug: string;
  label: string;
  /** Kort beskrivelse til kort/oversikt */
  short: string;
  /** Lengre brødtekst til detaljside (fase 2) */
  description?: string;
  /** Sti til representativt bilde */
  image?: string;
};

export type ProjectCategory =
  | "oppussing"
  | "tilbygg"
  | "terrasse"
  | "kledning"
  | "vinduer"
  | "service";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  /** Kort ingress til kort/galleri */
  excerpt: string;
  /** Sti til hovedbilde i /public. Tom/utelatt → platsholder vises. */
  coverImage?: string;
  /** Ekstra bilder til detaljsidens galleri. Tom → platsholdere vises. */
  images: string[];
  year?: number;
  durationWeeks?: number;
  /** Hva kunden ønsket / utgangspunktet */
  challenge?: string;
  /** Hva vi gjorde */
  solution?: string;
  testimonial?: Testimonial;
};
