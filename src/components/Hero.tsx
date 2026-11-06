import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden bg-offwhite pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36">
      <div
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[38rem] w-[38rem] rounded-full bg-champagne/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-beige/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="order-2 flex flex-col items-start lg:order-1 lg:col-span-6">
          <Reveal>
            <p className="eyebrow">Mídia Kit</p>
          </Reveal>

          <Reveal delay={120} className="w-full">
            <h1 className="hero-title mt-6 font-serif font-medium uppercase leading-[0.9] tracking-[0.02em] text-coffee">
              Amanda
              <br />
              Lívia
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 font-sans text-sm font-semibold uppercase tracking-[0.36em] text-gold-deep">
              Beauty &amp; Aesthetic
            </p>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-8 max-w-md font-serif text-2xl italic leading-[1.35] text-coffee/90 sm:text-3xl">
              “Beleza, conhecimento e cuidado em cada detalhe.”
            </p>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
              <a
                href="#quem-sou-eu"
                className="btn-press inline-flex items-center justify-center rounded-full bg-coffee px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-offwhite shadow-soft hover:bg-coffee/90"
              >
                Conhecer minha história
              </a>
              <a
                href="#contato"
                className="btn-press inline-flex items-center justify-center rounded-full border border-coffee/30 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-coffee hover:border-gold hover:bg-champagne/50"
              >
                Vamos conversar
              </a>
            </div>
          </Reveal>

        </div>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute -inset-4 translate-x-5 translate-y-5 rounded-[2.25rem] border border-rose-burnt/50 sm:-inset-6 sm:translate-x-8 sm:translate-y-8"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-champagne shadow-lift">
              <img
                src="/images/amanda-capa.jpeg"
                alt="Amanda Lívia sorrindo, de jaleco branco, em ambiente de estética"
                width={1025}
                height={1121}
                fetchPriority="high"
                className="hero-photo h-full w-full object-cover object-[center_22%]"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-coffee/35 to-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="absolute -bottom-6 left-6 flex items-center gap-4 rounded-2xl border border-beige/70 bg-offwhite/95 px-6 py-4 shadow-soft backdrop-blur-sm sm:left-10">
              <span className="h-12 w-px bg-rose-burnt" aria-hidden="true" />
              <p className="max-w-[15rem] font-serif text-base font-semibold uppercase leading-snug tracking-[0.08em] text-coffee sm:text-lg">
                ESTETICISTA|
                Cuidando da sua autoestima!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
