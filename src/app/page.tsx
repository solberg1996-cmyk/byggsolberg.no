import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import {
  Hero,
  TrustBar,
  IntroStatement,
  ProcessSteps,
  AboutPreview,
  FeaturedProjects,
  Testimonials,
  SmallJobs,
  CTASection,
} from "@/components/sections";
import { ServiceGrid } from "@/components/service-cards";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <IntroStatement />

      {/* Tjenester */}
      <Section background="sand">
        <Container>
          <Eyebrow>Tjenester</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[22ch]">
            Det vi kan hjelpe deg med
          </Heading>
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </Container>
      </Section>

      <SmallJobs background="canvas" />
      <FeaturedProjects />
      <ProcessSteps />
      <AboutPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
