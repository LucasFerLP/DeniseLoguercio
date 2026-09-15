export function Footer() {
  return (
    <footer
      id="contacto"
      className="border-t border-paper-line px-6 py-8 sm:px-10 md:px-14"
    >
      <div className="flex flex-col items-start justify-between gap-4 font-mono text-xs tracking-[0.08em] text-ink-soft uppercase sm:flex-row sm:items-center">
        <span>Denise Lo Guercio — Grabados, {new Date().getFullYear()}</span>
        <a
          href="https://instagram.com/deniseloguercio_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-paper-line underline-offset-4 transition-[transform,color] duration-150 ease-out hover:decoration-proof hover:text-proof active:scale-[0.97]"
        >
          @deniseloguercio_
        </a>
      </div>
    </footer>
  );
}
