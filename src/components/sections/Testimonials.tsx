import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { testimonials } from "@/content/testimonials";
import type { Testimonial } from "@/types";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-clay" aria-label={`${count} av 5 stjerner`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const meta = [testimonial.location, testimonial.projectType]
    .filter(Boolean)
    .join(" · ");

  return (
    <figure className="rounded-lg border border-line bg-white p-6 lg:p-8">
      <Stars count={testimonial.rating ?? 5} />
      <blockquote className="mt-4 font-display text-h3 leading-snug text-charcoal">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 text-body-sm text-warm-grey">
        <span className="font-medium text-charcoal">{testimonial.name}</span>
        {meta && ` · ${meta}`}
      </figcaption>
    </figure>
  );
}

type TestimonialsProps = {
  /** Vis bare et utvalg (f.eks. 3). Utelat for å vise alle. */
  limit?: number;
  background?: "canvas" | "sand";
};

/** Omtale-vegg med sosialt bevis. Masonry-oppsett håndterer ulike lengder. */
export function Testimonials({ limit, background = "canvas" }: TestimonialsProps) {
  const shown = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <Section background={background}>
      <Container>
        <Eyebrow>Omtaler</Eyebrow>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <Heading level={2} className="max-w-[20ch]">
            Hva kundene sier
          </Heading>
          <div className="flex items-center gap-3">
            <Stars count={5} />
            <span className="text-body-sm text-warm-grey">
              5,0 av 5 · {testimonials.length} omtaler
            </span>
          </div>
        </div>

        <div className="mt-12 gap-8 [column-gap:2rem] md:columns-2 lg:columns-3">
          {shown.map((testimonial, i) => (
            <div key={i} className="mb-8 break-inside-avoid">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
