import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

interface NetworkNode {
  id: string;
  label: string;
  labelShort: string;
  desc: string;
  research: string;
  color: string;
  cx: number;
  cy: number;
}

export default function BrainNetworkMap() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);

  const t = lang === 'es'
    ? {
        title: "Mapa de redes relacionadas con la cognición",
        subtitle: "Una guía conceptual de funciones estudiadas en inteligencia, aprendizaje y creatividad",
        disclaimer: "Representación educativa basada en la literatura — no diagnóstica",
        caveat: "Los hallazgos son tendencias en muestras de investigación, no características universales.",
        clickHint: "Haz clic en una red para ver detalles",
        researchLabel: "Lo que sugiere la investigación",
        functionLabel: "Función",
        centerLabel: "Cognición\ny aprendizaje",
        nodes: [
          {
            id: "frontoparietal",
            label: "Redes Frontoparietales",
            labelShort: "Frontoparietal",
            desc: "Control ejecutivo, planificación, razonamiento abstracto y atención sostenida.",
            research: "El modelo P-FIT (Jung & Haier, 2007) propone una integración distribuida de regiones frontales y parietales. Es una hipótesis de redes y no un marcador individual.",
            color: "#3B82F6",
            cx: 250, cy: 60,
          },
          {
            id: "memoria",
            label: "Memoria",
            labelShort: "Memoria",
            desc: "Memoria de trabajo, memoria episódica y consolidación de aprendizajes a largo plazo.",
            research: "La memoria de trabajo se relaciona con distintas tareas de razonamiento, pero varía dentro de cualquier grupo y no puede deducirse de una etiqueta educativa.",
            color: "#10B981",
            cx: 430, cy: 180,
          },
          {
            id: "atencion",
            label: "Atención",
            labelShort: "Atención",
            desc: "Atención selectiva, atención sostenida y control de la distracción.",
            research: "El control atencional puede contribuir al rendimiento en tareas complejas. Los resultados dependen del paradigma, la edad y las características de la muestra.",
            color: "#F59E0B",
            cx: 370, cy: 330,
          },
          {
            id: "ejecutivas",
            label: "Funciones Ejecutivas",
            labelShort: "F. Ejecutivas",
            desc: "Planificación, flexibilidad cognitiva, inhibición y actualización de la memoria de trabajo.",
            research: "Diamond (2013) revisa el desarrollo general de las funciones ejecutivas. Ese trabajo no define un perfil ejecutivo único de altas capacidades.",
            color: "#8B5CF6",
            cx: 130, cy: 330,
          },
          {
            id: "creatividad",
            label: "Creatividad",
            labelShort: "Creatividad",
            desc: "Red por defecto (DMN), pensamiento divergente y generación de ideas originales.",
            research: "Beaty et al. (2016) describe interacciones entre redes durante tareas creativas. La creatividad no se localiza en una sola red ni se infiere de una imagen individual.",
            color: "#EF4444",
            cx: 70, cy: 180,
          },
        ] as NetworkNode[],
      }
    : {
        title: "Map of networks related to cognition",
        subtitle: "A conceptual guide to functions studied in intelligence, learning, and creativity",
        disclaimer: "Educational representation based on the literature — not diagnostic",
        caveat: "Findings are trends in research samples, not universal characteristics.",
        clickHint: "Click on a network to see details",
        researchLabel: "What research suggests",
        functionLabel: "Function",
        centerLabel: "Cognition\nand learning",
        nodes: [
          {
            id: "frontoparietal",
            label: "Fronto-Parietal Networks",
            labelShort: "Frontoparietal",
            desc: "Executive control, planning, abstract reasoning, and sustained attention.",
            research: "The P-FIT model (Jung & Haier, 2007) proposes distributed integration of frontal and parietal regions. It is a network hypothesis, not an individual marker.",
            color: "#3B82F6",
            cx: 250, cy: 60,
          },
          {
            id: "memoria",
            label: "Memory",
            labelShort: "Memory",
            desc: "Working memory, episodic memory, and long-term learning consolidation.",
            research: "Working memory relates to several reasoning tasks, but it varies within every group and cannot be inferred from an educational label.",
            color: "#10B981",
            cx: 430, cy: 180,
          },
          {
            id: "atencion",
            label: "Attention",
            labelShort: "Attention",
            desc: "Selective attention, sustained attention, and distraction control.",
            research: "Attentional control may contribute to performance on complex tasks. Results depend on paradigm, age, and sample characteristics.",
            color: "#F59E0B",
            cx: 370, cy: 330,
          },
          {
            id: "ejecutivas",
            label: "Executive Functions",
            labelShort: "Exec. Functions",
            desc: "Planning, cognitive flexibility, inhibition, and working memory updating.",
            research: "Diamond (2013) reviews the general development of executive functions. That work does not define one executive profile for giftedness.",
            color: "#8B5CF6",
            cx: 130, cy: 330,
          },
          {
            id: "creatividad",
            label: "Creativity",
            labelShort: "Creativity",
            desc: "Default mode network (DMN), divergent thinking, and generation of original ideas.",
            research: "Beaty et al. (2016) describes interactions among networks during creative tasks. Creativity is not located in one network or inferred from an individual scan.",
            color: "#EF4444",
            cx: 70, cy: 180,
          },
        ] as NetworkNode[],
      };

  const CX = 250, CY = 200, R_CENTER = 58;
  const nodes = t.nodes;
  const selectedNode = nodes.find(n => n.id === selected) ?? null;

  return (
    <section
      id="mapa-cerebro"
      ref={ref}
      className={`py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-3">{t.subtitle}</p>
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2">
            <AlertCircle className="text-amber-500" size={15} />
            <span className="text-sm text-amber-700 font-medium">{t.disclaimer}</span>
          </div>
        </div>

        <Card className="shadow-xl overflow-hidden mb-8">
          <CardContent className="p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* SVG hub-and-spoke */}
              <div>
                <svg viewBox="0 0 500 400" className="w-full max-w-md mx-auto" aria-label={t.title}>
                  {/* Spoke lines */}
                  {nodes.map(n => (
                    <line
                      key={n.id}
                      x1={CX} y1={CY}
                      x2={n.cx} y2={n.cy}
                      stroke={selected === n.id ? n.color : '#CBD5E1'}
                      strokeWidth={selected === n.id ? 3 : 1.5}
                      strokeDasharray="6,3"
                    />
                  ))}

                  {/* Center circle */}
                  <circle cx={CX} cy={CY} r={R_CENTER}
                    fill="url(#centerGrad)"
                    stroke="#6366F1"
                    strokeWidth="2"
                  />
                  <defs>
                    <radialGradient id="centerGrad" cx="40%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#818CF8"/>
                      <stop offset="100%" stopColor="#4338CA"/>
                    </radialGradient>
                  </defs>
                  <text x={CX} y={CY - 8} textAnchor="middle" fontSize="11" fontWeight="700"
                    fill="white" fontFamily="Inter, sans-serif">
                    {lang === 'es' ? 'Cerebro' : 'Brain'}
                  </text>
                  <text x={CX} y={CY + 8} textAnchor="middle" fontSize="9.5"
                    fill="#C7D2FE" fontFamily="Inter, sans-serif">
                    {lang === 'es' ? 'Alta Capacidad' : 'High Ability'}
                  </text>

                  {/* Node circles */}
                  {nodes.map(n => {
                    const isActive = selected === n.id;
                    const r = 42;
                    return (
                      <g key={n.id} className="cursor-pointer" onClick={() => setSelected(selected === n.id ? null : n.id)}>
                        <circle
                          cx={n.cx} cy={n.cy} r={r}
                          fill={isActive ? n.color : n.color + '22'}
                          stroke={n.color}
                          strokeWidth={isActive ? 3 : 1.5}
                          style={{ transition: 'all 0.2s' }}
                        />
                        <text
                          x={n.cx} y={n.cy + 4}
                          textAnchor="middle"
                          fontSize="9"
                          fontWeight="700"
                          fill={isActive ? 'white' : n.color}
                          fontFamily="Inter, sans-serif"
                          style={{ pointerEvents: 'none' }}
                        >
                          {n.labelShort}
                        </text>
                      </g>
                    );
                  })}
                </svg>
                <p className="text-center text-xs text-gray-400 mt-2 italic">{t.clickHint}</p>
              </div>

              {/* Info panel */}
              <div>
                {selectedNode ? (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: selectedNode.color }} />
                      <h3 className="text-xl font-bold text-gray-900">{selectedNode.label}</h3>
                    </div>
                    <div className="p-4 bg-white rounded-xl border shadow-sm">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{t.functionLabel}</p>
                      <p className="text-gray-800 text-sm leading-relaxed">{selectedNode.desc}</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">{t.researchLabel}</p>
                      <p className="text-gray-800 text-sm leading-relaxed">{selectedNode.research}</p>
                    </div>
                    <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl text-xs text-amber-700 flex items-start gap-2">
                      <AlertCircle size={13} className="mt-0.5 flex-shrink-0" />
                      <span>{t.caveat}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-center text-gray-400">
                    <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 opacity-60">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <p className="text-base font-medium text-gray-600 mb-1">{t.clickHint}</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Node cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {nodes.map(n => (
            <button
              key={n.id}
              onClick={() => setSelected(selected === n.id ? null : n.id)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                selected === n.id ? 'border-2 shadow-md' : 'border-gray-200 hover:border-gray-300 hover:shadow-sm bg-white'
              }`}
              style={selected === n.id ? { borderColor: n.color, background: n.color + '18' } : {}}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: n.color }} />
                <span className="text-xs font-semibold text-gray-800 leading-tight">{n.labelShort}</span>
              </div>
            </button>
          ))}
        </div>

        <p className="text-xs text-gray-400 text-center mt-8 italic">
          {lang === 'es'
            ? 'Fuente: Jung & Haier (2007), Engle (2002), Diamond (2013), Beaty et al. (2016). Elaboración propia.'
            : 'Source: Jung & Haier (2007), Engle (2002), Diamond (2013), Beaty et al. (2016). Own elaboration.'}
        </p>
      </div>
    </section>
  );
}
