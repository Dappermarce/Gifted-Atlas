import { useState } from "react";
import type { ElementType } from "react";
import { BookOpen, Brain, Compass, GraduationCap, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface RouteOption {
  id: string;
  title: string;
  description: string;
  section: string;
  action: string;
  icon: ElementType;
}

export default function QuizComponent() {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);

  const t = lang === "es"
    ? {
        title: "Elige tu ruta de lectura",
        subtitle: "Esto no intenta adivinar quién eres a partir de cinco respuestas —internet ya tiene suficientes cuestionarios haciendo exactamente eso. Elige la pregunta que te trajo hasta aquí y el atlas te llevará a la sección más útil.",
        notice: "Actividad de orientación educativa. No calcula CI, perfil cognitivo ni probabilidad de altas capacidades.",
        selectedLabel: "Por qué esta ruta puede ayudarte",
        options: [
          { id: "concept", title: "Quiero entender qué son las altas capacidades", description: "Empieza por definiciones, modelos y por qué no existe un criterio universal.", section: "superdotacion", action: "Ir a conceptos y modelos", icon: BookOpen },
          { id: "assessment", title: "Quiero saber cómo se realiza una identificación", description: "Revisa instrumentos, intervalos de confianza, contexto y decisiones multimétodo.", section: "evaluacion-avanzada", action: "Ir a evaluación responsable", icon: Scale },
          { id: "education", title: "Busco estrategias educativas", description: "Explora desarrollo del talento, oportunidades, aceleración y apoyos ajustados a necesidades.", section: "mapa-superdotacion", action: "Ir a desarrollo del talento", icon: GraduationCap },
          { id: "brain", title: "Me interesa lo que dice la neurociencia", description: "Distingue hallazgos grupales, modelos de redes y límites de la neuroimagen individual.", section: "neurociencia", action: "Ir a evidencia neurológica", icon: Brain },
          { id: "sources", title: "Necesito fuentes para estudiar o enseñar", description: "Consulta metodología, bibliografía, DOI y organizaciones profesionales.", section: "bibliografia", action: "Ir a bibliografía", icon: Compass },
        ] as RouteOption[],
      }
    : {
        title: "Choose your reading route",
        subtitle: "This does not try to guess who you are from five answers—the internet already has enough quizzes doing exactly that. Choose the question that brought you here and the atlas will take you to the most useful section.",
        notice: "Educational navigation activity. It does not calculate IQ, cognitive profile, or likelihood of giftedness.",
        selectedLabel: "Why this route may help",
        options: [
          { id: "concept", title: "I want to understand what giftedness means", description: "Begin with definitions, models, and why there is no universal criterion.", section: "superdotacion", action: "Go to concepts and models", icon: BookOpen },
          { id: "assessment", title: "I want to know how identification works", description: "Review instruments, confidence intervals, context, and multi-method decisions.", section: "evaluacion-avanzada", action: "Go to responsible assessment", icon: Scale },
          { id: "education", title: "I am looking for educational strategies", description: "Explore talent development, opportunity, acceleration, and support matched to needs.", section: "mapa-superdotacion", action: "Go to talent development", icon: GraduationCap },
          { id: "brain", title: "I am interested in the neuroscience", description: "Distinguish group findings, network models, and the limits of individual neuroimaging.", section: "neurociencia", action: "Go to neurological evidence", icon: Brain },
          { id: "sources", title: "I need sources for study or teaching", description: "Consult methodology, bibliography, DOI links, and professional organizations.", section: "bibliografia", action: "Go to bibliography", icon: Compass },
        ] as RouteOption[],
      };

  const selectedOption = t.options.find((option) => option.id === selected);

  const goToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-6 sm:p-8 shadow-sm mb-16">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{t.title}</h3>
        <p className="mt-4 text-slate-600 leading-7">{t.subtitle}</p>
        <p className="mt-4 inline-block rounded-full bg-amber-50 border border-amber-200 px-4 py-2 text-xs font-semibold text-amber-800">{t.notice}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {t.options.map((option) => {
          const Icon = option.icon;
          const active = option.id === selected;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={active}
              onClick={() => setSelected(option.id)}
              className={`text-left rounded-2xl border p-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 ${active ? "border-indigo-500 bg-indigo-50" : "border-slate-200 bg-white hover:border-indigo-300"}`}
            >
              <Icon aria-hidden="true" className="text-indigo-600 mb-3" size={24} />
              <span className="block font-bold text-slate-900">{option.title}</span>
              <span className="block mt-2 text-sm leading-6 text-slate-600">{option.description}</span>
            </button>
          );
        })}
      </div>

      {selectedOption && (
        <div className="mt-6 rounded-2xl bg-slate-900 text-white p-6" aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">{t.selectedLabel}</p>
          <p className="mt-2 text-slate-200 leading-7">{selectedOption.description}</p>
          <button
            type="button"
            onClick={() => goToSection(selectedOption.section)}
            className="mt-4 rounded-xl bg-indigo-500 px-5 py-3 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {selectedOption.action}
          </button>
        </div>
      )}
    </div>
  );
}
