import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";

type HeroLiteProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

/** Rolig sidetopp for undersider. Toppadding klarerer den sticky headeren. */
export function HeroLite({ eyebrow, title, lead }: HeroLiteProps) {
  return (
    <section className="bg-canvas pt-28 pb-12 lg:pt-36 lg:pb-16">
      <Container>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading level={1} className="mt-4 max-w-[20ch]">
          {title}
        </Heading>
        {lead && (
          <p className="mt-5 max-w-[54ch] text-lead text-warm-grey">{lead}</p>
        )}
      </Container>
    </section>
  );
}
