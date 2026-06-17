import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { LightboxProvider, LightboxImage } from "@/components/project-gallery";
import { CTASection } from "@/components/sections";
import { projects, categoryLabels } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.excerpt,
    path: `/prosjekter/${slug}`,
  });
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-warm-grey">{label}</dt>
      <dd className="text-charcoal">{value}</dd>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  // Hovedbilde + galleri som ett klikkbart sett i lightboxen
  const lightboxImages = [project.coverImage, ...project.images].filter(
    Boolean,
  ) as string[];
  const galleryOffset = project.coverImage ? 1 : 0;

  return (
    <>
      <LightboxProvider images={lightboxImages} title={project.title}>
      {/* Hero */}
      <section className="bg-canvas pt-28 lg:pt-36">
        <Container>
          <Link
            href="/prosjekter"
            className="text-body-sm text-warm-grey transition-colors hover:text-clay"
          >
            ← Alle prosjekter
          </Link>
          <Eyebrow className="mt-6">
            {categoryLabels[project.category]} · {project.location}
          </Eyebrow>
          <Heading level={1} className="mt-4 max-w-[20ch]">
            {project.title}
          </Heading>
          <p className="mt-5 max-w-[54ch] text-lead text-warm-grey">
            {project.excerpt}
          </p>
        </Container>
        <Container className="mt-10 lg:mt-14">
          <LightboxImage
            index={0}
            src={project.coverImage}
            alt={`${project.title} – hovedbilde`}
            label={`${project.title} · hovedbilde`}
            className="aspect-[16/9] w-full rounded-xl"
            sizes="(min-width: 1280px) 1216px, 100vw"
            priority
          />
        </Container>
      </section>

      {/* Tekst + fakta */}
      <Section background="canvas">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-8 lg:col-span-7">
              {project.challenge && (
                <div>
                  <Heading level={2} size="h3" as="h2">
                    Utfordringen
                  </Heading>
                  <p className="mt-3 text-body text-warm-grey">{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div>
                  <Heading level={2} size="h3" as="h2">
                    Hva vi gjorde
                  </Heading>
                  <p className="mt-3 text-body text-warm-grey">{project.solution}</p>
                </div>
              )}
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-lg border border-line bg-white p-6 lg:p-8">
                <p className="text-label uppercase text-clay">Fakta</p>
                <dl className="mt-4 flex flex-col gap-3 text-body-sm">
                  <Fact label="Type" value={categoryLabels[project.category]} />
                  <Fact label="Sted" value={project.location} />
                  {project.year && <Fact label="År" value={String(project.year)} />}
                  {project.durationWeeks && (
                    <Fact label="Varighet" value={`${project.durationWeeks} uker`} />
                  )}
                </dl>
              </div>
            </aside>
          </div>

          {/* Galleri – ekte bilder hvis project.images er fylt, ellers platsholdere */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {(project.images.length ? project.images : ["", ""]).map((img, i) => (
              <LightboxImage
                key={i}
                index={galleryOffset + i}
                src={img || undefined}
                alt={`${project.title} – bilde ${i + 1}`}
                label="Detalj"
                className="aspect-[4/3] w-full rounded-lg"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            ))}
          </div>

          {/* Kundesitat */}
          {project.testimonial && (
            <figure className="mx-auto mt-16 max-w-[60ch] text-center">
              <div className="flex justify-center gap-0.5 text-clay" aria-hidden="true">
                ★★★★★
              </div>
              <blockquote className="mt-4 font-display text-h2 text-charcoal">
                “{project.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 text-body-sm text-warm-grey">
                {project.testimonial.name} · {project.testimonial.location}
              </figcaption>
            </figure>
          )}
        </Container>
      </Section>
      </LightboxProvider>

      {/* Neste prosjekt */}
      <Section background="sand">
        <Container>
          <p className="text-label uppercase text-clay">Neste prosjekt</p>
          <Link href={`/prosjekter/${next.slug}`} className="group mt-4 block">
            <Heading
              level={2}
              className="max-w-[20ch] transition-colors group-hover:text-clay"
            >
              {next.title} →
            </Heading>
          </Link>
        </Container>
      </Section>

      <CTASection title="Ønsker du noe lignende?" />
    </>
  );
}
