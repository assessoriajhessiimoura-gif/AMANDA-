import { Droplets, Eye, Hand, Sparkles, Syringe, Waves, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface Specialty {
  title: string;
  description: string;
  icon: LucideIcon;
}

const SPECIALTIES: Specialty[] = [
  {
    title: 'Skin Care e cuidados faciais',
    description: 'Atenção aos cuidados com a pele, bem-estar e valorização da beleza natural.',
    icon: Droplets,
  },
  {
    title: 'Estética facial',
    description: 'Cuidado, conhecimento e atenção aos detalhes da beleza facial.',
    icon: Sparkles,
  },
  {
    title: 'Massoterapia drenante',
    description: 'Técnicas de massoterapia voltadas ao cuidado e bem-estar corporal.',
    icon: Waves,
  },
  {
    title: 'DLM 360 corporal',
    description: 'Atuação em massoterapia DLM 360 corporal.',
    icon: Hand,
  },
  {
    title: 'Design de sobrancelhas',
    description: 'Valorização da expressão e harmonia do olhar.',
    icon: Eye,
  },
  {
    title: 'Harmonização corporal',
    description: 'Especialização em andamento.',
    icon: Syringe,
  },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="bg-champagne/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Atuação" title="Minhas especialidades" align="center" />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SPECIALTIES.map((specialty, index) => {
            const Icon = specialty.icon;
            const isAlternate = index % 2 === 1;
            const isInProgress = specialty.title === 'Harmonização corporal';

            return (
              <li key={specialty.title} className="h-full">
                <Reveal delay={(index % 3) * 110} className="h-full">
                  <article
                    className={`lift-card group relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 shadow-soft sm:p-10 ${
                      isAlternate
                        ? 'border-beige/60 bg-coffee text-offwhite'
                        : 'border-beige/60 bg-white text-coffee'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
                          isAlternate ? 'border-gold/50 bg-white/5 text-champagne' : 'border-rose-burnt/40 bg-champagne/50 text-gold-deep'
                        }`}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                      <span
                        className={`font-serif text-3xl italic ${isAlternate ? 'text-champagne/80' : 'text-beige'}`}
                        aria-hidden="true"
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <h3
                      className={`mt-8 font-serif text-2xl font-semibold uppercase leading-tight tracking-[0.03em] ${
                        isAlternate ? 'text-offwhite' : 'text-coffee'
                      }`}
                    >
                      {specialty.title}
                    </h3>

                    <span
                      className={`mt-4 h-px w-12 ${isAlternate ? 'bg-gold' : 'bg-gold/70'}`}
                      aria-hidden="true"
                    />

                    <p
                      className={`mt-5 font-sans text-base leading-[1.7] ${
                        isAlternate ? 'text-champagne' : 'text-coffee/85'
                      }`}
                    >
                      {specialty.description}
                    </p>

                    {isInProgress && (
                      <span className="mt-auto pt-8">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-champagne/60 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-coffee">
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-burnt" aria-hidden="true" />
                          Em andamento
                        </span>
                      </span>
                    )}
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
