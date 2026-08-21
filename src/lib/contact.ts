// Delt kontaktskjema-logikk brukt av både klient (inline-validering) og
// server-action (re-validering før e-post sendes).

export type ContactValues = {
  name: string;
  phone: string;
  email: string;
  address: string;
  projectType: string;
  startTime: string;
  message: string;
  consent: boolean;
  /** Honeypot – skal alltid være tom. Fylles bare av bots. */
  company?: string;
};

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = "Skriv inn navnet ditt.";
  if (!/^[\d\s+()-]{8,}$/.test(values.phone.trim()))
    errors.phone = "Skriv inn et gyldig telefonnummer.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Skriv inn en gyldig e-postadresse.";
  if (!values.address.trim()) errors.address = "Skriv inn adressen prosjektet gjelder.";
  if (!values.projectType) errors.projectType = "Velg hva henvendelsen gjelder.";
  if (values.message.trim().length < 10)
    errors.message = "Fortell oss litt mer om prosjektet.";
  if (!values.consent) errors.consent = "Du må godta personvernvilkårene.";
  return errors;
}
