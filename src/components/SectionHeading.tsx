import Reveal from '@/components/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export default function SectionHeading({ eyebrow, title, align = 'left', tone = 'light' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  const titleColor = tone === 'dark' ? 'text-offwhite' : 'text-coffee';
  const eyebrowColor = tone === 'dark' ? 'text-champagne' : 'text-gold-deep';
  const ruleClass = align === 'center' ? 'mx-auto' : '';

  return (
    <Reveal className={`flex flex-col gap-5 ${alignClass}`}>
      <p className={`font-sans text-[0.72rem] font-semibold uppercase tracking-[0.32em] ${eyebrowColor}`}>{eyebrow}</p>
      <h2 className={`font-serif text-4xl font-medium uppercase leading-[1.1] tracking-[0.02em] sm:text-5xl lg:text-6xl ${titleColor}`}>
        {title}
      </h2>
      <span className={`gold-rule ${ruleClass}`} aria-hidden="true" />
    </Reveal>
  );
}
