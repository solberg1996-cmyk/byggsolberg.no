import Link from "next/link";
import { Heading } from "@/components/ui/Heading";

type ServiceCardProps = {
  label: string;
  short: string;
  href: string;
};

/** Tjenestekort uten bilde: tittel + kort beskrivelse, med tynn topplinje. */
export function ServiceCard({ label, short, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group flex flex-col border-t border-line pt-6">
      <div className="flex items-start justify-between gap-4">
        <Heading
          level={3}
          as="h3"
          className="transition-colors group-hover:text-clay"
        >
          {label}
        </Heading>
        <span
          aria-hidden="true"
          className="mt-1 shrink-0 text-clay transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </div>
      <p className="mt-3 text-body text-warm-grey">{short}</p>
    </Link>
  );
}
