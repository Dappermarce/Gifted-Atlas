import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Languages, Calculator, Box, Music, Zap, Users, User, Leaf } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function IntelligenceTheories() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const multipleIntelligences = lang === 'es'
    ? [
        { icon: Languages, name: "Lingüística", color: "text-primary", bgClass: "bg-blue-50" },
        { icon: Calculator, name: "Lógico-Matemática", color: "text-sky-blue", bgClass: "bg-sky-50" },
        { icon: Box, name: "Espacial", color: "text-green-500", bgClass: "bg-green-50" },
        { icon: Music, name: "Musical", color: "text-purple-500", bgClass: "bg-purple-50" },
        { icon: Zap, name: "Corporal-Kinestésica", color: "text-orange-500", bgClass: "bg-orange-50" },
        { icon: Users, name: "Interpersonal", color: "text-red-500", bgClass: "bg-red-50" },
        { icon: User, name: "Intrapersonal", color: "text-yellow-500", bgClass: "bg-yellow-50" },
        { icon: Leaf, name: "Naturalista", color: "text-indigo-500", bgClass: "bg-indigo-50" },
      ]
    : [
        { icon: Languages, name: "Linguistic", color: "text-primary", bgClass: "bg-blue-50" },
        { icon: Calculator, name: "Logical-Mathematical", color: "text-sky-blue", bgClass: "bg-sky-50" },
        { icon: Box, name: "Spatial", color: "text-green-500", bgClass: "bg-green-50" },
        { icon: Music, name: "Musical", color: "text-purple-500", bgClass: "bg-purple-50" },
        { icon: Zap, name: "Bodily-Kinesthetic", color: "text-orange-500", bgClass: "bg-orange-50" },
        { icon: Users, name: "Interpersonal", color: "text-red-500", bgClass: "bg-red-50" },
        { icon: User, name: "Intrapersonal", color: "text-yellow-500", bgClass: "bg-yellow-50" },
        { icon: Leaf, name: "Naturalist", color: "text-indigo-500", bgClass: "bg-indigo-50" },
      ];

  const t = lang === 'es'
    ? {
        title: "Teorías de la Inteligencia", subtitle: "Comprende las diferentes perspectivas sobre la naturaleza de la inteligencia humana",
        gardnerTitle: "Modelo de Inteligencias Múltiples", gardnerText: "Howard Gardner propuso distintos dominios de capacidad. Es un marco educativo influyente, pero no equivale a una taxonomía psicométrica validada ni debe usarse por sí solo para identificar altas capacidades.",
        sternbergTitle: "Teoría Triárquica (Sternberg)", analytic: "Analítica", analyticDesc: "Resolución de problemas académicos", creative: "Creativa", creativeDesc: "Generación de ideas innovadoras", practical: "Práctica", practicalDesc: "Aplicación en situaciones reales",
        golemanTitle: "Inteligencia Emocional (Goleman)", g1: "Autoconciencia emocional", g2: "Autorregulación emocional", g3: "Empatía y habilidades sociales", g4: "Motivación intrínseca",
        imgAlt: "Rompecabezas y juegos mentales representando las inteligencias múltiples", source: "Fuente:",
      }
    : {
        title: "Theories of Intelligence", subtitle: "Understand the different perspectives on the nature of human intelligence",
        gardnerTitle: "Multiple Intelligences Model", gardnerText: "Howard Gardner proposed distinct domains of ability. It is an influential educational framework, but it is not equivalent to a validated psychometric taxonomy and should not be used alone to identify giftedness.",
        sternbergTitle: "Triarchic Theory (Sternberg)", analytic: "Analytical", analyticDesc: "Academic problem solving", creative: "Creative", creativeDesc: "Generation of innovative ideas", practical: "Practical", practicalDesc: "Application in real situations",
        golemanTitle: "Emotional Intelligence (Goleman)", g1: "Emotional self-awareness", g2: "Emotional self-regulation", g3: "Empathy and social skills", g4: "Intrinsic motivation",
        imgAlt: "Puzzles and brain teasers representing multiple intelligences", source: "Source:",
      };

  return (
    <section ref={ref} className={`py-20 section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-dark-slate mb-6">{t.gardnerTitle}</h3>
              <p className="text-gray-600 mb-6">{t.gardnerText}</p>
              <div className="space-y-4">
                {multipleIntelligences.map((intelligence, index) => (
                  <div key={index} className={`flex items-center p-3 ${intelligence.bgClass} rounded-lg`}>
                    <intelligence.icon className={`${intelligence.color} w-6 h-6 mr-3`} />
                    <span className="font-medium">{intelligence.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-dark-slate mb-4">{t.sternbergTitle}</h4>
                <div className="space-y-3">
                  <div className="flex items-start"><div className="bg-primary w-3 h-3 rounded-full mt-2 mr-3"></div><div><p className="font-medium text-dark-slate">{t.analytic}</p><p className="text-gray-600 text-sm">{t.analyticDesc}</p></div></div>
                  <div className="flex items-start"><div className="bg-sky-blue w-3 h-3 rounded-full mt-2 mr-3"></div><div><p className="font-medium text-dark-slate">{t.creative}</p><p className="text-gray-600 text-sm">{t.creativeDesc}</p></div></div>
                  <div className="flex items-start"><div className="bg-green-500 w-3 h-3 rounded-full mt-2 mr-3"></div><div><p className="font-medium text-dark-slate">{t.practical}</p><p className="text-gray-600 text-sm">{t.practicalDesc}</p></div></div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-dark-slate mb-4">{t.golemanTitle}</h4>
                <div className="space-y-3">
                  {[t.g1, t.g2, t.g3, t.g4].map((item, i) => (<div key={i} className="flex items-center"><CheckCircle className="text-primary mr-3" size={16} /><span className="text-gray-700">{item}</span></div>))}
                </div>
              </CardContent>
            </Card>
            <img src="https://images.pexels.com/photos/7296640/pexels-photo-7296640.jpeg?auto=compress&cs=tinysrgb&w=800" alt={t.imgAlt} className="rounded-lg shadow-lg w-full h-48 object-cover" />
            <p className="text-xs text-gray-400">{t.source} <a href="https://www.pexels.com/photo/top-view-of-various-wooden-puzzles-and-brain-teasers-on-a-white-table-7296640/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Pexels</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
