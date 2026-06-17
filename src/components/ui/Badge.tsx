import { cn } from "@/lib/utils/cn";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** Aktiv tilstand – brukes bl.a. til galleri-filter */
  active?: boolean;
};

/** Pille/etikett. Outline i hvile, charcoal fyll når aktiv. */
export function Badge({ active = false, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-body-sm font-medium transition-colors",
        active
          ? "bg-charcoal text-canvas"
          : "border border-line text-warm-grey hover:border-charcoal hover:text-charcoal",
        className,
      )}
      {...props}
    />
  );
}
