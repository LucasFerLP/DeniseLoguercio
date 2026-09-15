"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { studioPhotos } from "@/lib/carousel";
import { ChevronIcon } from "./ChevronIcon";

const easeInOutStrong = [0.77, 0, 0.175, 1] as const;
const easeOutStrong = [0.23, 1, 0.32, 1] as const;
const SWIPE_THRESHOLD = 60;
const SWIPE_VELOCITY = 400;

export function Carousel() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const count = studioPhotos.length;
  const photo = studioPhotos[index];

  function go(next: number, dir: number) {
    setSlide([(next + count) % count, dir]);
  }

  function prev() {
    go(index - 1, -1);
  }

  function next() {
    go(index + 1, 1);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4, margin: "-80px" }}
      transition={{ duration: 0.6, ease: easeOutStrong }}
      className="relative w-full max-w-xs sm:max-w-sm"
      role="group"
      aria-roledescription="carousel"
      aria-label="Fotos del taller"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      <div className="border border-paper-line bg-mat p-3 shadow-sm sm:p-4">
        <div className="relative aspect-[4/5] overflow-hidden bg-paper-line/30">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={photo.id}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 28 : -28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -28 : 28 }}
              transition={{ duration: 0.45, ease: easeInOutStrong }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_e, info) => {
                if (info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -SWIPE_VELOCITY) {
                  next();
                } else if (info.offset.x > SWIPE_THRESHOLD || info.velocity.x > SWIPE_VELOCITY) {
                  prev();
                }
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 384px, 320px"
                priority={index === 0}
                draggable={false}
                className="pointer-events-none object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={prev}
            aria-label="Foto anterior"
            className="carousel-control absolute top-1/2 left-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-paper-line/50 bg-paper/30 text-ink backdrop-blur-md"
          >
            <ChevronIcon className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Foto siguiente"
            className="carousel-control absolute top-1/2 right-3 z-10 flex h-9 w-9 -translate-y-1/2 rotate-180 items-center justify-center border border-paper-line/50 bg-paper/30 text-ink backdrop-blur-md"
          >
            <ChevronIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <span className="mt-3 block text-right font-mono text-[10px] tracking-[0.2em] text-ink-soft uppercase">
        {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
      </span>
    </motion.div>
  );
}
