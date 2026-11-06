import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function About() {
  return (
    <section id="quem-sou-eu" className="relative bg-offwhite py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:mx-0 lg:max-w-none">
              <div
                className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-rose-burnt/50 sm:-left-6 sm:-top-6"
                aria-hidden="true"
              />
              <div className="zoom-frame relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-champagne shadow-lift">
                <img
                  src="/images/amanda-perfil.jpeg"
                  alt="Amanda Lívia com um equipamento de estética, em seu consultório"
                  width={844}
                  height={1264}
                  loading="lazy"
                  className="zoom-photo h-full w-full object-cover object-[center_30%]"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-10 lg:col-span-7">
          <SectionHeading eyebrow="Sobre mim" title="Quem sou eu" />

          <Reveal delay={120}>
            <p className="font-serif text-3xl leading-[1.25] text-coffee sm:text-4xl">Prazer, eu sou Amanda Lívia!</p>
          </Reveal>

          <Reveal delay={160} className="flex flex-col gap-6 font-sans text-base leading-[1.75] text-coffee/85 sm:text-lg">
            <p>Tenho 25 anos, muitos sonhos, uma curiosidade que não cabe em uma só área e uma paixão enorme por aprender.</p>
            <p>
              Sou graduanda em Biomedicina, técnica de enfermagem, especialista em Skin Care e cuidados faciais, designer de
              sobrancelhas, massoterapeuta em DLM 360 corporal e também auxiliar de necropsia e tanatopraxia.
            </p>
            <p>
              Minha trajetória é construída por diferentes áreas do conhecimento, pelo cuidado com as pessoas, pela ciência e
              pela busca constante por evolução.
            </p>
            <p>
              Acredito que conhecimento nunca é demais. Gosto de explorar, aprender, me aperfeiçoar e descobrir novas
              possibilidades. Afinal, não nasci para caber em uma única versão de mim.
            </p>
            <p>
              Por trás de cada conquista existe dedicação, coragem, estudo e muita vontade de chegar ainda mais longe.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <blockquote className="relative overflow-hidden rounded-3xl bg-champagne/70 px-8 py-10 shadow-soft sm:px-12">
              <span
                className="absolute left-0 top-0 h-full w-1 bg-gold"
                aria-hidden="true"
              />
              <p className="font-serif text-2xl italic leading-[1.3] text-coffee sm:text-3xl">
                Minha história é feita de conhecimento, propósito e evolução.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
