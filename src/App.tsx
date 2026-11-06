import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Specialties from '@/components/Specialties';
import Education from '@/components/Education';
import Purpose from '@/components/Purpose';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <a
        href="#quem-sou-eu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-coffee focus:px-5 focus:py-3 focus:text-offwhite"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Education />
        <Purpose />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
