import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "text" | "inverted";

const base =
  "inline-flex items-center justify-center gap-2 font-sans text-[1rem] font-medium tracking-[0.01em] rounded-md transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay";

const variants: Record<Variant, string> = {
  primary: "bg-charcoal text-canvas px-7 py-4 hover:bg-black",
  secondary:
    "border border-charcoal text-charcoal px-7 py-4 hover:bg-charcoal hover:text-canvas",
  text: "text-clay px-0 py-1 gap-1.5 hover:text-clay-dark",
  inverted: "bg-canvas text-charcoal px-7 py-4 hover:bg-white",
};

type ButtonProps = {
  variant?: Variant;
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "children" | "onClick"
>;

/**
 * Knapp som rendrer <button> som standard, eller en Next <Link> hvis href er satt.
 * onClick forwardes i begge tilfeller (f.eks. for å lukke mobilmenyen ved navigasjon).
 * Varianter: primary (charcoal), secondary (outline), text (leire tekstlenke).
 */
export function Button({
  variant = "primary",
  href,
  className,
  children,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
