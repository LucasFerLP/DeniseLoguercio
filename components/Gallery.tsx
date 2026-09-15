"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { artworks } from "@/lib/artworks";
import { RegistrationMark } from "./RegistrationMark";

const easeOutStrong = [0.23, 1, 0.32, 1] as const;

export function Gallery() {
  return (
    <section
      id="obra"
      className="border-t border-paper-line px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6"
    >
      <div className="grid grid-flow-row-dense auto-rows-[26vw] grid-cols-2 gap-3 sm:auto-rows-[20vw] md:auto-rows-[15vw] md:grid-cols-4 md:gap-4">
        {artworks.map((artwork, index) => {
          const isLarge = artwork.size === "lg";
          return (
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
              className={`gallery-figure relative overflow-hidden bg-ink/5 ${
                isLarge ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
            >
              <Image
                src={artwork.src}
                alt={artwork.alt}
                fill
                sizes={isLarge ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                className="gallery-image object-cover"
              />

              <div
                aria-hidden="true"
                className="gallery-mark pointer-events-none absolute inset-2.5"
              >
                <RegistrationMark className="absolute top-0 left-0 h-4 w-4 text-proof" />
                <span className="absolute right-0 bottom-0 font-mono text-[10px] tracking-[0.1em] text-paper mix-blend-difference">
                  N.{String(artwork.id).padStart(2, "0")}
                </span>
              </div>
            </motion.figure>
          );
        })}
      </div>
    </section>
  );
}
