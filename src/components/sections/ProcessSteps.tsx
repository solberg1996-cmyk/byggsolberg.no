import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";

const steps = [
  {
    n: "01",
    title: "Befaring",
    text: "Vi kommer på en uforpliktende befaring og hører hva du ønsker.",
  },
  {
    n: "02",
    title: "Tilbud",
    text: "Du får et tydelig, skriftlig tilbud uten skjulte kostnader.",
  },
  {
    n: "03",
    title: "Utførelse",
    text: "Vi gjennomfører arbeidet med kvalitet og en ryddig byggeplass.",
  },
  {
    n: "04",
    title: "Ferdig & ryddig",
    text: "Vi rydder opp, og går ikke før du er fornøyd med resultatet.",
  },
];

/** "Slik jobber vi" – fire steg med segmentert linje over hvert nummer. */
export function ProcessSteps() {
  return (
    <Section background="canvas">
      <Container>
        <Eyebrow>Slik jobber vi</Eyebrow>
        <Heading level={2} className="mt-4 max-w-[18ch]">
          En forutsigbar prosess fra start til slutt
        </Heading>

        <ol className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-line pt-6">
              <span className="font-display text-h2 text-clay">{step.n}</span>
              <h3 className="mt-3 font-display text-h3 font-medium text-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-body text-warm-grey">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
