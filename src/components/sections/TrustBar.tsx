import { Container } from "@/components/ui/Container";
import { testimonials } from "@/content/testimonials";

const markers = [
  "Faglært tømrer",
  "10+ års erfaring",
  "Forsikret",
  `★ 5,0 · ${testimonials.length} omtaler`,
];

/** Lav stripe med tillitsmarkører, rett under hero. */
export function TrustBar() {
  return (
    <div className="border-y border-line bg-sand">
      <Container>
        <ul className="grid grid-cols-2 gap-y-4 py-6 text-center text-body-sm text-warm-grey lg:flex lg:items-center lg:justify-between lg:py-7">
          {markers.map((marker, i) => (
            <li
              key={marker}
              className={
                i % 2 === 1
                  ? "border-l border-line lg:border-l-0"
                  : undefined
              }
            >
              {marker}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
