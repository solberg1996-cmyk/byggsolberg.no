import { cn } from "@/lib/utils/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /** default = 1280px innhold, wide = 1440px, narrow = 720px tekstkolonne */
  size?: "default" | "wide" | "narrow";
};

const sizes = {
  default: "max-w-[1280px]",
  wide: "max-w-[1440px]",
  narrow: "max-w-[720px]",
} as const;

/** Sentrert innholdsbredde med responsiv ytre gutter. */
export function Container({ size = "default", className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-10 xl:px-16", sizes[size], className)}
      {...props}
    />
  );
}
