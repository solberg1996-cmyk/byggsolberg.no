import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HeroLite, CTASection } from "@/components/sections";
import { ProjectGallery } from "@/components/project-gallery";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Prosjekter",
  description:
    "Utvalgte prosjekter fra Solberg Byggservice — oppussing, tilbygg, terrasse og mer i Vestfold.",
  path: "/prosjekter",
});

export default function ProsjekterPage() {
  return (
    <>
      <HeroLite
        eyebrow="Prosjekter"
        title="Et utvalg av arbeidet vårt"
        lead="Hvert prosjekt forteller litt om hvordan vi jobber. Bla gjennom, og se for deg ditt eget."
      />

      <Section background="canvas">
        <Container>
          <ProjectGallery />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
