import { Carousel } from "./Carousel";

export function About() {
  return (
    <section
      id="sobre"
      className="border-t border-paper-line py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto flex max-w-[1800px] flex-col gap-10 px-6 sm:px-10 md:flex-row md:items-start md:justify-between md:gap-16 md:px-14">
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
            Sobre la Artista
          </h2>
          <p className="mt-6 max-w-md font-mono text-xs tracking-[0.1em] text-ink-soft uppercase sm:text-sm">
            Texto de presentación en preparación.
          </p>
        </div>

        <Carousel />
      </div>
    </section>
  );
}
