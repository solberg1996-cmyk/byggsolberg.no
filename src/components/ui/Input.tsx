import { cn } from "@/lib/utils/cn";

export const fieldBase =
  "h-13 w-full rounded-sm border bg-white px-3.5 text-[1rem] text-charcoal placeholder:text-muted transition-colors focus:border-clay focus:outline-none disabled:opacity-50";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export function Input({ invalid, className, ...props }: InputProps) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={cn(fieldBase, invalid ? "border-error" : "border-line", className)}
      {...props}
    />
  );
}
