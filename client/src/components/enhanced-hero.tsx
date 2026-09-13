import { Button } from "@/components/ui/button";
import { Brain, Microscope } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";

export default function EnhancedHero() {
  const [currentFact, setCurrentFact] = useState(0);
  const { lang } = useLanguage();

  const facts = lang === 'es'
    ? [
        "La identificación depende del modelo, el contexto educativo y las oportunidades de evaluación",
        "La superdotación puede coexistir con TDAH, TEA o dislexia — es la 'doble excepcionalidad'",
        "Los estudios longitudinales muestran trayectorias diversas: el potencial también necesita oportunidades para desarrollarse",
        "El contexto familiar y educativo modula significativamente la expresión del potencial",
        "La variación entre culturas en los criterios de identificación es amplia y documentada",
      ]
    : [
        "Identification depends on the model, educational context, and access to assessment",
        "Giftedness can coexist with ADHD, ASD, or dyslexia — known as 'twice exceptionality'",
        "Longitudinal studies show diverse trajectories: potential also needs opportunities in order to develop",
        "Family and educational context significantly shapes how potential is expressed",
        "Variation across cultures in identification criteria is wide and well-documented",
      ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [facts.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const t = lang === 'es'
    ? {
        title1: "Altas capacidades:",
        title2: "mucho más que un número",
        subtitle: "Si una cifra bastara para explicar cómo funciona una mente, este atlas sería considerablemente más corto. Aquí reuní la evidencia, los modelos y sus límites para entender a la persona completa.",
        emotionalNote: "Muchas personas llegan buscando una respuesta simple. La ciencia casi nunca tiene esa cortesía, pero sí puede ofrecer respuestas mejores.",
        disclaimer: "Atlas educativo creado por Marcelo C. K. · evidencia visible, límites claros",
        btn1: "Seguir la evidencia",
        btn2: "Probar actividad educativa",
        stat1value: "≈2,3%",
        stat1label: "Referencia teórica",
        stat1sub: "si se usa +2 DS en una distribución normal",
        stat2value: "≈130",
        stat2label: "Un criterio posible",
        stat2sub: "no es una definición universal",
        stat3value: "2e",
        stat3label: "Doble excepcionalidad",
        stat3sub: "capacidad alta + discapacidad o trastorno",
        stat4value: "+150 años",
        stat4label: "De investigación",
        stat4sub: "desde Galton y Terman",
      }
    : {
        title1: "Giftedness:",
        title2: "far more than a number",
        subtitle: "If one score were enough to explain how a mind works, this atlas would be considerably shorter. I brought together the evidence, the models, and their limits to understand the whole person.",
        emotionalNote: "Many people arrive looking for a simple answer. Science rarely has that courtesy, but it can offer better answers.",
        disclaimer: "Educational atlas created by Marcelo C. K. · visible evidence, clear limits",
        btn1: "Follow the evidence",
        btn2: "Try the learning activity",
        stat1value: "≈2.3%",
        stat1label: "Theoretical reference",
        stat1sub: "when +2 SD in a normal distribution is used",
        stat2value: "≈130",
        stat2label: "One possible criterion",
        stat2sub: "not a universal definition",
        stat3value: "2e",
        stat3label: "Twice exceptionality",
        stat3sub: "high ability + disability or disorder",
        stat4value: "150+ years",
        stat4label: "Of research",
        stat4sub: "since Galton and Terman",
      };

  return (
    <section
      id="inicio"
      className="gifted-hero relative min-h-screen flex items-center justify-center overflow-hidden pt-14"
    >
      <div className="gifted-hero-grid" aria-hidden="true" />
      <div className="gifted-constellation" aria-hidden="true"><i /><i /><i /><i /><span /><span /><span /></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">

          {/* Rotating fact pill */}
          <div className="mb-6 flex items-center justify-center px-2">
            <div className="gifted-fact-pill max-w-[92%] sm:max-w-2xl rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 backdrop-blur-sm">
              <p aria-live="polite" className="text-blue-200 text-xs sm:text-sm font-medium text-center leading-snug transition-all duration-700">
                {facts[currentFact]}
              </p>
            </div>
          </div>

          {/* Main title */}
          <h1 className="gifted-hero-title text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-5 leading-tight px-1">
            {t.title1}
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="gifted-hero-subtitle text-base sm:text-lg md:text-xl mb-3 max-w-3xl mx-auto px-2 leading-relaxed">
            {t.subtitle}
          </p>

          {/* Emotional hook */}
          <div className="gifted-hero-note flex items-center justify-center gap-3 mb-8">
            <span aria-hidden="true" />
            <p className="text-sm italic">
              {t.emotionalNote}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button
              size="lg"
              onClick={() => scrollToSection('metodologia-investigacion')}
              className="gifted-primary-cta text-white px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300"
            >
              <Microscope className="mr-2" size={20} />
              {t.btn1}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('evaluacion-avanzada')}
              className="gifted-secondary-cta text-white px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              <Brain className="mr-2" size={20} />
              {t.btn2}
            </Button>
          </div>

          {/* Stat cards — all 4 distinct, no overlap */}
          <div className="gifted-hero-stats grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="gifted-stat-card backdrop-blur-sm rounded-xl p-4 transition-colors">
              <div className="text-2xl font-bold text-white">{t.stat1value}</div>
              <div className="text-xs font-semibold text-blue-200 mt-0.5">{t.stat1label}</div>
              <div className="text-xs text-blue-300/70 mt-0.5">{t.stat1sub}</div>
            </div>
            <div className="gifted-stat-card backdrop-blur-sm rounded-xl p-4 transition-colors">
              <div className="text-2xl font-bold text-white">{t.stat2value}</div>
              <div className="text-xs font-semibold text-purple-200 mt-0.5">{t.stat2label}</div>
              <div className="text-xs text-purple-300/70 mt-0.5">{t.stat2sub}</div>
            </div>
            <div className="gifted-stat-card backdrop-blur-sm rounded-xl p-4 transition-colors">
              <div className="text-2xl font-bold text-white">{t.stat3value}</div>
              <div className="text-xs font-semibold text-green-200 mt-0.5">{t.stat3label}</div>
              <div className="text-xs text-green-300/70 mt-0.5">{t.stat3sub}</div>
            </div>
            <div className="gifted-stat-card backdrop-blur-sm rounded-xl p-4 transition-colors">
              <div className="text-2xl font-bold text-white">{t.stat4value}</div>
              <div className="text-xs font-semibold text-yellow-200 mt-0.5">{t.stat4label}</div>
              <div className="text-xs text-yellow-300/70 mt-0.5">{t.stat4sub}</div>
            </div>
          </div>

          <p className="text-xs text-blue-300/50 mt-6 italic">{t.disclaimer}</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
