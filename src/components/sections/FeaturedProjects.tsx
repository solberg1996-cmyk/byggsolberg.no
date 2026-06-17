import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/project-gallery";
import { projects } from "@/content/projects";
import type { Project } from "@/types";

// Hvilke prosjekter som vises på forsiden, i denne rekkefølgen.
const featuredSlugs = [
  "utetrapp-sittebenk-tolvsrod",
  "ny-terrasse-og-utetrapp",
  "oppgradert-veranda-barkaker",
];

/** Utvalgte prosjekter på forsiden – sidens viktigste tillitsdriver. */
export function FeaturedProjects() {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => p !== undefined);

  return (
    <Section background="sand">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Prosjekter</Eyebrow>
            <Heading level={2} className="mt-4 max-w-[18ch]">
              Et utvalg av arbeidet vårt
            </Heading>
          </div>
          <div className="hidden sm:block">
            <Button variant="text" href="/prosjekter">
              Se alle prosjekter →
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Button variant="text" href="/prosjekter">
            Se alle prosjekter →
          </Button>
        </div>
      </Container>
    </Section>
  );
}
