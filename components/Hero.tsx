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
    >
      <div className="mx-auto flex max-w-[1800px] flex-col px-6 pt-24 pb-10 sm:px-10 sm:pt-28 sm:pb-12 md:px-14 md:pt-32">
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
          className="mt-6 font-mono text-xs tracking-[0.14em] text-ink-soft uppercase sm:text-sm"
        >
          Portfolio de Arte — Grabados
        </motion.p>

        <motion.div
          variants={growLine}
          style={{ transformOrigin: "left" }}
          className="mt-8 h-px w-full bg-ink/20 sm:mt-10"
        />
      </div>
    </motion.section>
  );
}
