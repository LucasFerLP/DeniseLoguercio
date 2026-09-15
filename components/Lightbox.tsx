"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import type { Artwork } from "@/lib/artworks";
import { RegistrationMark } from "./RegistrationMark";
import { ChevronIcon } from "./ChevronIcon";

const easeOutStrong = [0.23, 1, 0.32, 1] as const;

export function Lightbox({
  artworks,
  index,
  onClose,
  onNavigate,
}: {
  artworks: Artwork[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const open = index !== null;
  const artwork = open ? artworks[index] : null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<Element | null>(null);

  useEffect(() => {
    if (!open) return;

    lastTrigger.current = document.activeElement;
    closeRef.current?.focus();

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index! + 1) % artworks.length);
      if (e.key === "ArrowLeft")
        onNavigate((index! - 1 + artworks.length) % artworks.length);
    }

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
      if (lastTrigger.current instanceof HTMLElement) {
        lastTrigger.current.focus();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <AnimatePresence>
      {open && artwork && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={artwork.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: easeOutStrong }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink p-6 sm:p-10"
          onClick={onClose}
        >
          <motion.div
            key={artwork.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: easeOutStrong }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={artwork.src}
              alt={artwork.alt}
              width={artwork.width}
              height={artwork.height}
              sizes="90vw"
              priority
              className="block max-h-[80vh] w-auto max-w-[88vw] object-contain sm:max-h-[85vh]"
            />
          </motion.div>

          <span className="pointer-events-none absolute bottom-6 left-6 font-mono text-xs tracking-[0.1em] text-paper/70 uppercase sm:bottom-10 sm:left-10">
            N.{String(artwork.id).padStart(2, "0")}
          </span>

          <button
            ref={closeRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Cerrar"
            className="lightbox-control absolute top-4 right-4 flex flex-col items-center gap-1 p-3 text-proof sm:top-8 sm:right-8"
          >
            <RegistrationMark className="h-7 w-7 sm:h-8 sm:w-8" />
            <span className="font-mono text-[10px] tracking-[0.1em] text-paper/70 uppercase">
              Cerrar — Esc
            </span>
          </button>

          {artworks.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index! - 1 + artworks.length) % artworks.length);
                }}
                aria-label="Obra anterior"
                className="lightbox-control absolute top-1/2 left-2 -translate-y-1/2 p-3 text-paper/70 sm:left-6"
              >
                <ChevronIcon className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index! + 1) % artworks.length);
                }}
                aria-label="Obra siguiente"
                className="lightbox-control absolute top-1/2 right-2 -translate-y-1/2 rotate-180 p-3 text-paper/70 sm:right-6"
              >
                <ChevronIcon className="h-6 w-6" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
