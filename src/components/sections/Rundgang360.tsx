import Image from "next/image";

type Rundgang360Props = {
  href: string;
  previewImage: { src: string; alt: string };
};

/**
 * Vorschaubild statt Live-Embed: der Ogulo-Rundgang zeigt auf seinem eigenen
 * Start-Screen die volle Objektadresse — die soll erst nach dem Klick auf
 * ogulo.com sichtbar werden, nicht direkt auf dieser Seite.
 */
export function Rundgang360({ href, previewImage }: Rundgang360Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-video w-full overflow-hidden border border-line bg-paper-elevated"
    >
      <Image
        src={previewImage.src}
        alt={previewImage.alt}
        fill
        sizes="(min-width: 64rem) 60vw, 100vw"
        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] [filter:saturate(.86)_contrast(1.06)_brightness(.97)_sepia(.04)_hue-rotate(-6deg)]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(20,18,15,0.55)_100%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper/90 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
          <svg
            viewBox="0 0 24 24"
            className="ml-1 h-6 w-6 fill-ink"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
      <span className="absolute inset-x-0 bottom-0 p-6 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-abyss-ink">
        360°-Rundgang starten ↗
      </span>
    </a>
  );
}
