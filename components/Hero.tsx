"use client";

import { motion } from "motion/react";

const easeOutStrong = [0.23, 1, 0.32, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
};

const rise = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutStrong },
  },
};

const growLine = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: easeOutStrong },
  },
};

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="relative flex min-h-[92vh] flex-col justify-center px-6 py-28 sm:px-10 md:px-14"
    >
      <motion.h1
        variants={rise}
        className="max-w-5xl text-[13vw] leading-[0.94] font-semibold tracking-[-0.03em] text-ink sm:text-[9vw] md:text-[6rem]"
      >
        Denise
        <br />
        Lo Guercio
      </motion.h1>

      <motion.p
        variants={rise}
        className="mt-7 font-mono text-xs tracking-[0.14em] text-ink-soft uppercase sm:text-sm"
      >
        Portfolio de Arte — Grabados
      </motion.p>

      <motion.div
        variants={growLine}
        style={{ transformOrigin: "left" }}
        className="absolute right-6 bottom-14 left-6 h-px bg-ink/20 sm:right-10 sm:left-10 md:right-14 md:left-14"
      />
    </motion.section>
  );
}
