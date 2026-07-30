import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Field } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt für Immobilienfotografie, 360°-Rundgänge, Exposés und Social-Media-Content.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Kontakt aufnehmen"
        lede="Fotografie, Rundgang, Exposé oder Social-Media-Content — schreiben Sie mir."
      />
      <Section>
        <Container className="flex flex-col gap-16 lg:flex-row lg:gap-24">
          <div className="flex flex-col gap-6 font-serif">
            <div>
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Telefon
              </div>
              <a
                href="tel:+4915114468352"
                className="mt-1 block text-lg hover:text-accent"
              >
                +49 151 14468352
              </a>
            </div>
            <div>
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                E-Mail
              </div>
              <a
                href="mailto:blumenstein.paul@googlemail.com"
                className="mt-1 block text-lg hover:text-accent"
              >
                blumenstein.paul@googlemail.com
              </a>
            </div>
            <div>
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                Instagram
              </div>
              <a
                href="https://www.instagram.com/paulblumenstein"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-lg hover:text-accent"
              >
                @paulblumenstein
              </a>
            </div>
          </div>

          <div className="flex max-w-sm flex-col gap-6">
            <Eyebrow>Oder per Formular</Eyebrow>
            <Field label="Name" name="name" type="text" placeholder="Vor- und Nachname" />
            <Field label="E-Mail" name="email" type="email" placeholder="name@beispiel.de" />
            <Field
              label="Nachricht"
              name="message"
              multiline
              rows={4}
              placeholder="Ihr Anliegen"
            />
            <div>
              <Button variant="primary" tone="light" type="button">
                Absenden
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
