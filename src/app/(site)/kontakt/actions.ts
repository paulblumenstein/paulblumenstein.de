"use server";

import { Resend } from "resend";
import { siteConfig } from "@/config/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return { status: "error", message: "Bitte alle Felder ausfüllen." };
  }

  const BEWERTUNGS_FELDER: [string, string][] = [
    ["Anlass", "anlass"],
    ["Objektart", "objektart"],
    ["Ort / PLZ", "ort"],
    ["Baujahr", "baujahr"],
    ["Wohnfläche", "wohnflaeche"],
    ["Grundstücksfläche", "grundstuecksflaeche"],
    ["Nutzung", "nutzung"],
  ];
  const bewertungsDetails = BEWERTUNGS_FELDER.map(([label, field]) => {
    const value = formData.get(field)?.toString().trim();
    return value ? `${label}: ${value}` : null;
  }).filter((line): line is string => line !== null);

  if (!process.env.RESEND_API_KEY) {
    return {
      status: "error",
      message: "Senden ist gerade nicht möglich. Bitte per E-Mail oder Telefon melden.",
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const details = bewertungsDetails.length
      ? `\n\n${bewertungsDetails.join("\n")}`
      : "";
    const { error } = await resend.emails.send({
      from: "Kontaktformular <onboarding@resend.dev>",
      to: siteConfig.email,
      replyTo: email,
      subject: bewertungsDetails.length
        ? `Neue Bewertungsanfrage von ${name}`
        : `Neue Anfrage von ${name}`,
      text: `${message}${details}\n\nVon: ${name} (${email})`,
    });

    if (error) {
      return {
        status: "error",
        message: "Senden fehlgeschlagen. Bitte per E-Mail oder Telefon melden.",
      };
    }

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Senden fehlgeschlagen. Bitte per E-Mail oder Telefon melden.",
    };
  }
}
