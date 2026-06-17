// Samlet inngang til designsystemets TS-speiling.
// Sannhetskilden er src/app/globals.css (@theme). Disse verdiene er for
// bruk i JS/TS der CSS-variabler ikke er praktisk.

export { colors, type ColorToken } from "../colors";
export { fonts, typeScale, type TypeToken } from "../typography";
export { space, sectionPadding, radius, shadow, breakpoints, container } from "../spacing";
