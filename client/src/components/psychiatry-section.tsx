import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Users, Brain, BookOpen } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function PsychiatrySection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const t = lang === 'es'
    ? {
        title: "Salud, bienestar y doble excepcionalidad",
        subtitle: "Cómo pueden coexistir las altas capacidades con necesidades educativas, del desarrollo o de salud mental",
        quickSummaryTitle: "Resumen rápido",
        quickSummary: "La doble excepcionalidad describe la coexistencia de altas capacidades con una discapacidad, una diferencia del aprendizaje o una condición del neurodesarrollo. Su frecuencia depende de las definiciones, la muestra y el sistema de identificación; no existe una cifra universal. Las necesidades y fortalezas deben evaluarse de forma individual.",
        dualTitle: "Doble Excepcionalidad",
        dualText: "La doble excepcionalidad no es un diagnóstico único. Es una descripción educativa que ayuda a reconocer simultáneamente fortalezas sobresalientes y barreras que pueden ocultarse entre sí.",
        conditionsTitle: "Condiciones que pueden coexistir:",
        prevalenceLabel: "Evidencia:",
        interventionTitle: "Apoyo coordinado",
        interventionText: "La planificación debe basarse en la evaluación individual y puede combinar:",
        interventions: ["Evaluación con varias fuentes e instrumentos apropiados", "Adaptaciones y enriquecimiento educativo", "Apoyo socioemocional basado en necesidades", "Atención de profesionales habilitados cuando corresponda"],
        challengesTitle: "Desafíos Socioemocionales",
        source: "Fuente:",
      }
    : {
        title: "Health, wellbeing and twice exceptionality",
        subtitle: "How high ability may coexist with educational, developmental or mental-health needs",
        quickSummaryTitle: "Quick summary",
        quickSummary: "Twice exceptionality describes the coexistence of high ability with a disability, learning difference or neurodevelopmental condition. Its frequency depends on definitions, samples and identification systems; there is no universal rate. Needs and strengths should be assessed individually.",
        dualTitle: "Twice Exceptionality",
        dualText: "Twice exceptionality is not a single diagnosis. It is an educational description that helps recognize outstanding strengths and barriers that may mask one another.",
        conditionsTitle: "Conditions that may coexist:",
        prevalenceLabel: "Evidence:",
        interventionTitle: "Coordinated support",
        interventionText: "Planning should be based on individual assessment and may combine:",
        interventions: ["Assessment using multiple sources and appropriate instruments", "Educational accommodations and enrichment", "Socioemotional support based on need", "Care from licensed professionals when appropriate"],
        challengesTitle: "Socioemotional Challenges",
        source: "Source:",
      };

  const commonConditions = lang === 'es'
    ? [
        { name: "TDAH (Trastorno por Déficit de Atención e Hiperactividad)", prevalence: "la estimación varía según muestra y criterios" },
        { name: "Trastorno del Espectro Autista (TEA)", prevalence: "la estimación varía según muestra y criterios" },
        { name: "Dislexia y otras diferencias del aprendizaje", prevalence: "la estimación varía según muestra y criterios" },
        { name: "Necesidades de salud mental", prevalence: "no son un rasgo definitorio de las altas capacidades" },
      ]
    : [
        { name: "ADHD (Attention Deficit Hyperactivity Disorder)", prevalence: "estimates vary by sample and criteria" },
        { name: "Autism Spectrum Disorder (ASD)", prevalence: "estimates vary by sample and criteria" },
        { name: "Dyslexia and other learning differences", prevalence: "estimates vary by sample and criteria" },
        { name: "Mental-health needs", prevalence: "not a defining feature of giftedness" },
      ];

  const socioEmotionalChallenges = lang === 'es'
    ? [
        { icon: AlertTriangle, title: "Perfeccionismo", description: "Expectativas excesivamente altas que pueden generar ansiedad y procrastinación.", color: "text-red-500", bgClass: "bg-red-100" },
        { icon: Users, title: "Aislamiento Social", description: "Dificultades para relacionarse con pares de su edad cronológica.", color: "text-orange-500", bgClass: "bg-orange-100" },
        { icon: Brain, title: "Sobreexcitabilidad", description: "Intensidad emocional, sensorial e intelectual elevada según Dabrowski.", color: "text-purple-500", bgClass: "bg-purple-100" },
      ]
    : [
        { icon: AlertTriangle, title: "Perfectionism", description: "Excessively high expectations that can generate anxiety and procrastination.", color: "text-red-500", bgClass: "bg-red-100" },
        { icon: Users, title: "Social Isolation", description: "Difficulties relating to chronological-age peers.", color: "text-orange-500", bgClass: "bg-orange-100" },
        { icon: Brain, title: "Overexcitability", description: "Elevated emotional, sensory, and intellectual intensity according to Dabrowski.", color: "text-purple-500", bgClass: "bg-purple-100" },
      ];

  return (
    <section id="psiquiatria" ref={ref} className={`py-20 bg-light-gray section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Quick summary */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-5 flex gap-4">
            <BookOpen className="text-purple-500 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm font-semibold text-purple-700 mb-1">{t.quickSummaryTitle}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{t.quickSummary}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-dark-slate">{t.dualTitle}</h3>
            <p className="text-gray-700 leading-relaxed">{t.dualText}</p>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-4">{t.conditionsTitle}</h4>
                <div className="space-y-3">
                  {commonConditions.map((condition, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary w-2 h-2 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="font-medium">{condition.name}</p>
                        <p className="text-sm text-gray-600">{t.prevalenceLabel} {condition.prevalence}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <img src="https://images.pexels.com/photos/8560681/pexels-photo-8560681.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Therapist taking notes during a psychological consultation session" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            <p className="text-xs text-gray-400">
              {t.source}{" "}
              <a href="https://www.pexels.com/photo/therapist-takes-notes-during-a-counseling-session-with-a-thoughtful-client-8560681/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Pexels</a>
            </p>
            <Card className="bg-sky-blue/5 border-sky-blue/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-sky-blue mb-4">{t.interventionTitle}</h4>
                <p className="text-gray-700 mb-4">{t.interventionText}</p>
                <ul className="space-y-2 text-gray-700">
                  {t.interventions.map((item, i) => (
                    <li key={i} className="flex items-start"><div className="bg-sky-blue w-2 h-2 rounded-full mt-2 mr-3"></div>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6">{t.challengesTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socioEmotionalChallenges.map((challenge, index) => (
                <div key={index} className="text-center p-6 rounded-xl border border-gray-100">
                  <div className={`${challenge.bgClass} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <challenge.icon className={challenge.color} size={28} />
                  </div>
                  <h4 className="font-semibold text-dark-slate mb-2">{challenge.title}</h4>
                  <p className="text-gray-600 text-sm">{challenge.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
