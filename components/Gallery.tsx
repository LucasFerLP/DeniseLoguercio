"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { artworks } from "@/lib/artworks";
import { RegistrationMark } from "./RegistrationMark";
import { Lightbox } from "./Lightbox";

const easeOutStrong = [0.23, 1, 0.32, 1] as const;

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="galeria"
      className="border-t border-paper-line py-6"
    >
      <div className="mx-auto max-w-[1800px] columns-1 gap-6 px-6 sm:columns-2 sm:px-10 md:columns-3 md:px-14 lg:columns-4">
        {artworks.map((artwork, index) => (
          <motion.figure
            key={artwork.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-80px" }}
            transition={{
              duration: 0.6,
              ease: easeOutStrong,
              delay: (index % 4) * 0.06,
            }}
            className="gallery-figure relative mb-6 break-inside-avoid overflow-hidden bg-paper"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Ver ${artwork.alt} en pantalla completa`}
              className="block w-full cursor-pointer"
            >
              <Image
                src={artwork.src}
                alt={artwork.alt}
                width={artwork.width}
                height={artwork.height}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="gallery-image block h-auto w-full"
              />
            </button>

            <div
              aria-hidden="true"
              className="gallery-mark pointer-events-none absolute inset-2.5"
            >
              <RegistrationMark className="absolute top-0 left-0 h-4 w-4 text-proof" />
              <span className="absolute right-0 bottom-0 font-mono text-[10px] tracking-[0.1em] text-[#f6f7f6] mix-blend-difference">
                N.{String(artwork.id).padStart(2, "0")}
              </span>
            </div>
          </motion.figure>
        ))}
      </div>

      <Lightbox
        artworks={artworks}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}
