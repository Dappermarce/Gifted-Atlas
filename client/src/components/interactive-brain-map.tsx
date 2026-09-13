import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
import BrainExplorer from "@/components/brain-explorer";
import "./brain-explorer.css";

export default function InteractiveBrainMap() {
  const { lang } = useLanguage();
  const t = lang === 'es'
    ? {
        title: "Una región no explica una mente.",
        subtitle: "Explora la superficie y las estructuras internas. Cada región abre una función, un ejemplo y un límite: entender el cerebro también exige saber qué no dice una imagen.",
        disclaimer: "Modelo ilustrativo — representación educativa, no diagnóstica",
        sideView: "Vista lateral — hemisferio izquierdo · Haz clic en cualquier región",
        functionLabel: "Función",
        researchLabel: "Lo que sugiere la investigación",
        caveat: "Los hallazgos son tendencias en muestras de investigación — no aplican de forma uniforme a todos los individuos.",
        exploreTitle: "Explora las regiones",
        exploreDesc: "Haz clic en cualquier zona del cerebro o en la lista de abajo para ver detalles",
        networksTitle: "Redes Neurales Especializadas",
        networksSubtitle: "Representación conceptual basada en la literatura — los valores individuales varían ampliamente",
        studiesLabel: "LO QUE SUGIEREN LOS ESTUDIOS",
        devTitle: "Desarrollo Neural por Etapas",
        devSubtitle: "Descripción general de tendencias — la variabilidad individual es amplia",
        implicationsLabel: "IMPLICACIONES",
        networks: [
          {
            name: "Red Fronto-Parietal",
            description: "Control ejecutivo y atención sostenida",
            observation: "El modelo P-FIT propone integración frontoparietal en tareas de razonamiento; no es un biomarcador individual",
            badge: "Modelo P-FIT (Jung & Haier, 2007)",
          },
          {
            name: "Red por Defecto (DMN)",
            description: "Actividad cerebral en reposo creativo",
            observation: "Algunos estudios relacionan la interacción entre redes por defecto y ejecutivas con tareas creativas; los resultados dependen del diseño",
            badge: "Literatura sobre creatividad y redes",
          },
          {
            name: "Red Saliente",
            description: "Detección y priorización de estímulos",
            observation: "La red de saliencia participa en priorizar estímulos; no existe un patrón único que identifique altas capacidades",
            badge: "Modelo funcional general",
          },
        ],
        stages: [
          {
            age: "0–5 años",
            development: "Desarrollo cerebral temprano",
            characteristics: "Cambios rápidos en conectividad, mielinización y aprendizaje, con gran variabilidad individual",
            implications: "Entornos seguros, juego, lenguaje y apoyo ajustado al desarrollo",
          },
          {
            age: "6–12 años",
            development: "Especialización hemisférica",
            characteristics: "Desarrollo de conexiones interhemisféricas y especialización de redes cognitivas",
            implications: "Oportunidades variadas de aprendizaje sin asumir una ventana única",
          },
          {
            age: "13–18 años",
            development: "Maduración prefrontal",
            characteristics: "Maduración progresiva del lóbulo frontal y control ejecutivo",
            implications: "Apoyo gradual a autorregulación, pensamiento abstracto y metacognición",
          },
          {
            age: "19–25 años",
            development: "Optimización de redes",
            characteristics: "Consolidación de redes neurales especializadas y poda sináptica",
            implications: "El aprendizaje y la plasticidad continúan durante la adultez",
          },
        ],
      }
    : {
        title: "One region cannot explain a mind.",
        subtitle: "Explore the surface and internal structures. Each region opens a function, an example and a limit: understanding the brain also means knowing what an image cannot tell us.",
        disclaimer: "Illustrative model — educational representation, not diagnostic",
        sideView: "Lateral view — left hemisphere · Click on any region",
        functionLabel: "Function",
        researchLabel: "What research suggests",
        caveat: "Findings are trends in research samples — they do not apply uniformly to all individuals.",
        exploreTitle: "Explore the regions",
        exploreDesc: "Click on any area of the brain or the list below to see details",
        networksTitle: "Specialized Neural Networks",
        networksSubtitle: "Conceptual representation based on the literature — individual values vary widely",
        studiesLabel: "WHAT STUDIES SUGGEST",
        devTitle: "Neural Development by Stage",
        devSubtitle: "General overview of trends — individual variability is wide",
        implicationsLabel: "IMPLICATIONS",
        networks: [
          {
            name: "Fronto-Parietal Network",
            description: "Executive control and sustained attention",
            observation: "P-FIT proposes frontoparietal integration during reasoning tasks; it is not an individual biomarker",
            badge: "P-FIT model (Jung & Haier, 2007)",
          },
          {
            name: "Default Mode Network (DMN)",
            description: "Brain activity during creative rest",
            observation: "Some studies relate interaction between default-mode and executive networks to creative tasks; results depend on design",
            badge: "Creativity and network literature",
          },
          {
            name: "Salience Network",
            description: "Detection and prioritization of stimuli",
            observation: "The salience network helps prioritize stimuli; there is no single pattern that identifies giftedness",
            badge: "General functional model",
          },
        ],
        stages: [
          {
            age: "0–5 years",
            development: "Early brain development",
            characteristics: "Rapid changes in connectivity, myelination, and learning, with wide individual variation",
            implications: "Safe environments, play, language, and developmentally appropriate support",
          },
          {
            age: "6–12 years",
            development: "Hemispheric specialization",
            characteristics: "Development of interhemispheric connections and specialization of cognitive networks",
            implications: "Varied learning opportunities without assuming one unique window",
          },
          {
            age: "13–18 years",
            development: "Prefrontal maturation",
            characteristics: "Progressive maturation of the frontal lobe and executive control",
            implications: "Gradual support for self-regulation, abstract thinking, and metacognition",
          },
          {
            age: "19–25 years",
            development: "Network optimization",
            characteristics: "Consolidation of specialized neural networks and synaptic pruning",
            implications: "Learning and plasticity continue throughout adulthood",
          },
        ],
      };

  return (
    <section id="explorador-cerebral" className="gifted-brain-section" aria-labelledby="brain-explorer-heading">
      <div>
        <header className="gifted-brain-heading">
          <p>{lang === 'es' ? 'Anatomía para explorar · no para etiquetar' : 'Anatomy to explore · not to label'}</p>
          <h2 id="brain-explorer-heading">{t.title}</h2>
          <p>{t.subtitle}</p>
        </header>
        <BrainExplorer />

        {/* ── Redes neurales ── */}
        <Card className="shadow-lg mb-10">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
              {t.networksTitle}
            </h3>
            <p className="text-center text-sm text-gray-400 italic mb-6">
              {t.networksSubtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.networks.map((n, i) => (
                <div key={i} className="border rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <h4 className="font-semibold text-gray-900">{n.name}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{n.description}</p>
                  <div className="p-3 bg-blue-50 rounded-lg mb-3">
                    <p className="text-xs font-semibold text-blue-600 mb-1">{t.studiesLabel}</p>
                    <p className="text-sm text-gray-700">{n.observation}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">{n.badge}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── Desarrollo Neural por Etapas ── */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
              {t.devTitle}
            </h3>
            <p className="text-center text-sm text-gray-400 italic mb-6">
              {t.devSubtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.stages.map((stage, i) => (
                <div key={i} className="border rounded-xl p-5 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <h4 className="font-semibold text-gray-900">{stage.age}</h4>
                  </div>
                  <h5 className="font-semibold text-sm text-blue-600 mb-2">{stage.development}</h5>
                  <p className="text-sm text-gray-600 mb-3 flex-1">{stage.characteristics}</p>
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <p className="text-xs font-semibold text-blue-600 mb-0.5">{t.implicationsLabel}</p>
                    <p className="text-xs text-gray-700">{stage.implications}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
