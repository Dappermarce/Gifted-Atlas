import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, BookOpen, Users, TrendingUp, Zap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function ScientificTimeline() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const milestones = lang === 'es'
    ? [
        { year: "1869", title: "Hereditary Genius", author: "Francis Galton", significance: "Primera investigación sistemática sobre genialidad", impact: "Fundación de la psicología diferencial", type: "foundation", details: "Análisis de 300 familias prominentes. Establece correlación familiar entre capacidad y herencia." },
        { year: "1905", title: "Test de Inteligencia Binet-Simon", author: "Alfred Binet & Théodore Simon", significance: "Primera medición cuantitativa de inteligencia", impact: "Nacimiento de la psicometría moderna", type: "breakthrough", details: "Edad mental vs. edad cronológica. Base del CI moderno." },
        { year: "1916", title: "Stanford-Binet Intelligence Scale", author: "Lewis Terman", significance: "Estandarización del CI para población americana", impact: "Establecimiento del CI = 100 como promedio", type: "standardization", details: "2,300 niños evaluados. Distribución normal confirmada. Terman introduce el término 'gifted'." },
        { year: "1921-1956", title: "Genetic Studies of Genius", author: "Lewis Terman", significance: "Estudio longitudinal temprano de estudiantes con CI alto", impact: "Datos históricos sobre trayectorias académicas y vitales", type: "longitudinal", details: "Siguió a 1.528 participantes seleccionados con criterios propios de su época. Fue influyente, pero su muestra y procedimientos limitan la generalización y reflejan sesgos históricos." },
        { year: "1926-1942", title: "Gifted Children & Children Above 180 IQ", author: "Leta Hollingworth", significance: "Pionera en educación del superdotado y perspectiva de género", impact: "Reconocimiento del superdotado como individuo con necesidades especiales", type: "foundation", details: "Estudió niños con CI >180. Acuñó el concepto de 'ajuste social del superdotado'. Primera en señalar la asincronía del desarrollo." },
        { year: "1950", title: "Structure of Intellect Model", author: "J.P. Guilford", significance: "Modelo multifactorial de inteligencia", impact: "Diversificación del concepto de superdotación", type: "theory", details: "120 factores cognitivos. Creatividad como componente clave. Distinción entre pensamiento convergente y divergente." },
        { year: "1971", title: "Study of Mathematically Precocious Youth", author: "Julian Stanley", significance: "Identificación temprana de talento matemático", impact: "Programas de aceleración académica", type: "program", details: "SAT-M a los 12 años. Seguimiento 50+ años." },
        { year: "1978", title: "Modelo de los Tres Anillos", author: "Joseph Renzulli", significance: "La superdotación como intersección de tres rasgos", impact: "Redefinición práctica del superdotado en el aula", type: "model", details: "Alta capacidad + Creatividad + Compromiso con la tarea. Fundamentó políticas educativas en EE.UU. y Europa. Distinción entre 'superdotado escolar' y 'superdotado productivo-creativo'." },
        { year: "1983", title: "Frames of Mind: Theory of Multiple Intelligences", author: "Howard Gardner", significance: "Reconceptualización radical de inteligencia", impact: "Ampliación del concepto de superdotación", type: "revolution", details: "8 tipos de inteligencia (lingüística, lógico-matemática, musical, espacial, corporal, interpersonal, intrapersonal, naturalista). Desafío al CI tradicional." },
        { year: "1985", title: "Triarchic Theory of Intelligence", author: "Robert Sternberg", significance: "Inteligencia analítica, creativa y práctica", impact: "Evaluación multidimensional del talento", type: "theory", details: "Componentes, experiencia y contexto. Inteligencia exitosa. Sternberg amplió el modelo a la 'teoría WICS' (sabiduría, inteligencia, creatividad y síntesis)." },
        { year: "1993", title: "Differentiated Model of Giftedness", author: "Françoys Gagné", significance: "Distinción entre dotación y talento", impact: "Marco conceptual para desarrollo del talento", type: "model", details: "Catalizadores intrapersonales y ambientales. DMGT 2.0." },
        { year: "2007", title: "Parieto-Frontal Integration Theory", author: "Jung & Haier", significance: "Modelo neurocognitivo de la inteligencia", impact: "Hipótesis de integración entre regiones parietales y frontales", type: "neuroscience", details: "Modelo P-FIT basado en convergencia de estudios de neuroimagen; describe tendencias grupales y no identifica altas capacidades a nivel individual." },
      ]
    : [
        { year: "1869", title: "Hereditary Genius", author: "Francis Galton", significance: "First systematic research on genius", impact: "Foundation of differential psychology", type: "foundation", details: "Analysis of 300 prominent families. Establishes family correlation between ability and heredity." },
        { year: "1905", title: "Binet-Simon Intelligence Test", author: "Alfred Binet & Théodore Simon", significance: "First quantitative measurement of intelligence", impact: "Birth of modern psychometrics", type: "breakthrough", details: "Mental age vs. chronological age. Basis of modern IQ." },
        { year: "1916", title: "Stanford-Binet Intelligence Scale", author: "Lewis Terman", significance: "Standardization of IQ for American population", impact: "Establishment of IQ = 100 as average", type: "standardization", details: "2,300 children evaluated. Normal distribution confirmed. Terman popularized the term 'gifted'." },
        { year: "1921-1956", title: "Genetic Studies of Genius", author: "Lewis Terman", significance: "Early longitudinal study of students with high IQ scores", impact: "Historical data on academic and life trajectories", type: "longitudinal", details: "It followed 1,528 participants selected using criteria of its time. It was influential, but its sample and procedures limit generalization and reflect historical biases." },
        { year: "1926-1942", title: "Gifted Children & Children Above 180 IQ", author: "Leta Hollingworth", significance: "Pioneer in gifted education and gender perspective", impact: "Recognition of the gifted as individuals with special needs", type: "foundation", details: "Studied children with IQ >180. Coined the concept of 'social adjustment of the gifted'. First to identify developmental asynchrony in gifted children." },
        { year: "1950", title: "Structure of Intellect Model", author: "J.P. Guilford", significance: "Multifactorial model of intelligence", impact: "Diversification of the concept of giftedness", type: "theory", details: "120 cognitive factors. Creativity as a key component. Distinction between convergent and divergent thinking." },
        { year: "1971", title: "Study of Mathematically Precocious Youth", author: "Julian Stanley", significance: "Early identification of mathematical talent", impact: "Academic acceleration programs", type: "program", details: "SAT-M at age 12. 50+ year follow-up." },
        { year: "1978", title: "Three-Ring Model of Giftedness", author: "Joseph Renzulli", significance: "Giftedness as the intersection of three traits", impact: "Practical redefinition of giftedness in the classroom", type: "model", details: "Above-average ability + Creativity + Task commitment. Underpinned educational policies across the US and Europe. Distinction between 'schoolhouse giftedness' and 'creative-productive giftedness'." },
        { year: "1983", title: "Frames of Mind: Theory of Multiple Intelligences", author: "Howard Gardner", significance: "Radical reconceptualization of intelligence", impact: "Expansion of the concept of giftedness", type: "revolution", details: "8 types of intelligence (linguistic, logical-mathematical, musical, spatial, bodily, interpersonal, intrapersonal, naturalistic). Challenge to traditional IQ." },
        { year: "1985", title: "Triarchic Theory of Intelligence", author: "Robert Sternberg", significance: "Analytical, creative, and practical intelligence", impact: "Multidimensional assessment of talent", type: "theory", details: "Components, experience, and context. Successful intelligence. Sternberg later expanded this into the WICS model (wisdom, intelligence, creativity, synthesis)." },
        { year: "1993", title: "Differentiated Model of Giftedness", author: "Françoys Gagné", significance: "Distinction between giftedness and talent", impact: "Conceptual framework for talent development", type: "model", details: "Intrapersonal and environmental catalysts. DMGT 2.0." },
        { year: "2007", title: "Parieto-Frontal Integration Theory", author: "Jung & Haier", significance: "Neurocognitive model of intelligence", impact: "Hypothesis integrating parietal and frontal regions", type: "neuroscience", details: "The P-FIT model draws on converging neuroimaging studies; it describes group trends and does not identify giftedness in an individual." },
      ];

  const labels = lang === 'es'
    ? { author: "Autor:", significance: "SIGNIFICANCIA", impact: "IMPACTO", details: "DETALLES", title: "Historia de la Investigación de la Superdotación", subtitle: "Selección no exhaustiva de hitos; algunas interpretaciones históricas siguen siendo debatidas", summaryTitle: "Resumen del recorrido histórico", years: "Años de investigación", milestones: "Hitos seleccionados", researchers: "Autores destacados", paradigms: "Marcos teóricos" }
    : { author: "Author:", significance: "SIGNIFICANCE", impact: "IMPACT", details: "DETAILS", title: "History of Giftedness Research", subtitle: "A non-exhaustive selection of milestones; some historical interpretations remain debated", summaryTitle: "Historical overview", years: "Years of research", milestones: "Selected milestones", researchers: "Featured authors", paradigms: "Theoretical frameworks" };

  type MilestoneType = 'foundation'|'breakthrough'|'standardization'|'longitudinal'|'theory'|'program'|'revolution'|'model'|'neuroscience'|'genetics'|'technology'|'epigenetics'|'intervention';

  const typeColors: Record<MilestoneType, string> = {
    foundation: "bg-blue-100 text-blue-800", breakthrough: "bg-green-100 text-green-800", standardization: "bg-purple-100 text-purple-800",
    longitudinal: "bg-orange-100 text-orange-800", theory: "bg-indigo-100 text-indigo-800", program: "bg-yellow-100 text-yellow-800",
    revolution: "bg-red-100 text-red-800", model: "bg-pink-100 text-pink-800", neuroscience: "bg-cyan-100 text-cyan-800",
    genetics: "bg-emerald-100 text-emerald-800", technology: "bg-violet-100 text-violet-800", epigenetics: "bg-teal-100 text-teal-800",
    intervention: "bg-lime-100 text-lime-800",
  };
  const typeIcons: Record<MilestoneType, typeof BookOpen> = {
    foundation: BookOpen, breakthrough: Zap, standardization: Award, longitudinal: TrendingUp, theory: Users, program: Calendar,
    revolution: TrendingUp, model: Users, neuroscience: Zap, genetics: BookOpen, technology: Zap, epigenetics: Award, intervention: TrendingUp,
  };
  const getTypeColor = (type: string) => typeColors[type as MilestoneType] ?? "bg-gray-100 text-gray-800";
  const getTypeIcon  = (type: string) => typeIcons[type as MilestoneType]  ?? BookOpen;

  return (
    <section id="cronologia-cientifica" ref={ref} className={`py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient-primary mb-4">{labels.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{labels.subtitle}</p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const IconComponent = getTypeIcon(milestone.type);
              return (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
                  <div className="ml-16 flex-1">
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="bg-blue-100 p-2 rounded-lg"><IconComponent className="text-blue-600" size={20} /></div>
                            <div>
                              <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                              <Badge className={getTypeColor(milestone.type)}>{milestone.type.charAt(0).toUpperCase() + milestone.type.slice(1)}</Badge>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-dark-slate mb-2">{milestone.title}</h3>
                        <p className="text-gray-600 mb-3"><strong>{labels.author}</strong> {milestone.author}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div><h4 className="font-semibold text-sm text-gray-600 mb-1">{labels.significance}</h4><p className="text-sm">{milestone.significance}</p></div>
                          <div><h4 className="font-semibold text-sm text-gray-600 mb-1">{labels.impact}</h4><p className="text-sm text-green-700">{milestone.impact}</p></div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-sm text-gray-600 mb-1">{labels.details}</h4>
                          <p className="text-sm text-gray-700">{milestone.details}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Card className="mt-16 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">{labels.summaryTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center"><div className="text-3xl font-bold text-blue-600 mb-2">+150</div><p className="text-sm text-gray-600">{labels.years}</p></div>
              <div className="text-center"><div className="text-3xl font-bold text-purple-600 mb-2">12</div><p className="text-sm text-gray-600">{labels.milestones}</p></div>
              <div className="text-center"><div className="text-3xl font-bold text-green-600 mb-2">12+</div><p className="text-sm text-gray-600">{labels.researchers}</p></div>
              <div className="text-center"><div className="text-3xl font-bold text-orange-600 mb-2">{lang === 'es' ? 'Varios' : 'Several'}</div><p className="text-sm text-gray-600">{labels.paradigms}</p></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
