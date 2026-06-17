import Image from "next/image";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { cn } from "@/lib/utils/cn";

type PhotoProps = {
  /** Bildebane i /public, f.eks. "/images/projects/x.jpg". Tom/utelatt → platsholder. */
  src?: string;
  alt: string;
  /** Tekst på platsholderen når src mangler. */
  label?: string;
  /** Må inneholde størrelse (aspect-[…] + w-full) og evt. rounded. */
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Viser optimalisert foto (next/image) når src finnes, ellers en rolig
 * platsholder. Gjør bildebytte til ren dra-og-slipp: legg fil i /public og
 * sett src i innholdsdataene.
 */
export function Photo({
  src,
  alt,
  label,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
}: PhotoProps) {
  if (!src) {
    return <ImagePlaceholder label={label ?? alt} className={className} />;
  }

  return (
    <div className={cn("relative overflow-hidden bg-sand", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
