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

  const evidenceQuality = lang === 'es'
    ? [
        { level: "Nivel 1", description: "Revisiones sistemáticas y metaanálisis", studies: "Depende de la pregunta y de los estudios disponibles", participants: "Variable", strength: "Síntesis fuerte si la evidencia incluida es adecuada" },
        { level: "Nivel 2", description: "Estudios longitudinales y ensayos controlados", studies: "Diseños individuales de seguimiento o intervención", participants: "Variable", strength: "Alta para ciertas preguntas, con límites de muestra y diseño" },
        { level: "Nivel 3", description: "Estudios de cohorte y caso-control", studies: "Diseños observacionales", participants: "Variable", strength: "Evidencia moderada" },
        { level: "Nivel 4", description: "Estudios de caso y series clínicas", studies: "Reportes individuales", participants: "Pequeños grupos", strength: "Evidencia preliminar" },
      ]
    : [
        { level: "Level 1", description: "Systematic reviews and meta-analyses", studies: "Depends on the question and available studies", participants: "Variable", strength: "Strong synthesis when the included evidence is suitable" },
        { level: "Level 2", description: "Longitudinal studies and controlled trials", studies: "Individual follow-up or intervention designs", participants: "Variable", strength: "High for certain questions, with sample and design limits" },
        { level: "Level 3", description: "Cohort and case-control studies", studies: "Observational designs", participants: "Variable", strength: "Moderate evidence" },
        { level: "Level 4", description: "Case studies and clinical series", studies: "Individual reports", participants: "Small groups", strength: "Preliminary evidence" },
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
        evidenceHierarchy: "Jerarquía de Evidencia Científica",
        evidenceNote: "La fuerza del diseño depende de la pregunta: intervención, identificación, trayectoria, cultura y neurociencia requieren métodos distintos.",
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
        evidenceHierarchy: "Scientific Evidence Hierarchy",
        evidenceNote: "Design strength depends on the question: interventions, identification, trajectories, culture, and neuroscience require different methods.",
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
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">{labels.evidenceHierarchy}</h3>
            <p className="text-gray-600 text-center mb-8">{labels.evidenceNote}</p>
            <div className="space-y-4">
              {evidenceQuality.map((level, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="text-center"><Badge variant="default" className="text-sm font-bold">{level.level}</Badge></div>
                    <div><h4 className="font-semibold text-dark-slate">{level.description}</h4></div>
                    <div><p className="text-sm text-gray-600">{level.studies}</p><p className="text-xs text-gray-500">{level.participants}</p></div>
                    <div className="text-center"><Badge variant={index === 0 ? 'default' : index === 1 ? 'secondary' : 'outline'} className="text-xs">{level.strength}</Badge></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-800"><strong>{labels.noteLabel}</strong> {labels.noteText}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
