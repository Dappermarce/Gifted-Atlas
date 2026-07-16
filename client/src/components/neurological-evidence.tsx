import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Eye, Activity } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function NeurologicalEvidence() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const neuralFindings = lang === 'es'
    ? [
        { icon: Brain, title: "Estructura cerebral", description: "Algunos estudios observan asociaciones promedio entre medidas estructurales e inteligencia; los resultados varían por edad y método", evidence: "Literatura de neuroimagen — asociación grupal", color: "text-purple-500", bgColor: "bg-purple-500/10" },
        { icon: Zap, title: "Eficiencia neural", description: "La hipótesis propone diferencias de activación según tarea y capacidad; no significa que un cerebro esté siempre menos activo", evidence: "Neubauer & Fink (2009) — revisión", color: "text-blue-500", bgColor: "bg-blue-500/10" },
        { icon: Eye, title: "Redes distribuidas", description: "El razonamiento depende de redes que integran regiones frontales, parietales y otras áreas, no de un único centro", evidence: "Jung & Haier (2007) — P-FIT", color: "text-green-500", bgColor: "bg-green-500/10" },
        { icon: Activity, title: "Límites de inferencia", description: "Las diferencias de grupo no permiten determinar la capacidad de una persona mediante una imagen cerebral", evidence: "Principio de interpretación", color: "text-orange-500", bgColor: "bg-orange-500/10" },
      ]
    : [
        { icon: Brain, title: "Brain structure", description: "Some studies report average associations between structural measures and intelligence; findings vary by age and method", evidence: "Neuroimaging literature — group association", color: "text-purple-500", bgColor: "bg-purple-500/10" },
        { icon: Zap, title: "Neural efficiency", description: "The hypothesis proposes task- and ability-dependent activation differences; it does not mean a brain is always less active", evidence: "Neubauer & Fink (2009) — review", color: "text-blue-500", bgColor: "bg-blue-500/10" },
        { icon: Eye, title: "Distributed networks", description: "Reasoning depends on networks integrating frontal, parietal, and other regions, not a single center", evidence: "Jung & Haier (2007) — P-FIT", color: "text-green-500", bgColor: "bg-green-500/10" },
        { icon: Activity, title: "Limits of inference", description: "Group differences cannot determine an individual's ability from a brain image", evidence: "Interpretive principle", color: "text-orange-500", bgColor: "bg-orange-500/10" },
      ];

  const developmentalStages = lang === 'es'
    ? [
        { age: "0–3 años", characteristics: "Los hitos tempranos pueden llamar la atención, pero muestran gran variabilidad", percentage: "No diagnóstico" },
        { age: "4–6 años", characteristics: "Observaciones, oportunidades y desarrollo del lenguaje aportan contexto", percentage: "Evaluación multimétodo" },
        { age: "7–12 años", characteristics: "El perfil escolar puede revelar fortalezas específicas y necesidades", percentage: "Revisar sesgos" },
        { age: "13–18 años", characteristics: "Intereses y rendimiento cambian con ambiente, motivación y apoyo", percentage: "Seguimiento" },
      ]
    : [
        { age: "0–3 years", characteristics: "Early milestones may draw attention, but they show wide variability", percentage: "Not diagnostic" },
        { age: "4–6 years", characteristics: "Observation, opportunity, and language development provide context", percentage: "Multi-method assessment" },
        { age: "7–12 years", characteristics: "The school profile may reveal specific strengths and needs", percentage: "Review bias" },
        { age: "13–18 years", characteristics: "Interests and performance change with environment, motivation, and support", percentage: "Follow-up" },
      ];

  const labels = lang === 'es'
    ? { title: "El cerebro no firma certificados de altas capacidades", subtitle: "La neurociencia puede mostrar asociaciones grupales y proponer modelos. Lo que no puede hacer es leer una identidad en una imagen.", devTitle: "Identificación a lo largo del desarrollo", pfitTitle: "Teoría P-FIT (Parieto-Frontal Integration Theory)", pfitText: "Jung y Haier (2007) sintetizaron 37 estudios y propusieron una red distribuida relacionada con diferencias individuales en inteligencia:", areas: ["Regiones frontales: control y evaluación de información","Regiones parietales: integración y transformación de representaciones","Conexiones de sustancia blanca: comunicación entre regiones"], keyFinding: "Interpretación correcta:", keyFindingText: "P-FIT es un modelo influyente basado en asociaciones de grupo. No es una prueba de superdotación ni permite diagnosticar a una persona mediante neuroimagen.", source: "Artículo:" }
    : { title: "The brain does not issue giftedness certificates", subtitle: "Neuroscience can show group associations and propose models. What it cannot do is read an identity from a scan.", devTitle: "Identification across development", pfitTitle: "P-FIT Theory (Parieto-Frontal Integration Theory)", pfitText: "Jung and Haier (2007) synthesized 37 studies and proposed a distributed network related to individual differences in intelligence:", areas: ["Frontal regions: control and evaluation of information","Parietal regions: integration and transformation of representations","White-matter connections: communication between regions"], keyFinding: "Correct interpretation:", keyFindingText: "P-FIT is an influential model based on group associations. It is not a giftedness test and cannot diagnose a person through neuroimaging.", source: "Article:" };

  return (
    <section id="neurociencia" ref={ref} className={`py-20 bg-gradient-to-br from-slate-50 to-blue-50 section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">{labels.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{labels.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {neuralFindings.map((finding, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className={`${finding.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}><finding.icon className={`${finding.color}`} size={32} /></div>
                <h3 className="font-semibold text-dark-slate mb-2">{finding.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{finding.description}</p>
                <p className="text-xs text-gray-500 font-medium">{finding.evidence}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">{labels.devTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentalStages.map((stage, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold text-primary">{stage.age.split('–')[0]}</span></div>
                  <h4 className="font-semibold text-dark-slate mb-2">{stage.age}</h4>
                  <p className="text-gray-600 text-sm mb-3">{stage.characteristics}</p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">{stage.percentage}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-dark-slate mb-4">{labels.pfitTitle}</h3>
                <p className="text-gray-700 mb-6">{labels.pfitText}</p>
                <ul className="space-y-3 text-gray-700">
                  {labels.areas.map((area, i) => {
                    const [bold, rest] = area.split(':');
                    return (<li key={i} className="flex items-start"><div className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-3"></div><span><strong>{bold}:</strong>{rest}</span></li>);
                  })}
                </ul>
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" alt="Brain imaging showing P-FIT networks" className="rounded-lg shadow-lg w-full" />
                <p className="text-xs text-gray-500">{labels.source} <a href="https://doi.org/10.1017/S0140525X07001185" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">Jung &amp; Haier (2007), DOI: 10.1017/S0140525X07001185</a></p>
                <div className="bg-blue-50 p-4 rounded-lg"><p className="text-sm text-blue-800"><strong>{labels.keyFinding}</strong> {labels.keyFindingText}</p></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
