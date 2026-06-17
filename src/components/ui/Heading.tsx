import { cn } from "@/lib/utils/cn";

type Size = "display" | "h1" | "h2" | "h3";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  /** Semantisk nivå (h1–h3). Standard 2. */
  level?: 1 | 2 | 3;
  /** Visuell størrelse, frikoblet fra semantikk. Default følger level. */
  size?: Size;
  /** Overstyr taggen (f.eks. "p" for et stort sitat). */
  as?: React.ElementType;
};

const sizeClasses: Record<Size, string> = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
};

const defaultSize: Record<1 | 2 | 3, Size> = { 1: "h1", 2: "h2", 3: "h3" };

/** Serif-overskrift (Fraunces) med konsistent type-skala. */
export function Heading({
  level = 2,
  size,
  as,
  className,
  ...props
}: HeadingProps) {
  const Tag = as ?? (`h${level}` as React.ElementType);
  const resolved = size ?? defaultSize[level];

  return (
    <Tag
      className={cn("font-display text-balance", sizeClasses[resolved], className)}
      {...props}
    />
  );
}
