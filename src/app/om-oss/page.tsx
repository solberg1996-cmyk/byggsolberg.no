import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Photo } from "@/components/ui/Photo";
import {
  HeroLite,
  TrustBar,
  Testimonials,
  CTASection,
} from "@/components/sections";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Om oss",
  description:
    "Faglært tømrer med over ti års erfaring. Et lokalt firma i Tønsberg med fokus på kvalitet og ryddig kommunikasjon.",
  path: "/om-oss",
});

const values = [
  {
    title: "Kvalitet",
    text: "Vi gjør ting skikkelig, også der det ikke synes. Detaljene er det som skiller godt håndverk fra gjennomsnittlig.",
  },
  {
    title: "Ryddig kommunikasjon",
    text: "Du forholder deg til én person, får tydelige svar og vet alltid hva som skjer videre i prosjektet.",
  },
  {
    title: "Ærlighet",
    text: "Realistiske tilbud, ingen skjulte kostnader, og beskjed med en gang hvis noe endrer seg underveis.",
  },
];

export default function OmOssPage() {
  return (
    <>
      <HeroLite
        eyebrow="Om oss"
        title="Faglært tømrer som står for arbeidet sitt"
        lead="Et lokalt firma i Tønsberg, drevet av fagstolthet og en enkel idé: at gode hjem bygges av folk som bryr seg om detaljene."
      />

      {/* Historien */}
      <Section background="canvas">
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
            <div className="flex flex-col gap-6 lg:col-span-7">
              <Eyebrow>Møt håndverkeren</Eyebrow>
              <Heading level={2} className="max-w-[20ch]">
                Hei, jeg er Thomas
              </Heading>
              <p className="max-w-[54ch] text-body text-warm-grey">
                Jeg er faglært tømrer med over ti års erfaring fra både små og
                mellomstore prosjekter. Etter mange år i bransjen startet jeg
                mitt eget firma, fordi jeg ville jobbe tettere på kundene og stå
                fullt og helt for arbeidet som leveres.
              </p>
              <p className="max-w-[54ch] text-body text-warm-grey">
                Jeg tar oppdrag for private boligeiere i Tønsberg og resten av
                Vestfold. Du forholder deg til meg hele veien — ingen mellomledd,
                ingen uklare beskjeder. For meg handler godt håndverk like mye om
                ryddig kommunikasjon og en ren byggeplass som om selve snekringen.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <TrustBar />

      {/* Verdier */}
      <Section background="canvas">
        <Container>
          <Eyebrow>Verdier</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[20ch]">
            Det vi alltid leverer på
          </Heading>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-t border-line pt-6">
                <Heading level={3} as="h3">
                  {value.title}
                </Heading>
                <p className="mt-3 text-body text-warm-grey">{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Testimonials limit={3} background="sand" />
      <CTASection />
    </>
  );
}
