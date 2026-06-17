// Speiling av fargetokens fra src/app/globals.css (@theme).
// CSS er sannhetskilden – dette er for bruk i TS/JS (swatches, og-bilder,
// structured data o.l.). Hold i synk med globals.css.

export const colors = {
  // Nøytraler
  canvas: "#FAF9F6",
  white: "#FFFFFF",
  sand: "#F2EFE9",
  line: "#E7E2D8",
  // Tekst
  charcoal: "#1C1B19",
  warmGrey: "#6B6760",
  muted: "#9A958C",
  // Signatur (leire)
  clay: "#9C6B4A",
  clayDark: "#7E5538",
  clayTint: "#F0E7DF",
  // Funksjonelt
  success: "#4A6B4A",
  error: "#A6473C",
} as const;

export type ColorToken = keyof typeof colors;
