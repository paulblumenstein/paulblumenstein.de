"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Field, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { sendContactMessage, type ContactState } from "@/app/(site)/kontakt/actions";
import {
  ANLASS_OPTIONS,
  NUTZUNG_OPTIONS,
  OBJEKTART_OPTIONS,
} from "@/content/immobilienbewertung";

const initialState: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button variant="primary" tone="light" type="submit" disabled={pending}>
      {pending ? "Wird gesendet…" : "Absenden"}
    </Button>
  );
}

type ContactFormProps = {
  variant?: "default" | "bewertung";
  eyebrow?: string;
};

export function ContactForm({
  variant = "default",
  eyebrow = "Oder per Formular",
}: ContactFormProps) {
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const isBewertung = variant === "bewertung";

  return (
    <div className={isBewertung ? "flex max-w-xl flex-col gap-6" : "flex max-w-sm flex-col gap-6"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      {state.status === "success" ? (
        <p className="font-serif text-ink-muted">Danke — ich melde mich zurück.</p>
      ) : (
        <form action={formAction} className="flex flex-col gap-6">
          <Field label="Name" name="name" type="text" placeholder="Vor- und Nachname" required />
          <Field
            label="E-Mail"
            name="email"
            type="email"
            placeholder="name@beispiel.de"
            required
          />

          {isBewertung ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Select
                label="Wofür benötigen Sie die Bewertung?"
                name="anlass"
                placeholder="Bitte wählen"
                options={ANLASS_OPTIONS}
              />
              <Select
                label="Objektart"
                name="objektart"
                placeholder="Bitte wählen"
                options={OBJEKTART_OPTIONS}
              />
              <Field label="Ort / PLZ" name="ort" type="text" placeholder="z. B. 21682 Stade" />
              <Field label="Baujahr" name="baujahr" type="text" placeholder="z. B. 1998" />
              <Field
                label="Wohnfläche"
                name="wohnflaeche"
                type="text"
                placeholder="ca. m²"
              />
              <Field
                label="Grundstücksfläche"
                name="grundstuecksflaeche"
                type="text"
                placeholder="ca. m²"
              />
              <Select
                label="Vermietet oder selbst genutzt?"
                name="nutzung"
                placeholder="Bitte wählen"
                options={NUTZUNG_OPTIONS}
                className="sm:col-span-2"
              />
            </div>
          ) : null}

          <Field
            label="Nachricht"
            name="message"
            multiline
            rows={4}
            placeholder="Ihr Anliegen"
            required
          />
          {state.status === "error" ? (
            <p className="font-sans text-sm text-red-700">{state.message}</p>
          ) : null}
          <div>
            <SubmitButton />
          </div>
        </form>
      )}
    </div>
  );
}
