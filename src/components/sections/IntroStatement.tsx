import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";

/** Rolig posisjoneringsseksjon: smal, sentrert, mye luft. */
export function IntroStatement() {
  return (
    <Section background="canvas">
      <Container size="narrow" className="text-center">
        <Eyebrow>Solberg Byggservice</Eyebrow>
        <Heading level={2} className="mx-auto mt-4 max-w-[20ch]">
          Et lokalt firma som tar håndverket på alvor
        </Heading>
        <p className="mx-auto mt-6 max-w-[52ch] text-lead text-warm-grey">
          Vi tror gode hjem bygges av folk som bryr seg om detaljene. Derfor
          holder vi prosjektene oversiktlige, kommunikasjonen ryddig og
          standarden høy — fra første befaring til siste list.
        </p>
      </Container>
    </Section>
  );
}
