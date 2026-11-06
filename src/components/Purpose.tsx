import Reveal from '@/components/Reveal';

export default function Purpose() {
  return (
    <section id="proposito" className="relative isolate overflow-hidden bg-coffee py-24 text-offwhite sm:py-32">
      <div
        className="pointer-events-none absolute -left-32 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <div className="order-2 flex flex-col gap-10 lg:order-1 lg:col-span-7">
          <Reveal className="flex flex-col gap-6">
            <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-champagne">Propósito</p>
            <h2 className="font-serif text-4xl font-medium uppercase leading-[1.1] tracking-[0.02em] text-offwhite sm:text-5xl lg:text-6xl">
              Mais que estética.
              <span className="mt-2 block text-champagne">Cuidado, conhecimento e propósito.</span>
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </Reveal>

          <Reveal delay={160}>
            <blockquote className="relative pl-8">
              <span className="absolute left-0 top-1 h-[calc(100%-0.25rem)] w-px bg-gold" aria-hidden="true" />
              <p className="font-serif text-2xl italic leading-[1.4] text-offwhite sm:text-3xl">
                “Meu propósito vai além da estética. Acredito que cuidar de alguém também é proporcionar autoestima,
                confiança, bem-estar e uma experiência de acolhimento.”
              </p>
            </blockquote>
          </Reveal>
        </div>

        <Reveal delay={200} className="order-1 lg:order-2 lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border border-rose-burnt/50 sm:-bottom-6 sm:-right-6"
              aria-hidden="true"
            />
            <div className="zoom-frame relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-coffee shadow-lift ring-1 ring-gold/30">
              <img
                src="/images/galeria/retrato-trono.jpeg"
                alt="Retrato profissional de Amanda Lívia sentada em uma poltrona dourada, com jaleco branco"
                width={876}
                height={1312}
                loading="lazy"
                className="zoom-photo h-full w-full object-cover object-[center_30%]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
