import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, Database, BarChart3, Users, BookOpen } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function ResearchMethodology() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const methodologicalApproaches = lang === 'es'
    ? [
        { icon: Microscope, title: "Neuroimagen y neurofisiología", techniques: ["fMRI", "PET", "DTI", "EEG", "MEG"], sampleSizes: "Frecuentemente pequeñas y heterogéneas en este campo", reliability: "Depende de tarea, adquisición, análisis y replicación", findings: "Permiten estudiar asociaciones grupales; no diagnostican superdotación individual", iconBg: "bg-purple-100", iconColor: "text-purple-500", gradientFrom: "from-purple-500", gradientTo: "to-indigo-600" },
        { icon: Database, title: "Estudios longitudinales", techniques: ["Cohortes", "Datos de panel", "MLM", "SEM"], sampleSizes: "Desde cohortes selectivas hasta grandes seguimientos", reliability: "Depende de retención, medición y representatividad", findings: "Ayudan a estudiar trayectorias, pero una muestra identificada no representa a toda la población", iconBg: "bg-blue-100", iconColor: "text-blue-500", gradientFrom: "from-blue-500", gradientTo: "to-cyan-600" },
        { icon: BarChart3, title: "Revisiones y metaanálisis", techniques: ["Efectos aleatorios", "Evaluación de sesgo", "Análisis de heterogeneidad"], sampleSizes: "Dependen de la pregunta y de los estudios disponibles", reliability: "La calidad no supera la de la evidencia incluida", findings: "Sintetizan resultados y cuantifican incertidumbre, heterogeneidad y posibles sesgos", iconBg: "bg-green-100", iconColor: "text-green-500", gradientFrom: "from-green-500", gradientTo: "to-emerald-600" },
        { icon: Users, title: "Investigación transcultural", techniques: ["Comparación cultural", "Multisitio", "Invarianza de medida"], sampleSizes: "Muestras y sistemas educativos diversos", reliability: "Requiere instrumentos comparables y contexto local", findings: "Muestra que las oportunidades y los criterios de identificación cambian entre contextos", iconBg: "bg-orange-100", iconColor: "text-orange-500", gradientFrom: "from-orange-500", gradientTo: "to-red-600" },
      ]
    : [
        { icon: Microscope, title: "Neuroimaging and neurophysiology", techniques: ["fMRI", "PET", "DTI", "EEG", "MEG"], sampleSizes: "Often small and heterogeneous in this field", reliability: "Depends on task, acquisition, analysis, and replication", findings: "These methods study group associations; they do not diagnose individual giftedness", iconBg: "bg-purple-100", iconColor: "text-purple-500", gradientFrom: "from-purple-500", gradientTo: "to-indigo-600" },
        { icon: Database, title: "Longitudinal studies", techniques: ["Cohorts", "Panel data", "MLM", "SEM"], sampleSizes: "From selected cohorts to large follow-ups", reliability: "Depends on retention, measurement, and representativeness", findings: "They help study trajectories, but an identified sample does not represent the whole population", iconBg: "bg-blue-100", iconColor: "text-blue-500", gradientFrom: "from-blue-500", gradientTo: "to-cyan-600" },
        { icon: BarChart3, title: "Reviews and meta-analyses", techniques: ["Random effects", "Bias assessment", "Heterogeneity analysis"], sampleSizes: "Depend on the question and available studies", reliability: "Quality cannot exceed that of the included evidence", findings: "They synthesize findings and quantify uncertainty, heterogeneity, and possible bias", iconBg: "bg-green-100", iconColor: "text-green-500", gradientFrom: "from-green-500", gradientTo: "to-emerald-600" },
        { icon: Users, title: "Cross-cultural research", techniques: ["Cultural comparison", "Multi-site", "Measurement invariance"], sampleSizes: "Diverse samples and educational systems", reliability: "Requires comparable instruments and local context", findings: "It shows that opportunity and identification criteria vary across contexts", iconBg: "bg-orange-100", iconColor: "text-orange-500", gradientFrom: "from-orange-500", gradientTo: "to-red-600" },
      ];

  const keyResearchFindings = lang === 'es'
    ? [
        { year: "2007", breakthrough: "Teoría P-FIT de la inteligencia", lead: "Jung & Haier", sample: "Revisión de 37 estudios de neuroimagen", effect: "Síntesis de asociaciones distribuidas", impact: "Modelo influyente, no biomarcador diagnóstico" },
        { year: "2011", breakthrough: "Metaanálisis sobre aceleración", lead: "Steenbergen-Hu & Moon", sample: "Síntesis de estudios educativos", effect: "Resultados favorables en contextos analizados", impact: "La decisión debe adaptarse al estudiante y al entorno" },
        { year: "2014", breakthrough: "Trayectorias a cuatro décadas", lead: "Lubinski et al.", sample: "Cohorte SMPY seleccionada por capacidad matemática", effect: "Diversidad de logros y trayectorias", impact: "No representa a todas las personas con altas capacidades" },
        { year: "2018", breakthrough: "Identificación de estudiantes aprendices de inglés", lead: "Hodges et al.", sample: "Investigación sobre equidad educativa", effect: "Los procedimientos influyen en la representación", impact: "La identificación universal y contextual puede reducir sesgos" },
      ]
    : [
        { year: "2007", breakthrough: "P-FIT theory of intelligence", lead: "Jung & Haier", sample: "Review of 37 neuroimaging studies", effect: "Synthesis of distributed associations", impact: "Influential model, not a diagnostic biomarker" },
        { year: "2011", breakthrough: "Meta-analysis of acceleration", lead: "Steenbergen-Hu & Moon", sample: "Synthesis of educational studies", effect: "Favorable outcomes in analyzed contexts", impact: "Decisions should be adapted to the student and setting" },
        { year: "2014", breakthrough: "Four-decade trajectories", lead: "Lubinski et al.", sample: "SMPY cohort selected for mathematical ability", effect: "Diverse achievements and trajectories", impact: "Does not represent every gifted person" },
        { year: "2018", breakthrough: "Identifying English learners", lead: "Hodges et al.", sample: "Research on educational equity", effect: "Procedures affect representation", impact: "Universal, contextual screening may reduce bias" },
      ];

  const globalResearchCenters = lang === 'es'
    ? [
        { name: "Center for Talented Youth", location: "Johns Hopkins, EE.UU.", focus: "Aceleración académica y talento", description: "Centro líder en identificación y programas para superdotados" },
        { name: "Vanderbilt SMPY", location: "Vanderbilt University, EE.UU.", focus: "Seguimiento longitudinal del talento matemático", description: "Estudio longitudinal más extenso en superdotación matemática" },
        { name: "Munich High Ability Research", location: "LMU Munich, Alemania", focus: "Desarrollo socioemocional de superdotados", description: "Referencia europea en investigación longitudinal de altas capacidades" },
        { name: "Renzulli Center for Creativity", location: "University of Connecticut, EE.UU.", focus: "Creatividad y modelos de talento", description: "Pionero del modelo de los tres anillos y enriquecimiento educativo" },
      ]
    : [
        { name: "Center for Talented Youth", location: "Johns Hopkins, USA", focus: "Academic acceleration and talent", description: "Leading center for identification and gifted education programs" },
        { name: "Vanderbilt SMPY", location: "Vanderbilt University, USA", focus: "Longitudinal tracking of mathematical talent", description: "Most extensive longitudinal study on mathematical giftedness" },
        { name: "Munich High Ability Research", location: "LMU Munich, Germany", focus: "Socioemotional development of gifted individuals", description: "European reference in longitudinal high-ability research" },
        { name: "Renzulli Center for Creativity", location: "University of Connecticut, USA", focus: "Creativity and talent models", description: "Pioneer of the three-ring model and educational enrichment" },
      ];

  const evidenceMatrix = lang === 'es'
    ? [
        {
          question: "Intervención",
          purpose: "¿Qué cambia cuando se aplica una estrategia?",
          designs: "Ensayos controlados, diseños cuasiexperimentales y revisiones sistemáticas",
          contribution: "Eficacia, efectividad y posibles efectos no previstos",
          limits: "Implementación, comparación, duración y transferencia entre contextos",
        },
        {
          question: "Identificación",
          purpose: "¿A quién identifica un procedimiento y con qué precisión?",
          designs: "Estudios de validez y confiabilidad, precisión de clasificación, equidad e invarianza",
          contribution: "Precisión, consistencia y diferencias entre grupos o contextos",
          limits: "Normas, edición, idioma, punto de corte, acceso y consecuencias de la decisión",
        },
        {
          question: "Prevalencia",
          purpose: "¿Con qué frecuencia aparece según una definición?",
          designs: "Muestreo probabilístico, encuestas representativas, registros y metaanálisis de prevalencia",
          contribution: "Estimaciones poblacionales con intervalos de incertidumbre",
          limits: "Definición utilizada, no respuesta, cobertura, política y acceso a evaluación",
        },
        {
          question: "Desarrollo",
          purpose: "¿Cómo cambian los perfiles y las trayectorias con el tiempo?",
          designs: "Cohortes longitudinales, medidas repetidas y modelos de crecimiento",
          contribution: "Secuencia temporal, estabilidad, cambio y diversidad de trayectorias",
          limits: "Abandono, cohortes seleccionadas y variables de confusión; no demuestra causalidad por sí solo",
        },
        {
          question: "Neurociencia",
          purpose: "¿Qué asociaciones grupales aparecen en redes y procesos cerebrales?",
          designs: "Neuroimagen prerregistrada y multimodal, replicaciones y metaanálisis",
          contribution: "Convergencia entre tareas, redes y mecanismos candidatos",
          limits: "Muestras pequeñas o heterogéneas, tareas y análisis variables; no identifica a una persona",
        },
      ]
    : [
        {
          question: "Intervention",
          purpose: "What changes when a strategy is applied?",
          designs: "Controlled trials, quasi-experimental designs, and systematic reviews",
          contribution: "Efficacy, effectiveness, and possible unintended effects",
          limits: "Implementation, comparator, duration, and transfer across settings",
        },
        {
          question: "Identification",
          purpose: "Who does a procedure identify, and how accurately?",
          designs: "Validity and reliability studies, classification accuracy, fairness, and invariance",
          contribution: "Accuracy, consistency, and differences across groups or settings",
          limits: "Norms, edition, language, cut score, access, and consequences of the decision",
        },
        {
          question: "Prevalence",
          purpose: "How often does it occur under a stated definition?",
          designs: "Probability sampling, representative surveys, registries, and prevalence meta-analyses",
          contribution: "Population estimates with uncertainty intervals",
          limits: "Definition, nonresponse, coverage, policy, and access to assessment",
        },
        {
          question: "Development",
          purpose: "How do profiles and trajectories change over time?",
          designs: "Longitudinal cohorts, repeated measures, and growth models",
          contribution: "Temporal sequence, stability, change, and diversity of trajectories",
          limits: "Attrition, selected cohorts, and confounding; it does not establish causality by itself",
        },
        {
          question: "Neuroscience",
          purpose: "Which group-level associations appear across brain networks and processes?",
          designs: "Preregistered and multimodal neuroimaging, replications, and meta-analyses",
          contribution: "Convergence across tasks, networks, and candidate mechanisms",
          limits: "Small or heterogeneous samples and variable tasks or pipelines; not an individual identifier",
        },
      ];

  const labels = lang === 'es'
    ? {
        title: "Cómo sabemos lo que creemos saber",
        subtitle: "Un método con nombre sofisticado no garantiza una buena conclusión. Importan la muestra, la medición, el análisis, la replicación y la pregunta que realmente puede responder.",
        quickSummaryTitle: "La idea central",
        quickSummary: "La investigación sobre altas capacidades utiliza neuroimagen, estudios longitudinales, metaanálisis y comparaciones culturales. Cada método responde preguntas distintas y arrastra límites distintos; la convergencia se evalúa afirmación por afirmación, no por el prestigio de la técnica.",
        techniques: "Técnicas",
        typicalSamples: "Muestras típicas",
        reliability: "Confiabilidad",
        keyFinding: "Hallazgo clave:",
        recentFindings: "Ejemplos de hallazgos documentados",
        recentNote: "Cada entrada corresponde a una referencia identificable incluida en la bibliografía; su alcance depende del diseño y la muestra.",
        leadingCenters: "Centros Líderes en Investigación",
        centersNote: "Centros líderes en investigación en educación de altas capacidades",
        evidenceMatrixTitle: "Matriz de evidencia según la pregunta",
        evidenceNote: "No existe un diseño universalmente superior. La evidencia más útil es la que corresponde a la pregunta, mide bien sus variables y puede sostenerse en otras muestras y contextos.",
        matrixHeaders: ["Pregunta", "Diseños especialmente útiles", "Qué pueden aportar", "Límites que deben revisarse"],
        matrixConclusionTitle: "Cómo leer la matriz:",
        matrixConclusion: "Una revisión no corrige estudios débiles; un ensayo no estima por sí solo la prevalencia; una cohorte no prueba automáticamente causalidad; y una imagen cerebral no identifica altas capacidades en una persona. La confianza aumenta cuando varios métodos adecuados convergen.",
        noteText: "Existe más de un siglo de investigación, pero antigüedad no equivale a certeza. La calidad y la aplicabilidad deben revisarse para cada afirmación, población y contexto.",
        noteLabel: "Nota:",
      }
    : {
        title: "How we know what we think we know",
        subtitle: "A method with a sophisticated name does not guarantee a good conclusion. The sample, measurement, analysis, replication, and the question it can truly answer all matter.",
        quickSummaryTitle: "The central idea",
        quickSummary: "Giftedness research uses neuroimaging, longitudinal studies, meta-analyses, and cross-cultural comparisons. Each method answers different questions and carries different limitations; convergence must be judged claim by claim, not by the prestige of the technique.",
        techniques: "Techniques",
        typicalSamples: "Typical samples",
        reliability: "Reliability",
        keyFinding: "Key finding:",
        recentFindings: "Examples of documented findings",
        recentNote: "Each entry corresponds to an identifiable reference in the bibliography; its scope depends on design and sample.",
        leadingCenters: "Leading Research Centers",
        centersNote: "Leading centers in high-ability education research",
        evidenceMatrixTitle: "Evidence matrix by research question",
        evidenceNote: "No design is universally superior. The most useful evidence matches the question, measures its variables well, and can hold across samples and settings.",
        matrixHeaders: ["Question", "Especially useful designs", "What they can contribute", "Limits to examine"],
        matrixConclusionTitle: "How to read the matrix:",
        matrixConclusion: "A review cannot repair weak studies; a trial does not estimate prevalence by itself; a cohort does not automatically establish causality; and a brain image does not identify giftedness in one person. Confidence grows when several suitable methods converge.",
        noteText: "More than a century of research exists, but age does not equal certainty. Quality and applicability must be assessed for each claim, population, and context.",
        noteLabel: "Note:",
      };

  return (
    <section id="metodologia-investigacion" ref={ref} className={`py-20 section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">{labels.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{labels.subtitle}</p>
        </div>

        {/* Quick summary */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-5 flex gap-4">
            <BookOpen className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm font-semibold text-green-700 mb-1">{labels.quickSummaryTitle}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{labels.quickSummary}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {methodologicalApproaches.map((approach, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${approach.gradientFrom} ${approach.gradientTo}`}></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${approach.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}><approach.icon className={approach.iconColor} size={24} /></div>
                  <h3 className="text-xl font-semibold text-dark-slate">{approach.title}</h3>
                </div>
                <div className="space-y-3">
                  <div><p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{labels.techniques}</p><div className="flex flex-wrap gap-1 mt-1">{approach.techniques.map((t, i) => (<Badge key={i} variant="outline" className="text-xs">{t}</Badge>))}</div></div>
                  <div><p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{labels.typicalSamples}</p><p className="text-sm text-gray-700">{approach.sampleSizes}</p></div>
                  <div><p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{labels.reliability}</p><p className="text-sm text-gray-700">{approach.reliability}</p></div>
                  <div className="bg-blue-50 p-3 rounded-lg"><p className="text-sm text-blue-800"><strong>{labels.keyFinding}</strong> {approach.findings}</p></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">{labels.recentFindings}</h3>
            <p className="text-center text-gray-500 text-sm mb-6 italic">{labels.recentNote}</p>
            <div className="space-y-4">
              {keyResearchFindings.map((finding, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="text-center"><div className="text-2xl font-bold text-primary">{finding.year}</div></div>
                    <div className="md:col-span-2"><h4 className="font-semibold text-dark-slate">{finding.breakthrough}</h4><p className="text-sm text-gray-500">{finding.lead}</p><p className="text-xs text-gray-400 mt-1">{finding.sample}</p></div>
                    <div><p className="text-sm text-gray-700">{finding.effect}</p></div>
                    <div><p className="text-sm text-gray-600 italic">{finding.impact}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">{labels.leadingCenters}</h3>
            <p className="text-center text-gray-500 text-sm mb-6 italic">{labels.centersNote}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {globalResearchCenters.map((center, index) => (
                <div key={index} className="border rounded-lg p-6">
                  <h4 className="font-semibold text-dark-slate text-base mb-1">{center.name}</h4>
                  <p className="text-gray-500 text-sm mb-2">{center.location}</p>
                  <Badge variant="outline" className="text-xs mb-3">{center.focus}</Badge>
                  <p className="text-gray-600 text-sm">{center.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-4 text-center">{labels.evidenceMatrixTitle}</h3>
            <p className="text-gray-600 text-center mb-8">{labels.evidenceNote}</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[920px] border-collapse text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    {labels.matrixHeaders.map((header) => (
                      <th key={header} scope="col" className="px-5 py-4 text-sm font-semibold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {evidenceMatrix.map((row) => (
                    <tr key={row.question} className="align-top transition-colors hover:bg-blue-50/60">
                      <th scope="row" className="px-5 py-5 w-[20%]">
                        <Badge variant="default" className="mb-2">{row.question}</Badge>
                        <p className="text-sm font-medium leading-relaxed text-dark-slate">{row.purpose}</p>
                      </th>
                      <td className="px-5 py-5 w-[27%] text-sm leading-relaxed text-slate-700">{row.designs}</td>
                      <td className="px-5 py-5 w-[25%] text-sm leading-relaxed text-slate-700">{row.contribution}</td>
                      <td className="px-5 py-5 w-[28%] text-sm leading-relaxed text-slate-600">{row.limits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-sm text-blue-900"><strong>{labels.matrixConclusionTitle}</strong> {labels.matrixConclusion}</p>
            </div>
            <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-800"><strong>{labels.noteLabel}</strong> {labels.noteText}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
