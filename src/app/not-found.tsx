import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-2 font-display text-4xl lg:text-5xl">
        Seite nicht gefunden
      </h1>
      <p className="mt-4 max-w-md font-serif text-ink-muted">
        Die aufgerufene Seite existiert nicht oder wurde verschoben.
      </p>
      <div className="mt-8">
        <Button variant="primary" tone="light" href="/">
          Zur Startseite
        </Button>
      </div>
    </Container>
  );
}
