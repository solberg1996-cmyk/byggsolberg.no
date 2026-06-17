import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { site } from "@/content/site";

type LogoProps = {
  /** Beholdt for API-kompatibilitet; logoen er et farget bilde og endres ikke av tone. */
  tone?: "dark" | "light";
  onClick?: () => void;
  className?: string;
};

/** Firmalogo som lenke til forsiden. */
export function Logo({ onClick, className }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${site.shortName} – til forsiden`}
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/images/logo/logo.png"
        alt={site.name}
        width={1536}
        height={1024}
        priority
        className="h-14 w-auto lg:h-20"
      />
    </Link>
  );
}
