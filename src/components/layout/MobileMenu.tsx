"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { InstagramLink } from "@/components/ui/InstagramLink";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils/cn";
import { site } from "@/content/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

/** Fullskjerm overlay-meny for mobil. Lukkes ved klikk, lenke eller Escape. */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Lås body-scroll og lytt på Escape mens menyen er åpen
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 bg-canvas lg:hidden",
        "transition-opacity duration-300 ease-out",
        open ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
      )}
    >
      <Container className="flex h-full flex-col">
        {/* Topprad: logo + lukk */}
        <div className="flex h-20 items-center justify-between">
          <Logo onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Lukk meny"
            className="-mr-2 flex size-11 items-center justify-center text-charcoal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Store serif-lenker */}
        <nav className="mt-8 flex flex-col gap-6">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="font-display text-h1 text-charcoal transition-colors hover:text-clay"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + kontakt nederst */}
        <div className="mt-auto flex flex-col gap-6 pb-10 pt-8">
          <Button href="/kontakt" onClick={onClose} className="w-full">
            Få gratis befaring
          </Button>
          <div className="flex flex-col gap-1 text-body">
            <a href={site.phoneHref} className="text-charcoal hover:text-clay">
              {site.phone}
            </a>
            <a href={site.emailHref} className="text-warm-grey hover:text-clay">
              {site.email}
            </a>
            <InstagramLink
              label="Følg oss på Instagram"
              onClick={onClose}
              className="mt-2 text-body-sm text-warm-grey hover:text-clay"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
