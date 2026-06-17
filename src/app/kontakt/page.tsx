import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HeroLite, ContactForm } from "@/components/sections";
import { InstagramLink } from "@/components/ui/InstagramLink";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Ta kontakt for en uforpliktende prat om prosjektet ditt. Faglært tømrer i Tønsberg og Vestfold.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <HeroLite
        eyebrow="Kontakt"
        title="La oss ta en uforpliktende prat"
        lead="Fortell kort om hva du tenker, så ser vi på hvordan vi kan hjelpe. Det koster ingenting å spørre."
      />

      <Section background="sand">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Direkte kontakt */}
            <div className="lg:col-span-5">
              <p className="text-label uppercase text-clay">Ring eller skriv</p>
              <a
                href={site.phoneHref}
                className="mt-3 block font-display text-h2 text-charcoal transition-colors hover:text-clay"
              >
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="mt-2 block text-lead text-warm-grey transition-colors hover:text-clay"
              >
                {site.email}
              </a>
              <p className="mt-4 text-body-sm text-muted">{site.responseTime}</p>

              <InstagramLink
                label="Følg oss på Instagram"
                className="mt-5 text-body-sm text-charcoal hover:text-clay"
              />

              <div className="mt-10 border-t border-line pt-8">
                <p className="text-label uppercase text-clay">Områder vi dekker</p>
                <p className="mt-3 text-body text-warm-grey">
                  {site.areas.join(" · ")}
                </p>
              </div>
            </div>

            {/* Skjema */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
