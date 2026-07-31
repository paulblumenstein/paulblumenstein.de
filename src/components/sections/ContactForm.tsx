"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Field } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { sendContactMessage, type ContactState } from "@/app/(site)/kontakt/actions";

const initialState: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button variant="primary" tone="light" type="submit" disabled={pending}>
      {pending ? "Wird gesendet…" : "Absenden"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);

  return (
    <div className="flex max-w-sm flex-col gap-6">
      <Eyebrow>Oder per Formular</Eyebrow>
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
