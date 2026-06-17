import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Slår sammen klassenavn og løser Tailwind-konflikter (siste vinner). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
