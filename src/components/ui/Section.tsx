import { cn } from "@/lib/utils/cn";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  /** Bakgrunnsfarge – seksjoner veksler for rolig rytme */
  background?: "canvas" | "sand" | "charcoal";
  /** Vertikal luft – default 96/160px, compact for tettere band */
  spacing?: "default" | "compact" | "none";
};

const backgrounds = {
  canvas: "bg-canvas text-charcoal",
  sand: "bg-sand text-charcoal",
  charcoal: "bg-charcoal text-canvas",
} as const;

const spacings = {
  default: "py-24 lg:py-40",
  compact: "py-16 lg:py-24",
  none: "",
} as const;

/** Fullbredde-band med konsistent vertikal rytme og bakgrunn. */
export function Section({
  background = "canvas",
  spacing = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(backgrounds[background], spacings[spacing], className)}
      {...props}
    />
  );
}
