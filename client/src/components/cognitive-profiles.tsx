import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Languages, Eye, Palette } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function CognitiveProfiles() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const cognitiveProfiles = lang === 'es'
    ? [
        { icon: Calculator, title: "Fortalezas Matemático-Lógicas", label: "Ejemplo de dominio", characteristics: ["Razonamiento abstracto","Detección de patrones","Resolución de problemas","Memoria de trabajo según la tarea"], neuralCorrelates: "redes distribuidas frontoparietales; los resultados dependen de la tarea", assessments: ["Matrices","Raven APM","Tareas espaciales"], iconBg: "bg-blue-500/20", iconColor: "text-blue-500", dotClass: "bg-blue-500", bgColor: "bg-blue-50" },
        { icon: Languages, title: "Fortalezas Verbales", label: "Ejemplo de dominio", characteristics: ["Vocabulario y comprensión","Razonamiento verbal","Producción lingüística","Procesamiento semántico"], neuralCorrelates: "redes lingüísticas distribuidas; no existe un único «centro verbal»", assessments: ["Comprensión verbal","PPVT","Instrumentos lingüísticos"], iconBg: "bg-green-500/20", iconColor: "text-green-500", dotClass: "bg-green-500", bgColor: "bg-green-50" },
        { icon: Eye, title: "Fortalezas Visoespaciales", label: "Ejemplo de dominio", characteristics: ["Rotación mental","Representación visual","Navegación espacial","Integración visomotora"], neuralCorrelates: "redes occipitales y parietales que varían según la tarea y la experiencia", assessments: ["Diseño con bloques","Rotación mental","Tareas visoespaciales"], iconBg: "bg-purple-500/20", iconColor: "text-purple-500", dotClass: "bg-purple-500", bgColor: "bg-purple-50" },
        { icon: Palette, title: "Fortalezas Creativas", label: "Ejemplo de dominio", characteristics: ["Pensamiento divergente","Originalidad contextual","Flexibilidad cognitiva","Asociaciones remotas"], neuralCorrelates: "interacción entre redes por defecto, ejecutivas y de saliencia", assessments: ["TTCT","RAT","Usos alternativos"], iconBg: "bg-orange-500/20", iconColor: "text-orange-500", dotClass: "bg-orange-500", bgColor: "bg-orange-50" },
      ]
    : [
        { icon: Calculator, title: "Mathematical-Logical Strengths", label: "Domain example", characteristics: ["Abstract reasoning","Pattern detection","Problem solving","Task-dependent working memory"], neuralCorrelates: "distributed frontoparietal networks; results depend on the task", assessments: ["Matrices","Raven APM","Spatial tasks"], iconBg: "bg-blue-500/20", iconColor: "text-blue-500", dotClass: "bg-blue-500", bgColor: "bg-blue-50" },
        { icon: Languages, title: "Verbal Strengths", label: "Domain example", characteristics: ["Vocabulary and comprehension","Verbal reasoning","Language production","Semantic processing"], neuralCorrelates: "distributed language networks; there is no single ‘verbal center’", assessments: ["Verbal comprehension","PPVT","Language instruments"], iconBg: "bg-green-500/20", iconColor: "text-green-500", dotClass: "bg-green-500", bgColor: "bg-green-50" },
        { icon: Eye, title: "Visuospatial Strengths", label: "Domain example", characteristics: ["Mental rotation","Visual representation","Spatial navigation","Visuomotor integration"], neuralCorrelates: "occipital and parietal networks that vary by task and experience", assessments: ["Block design","Mental rotation","Visuospatial tasks"], iconBg: "bg-purple-500/20", iconColor: "text-purple-500", dotClass: "bg-purple-500", bgColor: "bg-purple-50" },
        { icon: Palette, title: "Creative Strengths", label: "Domain example", characteristics: ["Divergent thinking","Contextual originality","Cognitive flexibility","Remote associations"], neuralCorrelates: "interaction among default-mode, executive, and salience networks", assessments: ["TTCT","RAT","Alternative uses"], iconBg: "bg-orange-500/20", iconColor: "text-orange-500", dotClass: "bg-orange-500", bgColor: "bg-orange-50" },
      ];

  const executiveFunctions = lang === 'es'
    ? [
        { function: "Memoria de trabajo", description: "Puede ser alta, promedio o constituir una debilidad relativa dentro del mismo perfil." },
        { function: "Flexibilidad cognitiva", description: "Varía según la tarea, el desarrollo, la experiencia y posibles condiciones coexistentes." },
        { function: "Control inhibitorio", description: "No se deduce del CI; debe evaluarse con instrumentos apropiados y contexto cotidiano." },
        { function: "Velocidad de procesamiento", description: "Puede diferir ampliamente del razonamiento y no define por sí sola la capacidad intelectual." },
      ]
    : [
        { function: "Working memory", description: "It may be high, average, or a relative weakness within the same profile." },
        { function: "Cognitive flexibility", description: "It varies by task, development, experience, and possible co-occurring conditions." },
        { function: "Inhibitory control", description: "It cannot be inferred from IQ; it requires appropriate instruments and everyday context." },
        { function: "Processing speed", description: "It may differ widely from reasoning and does not define intellectual ability on its own." },
      ];

  const developmentalAsynchrony = lang === 'es'
    ? [
        { domain: "Desarrollo Intelectual", description: "Posible adelanto respecto a la edad cronológica", impact: "Alto rendimiento académico, posible aburrimiento en clase típica" },
        { domain: "Desarrollo Emocional", description: "Posible desfase con respecto al desarrollo intelectual", impact: "Dificultades en regulación emocional, intensidad afectiva" },
        { domain: "Desarrollo Social", description: "Variabilidad individual significativa", impact: "Preferencia por compañeros con intereses similares o mayores" },
      ]
    : [
        { domain: "Intellectual Development", description: "Possible advancement relative to chronological age", impact: "High academic performance, possible boredom in typical class" },
        { domain: "Emotional Development", description: "Possible gap relative to intellectual development", impact: "Difficulties in emotional regulation, affective intensity" },
        { domain: "Social Development", description: "Significant individual variability", impact: "Preference for peers with similar or older interests" },
      ];

  const labels = lang === 'es'
    ? { title: "Perfiles Cognitivos", subtitle: "Ejemplos educativos de fortalezas por dominios; no son tipos universales de persona", note: "Las capacidades forman perfiles heterogéneos y deben interpretarse con pruebas válidas, intervalos de confianza y contexto", chars: "Posibles fortalezas:", neural: "Redes relacionadas en la literatura:", execTitle: "Funciones ejecutivas — variabilidad individual", execNote: "No existe una puntuación ejecutiva típica de la superdotación ni una conversión directa entre estas funciones y el CI.", asyncTitle: "Asincronía del Desarrollo", asyncSub: "Puede existir un desarrollo desigual entre dominios; no es inevitable ni permite predecir la madurez emocional de una persona", important: "Importante:", importantText: "La asincronía varía considerablemente entre individuos. No es una característica universal ni sus manifestaciones son predecibles con precisión numérica." }
    : { title: "Cognitive Profiles", subtitle: "Educational examples of domain strengths; they are not universal person types", note: "Abilities form heterogeneous profiles and should be interpreted with valid tests, confidence intervals, and context", chars: "Possible strengths:", neural: "Related networks in the literature:", execTitle: "Executive functions — individual variability", execNote: "There is no executive-function score typical of giftedness and no direct conversion between these functions and IQ.", asyncTitle: "Developmental Asynchrony", asyncSub: "Uneven development across domains may occur; it is not inevitable and cannot predict a person's emotional maturity", important: "Important:", importantText: "Asynchrony varies considerably between individuals. It is not a universal characteristic, and its manifestations are not numerically predictable." };

  return (
    <section ref={ref} className={`py-20 bg-gradient-to-br from-purple-50 to-indigo-50 section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">{labels.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{labels.subtitle}</p>
          <p className="text-sm text-gray-400 mt-2 italic">{labels.note}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cognitiveProfiles.map((profile, index) => (
            <Card key={index} className={`card-hover border-0 shadow-lg ${profile.bgColor}`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${profile.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}><profile.icon className={profile.iconColor} size={24} /></div>
                  <div><h3 className="text-xl font-semibold text-gray-900">{profile.title}</h3><Badge variant="outline" className="text-xs mt-1">{profile.label}</Badge></div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{labels.chars}</h4>
                  <ul className="space-y-1">{profile.characteristics.map((char, idx) => (<li key={idx} className="flex items-start text-sm text-gray-700"><div className={`${profile.dotClass} w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0`}></div>{char}</li>))}</ul>
                </div>
                <div className="border-t pt-3">
                  <p className="text-xs text-gray-600"><strong>{labels.neural}</strong> {profile.neuralCorrelates}</p>
                  <div className="mt-2 flex flex-wrap gap-1">{profile.assessments.map((a, idx) => (<Badge key={idx} variant="secondary" className="text-xs">{a}</Badge>))}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="shadow-lg mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">{labels.execTitle}</h3>
            <p className="text-center text-gray-500 text-sm mb-6 italic">{labels.execNote}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {executiveFunctions.map((func, index) => (
                <div key={index} className="rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{func.function}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{func.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{labels.asyncTitle}</h3>
            <p className="text-gray-600 text-center mb-8">{labels.asyncSub}</p>
            <div className="space-y-4">
              {developmentalAsynchrony.map((domain, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div><h4 className="font-semibold text-gray-900">{domain.domain}</h4></div>
                    <div><p className="text-sm text-gray-600">{domain.description}</p></div>
                    <div><p className="text-sm text-gray-600 italic">{domain.impact}</p></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg"><p className="text-sm text-yellow-800"><strong>{labels.important}</strong> {labels.importantText}</p></div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
