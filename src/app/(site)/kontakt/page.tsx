import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt für die Vermarktung Ihrer Immobilie in Stade und Umgebung.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Schreiben Sie mir."
        lede="Am schnellsten erreichen Sie mich telefonisch oder per E-Mail."
      />
      <Section>
        <Container>
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
        </Container>
      </Section>
    </>
  );
}
