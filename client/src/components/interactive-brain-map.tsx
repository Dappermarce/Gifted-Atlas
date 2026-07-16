import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Info, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

/* ─────────────────────────────────────────────
   Tipos
───────────────────────────────────────────── */
interface Region {
  name: string;
  subtitle: string;
  function: string;
  observation: string;
  note: string;
  color: string;
  labelX: number;
  labelY: number;
  lineX1: number;
  lineY1: number;
  lineX2: number;
  lineY2: number;
}

/* ─────────────────────────────────────────────
   Datos bilingües de cada región
───────────────────────────────────────────── */
const REGIONS_ES: Record<string, Region> = {
  frontal: {
    name: "Lóbulo Frontal",
    subtitle: "Control ejecutivo y planificación",
    function: "Planificación, toma de decisiones, control de impulsos, personalidad.",
    observation: "Estudios de neuroimagen sugieren mayor eficiencia metabólica y diferencias en conectividad funcional en individuos con altas capacidades.",
    note: "P-FIT Theory (Jung & Haier, 2007)",
    color: "#3B82F6",
    labelX: 68, labelY: 88,
    lineX1: 105, lineY1: 112, lineX2: 150, lineY2: 140,
  },
  parietal: {
    name: "Lóbulo Parietal",
    subtitle: "Integración sensorial y razonamiento espacial",
    function: "Procesamiento espacial, atención, integración multisensorial, matemáticas.",
    observation: "La red fronto-parietal aparece consistentemente en estudios de neuroimagen de inteligencia superior. Los patrones de activación difieren según la tarea.",
    note: "Múltiples estudios PET y fMRI",
    color: "#8B5CF6",
    labelX: 382, labelY: 45,
    lineX1: 300, lineY1: 48, lineX2: 340, lineY2: 40,
  },
  temporal: {
    name: "Lóbulo Temporal",
    subtitle: "Lenguaje y memoria",
    function: "Procesamiento del lenguaje, memoria episódica, reconocimiento auditivo.",
    observation: "Algunas investigaciones reportan diferencias en conectividad entre lóbulos temporales en personas con altas capacidades verbales.",
    note: "Estudios DTI de tractografía",
    color: "#10B981",
    labelX: 82, labelY: 295,
    lineX1: 132, lineY1: 280, lineX2: 170, lineY2: 260,
  },
  occipital: {
    name: "Lóbulo Occipital",
    subtitle: "Procesamiento visual",
    function: "Visión, reconocimiento de formas y patrones, procesamiento visual avanzado.",
    observation: "Estudios sugieren posible mayor rapidez en el procesamiento visual de patrones en poblaciones con altas capacidades perceptivas.",
    note: "Estudios EEG de potenciales evocados",
    color: "#F59E0B",
    labelX: 408, labelY: 230,
    lineX1: 395, lineY1: 215, lineX2: 378, lineY2: 200,
  },
  cerebellum: {
    name: "Cerebelo",
    subtitle: "Coordinación y procesamiento cognitivo",
    function: "Coordinación motora, automatización de habilidades, participación en funciones cognitivas.",
    observation: "La función cognitiva del cerebelo ha ganado atención; algunos estudios sugieren su participación en procesamiento de alta velocidad.",
    note: "Neuroimagen funcional reciente",
    color: "#6366F1",
    labelX: 385, labelY: 330,
    lineX1: 378, lineY1: 315, lineX2: 360, lineY2: 300,
  },
  hippocampus: {
    name: "Hipocampo",
    subtitle: "Memoria y aprendizaje",
    function: "Consolidación de memoria a largo plazo, aprendizaje espacial, memoria de trabajo.",
    observation: "Estudios MRI han encontrado diferencias volumétricas en el hipocampo en relación con la capacidad de aprendizaje. Los resultados son heterogéneos.",
    note: "Estudios estructurales MRI",
    color: "#EF4444",
    labelX: 55, labelY: 218,
    lineX1: 176, lineY1: 240, lineX2: 122, lineY2: 220,
  },
  corpus_callosum: {
    name: "Cuerpo Calloso",
    subtitle: "Conexión entre hemisferios",
    function: "Transferencia de información entre hemisferios cerebrales, integración bilateral.",
    observation: "Algunos estudios han observado mayor grosor o mielinización, lo que se asocia con mayor velocidad de comunicación interhemisférica.",
    note: "Estudios de tractografía DTI",
    color: "#7C3AED",
    labelX: 202, labelY: 190,
    lineX1: 220, lineY1: 195, lineX2: 248, lineY2: 200,
  },
};

const REGIONS_EN: Record<string, Region> = {
  frontal: {
    name: "Frontal Lobe",
    subtitle: "Executive control and planning",
    function: "Planning, decision-making, impulse control, personality.",
    observation: "Neuroimaging studies suggest greater metabolic efficiency and differences in functional connectivity in individuals with high abilities.",
    note: "P-FIT Theory (Jung & Haier, 2007)",
    color: "#3B82F6",
    labelX: 68, labelY: 88,
    lineX1: 105, lineY1: 112, lineX2: 150, lineY2: 140,
  },
  parietal: {
    name: "Parietal Lobe",
    subtitle: "Sensory integration and spatial reasoning",
    function: "Spatial processing, attention, multisensory integration, mathematics.",
    observation: "The fronto-parietal network appears consistently in neuroimaging studies of superior intelligence. Activation patterns differ depending on the task.",
    note: "Multiple PET and fMRI studies",
    color: "#8B5CF6",
    labelX: 382, labelY: 45,
    lineX1: 300, lineY1: 48, lineX2: 340, lineY2: 40,
  },
  temporal: {
    name: "Temporal Lobe",
    subtitle: "Language and memory",
    function: "Language processing, episodic memory, auditory recognition.",
    observation: "Some research reports differences in connectivity between temporal lobes in individuals with high verbal abilities.",
    note: "DTI tractography studies",
    color: "#10B981",
    labelX: 82, labelY: 295,
    lineX1: 132, lineY1: 280, lineX2: 170, lineY2: 260,
  },
  occipital: {
    name: "Occipital Lobe",
    subtitle: "Visual processing",
    function: "Vision, shape and pattern recognition, advanced visual processing.",
    observation: "Studies suggest a possible greater speed of visual pattern processing in populations with high perceptual abilities.",
    note: "EEG evoked potential studies",
    color: "#F59E0B",
    labelX: 408, labelY: 230,
    lineX1: 395, lineY1: 215, lineX2: 378, lineY2: 200,
  },
  cerebellum: {
    name: "Cerebellum",
    subtitle: "Coordination and cognitive processing",
    function: "Motor coordination, skill automatization, participation in cognitive functions.",
    observation: "The cognitive role of the cerebellum has gained attention; some studies suggest its involvement in high-speed processing.",
    note: "Recent functional neuroimaging",
    color: "#6366F1",
    labelX: 385, labelY: 330,
    lineX1: 378, lineY1: 315, lineX2: 360, lineY2: 300,
  },
  hippocampus: {
    name: "Hippocampus",
    subtitle: "Memory and learning",
    function: "Long-term memory consolidation, spatial learning, working memory.",
    observation: "MRI studies have found volumetric differences in the hippocampus in relation to learning capacity. Results are heterogeneous.",
    note: "Structural MRI studies",
    color: "#EF4444",
    labelX: 55, labelY: 218,
    lineX1: 176, lineY1: 240, lineX2: 122, lineY2: 220,
  },
  corpus_callosum: {
    name: "Corpus Callosum",
    subtitle: "Inter-hemispheric connection",
    function: "Information transfer between cerebral hemispheres, bilateral integration.",
    observation: "Some studies have observed greater thickness or myelination, associated with greater interhemispheric communication speed.",
    note: "DTI tractography studies",
    color: "#7C3AED",
    labelX: 202, labelY: 190,
    lineX1: 220, lineY1: 195, lineX2: 248, lineY2: 200,
  },
};

/* ─────────────────────────────────────────────
   Paths SVG — vista lateral hemisferio izquierdo
───────────────────────────────────────────── */
const BRAIN_CLIP =
  "M 95,188 C 86,148 94,108 118,78 C 144,46 182,26 226,18 C 270,10 316,20 354,46 C 394,74 416,114 422,158 C 428,198 420,238 400,265 C 378,295 346,315 310,326 C 280,336 248,338 218,330 C 186,322 156,304 133,278 C 108,250 98,220 95,188 Z";

const FRONTAL_PATH =
  "M 95,188 C 90,155 96,118 118,88 C 140,58 170,38 208,26 C 228,20 248,20 252,28 C 232,62 216,98 210,132 C 204,162 204,188 205,200 C 180,205 138,208 95,188 Z";

const PARIETAL_PATH =
  "M 210,28 C 244,16 280,14 315,24 C 352,36 384,62 404,98 C 418,126 420,158 414,188 C 394,195 365,198 336,200 C 308,202 282,205 258,210 C 234,215 215,222 208,226 C 205,210 205,185 208,155 C 212,118 210,68 210,28 Z";

const TEMPORAL_PATH =
  "M 100,200 C 108,228 118,258 136,280 C 154,304 176,320 204,330 C 234,340 265,343 294,338 C 324,330 348,315 360,296 C 367,282 364,266 355,256 C 333,262 306,266 278,270 C 252,274 228,268 212,252 C 202,240 202,222 208,212 C 192,210 148,208 100,200 Z";

const OCCIPITAL_PATH =
  "M 400,100 C 424,134 436,174 430,215 C 426,250 412,282 393,304 C 378,320 360,330 342,336 C 338,334 338,322 342,308 C 350,288 364,268 366,248 C 368,228 362,210 354,200 C 395,193 408,185 400,100 Z";

const CEREBELLUM_PATH =
  "M 330,332 C 348,342 370,352 392,358 C 414,364 438,358 448,342 C 456,328 450,312 438,304 C 424,296 408,300 395,312 C 380,326 360,334 330,332 Z";

const SULCI = [
  "M 235,22 C 228,50 218,85 215,120 C 212,148 214,175 218,200",
  "M 108,198 C 135,208 168,212 205,214 C 242,215 280,210 320,205 C 350,200 375,195 390,188",
  "M 370,82 C 378,108 385,140 386,170 C 387,190 382,205 374,215",
  "M 115,88 C 140,80 170,75 198,72",
  "M 112,115 C 140,108 172,104 205,102",
  "M 108,145 C 138,140 172,136 208,132",
  "M 245,22 C 250,48 255,82 258,115 C 260,140 260,168 258,195",
  "M 280,18 C 284,45 288,80 290,115 C 292,145 290,175 286,200",
  "M 128,265 C 165,260 205,258 245,257 C 285,257 320,260 350,265",
  "M 150,295 C 185,290 225,288 265,287 C 300,287 332,290 355,296",
  "M 405,130 C 415,152 420,180 418,210",
  "M 395,155 C 408,172 415,195 412,220",
];

export default function Brain3D() {
  const [selected, setSelected] = useState<string | null>(null);
  const { lang } = useLanguage();

  const REGIONS = lang === 'es' ? REGIONS_ES : REGIONS_EN;
  const sel = selected ? REGIONS[selected] : null;

  const t = lang === 'es'
    ? {
        title: "Cerebro Interactivo — Regiones y Superdotación",
        subtitle: "Haz clic en cada región para explorar su función y lo que sugiere la investigación",
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
        title: "Interactive Brain — Regions and Giftedness",
        subtitle: "Click on each region to explore its function and what research suggests",
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-3">
            {t.subtitle}
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2">
            <AlertCircle className="text-amber-500" size={16} />
            <span className="text-sm text-amber-700 font-medium">
              {t.disclaimer}
            </span>
          </div>
        </div>

        <Card className="shadow-xl mb-10 overflow-hidden">
          <CardContent className="p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

              {/* ── SVG Brain ── */}
              <div className="lg:col-span-3">
                <svg
                  viewBox="-60 -15 590 420"
                  className="w-full max-w-lg mx-auto drop-shadow-xl"
                  style={{ filter: 'drop-shadow(0 8px 24px rgba(59,130,246,0.18))' }}
                >
                  <defs>
                    <radialGradient id="brainGrad" cx="38%" cy="32%" r="62%">
                      <stop offset="0%" stopColor="#e8edf8" />
                      <stop offset="55%" stopColor="#c8d4e8" />
                      <stop offset="100%" stopColor="#9aaac8" />
                    </radialGradient>
                    <clipPath id="brainClip">
                      <path d={BRAIN_CLIP} />
                    </clipPath>
                    <clipPath id="cerebClip">
                      <path d={CEREBELLUM_PATH} />
                    </clipPath>
                    <linearGradient id="topHighlight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="white" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <ellipse cx="262" cy="350" rx="140" ry="18"
                    fill="rgba(30,50,120,0.12)" />

                  <path d={BRAIN_CLIP} fill="url(#brainGrad)"
                    stroke="#8a9bbf" strokeWidth="1.5" />

                  <g clipPath="url(#brainClip)">
                    <path d={FRONTAL_PATH}
                      fill={selected === 'frontal' ? '#3B82F6' : '#3B82F688'}
                      className="cursor-pointer transition-all duration-200"
                      onClick={() => setSelected(selected === 'frontal' ? null : 'frontal')}
                    />
                    <path d={PARIETAL_PATH}
                      fill={selected === 'parietal' ? '#8B5CF6' : '#8B5CF666'}
                      className="cursor-pointer transition-all duration-200"
                      onClick={() => setSelected(selected === 'parietal' ? null : 'parietal')}
                    />
                    <path d={TEMPORAL_PATH}
                      fill={selected === 'temporal' ? '#10B981' : '#10B98166'}
                      className="cursor-pointer transition-all duration-200"
                      onClick={() => setSelected(selected === 'temporal' ? null : 'temporal')}
                    />
                    <path d={OCCIPITAL_PATH}
                      fill={selected === 'occipital' ? '#F59E0B' : '#F59E0B66'}
                      className="cursor-pointer transition-all duration-200"
                      onClick={() => setSelected(selected === 'occipital' ? null : 'occipital')}
                    />

                    {SULCI.map((d, i) => (
                      <path key={i} d={d}
                        fill="none"
                        stroke="rgba(80,100,150,0.28)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    ))}

                    <ellipse cx="248" cy="200" rx="52" ry="14"
                      fill={selected === 'corpus_callosum' ? '#7C3AED' : '#7C3AED55'}
                      className="cursor-pointer transition-all duration-200"
                      onClick={() => setSelected(selected === 'corpus_callosum' ? null : 'corpus_callosum')}
                    />

                    <ellipse cx="200" cy="242" rx="28" ry="12"
                      fill={selected === 'hippocampus' ? '#EF4444' : '#EF444460'}
                      stroke={selected === 'hippocampus' ? '#EF4444' : 'none'}
                      strokeWidth="1"
                      className="cursor-pointer transition-all duration-200"
                      onClick={() => setSelected(selected === 'hippocampus' ? null : 'hippocampus')}
                    />

                    <path d={BRAIN_CLIP} fill="url(#topHighlight)" />
                  </g>

                  <path d={BRAIN_CLIP}
                    fill="none"
                    stroke="#6b7eb0"
                    strokeWidth="2"
                  />

                  <path d={CEREBELLUM_PATH}
                    fill={selected === 'cerebellum' ? '#6366F1' : '#6366F177'}
                    stroke="#5558bb"
                    strokeWidth="1.5"
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => setSelected(selected === 'cerebellum' ? null : 'cerebellum')}
                  />
                  <g clipPath="url(#cerebClip)">
                    {["M 345,340 C 360,338 380,338 400,342",
                      "M 340,348 C 358,346 378,346 398,350",
                      "M 348,356 C 364,354 382,355 398,358",
                    ].map((d, i) => (
                      <path key={i} d={d} fill="none"
                        stroke="rgba(80,80,180,0.3)"
                        strokeWidth="1.2" strokeLinecap="round" />
                    ))}
                  </g>

                  {/* ── Etiquetas con líneas ── */}
                  {Object.entries(REGIONS).map(([key, r]) => {
                    const isActive = selected === key;
                    return (
                      <g key={key}
                        className="cursor-pointer"
                        onClick={() => setSelected(selected === key ? null : key)}
                      >
                        <line
                          x1={r.lineX1} y1={r.lineY1}
                          x2={r.lineX2} y2={r.lineY2}
                          stroke={isActive ? r.color : '#94a3b8'}
                          strokeWidth={isActive ? 2 : 1}
                          strokeDasharray={key === 'hippocampus' || key === 'corpus_callosum' ? '3,2' : undefined}
                        />
                        <circle cx={r.lineX1} cy={r.lineY1} r="3"
                          fill={isActive ? r.color : '#94a3b8'} />
                        <text
                          x={r.labelX} y={r.labelY}
                          fontSize="11.5"
                          fontWeight={isActive ? '800' : '700'}
                          stroke="#ffffff"
                          strokeWidth="4"
                          strokeLinejoin="round"
                          paintOrder="stroke"
                          fill={isActive ? r.color : '#1f2937'}
                          textAnchor={r.labelX < 240 ? 'end' : 'start'}
                          fontFamily="Inter, sans-serif"
                        >
                          {r.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                <p className="text-center text-xs text-gray-400 mt-2 italic">
                  {t.sideView}
                </p>
              </div>

              {/* ── Panel de información ── */}
              <div className="lg:col-span-2">
                {sel ? (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 rounded-full flex-shrink-0"
                        style={{ backgroundColor: sel.color }} />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{sel.name}</h3>
                        <p className="text-sm text-gray-500">{sel.subtitle}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-xl border shadow-sm">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{t.functionLabel}</p>
                      <p className="text-gray-800 text-sm leading-relaxed">{sel.function}</p>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
                        {t.researchLabel}
                      </p>
                      <p className="text-gray-800 text-sm leading-relaxed">{sel.observation}</p>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-xl border text-xs text-gray-500 flex items-start gap-2">
                      <Info size={14} className="mt-0.5 flex-shrink-0 text-gray-400" />
                      <span>{sel.note}</span>
                    </div>

                    <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl text-xs text-amber-700 flex items-start gap-2">
                      <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                      <span>{t.caveat}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-center text-gray-400">
                    <Brain size={52} className="mb-4 opacity-30" />
                    <p className="text-base font-medium text-gray-600 mb-1">{t.exploreTitle}</p>
                    <p className="text-sm">{t.exploreDesc}</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Lista de regiones ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {Object.entries(REGIONS).map(([key, r]) => (
            <button
              key={key}
              onClick={() => setSelected(selected === key ? null : key)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                selected === key
                  ? 'border-2 shadow-md'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
              }`}
              style={selected === key ? { borderColor: r.color, background: r.color + '18' } : {}}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: r.color }} />
                <span className="text-xs font-semibold text-gray-800 leading-tight">{r.name}</span>
              </div>
              <p className="text-xs text-gray-500 leading-snug">{r.subtitle}</p>
            </button>
          ))}
        </div>

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
