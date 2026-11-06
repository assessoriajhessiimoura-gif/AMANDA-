
import { useEffect, useRef, useState } from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface GalleryPhoto {
  src: string;
  alt: string;
}

const PHOTOS: GalleryPhoto[] = [
  {
    src: '/images/galeria/retrato-trono.jpeg',
    alt: 'Amanda Lívia sentada em uma poltrona dourada',
  },
  {
    src: '/images/amanda-capa.jpeg',
    alt: 'Amanda Lívia em seu espaço de estética',
  },
  {
    src: '/images/amanda-perfil.jpeg',
    alt: 'Amanda Lívia com aparelho de estética',
  },
  {
    src: '/images/galeria/cuidar-autoestima.jpeg',
    alt: 'Amanda Lívia com instrumentos de estética',
  },
];

export default function Gallery() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const move = (direction: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>('[data-card]');
    const distance = card ? card.offsetWidth + 24 : 350;

    const half = carousel.scrollWidth / 2;

    if (direction > 0 && carousel.scrollLeft + distance >= half) {
      carousel.scrollTo({ left: 0, behavior: 'instant' });
      return;
    }

    if (direction < 0 && carousel.scrollLeft <= 5) {
      carousel.scrollTo({ left: half, behavior: 'instant' });
    }

    carousel.scrollBy({
      left: direction * distance,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const half = carousel.scrollWidth / 2;

      if (carousel.scrollLeft >= half - 10) {
        carousel.scrollTo({ left: 0, behavior: 'instant' });
      } else {
        move(1);
      }
    }, 3200);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-offwhite py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Galeria"
          title="Um pouco do meu universo"
        />

        <div className="relative mt-16">
          <div
            ref={carouselRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setPaused(false);
              }
            }}
            className="gallery-carousel flex gap-6 overflow-x-auto pb-8"
            style={{
              scrollbarWidth: 'none',
              scrollBehavior: 'smooth',
            }}
          >
            {[...PHOTOS, ...PHOTOS].map((photo, index) => (
              <div
                key={`${photo.src}-${index}`}
                data-card
                className="w-[78vw] flex-none sm:w-[55vw] md:w-[40%] lg:w-[32%]"
              >
                <Reveal delay={(index % 4) * 100}>
                  <figure
                    className="group relative aspect-[4/5] overflow-hidden rounded-[28px] bg-champagne shadow-soft ring-1 ring-beige/50 transition-transform duration-700 hover:-translate-y-2"
                    style={{
                      animation: `galleryFloat ${4 + (index % 3)}s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`,
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      draggable={false}
                      className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-coffee/25 via-transparent to-transparent opacity-40 transition-opacity duration-700 group-hover:opacity-70"
                      aria-hidden="true"
                    />
                  </figure>
                </Reveal>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.3em] text-coffee/60">
              Um olhar sobre minha essência
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Fotos anteriores"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-beige text-coffee transition-all duration-300 hover:bg-coffee hover:text-white"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Próximas fotos"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-beige text-coffee transition-all duration-300 hover:bg-coffee hover:text-white"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes galleryFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        .gallery-carousel::-webkit-scrollbar {
          display: none;
        }

        .gallery-carousel {
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
        }

        .gallery-carousel > div {
          scroll-snap-align: start;
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-carousel figure {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
