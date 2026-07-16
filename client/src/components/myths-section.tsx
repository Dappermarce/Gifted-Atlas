import { Card, CardContent } from "@/components/ui/card";
import { XCircle, CheckCircle, AlertTriangle, BookOpen } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function MythsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const myths = lang === 'es'
    ? [
        {
          myth: "Todos los superdotados sacan buenas notas.",
          reality: "No necesariamente. El subrendimiento puede aparecer, pero su frecuencia cambia mucho según la definición y la muestra. Las calificaciones dependen también de oportunidades, motivación, apoyos, contexto y posibles condiciones coexistentes.",
          source: "Reis & McCoach (2000), Gifted Child Quarterly",
        },
        {
          myth: "Para ser superdotado se necesita un CI superior a 145.",
          reality: "Incorrecto como regla universal. Algunos sistemas utilizan un resultado cercano a +2 desviaciones estándar —aproximadamente 130 en ciertas escalas—, mientras otros combinan aptitudes, rendimiento, creatividad, potencial y contexto. El instrumento y su error de medida importan.",
          source: "Silverman (2013); Renzulli (1978)",
        },
        {
          myth: "Los superdotados nunca necesitan apoyo.",
          reality: "Las fortalezas no eliminan las necesidades. Una persona puede requerir enriquecimiento, adaptaciones, apoyo socioemocional o atención para una condición coexistente. Ninguna de esas necesidades se deduce automáticamente de la etiqueta.",
          source: "Webb et al. (2005); Neihart et al. (2002)",
        },
        {
          myth: "Son genios en todas las áreas.",
          reality: "Los perfiles pueden ser desiguales entre dominios. Una fortaleza matemática no obliga a tener la misma ventaja verbal, creativa o académica. La manera de describir esos dominios depende del modelo utilizado.",
          source: "Subotnik et al. (2011); Gagné (2010)",
        },
        {
          myth: "La superdotación garantiza el éxito en la vida adulta.",
          reality: "No existe tal garantía. Los estudios longitudinales muestran trayectorias diversas. Educación, oportunidades, contexto, intereses, apoyos y bienestar participan en cómo se desarrolla y expresa el potencial.",
          source: "Lubinski et al. (2006); Terman (1925–1956)",
        },
        {
          myth: "Los superdotados son socialmente inadaptados por naturaleza.",
          reality: "No existe una relación causal simple. El ajuste social varía entre personas y contextos; encontrar pares, sentirse comprendido y recibir apoyos adecuados puede importar, pero las altas capacidades no determinan por sí solas la vida social.",
          source: "Janos & Robinson (1985); Neihart (1999)",
        },
        {
          myth: "La superdotación desaparece en la adultez.",
          reality: "Las medidas cognitivas muestran cierta estabilidad, pero no congelan una trayectoria. El desarrollo, la salud, la educación, la práctica y las oportunidades influyen en cómo las capacidades se expresan a lo largo de la vida.",
          source: "Lubinski et al. (2014); Terman Longitudinal Study",
        },
        {
          myth: "Identificar a un niño como superdotado lo presionará demasiado.",
          reality: "La identificación de calidad puede orientar apoyos cuando es ética, contextual y se comunica con cuidado. Una etiqueta sin recursos no resuelve nada; una evaluación responsable debe centrarse en necesidades y oportunidades, no en crear expectativas imposibles.",
          source: "Colangelo & Davis (2003); Gagné (2010)",
        },
      ]
    : [
        {
          myth: "All gifted students get good grades.",
          reality: "Not necessarily. Underachievement may occur, but estimates vary widely with definitions and samples. Grades also depend on opportunity, motivation, support, context, and possible co-occurring conditions.",
          source: "Reis & McCoach (2000), Gifted Child Quarterly",
        },
        {
          myth: "You need an IQ above 145 to be gifted.",
          reality: "Incorrect as a universal rule. Some systems use a result near +2 standard deviations—approximately 130 on certain scales—while others combine aptitude, achievement, creativity, potential, and context. The instrument and its measurement error matter.",
          source: "Silverman (2013); Renzulli (1978)",
        },
        {
          myth: "Gifted individuals never need support.",
          reality: "Strengths do not remove needs. A person may need enrichment, accommodations, socioemotional support, or care for a co-occurring condition. None of those needs can be inferred automatically from the label.",
          source: "Webb et al. (2005); Neihart et al. (2002)",
        },
        {
          myth: "They are geniuses in every area.",
          reality: "Profiles may be uneven across domains. Mathematical strength does not require the same advantage in verbal, creative, or academic areas. How those domains are described depends on the model being used.",
          source: "Subotnik et al. (2011); Gagné (2010)",
        },
        {
          myth: "Giftedness guarantees success in adult life.",
          reality: "There is no such guarantee. Longitudinal studies show diverse trajectories. Education, opportunity, context, interests, support, and wellbeing all contribute to how potential develops and is expressed.",
          source: "Lubinski et al. (2006); Terman (1925–1956)",
        },
        {
          myth: "Gifted individuals are naturally socially maladjusted.",
          reality: "There is no simple causal relationship. Social adjustment varies across people and contexts; finding peers, feeling understood, and receiving suitable support may matter, but giftedness alone does not determine social life.",
          source: "Janos & Robinson (1985); Neihart (1999)",
        },
        {
          myth: "Giftedness disappears in adulthood.",
          reality: "Cognitive measures show some stability, but they do not freeze a trajectory. Development, health, education, practice, and opportunity influence how abilities are expressed across life.",
          source: "Lubinski et al. (2014); Terman Longitudinal Study",
        },
        {
          myth: "Identifying a child as gifted will pressure them too much.",
          reality: "High-quality identification may guide support when it is ethical, contextual, and communicated carefully. A label without resources solves nothing; responsible assessment should focus on needs and opportunities, not impossible expectations.",
          source: "Colangelo & Davis (2003); Gagné (2010)",
        },
      ];

  const t = lang === 'es'
    ? {
        title: "Mitos sobre la Superdotación",
        subtitle: "Algunas frases se repiten tanto que terminan pareciendo evidencia. Aquí las obligamos a mostrar sus fuentes.",
        quickSummaryTitle: "La regla de esta sección",
        quickSummary: "Las altas capacidades no garantizan notas, éxito, bienestar ni dificultades. Tampoco desaparecen todas las necesidades. Cada afirmación debe leerse dentro de un modelo, una población y un contexto.",
        myth: "Mito",
        reality: "Realidad",
      }
    : {
        title: "Myths about Giftedness",
        subtitle: "Some claims are repeated so often that they start to look like evidence. Here we make them show their sources.",
        quickSummaryTitle: "The rule for this section",
        quickSummary: "Giftedness does not guarantee grades, success, wellbeing, or difficulty. It does not remove every support need either. Each claim must be read within a model, population, and context.",
        myth: "Myth",
        reality: "Reality",
      };

  return (
    <section id="mitos" ref={ref} className={`py-20 bg-light-gray section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Quick summary */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-5 flex gap-4">
            <BookOpen className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm font-semibold text-orange-700 mb-1">{t.quickSummaryTitle}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{t.quickSummary}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {myths.map((item, index) => (
            <Card key={index} className="shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-red-50 p-6 border-b md:border-b-0 md:border-r border-red-100">
                    <div className="flex items-start gap-3">
                      <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">{t.myth}</p>
                        <p className="text-gray-700 font-medium leading-relaxed">{item.myth}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">{t.reality}</p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">{item.reality}</p>
                        <div className="flex items-center gap-1.5">
                          <AlertTriangle size={12} className="text-gray-400" />
                          <p className="text-xs text-gray-400 italic">{item.source}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
