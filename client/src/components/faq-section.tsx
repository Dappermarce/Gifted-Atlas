import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function FaqSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = lang === 'es'
    ? [
        {
          question: "¿La superdotación es un diagnóstico clínico?",
          answer: "No en el sentido estricto del DSM-5 o CIE-11. La superdotación intelectual no figura como trastorno mental. Sin embargo, sí puede ser evaluada y documentada por un psicólogo o neuropsicólogo mediante pruebas estandarizadas. Es un perfil de desarrollo, no una patología. Algunos sistemas educativos sí la reconocen formalmente para garantizar apoyos específicos.",
        },
        {
          question: "¿Un CI alto garantiza el éxito académico o profesional?",
          answer: "No. Las puntuaciones cognitivas se asocian estadísticamente con algunos resultados, pero no contienen una biografía. Intereses, educación, salud, oportunidades, contexto y decisiones también participan. Estudios longitudinales como el SMPY muestran patrones de grupo y, al mismo tiempo, una variabilidad individual que impide convertirlos en pronósticos personales.",
        },
        {
          question: "¿Qué diferencia hay entre talento y superdotación?",
          answer: "Según el modelo de Gagné (DMGT), la dotación refiere a capacidades naturales excepcionales en dominios específicos (intelectual, creativo, socioafectivo). El talento es el resultado del desarrollo sistemático de esas capacidades mediante práctica deliberada, apoyo ambiental y factores intra-personales. En resumen: la dotación es el potencial; el talento es ese potencial desarrollado.",
        },
        {
          question: "¿La superdotación puede coexistir con TDAH, autismo u otras condiciones?",
          answer: "Sí. La doble excepcionalidad (2e) describe la coexistencia de altas capacidades con una discapacidad, una diferencia del aprendizaje o una condición del neurodesarrollo. Una fortaleza puede ocultar una necesidad y una dificultad puede ocultar una fortaleza. Su frecuencia cambia tanto entre definiciones y sistemas que no existe una cifra universal fiable.",
        },
        {
          question: "¿Cómo se evalúa la superdotación intelectual?",
          answer: "Depende de la pregunta y de la política educativa. Una evaluación responsable puede integrar pruebas cognitivas y académicas, observaciones, trabajos, entrevistas, historia escolar y oportunidades de aprendizaje. Algunos sistemas usan una puntuación cercana a dos desviaciones estándar como referencia; otros aplican modelos multidimensionales. El instrumento, sus normas, el intervalo de confianza y el contexto deben quedar documentados.",
        },
        {
          question: "¿La superdotación es hereditaria?",
          answer: "Las diferencias cognitivas reflejan interacciones complejas entre muchas variantes genéticas y muchos entornos. La heredabilidad es una propiedad estadística de una población en un contexto; no indica qué porcentaje de la capacidad de una persona está 'escrito' ni fija su futuro. No existe un gen único de las altas capacidades.",
        },
        {
          question: "¿Los niños superdotados necesitan apoyo emocional especial?",
          answer: "No por una etiqueta y no de una forma idéntica. Algunos estudiantes necesitan apoyo; otros no. Conviene observar bienestar, relaciones, barreras escolares y necesidades reales sin asumir que la intensidad emocional, el perfeccionismo o la asincronía son rasgos inevitables. El apoyo debe responder a la persona, no al estereotipo.",
        },
      ]
    : [
        {
          question: "Is giftedness a clinical diagnosis?",
          answer: "Not in the strict DSM-5 or ICD-11 sense. Intellectual giftedness is not listed as a mental disorder. However, it can be evaluated and documented by a psychologist or neuropsychologist through standardized testing. It is a developmental profile, not a pathology. Some educational systems do formally recognize it to ensure specific support.",
        },
        {
          question: "Does a high IQ guarantee academic or professional success?",
          answer: "No. Cognitive scores are statistically associated with some outcomes, but they do not contain a biography. Interests, education, health, opportunity, context, and decisions also contribute. Longitudinal studies such as SMPY show group patterns and, at the same time, enough individual variation to prevent personal forecasting.",
        },
        {
          question: "What is the difference between talent and giftedness?",
          answer: "According to Gagné's model (DMGT), giftedness refers to exceptional natural abilities in specific domains (intellectual, creative, socioaffective). Talent is the result of systematically developing those abilities through deliberate practice, environmental support, and intrapersonal factors. In short: giftedness is the potential; talent is that potential developed.",
        },
        {
          question: "Can giftedness coexist with ADHD, autism, or other conditions?",
          answer: "Yes. Twice exceptionality (2e) describes the coexistence of high ability with a disability, learning difference, or neurodevelopmental condition. A strength can hide a need, and a difficulty can hide a strength. Its frequency changes so much across definitions and systems that there is no reliable universal rate.",
        },
        {
          question: "How is intellectual giftedness assessed?",
          answer: "It depends on the question and educational policy. Responsible assessment may integrate cognitive and academic tests, observations, work samples, interviews, school history, and learning opportunities. Some systems use a score near two standard deviations as a reference; others use multidimensional models. The instrument, norms, confidence interval, and context should be documented.",
        },
        {
          question: "Is giftedness hereditary?",
          answer: "Cognitive differences reflect complex interactions among many genetic variants and many environments. Heritability is a population statistic in a particular context; it does not say what percentage of one person's ability is 'written' or fix their future. There is no single giftedness gene.",
        },
        {
          question: "Do gifted children need special emotional support?",
          answer: "Not because of a label and not in one identical way. Some students need support; others do not. Well-being, relationships, school barriers, and actual needs should be observed without assuming that emotional intensity, perfectionism, or asynchrony are inevitable traits. Support should respond to the person, not the stereotype.",
        },
      ];

  const labels = lang === 'es'
    ? { title: "Preguntas frecuentes", subtitle: "Respuestas que prefieren un matiz incómodo antes que una certeza inventada" }
    : { title: "Frequently asked questions", subtitle: "Answers that prefer an inconvenient nuance to an invented certainty" };

  return (
    <section id="preguntas-frecuentes" ref={ref} className={`py-20 bg-gradient-to-br from-sky-50 to-blue-50 section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="text-blue-600" size={32} />
          </div>
          <h2 className="text-4xl font-bold text-dark-slate mb-4">{labels.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{labels.subtitle}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-dark-slate text-base pr-4">{faq.question}</span>
                  {openIndex === index
                    ? <ChevronUp className="text-primary flex-shrink-0" size={20} />
                    : <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
