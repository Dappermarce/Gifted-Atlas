import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Zap, Microscope, Atom, Target, Heart } from "lucide-react";
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

  const floatingElements = [
    { icon: Brain, delay: 0, size: 32, color: "text-blue-400" },
    { icon: Sparkles, delay: 1000, size: 24, color: "text-purple-400" },
    { icon: Zap, delay: 2000, size: 28, color: "text-yellow-400" },
    { icon: Microscope, delay: 1500, size: 30, color: "text-green-400" },
    { icon: Atom, delay: 500, size: 26, color: "text-red-400" },
    { icon: Target, delay: 2500, size: 28, color: "text-indigo-400" },
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
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden pt-14"
    >
      {/* Background neural network */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/40 to-black/80"></div>
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.2" />
              </radialGradient>
            </defs>
            <g className="animate-pulse">
              <line x1="200" y1="300" x2="400" y2="200" stroke="url(#nodeGradient)" strokeWidth="2" />
              <line x1="400" y1="200" x2="600" y2="300" stroke="url(#nodeGradient)" strokeWidth="2" />
              <line x1="600" y1="300" x2="800" y2="200" stroke="url(#nodeGradient)" strokeWidth="2" />
              <line x1="200" y1="500" x2="500" y2="400" stroke="url(#nodeGradient)" strokeWidth="2" />
              <line x1="500" y1="400" x2="800" y2="500" stroke="url(#nodeGradient)" strokeWidth="2" />
              <line x1="300" y1="700" x2="550" y2="600" stroke="url(#nodeGradient)" strokeWidth="1.5" />
              <line x1="550" y1="600" x2="750" y2="700" stroke="url(#nodeGradient)" strokeWidth="1.5" />
            </g>
            <circle cx="200" cy="300" r="8" fill="url(#nodeGradient)" className="animate-ping" />
            <circle cx="400" cy="200" r="6" fill="url(#nodeGradient)" className="animate-pulse" />
            <circle cx="600" cy="300" r="10" fill="url(#nodeGradient)" className="animate-ping" />
            <circle cx="800" cy="200" r="7" fill="url(#nodeGradient)" className="animate-pulse" />
            <circle cx="500" cy="400" r="9" fill="url(#nodeGradient)" className="animate-ping" />
            <circle cx="300" cy="700" r="6" fill="url(#nodeGradient)" className="animate-pulse" />
            <circle cx="750" cy="700" r="8" fill="url(#nodeGradient)" className="animate-ping" />
          </svg>
        </div>
      </div>

      {/* Floating icons */}
      {floatingElements.map((El, index) => (
        <div
          key={index}
          className={`hidden sm:block absolute animate-float opacity-20 ${El.color}`}
          style={{
            left: `${10 + index * 14}%`,
            top: `${18 + index * 10}%`,
            animationDelay: `${El.delay}ms`,
            animationDuration: `${4000 + index * 500}ms`,
          }}
        >
          <El.icon size={El.size} />
        </div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">

          {/* Rotating fact pill */}
          <div className="mb-6 flex items-center justify-center px-2">
            <div className="max-w-[92%] sm:max-w-2xl bg-blue-500/15 border border-blue-400/30 rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 backdrop-blur-sm">
              <p aria-live="polite" className="text-blue-200 text-xs sm:text-sm font-medium text-center leading-snug transition-all duration-700">
                {facts[currentFact]}
              </p>
            </div>
          </div>

          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-5 leading-tight px-1">
            {t.title1}
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-3 max-w-3xl mx-auto px-2 leading-relaxed">
            {t.subtitle}
          </p>

          {/* Emotional hook */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Heart size={14} className="text-rose-400 flex-shrink-0" />
            <p className="text-sm text-rose-300/80 italic">
              {t.emotionalNote}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button
              size="lg"
              onClick={() => scrollToSection('metodologia-investigacion')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-base font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Microscope className="mr-2" size={20} />
              {t.btn1}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('evaluacion-avanzada')}
              className="border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-indigo-700 px-8 py-4 text-base font-semibold rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <Brain className="mr-2" size={20} />
              {t.btn2}
            </Button>
          </div>

          {/* Stat cards — all 4 distinct, no overlap */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 hover:bg-white/15 transition-colors">
              <div className="text-2xl font-bold text-white">{t.stat1value}</div>
              <div className="text-xs font-semibold text-blue-200 mt-0.5">{t.stat1label}</div>
              <div className="text-xs text-blue-300/70 mt-0.5">{t.stat1sub}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 hover:bg-white/15 transition-colors">
              <div className="text-2xl font-bold text-white">{t.stat2value}</div>
              <div className="text-xs font-semibold text-purple-200 mt-0.5">{t.stat2label}</div>
              <div className="text-xs text-purple-300/70 mt-0.5">{t.stat2sub}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-green-500/20 hover:bg-white/15 transition-colors">
              <div className="text-2xl font-bold text-white">{t.stat3value}</div>
              <div className="text-xs font-semibold text-green-200 mt-0.5">{t.stat3label}</div>
              <div className="text-xs text-green-300/70 mt-0.5">{t.stat3sub}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20 hover:bg-white/15 transition-colors">
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
