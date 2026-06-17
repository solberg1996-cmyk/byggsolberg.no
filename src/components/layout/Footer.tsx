import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { InstagramLink } from "@/components/ui/InstagramLink";
import { Logo } from "./Logo";
import { site } from "@/content/site";

function ColTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-label uppercase text-clay">{children}</p>;
}

/** Mørk footer (charcoal) med kontaktinfo, tjenester, områder og org.nr. */
export function Footer() {
  return (
    <footer className="bg-charcoal text-canvas">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
          {/* Merke + tagline */}
          <div className="flex flex-col gap-4">
            <Logo tone="light" />
            <p className="max-w-[28ch] text-body-sm text-line">{site.tagline}</p>
            <InstagramLink
              label={site.instagramHandle}
              className="text-body-sm text-line hover:text-clay"
            />
          </div>

          {/* Tjenester */}
          <nav className="flex flex-col gap-3">
            <ColTitle>Tjenester</ColTitle>
            {site.services.map((s) => (
              <Link
                key={s.slug}
                href={`/tjenester/${s.slug}`}
                className="text-body-sm text-line transition-colors hover:text-clay"
              >
                {s.label}
              </Link>
            ))}
          </nav>

          {/* Områder */}
          <div className="flex flex-col gap-3">
            <ColTitle>Områder vi dekker</ColTitle>
            <ul className="flex flex-col gap-3">
              {site.areas.map((area) => (
                <li key={area} className="text-body-sm text-line">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col gap-3">
            <ColTitle>Kontakt</ColTitle>
            <a href={site.phoneHref} className="text-body-sm text-line transition-colors hover:text-clay">
              {site.phone}
            </a>
            <a href={site.emailHref} className="text-body-sm text-line transition-colors hover:text-clay">
              {site.email}
            </a>
            <p className="mt-2 max-w-[26ch] text-caption text-muted">{site.responseTime}</p>
          </div>
        </div>

        {/* Bunnlinje */}
        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-caption text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.name} · Org.nr {site.orgNr}
          </p>
          <Link href="/personvern" className="transition-colors hover:text-clay">
            Personvern
          </Link>
        </div>
      </Container>
    </footer>
  );
}
