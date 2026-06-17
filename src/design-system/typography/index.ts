// Speiling av typografi-tokens fra src/app/globals.css (@theme).

export const fonts = {
  display: 'var(--font-fraunces), Georgia, "Times New Roman", serif',
  sans: "var(--font-hanken), ui-sans-serif, system-ui, sans-serif",
} as const;

// Token-navn matcher Tailwind text-utilities (text-display, text-h1 osv.)
export const typeScale = {
  display: { size: "clamp(2.75rem, 1.9rem + 3.8vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em", weight: 400 },
  h1: { size: "clamp(2.25rem, 1.7rem + 2.4vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em", weight: 400 },
  h2: { size: "clamp(1.75rem, 1.4rem + 1.55vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.01em", weight: 400 },
  h3: { size: "clamp(1.375rem, 1.24rem + 0.6vw, 1.625rem)", lineHeight: 1.2, letterSpacing: "-0.01em", weight: 500 },
  lead: { size: "clamp(1.125rem, 1.06rem + 0.3vw, 1.3125rem)", lineHeight: 1.55, weight: 400 },
  body: { size: "clamp(1.0625rem, 1.04rem + 0.1vw, 1.125rem)", lineHeight: 1.6, weight: 400 },
  bodySm: { size: "0.9375rem", lineHeight: 1.55, weight: 400 },
  label: { size: "0.8125rem", lineHeight: 1.2, letterSpacing: "0.12em", weight: 600 },
  caption: { size: "0.8125rem", lineHeight: 1.4, weight: 400 },
} as const;

export type TypeToken = keyof typeof typeScale;
