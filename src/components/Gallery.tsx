import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface GalleryPhoto {
  src: string;
  alt: string;
  layout: string;
  aspect: string;
  position: string;
}

const PHOTOS: GalleryPhoto[] = [
  {
    src: '/images/galeria/retrato-trono.jpeg',
    alt: 'Retrato profissional de Amanda Lívia sentada em uma poltrona dourada, com jaleco branco',
    layout: 'md:col-span-5',
    aspect: 'aspect-[3/4]',
    position: 'object-[center_30%]',
  },
  {
    src: '/images/amanda-capa.jpeg',
    alt: 'Amanda Lívia sorrindo, segurando equipamento de estética em seu espaço de trabalho',
    layout: 'md:col-span-7 md:mt-16',
    aspect: 'aspect-[5/4]',
    position: 'object-[center_25%]',
  },
  {
    src: '/images/amanda-perfil.jpeg',
    alt: 'Amanda Lívia segurando um aparelho de estética, de jaleco branco',
    layout: 'md:col-span-4',
    aspect: 'aspect-[3/4]',
    position: 'object-[center_35%]',
  },
  {
    src: '/images/galeria/cuidar-autoestima.jpeg',
    alt: 'Amanda Lívia com instrumentos de estética, com a frase Cuidar também é autoestima ao fundo',
    layout: 'md:col-span-8 md:-mt-10',
    aspect: 'aspect-[16/11]',
    position: 'object-[center_25%]',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Galeria" title="Um pouco do meu universo" />

        <ul className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-12 md:gap-8">
          {PHOTOS.map((photo, index) => (
            <li key={photo.src} className={photo.layout}>
              <Reveal delay={index * 100}>
                <figure className="zoom-frame group relative overflow-hidden rounded-3xl bg-champagne shadow-soft ring-1 ring-beige/50">
                  <div className={`${photo.aspect} overflow-hidden`}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className={`zoom-photo h-full w-full object-cover ${photo.position}`}
                    />
                  </div>
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-coffee/25 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
