import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Icon imports removed — no icon cards in this section after cleanup
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function ComprehensiveStatistics() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const globalStatistics = lang === 'es'
    ? [
        { region: "América del Norte", population: "Sistemas diversos", giftedEstimate: "Sin prevalencia comparable", identification: "Varía por estado/provincia", support: "Variable", majorPrograms: "Ejemplos: CTY, programas estatales", research: "Producción amplia" },
        { region: "Europa", population: "Sistemas nacionales diversos", giftedEstimate: "Sin prevalencia comparable", identification: "Varía por país", support: "Variable", majorPrograms: "Ejemplos: ECHA y redes nacionales", research: "Heterogénea" },
        { region: "Asia-Pacífico", population: "Gran diversidad regional", giftedEstimate: "Sin prevalencia comparable", identification: "Varía por jurisdicción", support: "Variable", majorPrograms: "Programas nacionales y locales", research: "Heterogénea" },
        { region: "América Latina", population: "Marcos nacionales diversos", giftedEstimate: "Sin prevalencia comparable", identification: "Datos fragmentarios", support: "Variable", majorPrograms: "Iniciativas públicas y asociaciones", research: "En crecimiento" },
        { region: "África", population: "Contextos muy diversos", giftedEstimate: "Sin prevalencia comparable", identification: "Datos limitados", support: "Variable", majorPrograms: "Iniciativas regionales", research: "Base desigual" },
        { region: "Medio Oriente", population: "Sistemas nacionales diversos", giftedEstimate: "Sin prevalencia comparable", identification: "Varía por país", support: "Variable", majorPrograms: "Programas nacionales y fundaciones", research: "Heterogénea" },
      ]
    : [
        { region: "North America", population: "Diverse systems", giftedEstimate: "No comparable prevalence", identification: "Varies by state/province", support: "Variable", majorPrograms: "Examples: CTY, state programs", research: "Broad output" },
        { region: "Europe", population: "Diverse national systems", giftedEstimate: "No comparable prevalence", identification: "Varies by country", support: "Variable", majorPrograms: "Examples: ECHA and national networks", research: "Heterogeneous" },
        { region: "Asia-Pacific", population: "Wide regional diversity", giftedEstimate: "No comparable prevalence", identification: "Varies by jurisdiction", support: "Variable", majorPrograms: "National and local programs", research: "Heterogeneous" },
        { region: "Latin America", population: "Diverse national frameworks", giftedEstimate: "No comparable prevalence", identification: "Fragmentary data", support: "Variable", majorPrograms: "Public initiatives and associations", research: "Growing" },
        { region: "Africa", population: "Highly diverse contexts", giftedEstimate: "No comparable prevalence", identification: "Limited data", support: "Variable", majorPrograms: "Regional initiatives", research: "Uneven evidence base" },
        { region: "Middle East", population: "Diverse national systems", giftedEstimate: "No comparable prevalence", identification: "Varies by country", support: "Variable", majorPrograms: "National programs and foundations", research: "Heterogeneous" },
      ];

  const researchMetrics = lang === 'es'
    ? [
        { metric: "Estudios longitudinales", description: "Permiten observar trayectorias durante años o décadas", growth: "Literatura acumulativa", period: "Múltiples cohortes", significance: "Fortaleza: temporalidad; límite: selección y abandono" },
        { metric: "Revisiones y metaanálisis", description: "Sintetizan preguntas específicas, no toda la superdotación", growth: "Depende del tema", period: "Actualización periódica", significance: "Valorar calidad, heterogeneidad y sesgo" },
        { metric: "Instrumentos de evaluación", description: "Pruebas cognitivas, académicas y escalas con finalidades distintas", growth: "Revisiones por edición", period: "Normas locales", significance: "No son intercambiables ni diagnósticos por sí solos" },
        { metric: "Programas educativos", description: "Enriquecimiento, agrupamiento, aceleración y mentoría", growth: "Aplicación contextual", period: "Resultados por programa", significance: "La pregunta y la implementación determinan la evidencia" },
      ]
    : [
        { metric: "Longitudinal studies", description: "Track trajectories over years or decades", growth: "Cumulative literature", period: "Multiple cohorts", significance: "Strength: temporality; limit: selection and attrition" },
        { metric: "Reviews and meta-analyses", description: "Synthesize specific questions, not all of giftedness", growth: "Depends on topic", period: "Periodic updates", significance: "Assess quality, heterogeneity, and bias" },
        { metric: "Assessment instruments", description: "Cognitive, academic, and rating tools with different purposes", growth: "Edition updates", period: "Local norms", significance: "Not interchangeable or diagnostic on their own" },
        { metric: "Educational programs", description: "Enrichment, grouping, acceleration, and mentoring", growth: "Contextual application", period: "Program-level outcomes", significance: "Question and implementation determine evidence" },
      ];

  const cognitiveDistribution = lang === 'es'
    ? [
        { range: "Puntuación observada", classification: "Es una estimación, no una esencia", description: "Informar prueba, edición e intervalo", color: "blue" },
        { range: "Perfil por dominios", classification: "Las fortalezas pueden ser desiguales", description: "Mirar índices y contexto", color: "purple" },
        { range: "Extremos de la escala", classification: "La precisión suele disminuir", description: "Revisar techos y normas", color: "red" },
      ]
    : [
        { range: "Observed score", classification: "An estimate, not an essence", description: "Report test, edition, and interval", color: "blue" },
        { range: "Domain profile", classification: "Strengths may be uneven", description: "Examine indices and context", color: "purple" },
        { range: "Scale extremes", classification: "Precision often decreases", description: "Review ceilings and norms", color: "red" },
      ];

  const demographicBreakdown = lang === 'es'
    ? [
        { category: "Género", note: "Ligero sesgo masculino documentado en identificación formal" },
        { category: "Idioma y cultura", note: "Los procedimientos pueden subrepresentar a estudiantes cuando no consideran su contexto lingüístico y cultural" },
        { category: "Nivel socioeconómico", note: "Correlación documentada entre recursos familiares y acceso a programas" },
        { category: "Ubicación geográfica", note: "Acceso desigual a evaluación y programas entre zonas urbanas y rurales" },
      ]
    : [
        { category: "Gender", note: "Slight male bias documented in formal identification" },
        { category: "Language and culture", note: "Procedures can underrepresent students when their linguistic and cultural context is not considered" },
        { category: "Socioeconomic level", note: "Documented correlation between family resources and program access" },
        { category: "Geographic location", note: "Unequal access to assessment and programs between urban and rural areas" },
      ];

  const labels = lang === 'es'
    ? {
        title: "Estadísticas sin falsa precisión",
        subtitle: "Cuando los países miden cosas distintas, una tabla ordenada no convierte los datos en comparables",
        note: "* Estimaciones aproximadas basadas en prevalencia teórica del CI. Los datos exactos varían por región, metodología e instrumento.",
        regionTitle: "Distribución Regional — Panorama Estimado",
        regionNote: "No existe un censo global de superdotación por región. Las estimaciones varían por diferencias en identificación y sistemas educativos.",
        totalPop: "Población total:",
        estId: "Identificación estimada:",
        support: "Apoyo:",
        programs: "Programas:",
        research: "Investigación:",
        researchTitle: "Tendencias de Investigación (2000–2025)",
        cogTitle: "Tres reglas antes de interpretar una puntuación",
        cogNote: "Un número sin instrumento, normas, intervalo y contexto parece preciso; simplemente le faltan sus datos más importantes",
        demoTitle: "Análisis Demográfico de la Identificación",
      }
    : {
        title: "Statistics without false precision",
        subtitle: "When countries measure different things, a tidy table does not make the data comparable",
        note: "* Approximate estimates based on theoretical IQ prevalence. Exact data varies by region, methodology, and instrument.",
        regionTitle: "Regional Distribution — Estimated Overview",
        regionNote: "There is no global census of giftedness by region. Estimates vary due to differences in identification and educational systems.",
        totalPop: "Total population:",
        estId: "Estimated identification:",
        support: "Support:",
        programs: "Programs:",
        research: "Research:",
        researchTitle: "Research Trends (2000–2025)",
        cogTitle: "Three rules before interpreting a score",
        cogNote: "A number without its instrument, norms, interval, and context looks precise; it is simply missing its most important information",
        demoTitle: "Demographic Analysis of Identification",
      };

  return (
    <section ref={ref} className={`py-20 bg-gradient-to-br from-blue-50 to-indigo-50 section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">{labels.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{labels.subtitle}</p>
          <p className="text-sm text-gray-400 mt-2 italic">{labels.note}</p>
        </div>

        {/* Regional distribution table — the main content, no redundant summary cards */}
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-4 text-center">{labels.regionTitle}</h3>
            <p className="text-center text-gray-500 text-sm mb-8 italic">{labels.regionNote}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {globalStatistics.map((stat, index) => (
                <div key={index} className="border rounded-lg p-4 bg-white">
                  <h4 className="font-semibold text-dark-slate mb-3">{stat.region}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">{labels.totalPop}</span><span className="text-gray-700 font-medium">{stat.population}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">{labels.estId}</span><span className="text-gray-700 font-medium">{stat.identification}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">{labels.support}</span><Badge variant="outline" className="text-xs">{stat.support}</Badge></div>
                    <div><span className="text-gray-500">{labels.programs}</span><p className="text-gray-700 text-xs mt-1">{stat.majorPrograms}</p></div>
                    <div><span className="text-gray-500">{labels.research}</span><p className="text-primary text-xs font-medium mt-1">{stat.research}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">{labels.researchTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchMetrics.map((metric, index) => (
                <div key={index} className="border rounded-lg p-6 bg-white">
                  <h4 className="font-semibold text-dark-slate mb-2">{metric.metric}</h4>
                  <p className="text-gray-600 text-sm mb-3">{metric.description}</p>
                  <div className="flex justify-between text-xs text-gray-500"><span>{metric.growth}</span><span>{metric.period}</span></div>
                  <div className="mt-3 bg-blue-50 p-2 rounded text-xs text-blue-700">{metric.significance}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-4 text-center">{labels.cogTitle}</h3>
            <p className="text-center text-gray-500 text-sm mb-6 italic">{labels.cogNote}</p>
            <div className="space-y-4">
              {cognitiveDistribution.map((range, index) => {
                const borderClass = range.color === 'blue' ? 'border-blue-500' : range.color === 'purple' ? 'border-purple-500' : 'border-red-500';
                return (
                <div key={index} className={`border-l-4 ${borderClass} pl-4 py-3 bg-white rounded-r-lg`}>
                  <div className="flex justify-between items-center">
                    <div><span className="font-semibold text-dark-slate">{range.range}</span><span className="ml-3 text-gray-600">— {range.classification}</span></div>
                    <Badge variant="outline" className="text-xs">{range.description}</Badge>
                  </div>
                </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">{labels.demoTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {demographicBreakdown.map((demo, index) => (
                <div key={index} className="border rounded-lg p-6 bg-white">
                  <h4 className="font-semibold text-dark-slate mb-3">{demo.category}</h4>
                  <div className="p-3 bg-yellow-50 rounded-lg"><p className="text-sm text-yellow-800">{demo.note}</p></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
