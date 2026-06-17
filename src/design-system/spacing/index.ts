// Speiling av spacing-, radius- og layout-tokens fra src/app/globals.css.
// 4px-basert skala (matcher Tailwinds standard spacing-utilities).

export const space = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "24px",
  6: "32px",
  7: "48px",
  8: "64px",
  9: "96px",
  10: "128px",
  11: "160px",
  12: "200px",
} as const;

// Vertikal seksjons-padding
export const sectionPadding = {
  mobile: "96px", // py-24
  desktop: "160px", // py-40
} as const;

export const radius = {
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "24px",
} as const;

export const shadow = {
  sm: "0 1px 2px rgba(28,27,25,0.04)",
  md: "0 4px 16px rgba(28,27,25,0.06)",
  lg: "0 12px 40px rgba(28,27,25,0.08)",
} as const;

// Breakpoints (px) – matcher Tailwind
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Container-bredder
export const container = {
  default: "1280px",
  wide: "1440px",
  narrow: "720px",
} as const;
