"use client";

import { motion } from "motion/react";

const links = [
  { href: "#galeria", label: "Galería" },
  { href: "#sobre", label: "Sobre la Artista" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-paper-line bg-paper"
    >
      <nav className="flex h-14 items-center justify-center gap-6 px-6 sm:h-16 sm:justify-end sm:gap-8 sm:px-10 md:px-14">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link font-mono text-[11px] tracking-[0.14em] text-ink uppercase sm:text-xs"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
