import { cn } from "@/lib/utils/cn";

type EyebrowProps = React.HTMLAttributes<HTMLParagraphElement> & {
  tone?: "clay" | "muted";
  as?: "p" | "span" | "div";
};

/** Liten uppercase-label som står over de fleste overskrifter. */
export function Eyebrow({
  tone = "clay",
  as: Tag = "p",
  className,
  ...props
}: EyebrowProps) {
  return (
    <Tag
      className={cn(
        "text-label uppercase",
        tone === "clay" ? "text-clay" : "text-warm-grey",
        className,
      )}
      {...props}
    />
  );
}
