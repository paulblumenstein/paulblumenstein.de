import Image from "next/image";
import { type GalleryImage } from "@/content/referenzobjekte";

/** Scales to any number of images — a growing case study just adds entries. */
export function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <div
          key={image.src}
          className="relative aspect-[4/3] border border-line bg-paper-elevated"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 64rem) 33vw, (min-width: 40rem) 50vw, 100vw"
            className="object-cover [filter:saturate(.86)_contrast(1.06)_brightness(.97)_sepia(.04)_hue-rotate(-6deg)]"
          />
        </div>
      ))}
    </div>
  );
}
