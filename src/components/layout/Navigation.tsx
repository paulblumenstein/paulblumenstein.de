"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  { href: "/", label: "Start" },
  { href: "/referenzobjekte", label: "Referenzobjekte" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
];

/**
 * Slim header that hides on scroll-down / reappears on scroll-up, plus a
 * fullscreen overlay menu — the navigation pattern decided in the
 * Art-Direction-Konzept (no mega-menu, content is lean enough for four items).
 */
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    lastY.current = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 100);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const triggerButton = menuButtonRef.current;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
      triggerButton?.focus();
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 flex items-center justify-between border-b border-line bg-paper/90 px-[1.1rem] py-4 backdrop-blur-sm transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:px-16",
          hidden && !open && "-translate-y-full",
        )}
      >
        <Link
          href="/"
          className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink"
        >
          Paul Blumenstein
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="overlay-nav"
          className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink"
        >
          {open ? "Schließen" : "Menü"}
        </button>
      </header>

      <nav
        id="overlay-nav"
        inert={!open}
        className={cn(
          "fixed inset-0 z-50 flex flex-col justify-center bg-abyss px-[1.1rem] py-8 lg:px-16",
          "transition-opacity duration-[400ms] ease-out",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ol className="flex flex-col gap-1">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item.href}
              className={cn(
                "font-display text-[clamp(2rem,9vw,3.6rem)] leading-[1.2] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
              )}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              <Link
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-abyss-ink hover:text-abyss-accent"
              >
                <span className="mr-3 align-super font-mono text-sm text-abyss-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
