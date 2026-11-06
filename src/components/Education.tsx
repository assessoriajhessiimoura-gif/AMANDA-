import { CircleDashed } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface Qualification {
  title: string;
  inProgress?: boolean;
}

const QUALIFICATIONS: Qualification[] = [
  { title: 'Graduação em Biomedicina', inProgress: true },
  { title: 'Técnica de Enfermagem' },
  { title: 'Especialista em Skin Care e cuidados faciais' },
  { title: 'Designer de sobrancelhas' },
  { title: 'Massoterapeuta em DLM 360 corporal' },
  { title: 'Auxiliar de necropsia e tanatopraxia' },
  { title: 'Especialização em harmonização corporal', inProgress: true },
];

export default function Education() {
  return (
    <section id="formacao" className="bg-offwhite py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <SectionHeading eyebrow="Trajetória acadêmica" title="Conhecimento que transforma" />
          <Reveal delay={160}>
            <p className="mt-8 max-w-md font-sans text-base leading-[1.75] text-coffee/85 sm:text-lg">
              Cada formação soma novas perspectivas ao cuidado com as pessoas. O aprendizado contínuo faz parte da minha
              rotina e da minha evolução profissional.
            </p>
          </Reveal>
        </div>

        <ol className="relative flex flex-col gap-5 lg:col-span-7">
          <span
            className="absolute left-[1.35rem] top-6 bottom-6 w-px bg-gradient-to-b from-rose-burnt/60 via-beige to-transparent sm:left-[1.6rem]"
            aria-hidden="true"
          />
          {QUALIFICATIONS.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 90}>
                <div className="lift-card relative flex items-center gap-6 rounded-2xl border border-beige/60 bg-white px-6 py-6 shadow-soft sm:gap-8 sm:px-8">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-rose-burnt/50 bg-offwhite font-serif text-lg text-gold-deep sm:h-12 sm:w-12">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <h3 className="font-serif text-xl font-semibold leading-snug text-coffee sm:text-2xl">{item.title}</h3>
                    {item.inProgress && (
                      <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-champagne/70 px-3.5 py-1.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-coffee">
                        <CircleDashed className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                        Em andamento
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
