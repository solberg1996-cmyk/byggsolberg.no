import { cn } from "@/lib/utils/cn";
import { fieldBase } from "./Input";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
};

/** Native select med egen chevron for et rolig, konsistent uttrykk. */
export function Select({ invalid, className, children, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        aria-invalid={invalid || undefined}
        className={cn(
          fieldBase,
          "appearance-none pr-10",
          invalid ? "border-error" : "border-line",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted"
      >
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
