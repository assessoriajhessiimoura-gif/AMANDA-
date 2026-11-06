export default function Footer() {
  return (
    <footer className="border-t border-beige/70 bg-offwhite">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-12 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="font-serif text-xl font-semibold uppercase tracking-[0.14em] text-coffee">Amanda Lívia</p>
          <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-gold-deep">
            Beauty &amp; Aesthetic
          </p>
        </div>

        <p className="font-serif text-lg italic text-coffee/80">“Conhecimento, beleza e evolução.”</p>

        <p className="font-sans text-xs text-coffee/65">© 2026 Amanda Lívia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
