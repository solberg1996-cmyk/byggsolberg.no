"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { Photo } from "@/components/ui/Photo";
import { cn } from "@/lib/utils/cn";

type LightboxContextValue = { openAt: (index: number) => void };
const LightboxContext = createContext<LightboxContextValue | null>(null);

/**
 * Omslutter prosjektbildene. Klikk på et bilde åpner det i fullskjerm,
 * der man kan bla med piler, tastatur (←/→/Esc) eller sveip på mobil.
 */
export function LightboxProvider({
  images,
  title,
  children,
}: {
  images: string[];
  title: string;
  children: React.ReactNode;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const total = images.length;
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % total)),
    [total],
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + total) % total)),
    [total],
  );

  useEffect(() => {
    if (index === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, next, prev]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  return (
    <LightboxContext.Provider value={{ openAt: setIndex }}>
      {children}

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} – bilde ${index + 1} av ${total}`}
          className="fixed inset-0 z-[60] flex flex-col bg-charcoal/95 backdrop-blur-sm"
        >
          {/* Topplinje: teller + lukk */}
          <div className="flex items-center justify-between px-5 py-4 text-canvas/80">
            <span className="text-body-sm tabular-nums">
              {index + 1} / {total}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Lukk"
              className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Selve bildet (klikk utenfor lukker) */}
          <div
            className="relative flex-1"
            onClick={close}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <Image
              src={images[index]}
              alt={`${title} – bilde ${index + 1}`}
              fill
              sizes="100vw"
              priority
              className="object-contain p-4 lg:p-10"
            />
          </div>

          {/* Pil-navigasjon */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Forrige bilde"
                className="absolute left-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full text-canvas transition-colors hover:bg-white/10"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Neste bilde"
                className="absolute right-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full text-canvas transition-colors hover:bg-white/10"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  );
}

type LightboxImageProps = {
  index: number;
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Klikkbart bilde som åpner lightboxen. Faller tilbake til platsholder uten src. */
export function LightboxImage({
  index,
  src,
  alt,
  label,
  className,
  sizes,
  priority,
}: LightboxImageProps) {
  const ctx = useContext(LightboxContext);

  if (!src || !ctx) {
    return <Photo src={src} alt={alt} label={label} className={className} sizes={sizes} priority={priority} />;
  }

  return (
    <button
      type="button"
      onClick={() => ctx.openAt(index)}
      aria-label={`Åpne bilde i full størrelse: ${alt}`}
      className="group relative block w-full cursor-zoom-in"
    >
      <Photo src={src} alt={alt} className={className} sizes={sizes} priority={priority} />
      <span className="pointer-events-none absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-charcoal/55 text-canvas opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
          <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
    </button>
  );
}
