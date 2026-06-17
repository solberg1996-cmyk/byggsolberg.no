import { cn } from "@/lib/utils/cn";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export function Textarea({ invalid, className, ...props }: TextareaProps) {
  return (
    <textarea
      aria-invalid={invalid || undefined}
      className={cn(
        "w-full rounded-sm border bg-white px-3.5 py-3 text-[1rem] text-charcoal placeholder:text-muted transition-colors focus:border-clay focus:outline-none disabled:opacity-50",
        invalid ? "border-error" : "border-line",
        className,
      )}
      {...props}
    />
  );
}
