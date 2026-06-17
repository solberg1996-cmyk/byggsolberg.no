import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Photo } from "@/components/ui/Photo";
import { site } from "@/content/site";

// Lang, myk fade: bildet ligger bak teksten og toner ut mot venstre (desktop)
// / oppover (mobil).
const fadeLeft =
  "[mask-image:linear-gradient(to_right,transparent,#000_74%)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_74%)]";
const fadeTop =
  "[mask-image:linear-gradient(to_bottom,transparent,#000_30%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,#000_30%)]";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Desktop: foto bak teksten, toner ut mot venstre */}
      {site.heroImage && (
        <>
          <div className="absolute inset-0 hidden lg:block">
            <div className={`relative ml-auto h-full w-[88%] ${fadeLeft}`}>
              <Image
                src={site.heroImage}
                alt="Prosjekt utført av Solberg Byggservice"
                fill
                priority
                sizes="88vw"
                className="object-cover"
              />
            </div>
          </div>
          {/* Lett lys slør bak teksten for lesbarhet */}
          <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,var(--color-canvas),var(--color-canvas)_16%,transparent_66%)] lg:block" />
        </>
      )}

      <Container className="relative">
        <div className="max-w-[34rem] lg:flex lg:min-h-[42rem] lg:flex-col lg:justify-center">
          <Eyebrow>Tømrer i Tønsberg</Eyebrow>
          <Heading level={1} size="display" className="mt-4 max-w-[16ch]">
            Håndverk du kan se forskjell på
          </Heading>
          <p className="mt-6 max-w-[44ch] text-lead text-warm-grey">
            Faglært tømrer med mer enn ti års erfaring. Vi tar små og mellomstore
            prosjekter for boligeiere i Vestfold — med kvalitet, ryddighet og en
            forutsigbar prosess fra befaring til ferdig resultat.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/kontakt">Få gratis befaring</Button>
            <Button variant="text" href="/prosjekter">
              Se prosjekter →
            </Button>
          </div>
        </div>

        {/* Mobil: foto under teksten */}
        <div
          className={`relative mt-8 aspect-[4/5] w-full overflow-hidden rounded-xl lg:hidden ${fadeTop}`}
        >
          <Photo
            src={site.heroImage}
            alt="Prosjekt utført av Solberg Byggservice"
            label="Hero-foto · prosjekt"
            className="absolute inset-0 h-full w-full"
            sizes="100vw"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
