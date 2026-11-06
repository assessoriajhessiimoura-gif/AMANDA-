import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import SocialButton from '@/components/SocialButton';

const NAV_ITEMS = [
  { href: '#quem-sou-eu', label: 'Quem sou eu' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#formacao', label: 'Formação' },
  { href: '#proposito', label: 'Propósito' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'border-b border-beige/70 bg-offwhite/95 shadow-soft backdrop-blur-md'
          : 'border-b border-transparent bg-offwhite/60 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#topo" onClick={closeMenu} className="group flex min-w-0 flex-col leading-none">
          <span className="font-serif text-xl font-semibold uppercase tracking-[0.12em] text-coffee transition-colors duration-300 group-hover:text-gold-deep sm:text-[1.7rem]">
            Amanda Lívia
          </span>
          <span className="mt-2 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-coffee sm:text-xs sm:tracking-[0.26em]">
            Estética Beauty
          </span>
          <span className="mt-1.5 font-sans text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-gold-deep sm:text-[0.68rem] sm:tracking-[0.28em]">
            Beauty • Estética • Autocuidado
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 xl:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative font-sans text-sm font-medium text-coffee/85 transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:text-coffee hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <SocialButton platform="instagram" variant="compact" />
          <SocialButton platform="whatsapp" variant="compact" />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="btn-press ml-1 flex h-11 w-11 items-center justify-center rounded-full border border-beige/80 bg-white/90 text-coffee xl:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Menu mobile"
          className="menu-panel border-t border-beige/70 bg-offwhite xl:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="border-b border-beige/50 last:border-b-0">
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between py-4 font-serif text-xl text-coffee transition-colors duration-300 hover:text-gold-deep"
                >
                  {item.label}
                  <span className="font-sans text-xs text-gold-deep" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
