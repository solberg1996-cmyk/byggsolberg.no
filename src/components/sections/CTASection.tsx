import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

type CTASectionProps = {
  title?: string;
  lead?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

/** Gjenbrukbar konverteringsseksjon på mørk bakgrunn. */
export function CTASection({
  title = "Har du et prosjekt på gang?",
  lead = "Fortell oss kort om hva du tenker, så tar vi en uforpliktende prat. Vi svarer som regel innen 24 timer.",
  buttonLabel = "Få gratis befaring",
  buttonHref = "/kontakt",
}: CTASectionProps) {
  return (
    <Section background="charcoal">
      <Container size="narrow" className="text-center">
        <Heading level={2} className="mx-auto max-w-[20ch] text-canvas">
          {title}
        </Heading>
        <p className="mx-auto mt-5 max-w-[52ch] text-lead text-line">{lead}</p>
        <div className="mt-8 flex justify-center">
          <Button variant="inverted" href={buttonHref}>
            {buttonLabel}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
