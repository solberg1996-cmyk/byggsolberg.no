import type { Metadata } from "next";
import { Badge, Button, Container, Eyebrow, Heading, Section } from "@/components/ui";
import { colors } from "@/design-system/colors";
import { space } from "@/design-system/spacing";

// Intern side – skal ikke indekseres. Fjernes før lansering.
export const metadata: Metadata = {
  title: "Designsystem",
  robots: { index: false, follow: false },
};

const typeScale = [
  { cls: "text-display font-display", label: "Display · Fraunces", sample: "Håndverk du kan se forskjell på" },
  { cls: "text-h1 font-display", label: "H1 · Fraunces", sample: "Tilbygg og ombygging i Tønsberg" },
  { cls: "text-h2 font-display", label: "H2 · Fraunces", sample: "Slik jobber vi" },
  { cls: "text-h3 font-display font-medium", label: "H3 · Fraunces 500", sample: "Oppussing og rehabilitering" },
  { cls: "text-lead font-sans text-warm-grey", label: "Lead/ingress · Hanken", sample: "Solid tømrerarbeid med fokus på kvalitet, ryddighet og trygghet." },
  { cls: "text-body font-sans", label: "Body · Hanken", sample: "Vi tar små og mellomstore prosjekter for private boligeiere i Vestfold." },
  { cls: "text-body-sm font-sans text-warm-grey", label: "Body small · Hanken", sample: "Vi svarer som regel innen 24 timer." },
  { cls: "text-caption font-sans text-muted", label: "Caption · Hanken", sample: "Bildetekst / metadata" },
];

export default function DesignSystemPage() {
  return (
    <main>
      {/* Tittel */}
      <Section background="charcoal" spacing="compact">
        <Container>
          <Eyebrow tone="muted">Internt · Designsystem</Eyebrow>
          <Heading level={1} size="display" className="mt-3 text-canvas">
            Det stille håndverket
          </Heading>
          <p className="mt-4 max-w-[640px] text-lead text-line">
            Fundamentet for Solberg Byggservice. Lyst, rolig, premium. Denne
            siden er intern og fjernes før lansering.
          </p>
        </Container>
      </Section>

      {/* Farger */}
      <Section background="canvas">
        <Container>
          <Eyebrow>Farger</Eyebrow>
          <Heading level={2} className="mt-3">
            Palett
          </Heading>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {Object.entries(colors).map(([name, hex]) => (
              <div key={name}>
                <div
                  className="aspect-[4/3] w-full rounded-lg border border-line"
                  style={{ backgroundColor: hex }}
                />
                <p className="mt-2 text-body-sm font-medium capitalize">{name}</p>
                <p className="text-caption uppercase text-muted">{hex}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Typografi */}
      <Section background="sand">
        <Container>
          <Eyebrow>Typografi</Eyebrow>
          <Heading level={2} className="mt-3">
            Type-skala
          </Heading>
          <div className="mt-10 flex flex-col gap-8">
            {typeScale.map((t) => (
              <div key={t.label} className="border-t border-line pt-6">
                <p className="mb-2 text-caption uppercase text-muted">{t.label}</p>
                <p className={t.cls}>{t.sample}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Spacing */}
      <Section background="canvas">
        <Container>
          <Eyebrow>Spacing</Eyebrow>
          <Heading level={2} className="mt-3">
            4px-skala
          </Heading>
          <div className="mt-10 flex flex-col gap-3">
            {Object.entries(space).map(([step, value]) => (
              <div key={step} className="flex items-center gap-4">
                <span className="w-24 shrink-0 text-body-sm text-warm-grey">
                  space-{step} · {value}
                </span>
                <span
                  className="h-4 rounded-sm bg-clay"
                  style={{ width: value }}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Knapper + komponenter */}
      <Section background="sand">
        <Container>
          <Eyebrow>Komponenter</Eyebrow>
          <Heading level={2} className="mt-3">
            Primitiver
          </Heading>

          <p className="mt-10 mb-4 text-caption uppercase text-muted">Knapper</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Få gratis befaring</Button>
            <Button variant="secondary">Se prosjekter</Button>
            <Button variant="text">Les mer →</Button>
          </div>

          <p className="mt-12 mb-4 text-caption uppercase text-muted">
            Eyebrow
          </p>
          <Eyebrow>Tjenester</Eyebrow>

          <p className="mt-12 mb-4 text-caption uppercase text-muted">
            Badges / filter-piller
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge active>Alle</Badge>
            <Badge>Oppussing</Badge>
            <Badge>Tilbygg</Badge>
            <Badge>Terrasse</Badge>
            <Badge>Kledning</Badge>
          </div>
        </Container>
      </Section>
    </main>
  );
}
