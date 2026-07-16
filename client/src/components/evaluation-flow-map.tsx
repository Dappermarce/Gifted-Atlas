import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent } from "@/components/ui/card";

export default function EvaluationFlowMap() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const t = lang === 'es'
    ? {
        title: "Mapa de evaluación sin atajos",
        subtitle: "Una decisión responsable integra preguntas, mediciones, contexto y necesidades de apoyo",
        disclaimer: "Esquema orientativo — cada proceso es individualizado según el profesional y el contexto",
        steps: [
          {
            num: "01",
            label: "Pregunta inicial",
            desc: "La persona, su familia o la escuela plantean una necesidad: mayor reto, aprendizaje rápido, interés específico o una diferencia entre potencial y oportunidades.",
            color: "#3B82F6", bg: "#EFF6FF", border: "#BFDBFE",
            icon: "🔍",
          },
          {
            num: "02",
            label: "Plan de evaluación",
            desc: "Un profesional elige instrumentos adecuados para la edad, el idioma, el propósito y las normas disponibles. Ninguna marca resuelve por sí sola la pregunta.",
            color: "#8B5CF6", bg: "#F5F3FF", border: "#DDD6FE",
            icon: "🧩",
          },
          {
            num: "03",
            label: "Integración de evidencias",
            desc: "Se interpretan puntuaciones e intervalos junto con desempeño, historia educativa, observaciones, intereses y oportunidades de aprendizaje.",
            color: "#10B981", bg: "#ECFDF5", border: "#A7F3D0",
            icon: "📊",
          },
          {
            num: "04",
            label: "Fortalezas y barreras",
            desc: "Se distinguen dominios de fortaleza, necesidades de apoyo y posibles barreras. Una diferencia entre índices no es automáticamente un diagnóstico.",
            color: "#F59E0B", bg: "#FFFBEB", border: "#FDE68A",
            icon: "⚖️",
          },
          {
            num: "05",
            label: "Apoyo Educativo",
            desc: "Se acuerdan apoyos revisables: enriquecimiento, aceleración cuando corresponda, mentoría y coordinación. La respuesta educativa también aporta nueva evidencia.",
            color: "#6366F1", bg: "#EEF2FF", border: "#C7D2FE",
            icon: "🎯",
          },
        ],
        noteTitle: "Nota importante",
        noteText: "No existe una secuencia universal. La legislación, los instrumentos disponibles y la pregunta educativa cambian según el país y la institución.",
        source: "Síntesis educativa. Consulta la bibliografía y las políticas locales antes de utilizarla en una decisión real.",
      }
    : {
        title: "An assessment map without shortcuts",
        subtitle: "A responsible decision integrates questions, measurement, context, and support needs",
        disclaimer: "Guidance outline — each process is individualized according to the professional and context",
        steps: [
          {
            num: "01",
            label: "Initial question",
            desc: "The person, family, or school raises a need: greater challenge, rapid learning, a specific interest, or a gap between potential and opportunity.",
            color: "#3B82F6", bg: "#EFF6FF", border: "#BFDBFE",
            icon: "🔍",
          },
          {
            num: "02",
            label: "Assessment plan",
            desc: "A professional selects tools suited to age, language, purpose, and available norms. No test brand answers the whole question by itself.",
            color: "#8B5CF6", bg: "#F5F3FF", border: "#DDD6FE",
            icon: "🧩",
          },
          {
            num: "03",
            label: "Evidence integration",
            desc: "Scores and intervals are interpreted alongside performance, educational history, observations, interests, and learning opportunities.",
            color: "#10B981", bg: "#ECFDF5", border: "#A7F3D0",
            icon: "📊",
          },
          {
            num: "04",
            label: "Strengths and barriers",
            desc: "Areas of strength, support needs, and possible barriers are distinguished. A difference between indices is not automatically a diagnosis.",
            color: "#F59E0B", bg: "#FFFBEB", border: "#FDE68A",
            icon: "⚖️",
          },
          {
            num: "05",
            label: "Educational Support",
            desc: "Revisable supports are agreed: enrichment, acceleration when appropriate, mentoring, and coordination. Educational response also provides new evidence.",
            color: "#6366F1", bg: "#EEF2FF", border: "#C7D2FE",
            icon: "🎯",
          },
        ],
        noteTitle: "Important Note",
        noteText: "There is no universal sequence. Law, available instruments, and the educational question vary by country and institution.",
        source: "Educational synthesis. Consult the bibliography and local policies before using it in a real decision.",
      };

  return (
    <section
      id="mapa-evaluacion"
      ref={ref}
      className={`py-20 bg-gradient-to-br from-white via-indigo-50 to-purple-50 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-3">{t.subtitle}</p>
          <span className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs rounded-full px-4 py-1.5 font-medium">
            {t.disclaimer}
          </span>
        </div>

        {/* Vertical step flow */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-7 top-10 bottom-10 w-0.5"
            style={{ background: 'linear-gradient(to bottom, #3B82F6, #8B5CF6, #10B981, #F59E0B, #6366F1)' }}
            aria-hidden="true"
          />

          <div className="space-y-6">
            {t.steps.map((step, i) => (
              <div key={i} className="relative flex items-start gap-5">
                {/* Step circle */}
                <div
                  className="relative z-10 w-14 h-14 rounded-full flex flex-col items-center justify-center text-white font-bold flex-shrink-0 shadow-md"
                  style={{ backgroundColor: step.color }}
                >
                  <span className="text-lg leading-none">{step.icon}</span>
                </div>

                {/* Content card */}
                <Card
                  className="flex-1 shadow-sm hover:shadow-md transition-shadow border-2"
                  style={{ borderColor: step.border, backgroundColor: step.bg }}
                >
                  <CardContent className="p-5">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-xs font-bold tracking-widest" style={{ color: step.color }}>{step.num}</span>
                      <h3 className="text-lg font-bold text-gray-900">{step.label}</h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <p className="text-sm font-bold text-yellow-800 mb-1">⚠️ {t.noteTitle}</p>
          <p className="text-sm text-yellow-700">{t.noteText}</p>
        </div>

        <p className="text-xs text-gray-400 text-center mt-6 italic">{t.source}</p>
      </div>
    </section>
  );
}
