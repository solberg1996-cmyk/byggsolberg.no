import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { HeroLite, CTASection } from "@/components/sections";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return site.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const service = site.services.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.label} i Tønsberg`,
    description: service.intro,
    path: `/tjenester/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = site.services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <HeroLite eyebrow="Tjeneste" title={service.label} lead={service.intro} />

      <Section background="canvas">
        <Container>
          <div className="max-w-[760px]">
            <Heading level={2} size="h3" as="h2">
              Dette kan vi hjelpe med
            </Heading>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-body text-warm-grey"
                >
                  <span aria-hidden="true" className="mt-1 text-clay">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/prosjekter"
                className="text-clay transition-colors hover:text-clay-dark"
              >
                Se relaterte prosjekter →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection title={`Vurderer du ${service.label.toLowerCase()}?`} />
    </>
  );
}
