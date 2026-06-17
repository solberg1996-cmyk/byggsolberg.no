import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

const examples = [
  {
    title: "Hytteservice",
    text: "Vedlikehold og småreparasjoner på hytta — bytte av kledningsbord, rekkverk, dører, terrassebord og det som trenger et ettersyn. Vi tar oss av det, enten du er der selv eller ikke.",
  },
  {
    title: "Klar for salg",
    text: "Skal du selge? Vi utbedrer det som trekker ned inntrykket på visning — lister, dører, overflater, råteskader og slitasje — så boligen fremstår godt stelt og verdt prisen.",
  },
  {
    title: "Listen din",
    text: "Har du samlet opp en liste med mange små ting som burde vært fikset? Send den til oss. Vi går gjennom punktene, tar unna det vi kan på en effektiv måte, og rydder opp etter oss.",
  },
];

type SmallJobsProps = {
  background?: "canvas" | "sand";
};

/** Forklarer at vi også tar mindre oppdrag — hytteservice, klargjøring for salg, oppsamlede småjobber. */
export function SmallJobs({ background = "canvas" }: SmallJobsProps) {
  return (
    <Section background={background}>
      <Container>
        <div className="max-w-[640px]">
          <Eyebrow>Mindre oppdrag</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[20ch]">
            Vi tar også de små jobbene
          </Heading>
          <p className="mt-6 text-lead text-warm-grey">
            Ikke alt trenger å være et stort prosjekt. En god del av oppdragene
            våre er nettopp de mindre tingene — løst med samme faglige standard,
            ryddighet og presisjon som de store.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          {examples.map((example) => (
            <div key={example.title} className="border-t border-line pt-6">
              <Heading level={3} as="h3">
                {example.title}
              </Heading>
              <p className="mt-3 text-body text-warm-grey">{example.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-[640px] text-body text-warm-grey">
          Usikker på om jobben er for liten? Det er den sjelden. Ta kontakt med
          en kort beskrivelse — eller bare en liste — så finner vi ut av det
          sammen.
        </p>
        <div className="mt-6">
          <Button href="/kontakt">Send oss en forespørsel</Button>
        </div>
      </Container>
    </Section>
  );
}
