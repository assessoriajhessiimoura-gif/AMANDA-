import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import SocialButton from '@/components/SocialButton';

export default function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-champagne/50 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-[min(90%,64rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-rose-burnt/50 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-5 text-center sm:px-8">
        <SectionHeading eyebrow="Contato" title="Vamos conversar?" align="center" />

        <Reveal delay={140}>
          <p className="max-w-2xl font-serif text-2xl italic leading-[1.4] text-coffee/90 sm:text-3xl">
            “Será um prazer compartilhar conhecimento, construir conexões e criar novas oportunidades.”
          </p>
        </Reveal>

        <Reveal delay={240} className="flex w-full flex-col items-stretch gap-5 sm:w-auto sm:flex-row sm:justify-center">
          <SocialButton platform="instagram" variant="large" />
          <SocialButton platform="whatsapp" variant="large" />
        </Reveal>
      </div>
    </section>
  );
}
