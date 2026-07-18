import { useState, useEffect } from "react";
import { Menu, X, Brain, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Detect active section
      const sectionIds = ['inicio', 'superdotacion', 'mapa-superdotacion', 'mapa-cerebro', 'mapa-evaluacion', 'metodologia-investigacion', 'cronologia-cientifica', 'psiquiatria', 'evaluacion-avanzada', 'recursos', 'mitos', 'preguntas-frecuentes', 'bibliografia'];
      let current = 'inicio';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Map sub-sections of the "Mapas" group back to the nav item ID
  const navActiveId = ['mapa-cerebro', 'mapa-evaluacion'].includes(activeSection)
    ? 'mapa-superdotacion'
    : activeSection;

  const navItems = lang === 'es'
    ? [
        { id: 'inicio', label: 'Inicio' },
        { id: 'superdotacion', label: 'Superdotación' },
        { id: 'mapa-superdotacion', label: 'Mapas' },
        { id: 'metodologia-investigacion', label: 'Investigación' },
        { id: 'cronologia-cientifica', label: 'Historia' },
        { id: 'psiquiatria', label: 'Psiquiatría' },
        { id: 'evaluacion-avanzada', label: 'Evaluación' },
        { id: 'recursos', label: 'Recursos' },
        { id: 'mitos', label: 'Mitos' },
        { id: 'bibliografia', label: 'Bibliografía' },
      ]
    : [
        { id: 'inicio', label: 'Home' },
        { id: 'superdotacion', label: 'Giftedness' },
        { id: 'mapa-superdotacion', label: 'Maps' },
        { id: 'metodologia-investigacion', label: 'Research' },
        { id: 'cronologia-cientifica', label: 'History' },
        { id: 'psiquiatria', label: 'Psychiatry' },
        { id: 'evaluacion-avanzada', label: 'Assessment' },
        { id: 'recursos', label: 'Resources' },
        { id: 'mitos', label: 'Myths' },
        { id: 'bibliografia', label: 'Bibliography' },
      ];

  const brandDescriptor = lang === 'es' ? 'Psicología de las Altas Capacidades' : 'Psychology of Giftedness';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <Brain
              className={`transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-blue-300'}`}
              size={24}
            />
            <span
              className={`text-sm font-semibold hidden lg:block transition-colors duration-300 ${
                scrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              Gifted Atlas<span className="hidden 2xl:inline font-normal opacity-80"> — {brandDescriptor}</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ id, label }) => {
              const isActive = navActiveId === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                    scrolled
                      ? isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-slate-600 hover:text-primary hover:bg-primary/5'
                      : isActive
                        ? 'text-white bg-white/20'
                        : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </button>
              );
            })}

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className={`ml-2 flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 border ${
                scrolled
                  ? 'bg-primary/10 hover:bg-primary/20 text-primary border-primary/30'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/30'
              }`}
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <span className={lang === 'es' ? 'font-bold' : 'opacity-50'}>ES</span>
              <span className="opacity-40 mx-0.5">|</span>
              <span className={lang === 'en' ? 'font-bold' : 'opacity-50'}>EN</span>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-all border ${
                scrolled
                  ? 'bg-primary/10 text-primary border-primary/30'
                  : 'bg-white/10 text-white border-white/30'
              }`}
            >
              <span className={lang === 'es' ? 'font-bold' : 'opacity-50'}>ES</span>
              <span className="opacity-40">|</span>
              <span className={lang === 'en' ? 'font-bold' : 'opacity-50'}>EN</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${scrolled ? 'text-slate-700 hover:text-primary' : 'text-white hover:text-blue-200'}`}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(({ id, label }) => {
              const isActive = navActiveId === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center justify-between w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'text-primary bg-primary/10 font-semibold'
                      : 'text-slate-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {label}
                  {isActive && <ChevronRight size={14} className="text-primary" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
