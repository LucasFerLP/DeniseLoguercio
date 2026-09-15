"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { artworks } from "@/lib/artworks";
import { RegistrationMark } from "./RegistrationMark";
import { Lightbox } from "./Lightbox";

const easeOutStrong = [0.23, 1, 0.32, 1] as const;

const spanClasses: Record<string, string> = {
  lg: "col-span-2 row-span-2",
  tall: "col-span-1 row-span-2",
  sm: "col-span-1 row-span-1",
};

const sizesAttr: Record<string, string> = {
  lg: "(min-width: 768px) 50vw, 100vw",
  tall: "(min-width: 768px) 25vw, 50vw",
  sm: "(min-width: 768px) 25vw, 50vw",
};

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="galeria"
      className="border-t border-paper-line py-3 sm:py-4 md:py-6"
    >
      <div className="mx-auto grid max-w-[1800px] grid-flow-row-dense auto-rows-[26vw] grid-cols-2 gap-3 px-6 sm:auto-rows-[20vw] sm:px-10 md:auto-rows-[15vw] md:grid-cols-4 md:gap-4 md:px-14">
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
            className={`gallery-figure relative overflow-hidden bg-paper ${spanClasses[artwork.size]}`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Ver ${artwork.alt} en pantalla completa`}
              className="absolute inset-0 h-full w-full cursor-pointer p-2 sm:p-3"
            >
              <span className="relative block h-full w-full">
                <Image
                  src={artwork.src}
                  alt={artwork.alt}
                  fill
                  sizes={sizesAttr[artwork.size]}
                  className="gallery-image object-contain"
                />
              </span>
            </button>

            <div
              aria-hidden="true"
              className="gallery-mark pointer-events-none absolute inset-2.5"
            >
              <RegistrationMark className="absolute top-0 left-0 h-4 w-4 text-proof" />
              <span className="absolute right-0 bottom-0 font-mono text-[10px] tracking-[0.1em] text-ink-soft uppercase">
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
