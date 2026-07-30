import Link from "next/link";
import { Container } from "@/components/layout/Container";

const NAV_ITEMS = [
  { href: "/", label: "Start" },
  { href: "/referenzobjekte", label: "Referenzobjekte" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
];

const LEGAL_ITEMS = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-6 font-sans text-sm text-ink-muted">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex flex-wrap gap-5">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="text-ink-faint">
            © {new Date().getFullYear()} Paul Blumenstein
          </div>
        </div>
        <div className="flex flex-wrap gap-5 border-t border-line pt-6 text-xs text-ink-faint">
          {LEGAL_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink-muted">
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
