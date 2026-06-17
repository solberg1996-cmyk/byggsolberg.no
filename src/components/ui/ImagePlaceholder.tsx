import { cn } from "@/lib/utils/cn";

type ImagePlaceholderProps = {
  label?: string;
  className?: string;
};

/**
 * Rolig platsholder der profesjonelt foto skal inn. Erstattes av next/image
 * når bildene er på plass. Holder layout og premium-uttrykk i mellomtiden.
 */
export function ImagePlaceholder({ label = "Foto", className }: ImagePlaceholderProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-sand",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-2 text-muted">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M21 16l-5-5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-caption uppercase tracking-[0.12em]">{label}</span>
      </div>
    </div>
  );
}
