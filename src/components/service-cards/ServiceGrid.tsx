import { ServiceCard } from "./ServiceCard";
import { site } from "@/content/site";

/** Rutenett av de seks tjenestene (3×2 på desktop). */
export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {site.services.map((service) => (
        <ServiceCard
          key={service.slug}
          label={service.label}
          short={service.short}
          href={`/tjenester/${service.slug}`}
        />
      ))}
    </div>
  );
}
