"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Heading } from "@/components/ui/Heading";
import { site } from "@/content/site";
import {
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "@/lib/contact";
import { sendContactEmail } from "@/app/kontakt/actions";

const startOptions = [
  "Så snart som mulig",
  "Om 1–3 måneder",
  "Om 3–6 måneder",
  "Vet ikke ennå",
];

const initial: ContactValues = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  startTime: "",
  message: "",
  consent: false,
  company: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initial);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  const update = (field: keyof ContactValues, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    const result = await sendContactEmail(values);
    if (result.ok) {
      setStatus("success");
    } else {
      setErrorMsg(result.error ?? "Noe gikk galt. Prøv igjen.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-lg border border-line bg-white p-8 lg:p-10">
        <span className="flex size-12 items-center justify-center rounded-full bg-clay-tint text-clay">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <Heading level={2} size="h3" as="h2">
          Takk for henvendelsen!
        </Heading>
        <p className="text-body text-warm-grey">
          Vi har mottatt meldingen din og tar kontakt {site.responseTime.toLowerCase()}
        </p>
        <p className="text-body-sm text-muted">
          Haster det? Ring oss på{" "}
          <a href={site.phoneHref} className="text-clay hover:text-clay-dark">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-6 rounded-lg border border-line bg-white p-6 lg:p-8"
    >
      <FormField label="Navn" htmlFor="name" required error={errors.name}>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          invalid={!!errors.name}
          onChange={(e) => update("name", e.target.value)}
        />
      </FormField>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField label="Telefon" htmlFor="phone" required error={errors.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            invalid={!!errors.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </FormField>

        <FormField label="E-post" htmlFor="email" required error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            invalid={!!errors.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          label="Hva gjelder det?"
          htmlFor="projectType"
          required
          error={errors.projectType}
        >
          <Select
            id="projectType"
            name="projectType"
            value={values.projectType}
            invalid={!!errors.projectType}
            onChange={(e) => update("projectType", e.target.value)}
          >
            <option value="">Velg prosjekttype</option>
            {site.services.map((s) => (
              <option key={s.slug} value={s.label}>
                {s.label}
              </option>
            ))}
            <option value="Annet">Annet</option>
          </Select>
        </FormField>

        <FormField label="Ønsket oppstart" htmlFor="startTime">
          <Select
            id="startTime"
            name="startTime"
            value={values.startTime}
            onChange={(e) => update("startTime", e.target.value)}
          >
            <option value="">Velg (valgfritt)</option>
            {startOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <FormField label="Melding" htmlFor="message" required error={errors.message}>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Fortell kort om prosjektet …"
          value={values.message}
          invalid={!!errors.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </FormField>

      {/* Honeypot – skjult for mennesker, fanger bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Firma (la stå tom)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Checkbox
          id="consent"
          name="consent"
          checked={values.consent}
          onChange={(e) => update("consent", e.target.checked)}
          label="Jeg godtar at opplysningene behandles for å besvare henvendelsen."
        />
        {errors.consent && (
          <p role="alert" className="text-caption text-error">
            {errors.consent}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-body-sm text-error">
          {errorMsg}
        </p>
      )}

      <Button type="submit" disabled={sending} className="w-full">
        {sending ? "Sender …" : "Send forespørsel"}
      </Button>
    </form>
  );
}
