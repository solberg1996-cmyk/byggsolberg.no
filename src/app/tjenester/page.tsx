import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HeroLite, ProcessSteps, SmallJobs, Testimonials, CTASection } from "@/components/sections";
import { ServiceGrid } from "@/components/service-cards";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Tjenester",
  description:
    "Oppussing, tilbygg, terrasse, kledning, vinduer og service. Faglært tømrer i Tønsberg og Vestfold.",
  path: "/tjenester",
});

export default function TjenesterPage() {
  return (
    <>
      <HeroLite
        eyebrow="Tjenester"
        title="Det vi kan hjelpe deg med"
        lead="Fra mindre oppdrag til større ombygginger — alltid med samme faglige standard og en ryddig, forutsigbar prosess."
      />

      <Section background="canvas">
        <Container>
          <ServiceGrid />
        </Container>
      </Section>

      <SmallJobs background="sand" />
      <ProcessSteps />
      <Testimonials limit={3} background="sand" />
      <CTASection />
    </>
  );
}
