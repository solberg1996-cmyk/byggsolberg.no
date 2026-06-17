"use server";

import { Resend } from "resend";
import { site } from "@/content/site";
import { validateContact, type ContactValues } from "@/lib/contact";

type Result = { ok: boolean; error?: string };

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendContactEmail(values: ContactValues): Promise<Result> {
  // Honeypot: hvis utfylt er det en bot – later som det gikk bra, sender ikke.
  if (values.company && values.company.trim() !== "") {
    return { ok: true };
  }

  // Re-valider på server (stol aldri kun på klienten)
  if (Object.keys(validateContact(values)).length > 0) {
    return { ok: false, error: "Skjemaet er ikke gyldig utfylt." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      error: "E-posttjenesten er ikke satt opp ennå. Ring oss gjerne i mellomtiden.",
    };
  }

  // Sender alltid fra/til det verifiserte domenet (post@byggsolberg.no),
  // uavhengig av miljøvariabler – unngår gammel test-avsender som henger igjen.
  const to = site.email;
  const from = `${site.shortName} <${site.email}>`;

  const rows: [string, string][] = [
    ["Navn", values.name],
    ["Telefon", values.phone],
    ["E-post", values.email],
    ["Gjelder", values.projectType],
    ["Ønsket oppstart", values.startTime || "—"],
  ];

  const html = `
    <h2>Ny henvendelse fra byggsolberg.no</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="font-weight:600">${k}</td><td>${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>
    <p style="margin-top:16px"><strong>Melding:</strong><br>${escapeHtml(values.message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to,
      replyTo: values.email,
      subject: `Ny henvendelse: ${values.projectType} – ${values.name}`,
      html,
    });
    if (error)
      return {
        ok: false,
        error: "Kunne ikke sende meldingen akkurat nå. Prøv igjen, eller ring oss.",
      };
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Kunne ikke sende meldingen akkurat nå. Prøv igjen, eller ring oss.",
    };
  }
}
