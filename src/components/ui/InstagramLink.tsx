import { cn } from "@/lib/utils/cn";
import { site } from "@/content/site";

type InstagramLinkProps = {
  /** Valgfri tekst ved siden av ikonet. Utelat for kun ikon. */
  label?: string;
  className?: string;
  onClick?: () => void;
};

/** Lenke til Instagram. Arver farge fra forelder (currentColor). */
export function InstagramLink({ label, className, onClick }: InstagramLinkProps) {
  return (
    <a
      href={site.instagram}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label="Følg oss på Instagram"
      className={cn("inline-flex items-center gap-2 transition-colors", className)}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
      {label && <span>{label}</span>}
    </a>
  );
}
