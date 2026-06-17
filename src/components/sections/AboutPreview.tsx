import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { site } from "@/content/site";

/** Kort introduksjon av håndverkeren – portrett + personlig tekst. */
export function AboutPreview() {
  return (
    <Section background="sand">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Photo
              src={site.portraitImage}
              alt="Thomas, faglært tømrer i Solberg Byggservice"
              label="Portrett · Thomas"
              className="aspect-[4/5] w-full rounded-xl"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>

          <div className="lg:col-span-7">
            <Eyebrow>Møt håndverkeren</Eyebrow>
            <Heading level={2} className="mt-4 max-w-[20ch]">
              Faglært tømrer som står for arbeidet sitt
            </Heading>
            <p className="mt-6 max-w-[54ch] text-body text-warm-grey">
              Jeg er Thomas, faglært tømrer med over ti års erfaring fra både
              små og mellomstore prosjekter. Jeg driver et lokalt firma der du
              forholder deg til én person hele veien — ingen mellomledd, ingen
              uklare beskjeder.
            </p>
            <p className="mt-4 max-w-[54ch] text-body text-warm-grey">
              For meg handler godt håndverk like mye om ryddig kommunikasjon og
              en ren byggeplass som om selve snekringen. Du skal kunne slappe av
              og stole på at jobben blir gjort skikkelig.
            </p>
            <div className="mt-8">
              <Button variant="text" href="/om-oss">
                Bli bedre kjent →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
