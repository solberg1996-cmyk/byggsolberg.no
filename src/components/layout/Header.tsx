"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { InstagramLink } from "@/components/ui/InstagramLink";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils/cn";
import { site } from "@/content/site";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      className={cn(
        "group relative text-[1rem] font-medium transition-colors",
        active ? "text-clay" : "text-charcoal hover:text-clay",
      )}
    >
      {label}
      <span
        className={cn(
          "absolute -bottom-1.5 left-0 h-px w-full origin-left bg-clay transition-transform duration-300",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}

/** Sticky header. Transparent på toppen, lyst og solid med kantlinje ved scroll. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6 lg:h-24">
          <Logo />

          {/* Desktop: navigasjon + CTA */}
          <nav className="hidden items-center gap-9 lg:flex">
            {site.nav.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <InstagramLink className="text-charcoal hover:text-clay" />
            <Button href="/kontakt">Få gratis befaring</Button>
          </div>

          {/* Mobil: menyknapp */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Åpne meny"
            aria-expanded={open}
            className="-mr-2 flex size-11 items-center justify-center text-charcoal lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
