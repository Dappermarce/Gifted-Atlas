import { Card, CardContent } from "@/components/ui/card";
import QuizComponent from "./quiz-component";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function EvaluationSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const intelligenceTests = lang === 'es'
    ? [
        { name: "WAIS-IV (Adultos)", description: "Escala de Inteligencia de Wechsler para Adultos", ageRange: "16–90 años", duration: "90 min", color: "border-primary" },
        { name: "WISC-V (Niños)", description: "Escala de Inteligencia de Wechsler para Niños", ageRange: "6–16 años", duration: "65 min", color: "border-sky-blue" },
        { name: "Stanford-Binet 5", description: "Evaluación comprehensiva de inteligencia", ageRange: "2–85 años", duration: "45–75 min", color: "border-green-500" },
      ]
    : [
        { name: "WAIS-IV (Adults)", description: "Wechsler Adult Intelligence Scale", ageRange: "16–90 years", duration: "90 min", color: "border-primary" },
        { name: "WISC-V (Children)", description: "Wechsler Intelligence Scale for Children", ageRange: "6–16 years", duration: "65 min", color: "border-sky-blue" },
        { name: "Stanford-Binet 5", description: "Comprehensive intelligence assessment", ageRange: "2–85 years", duration: "45–75 min", color: "border-green-500" },
      ];

  const complementaryTests = lang === 'es'
    ? [
        { name: "Evaluación Creatividad", description: "Test de Pensamiento Creativo de Torrance", color: "border-purple-500" },
        { name: "Escalas de Renzulli", description: "Evaluación de características comportamentales", color: "border-orange-500" },
        { name: "Perfil Socioemocional", description: "Evaluación de aspectos emocionales y sociales", color: "border-red-500" },
      ]
    : [
        { name: "Creativity Assessment", description: "Torrance Tests of Creative Thinking", color: "border-purple-500" },
        { name: "Renzulli Scales", description: "Assessment of behavioral characteristics", color: "border-orange-500" },
        { name: "Socioemotional Profile", description: "Assessment of emotional and social aspects", color: "border-red-500" },
      ];

  const labels = lang === 'es'
    ? { title: "Evaluar no es sumar cinco pistas", subtitle: "Una identificación responsable combina instrumentos apropiados, historia educativa, dominios, contexto y necesidades. La ruta interactiva de abajo solo organiza la lectura.", testsTitle: "Pruebas de Inteligencia", compTitle: "Evaluación Complementaria", age: "Edad orientativa según manual:", duration: "Duración variable:" }
    : { title: "Assessment is not the sum of five clues", subtitle: "Responsible identification combines appropriate instruments, educational history, domains, context, and needs. The interactive route below only organizes your reading.", testsTitle: "Intelligence Tests", compTitle: "Complementary Assessment", age: "Indicative age by manual:", duration: "Variable duration:" };

  return (
    <section id="evaluacion" ref={ref} className={`py-20 section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">{labels.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{labels.subtitle}</p>
        </div>
        <QuizComponent />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-dark-slate mb-4">{labels.testsTitle}</h3>
              <div className="space-y-4">
                {intelligenceTests.map((test, index) => (
                  <div key={index} className={`border-l-4 ${test.color} pl-4`}>
                    <h4 className="font-semibold text-dark-slate">{test.name}</h4>
                    <p className="text-gray-600 text-sm">{test.description}</p>
                    <p className="text-gray-500 text-xs mt-1">{labels.age} {test.ageRange} | {labels.duration} {test.duration}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-dark-slate mb-4">{labels.compTitle}</h3>
              <div className="space-y-4">
                {complementaryTests.map((test, index) => (
                  <div key={index} className={`border-l-4 ${test.color} pl-4`}>
                    <h4 className="font-semibold text-dark-slate">{test.name}</h4>
                    <p className="text-gray-600 text-sm">{test.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
