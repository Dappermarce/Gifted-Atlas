import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Info, Pause, Play, RotateCcw, Tags, ZoomIn, ZoomOut } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

type View = "surface" | "internal";
type RegionId = "frontal" | "parietal" | "temporal" | "occipital" | "cerebellum" | "hippocampus" | "callosum";
type Copy = { name: string; subtitle: string; function: string; example: string; evidence: string; limit: string };
type Region = { id: RegionId; view: View; color: string; point: [number, number]; path: string; source: { label: string; url: string }; es: Copy; en: Copy };

// Original vector illustration. Approximate educational boundaries, not imaging data.
const CORTEX = "M103 249 C86 241 80 222 86 205 C77 186 86 164 100 154 C99 132 115 113 136 106 C143 85 165 74 188 74 C203 57 229 55 250 61 C268 45 297 48 316 57 C343 45 369 54 385 64 C413 60 440 72 454 88 C481 91 502 110 508 130 C532 143 543 164 541 184 C558 203 555 226 544 242 C548 264 530 280 510 286 C493 304 468 305 448 304 L413 320 C398 336 378 341 359 334 C336 351 310 354 292 345 C269 352 247 343 238 329 C216 331 200 319 195 303 C177 298 164 283 162 269 C137 277 111 268 103 249 Z";
const CEREBELLUM = "M415 306 C439 297 469 298 494 309 C520 321 528 342 518 361 C508 383 480 393 452 387 C426 392 401 378 397 357 C390 337 399 315 415 306 Z";
const REGIONS: Region[] = [
  { id: "frontal", view: "surface", color: "#af8fe9", point: [200, 170], path: "M65 265 L65 110 L180 42 L300 36 C302 74 279 104 280 136 C266 158 275 178 259 192 C253 213 247 230 226 244 L163 269 L100 287 Z", source: { label: "Jung & Haier (2007) · P-FIT", url: "https://pubmed.ncbi.nlm.nih.gov/17655784/" },
    es: { name: "Lóbulo frontal", subtitle: "Sostener una intención", function: "Participa en planificar, resolver problemas y regular acciones junto con otras áreas.", example: "Mantener un objetivo mientras comparas distintas maneras de resolver una tarea.", evidence: "La revisión que propuso P-FIT reunió evidencia de neuroimagen sobre una red distribuida que incluye áreas frontales y parietales, además de regiones temporales y occipitales. El punto importante no es encontrar un ‘centro de inteligencia’, sino estudiar cómo se integra la información.", limit: "P-FIT es un modelo sobre diferencias en inteligencia, no una prueba para identificar altas capacidades ni una lectura individual de una imagen cerebral." },
    en: { name: "Frontal lobe", subtitle: "Holding an intention", function: "Contributes to planning, problem-solving and regulating actions alongside other areas.", example: "Keeping a goal in mind while comparing different ways to solve a task.", evidence: "The review that proposed P-FIT brought together neuroimaging evidence for a distributed network involving frontal and parietal areas, as well as temporal and occipital regions. The point is not to locate an ‘intelligence center’, but to study how information is integrated.", limit: "P-FIT is a model of differences in intelligence, not a test for identifying giftedness or interpreting one person's brain image." } },
  { id: "parietal", view: "surface", color: "#887dd9", point: [370, 145], path: "M300 36 L425 36 L470 93 C451 114 460 145 441 172 C433 190 421 208 404 219 C370 218 345 228 314 229 L226 244 C247 230 253 213 259 192 C275 178 266 158 280 136 C279 104 302 74 300 36 Z", source: { label: "Jung & Haier (2007) · P-FIT", url: "https://pubmed.ncbi.nlm.nih.gov/17655784/" },
    es: { name: "Lóbulo parietal", subtitle: "Relacionar lo que percibimos", function: "Integra información sensorial y participa en la orientación espacial y la atención.", example: "Situar las piezas de un problema espacial y relacionarlas entre sí.", evidence: "P-FIT da un papel central a regiones parietales superiores e inferiores en el procesamiento y la abstracción de información antes de su intercambio con áreas frontales.", limit: "Es una síntesis de asociaciones entre tareas, puntuaciones y actividad cerebral. No significa que el lóbulo parietal trabaje solo ni que permita identificar altas capacidades." },
    en: { name: "Parietal lobe", subtitle: "Connecting what we perceive", function: "Integrates sensory information and contributes to spatial orientation and attention.", example: "Locating the pieces of a spatial problem and relating them to one another.", evidence: "P-FIT gives superior and inferior parietal regions a central role in processing and abstracting information before exchanging it with frontal areas.", limit: "It synthesizes associations among tasks, scores and brain activity. It does not mean that the parietal lobe works alone or can identify giftedness." } },
  { id: "temporal", view: "surface", color: "#bb80b8", point: [298, 291], path: "M163 269 C190 262 207 254 226 244 C261 242 282 225 314 229 C345 228 370 218 404 219 C422 243 421 278 413 320 L365 366 L259 368 L176 325 Z", source: { label: "Jung & Haier (2007) · P-FIT", url: "https://pubmed.ncbi.nlm.nih.gov/17655784/" },
    es: { name: "Lóbulo temporal", subtitle: "Dar contexto a sonidos y recuerdos", function: "Interviene en procesar sonidos; distintas áreas temporales también participan en lenguaje y memoria.", example: "Reconocer una voz y conectar lo que escuchas con lo que ya conoces.", evidence: "La revisión P-FIT incluye áreas temporales vinculadas al procesamiento de información aprendida. Su participación depende del tipo de tarea y de la red activada.", limit: "La memoria, el lenguaje y la inteligencia están distribuidos. Esta división por lóbulos orienta; no demuestra un perfil de capacidad a partir de una región." },
    en: { name: "Temporal lobe", subtitle: "Giving sounds and memories context", function: "Processes sounds; different temporal areas also contribute to language and memory.", example: "Recognizing a voice and connecting what you hear with what you already know.", evidence: "The P-FIT review includes temporal areas associated with processing learned information. Their contribution depends on the task and the network engaged.", limit: "Memory, language and intelligence are distributed. This division by lobes provides orientation; one region cannot demonstrate an ability profile." } },
  { id: "occipital", view: "surface", color: "#777fc7", point: [498, 216], path: "M470 93 L574 116 L574 277 L496 323 L413 320 C421 278 422 243 404 219 C421 208 433 190 441 172 C460 145 451 114 470 93 Z", source: { label: "Jung & Haier (2007) · P-FIT", url: "https://pubmed.ncbi.nlm.nih.gov/17655784/" },
    es: { name: "Lóbulo occipital", subtitle: "Construir la experiencia visual", function: "Procesa información visual en colaboración con circuitos que continúan hacia otras regiones.", example: "Distinguir bordes y formas antes de reconocer un objeto.", evidence: "P-FIT incorpora áreas occipitales de asociación visual en las primeras fases de procesamiento de información. Eso es más preciso que atribuir una supuesta ‘velocidad visual superior’ a todo el lóbulo.", limit: "Ver no es una operación única. El reconocimiento, la atención y la interpretación requieren redes más amplias, y el modelo no diagnostica altas capacidades." },
    en: { name: "Occipital lobe", subtitle: "Building visual experience", function: "Processes visual information with circuits extending into other regions.", example: "Distinguishing edges and shapes before recognizing an object.", evidence: "P-FIT includes occipital visual-association areas in early information-processing stages. This is more precise than attributing supposedly ‘superior visual speed’ to the entire lobe.", limit: "Vision is not a single operation. Recognition, attention and interpretation require wider networks, and the model does not diagnose giftedness." } },
  { id: "cerebellum", view: "surface", color: "#978cb9", point: [459, 350], path: CEREBELLUM, source: { label: "Schmahmann & Sherman (1998)", url: "https://pubmed.ncbi.nlm.nih.gov/9577385/" },
    es: { name: "Cerebelo", subtitle: "Afinar coordinación y secuencias", function: "Contribuye al equilibrio y al ajuste de movimientos; también participa en circuitos relacionados con lenguaje, organización espacial y regulación.", example: "Ajustar una secuencia mientras una habilidad se vuelve más fluida con la práctica.", evidence: "El estudio clásico de Schmahmann y Sherman examinó pacientes con enfermedad limitada al cerebelo y documentó cambios cognitivos y afectivos además de los motores. Amplió la pregunta sobre el cerebelo; no estudió altas capacidades.", limit: "Esta evidencia clínica muestra participación en redes, no un mecanismo de ‘procesamiento de alta velocidad’ ni un marcador de talento." },
    en: { name: "Cerebellum", subtitle: "Refining coordination and sequences", function: "Contributes to balance and movement adjustment; it also participates in circuits related to language, spatial organization and regulation.", example: "Adjusting a sequence as a practiced skill becomes more fluent.", evidence: "The classic Schmahmann and Sherman study examined patients with disease confined to the cerebellum and documented cognitive and affective changes in addition to motor ones. It expanded the question about the cerebellum; it did not study giftedness.", limit: "This clinical evidence shows participation in networks, not a ‘high-speed processing’ mechanism or a talent marker." } },
  { id: "hippocampus", view: "internal", color: "#d49fbc", point: [346, 278], path: "M400 223 C416 236 412 255 396 271 C378 289 352 298 329 294 C313 292 299 300 292 309 C286 319 269 318 266 307 C260 291 273 276 292 274 C312 270 335 280 355 272 C378 264 395 249 389 236 C385 226 393 217 400 223 Z", source: { label: "NINDS · Brain Basics", url: "https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-know-your-brain" },
    es: { name: "Hipocampo", subtitle: "Formar nuevos recuerdos", function: "Es importante para formar recuerdos y para el aprendizaje espacial.", example: "Recordar dónde ocurrió una experiencia y relacionarla con su contexto.", evidence: "La anatomía y la evidencia clínica sitúan al hipocampo dentro de sistemas de memoria y orientación. Encontrar asociaciones de volumen en un estudio no permite convertir su tamaño en una medida general de aprendizaje.", limit: "Es una estructura interna mostrada como proyección esquemática. No se ve en una superficie intacta, no equivale a toda la memoria y no identifica altas capacidades." },
    en: { name: "Hippocampus", subtitle: "Forming new memories", function: "Important for forming memories and for spatial learning.", example: "Remembering where an experience happened and relating it to its context.", evidence: "Anatomy and clinical evidence place the hippocampus within memory and orientation systems. Finding volume associations in one study does not turn its size into a general measure of learning.", limit: "This is an internal structure shown as a schematic projection. It is not visible on an intact surface, is not the whole memory system and does not identify giftedness." } },
  { id: "callosum", view: "internal", color: "#c6b7f3", point: [315, 170], path: "M223 218 C199 212 196 190 213 171 C239 141 303 133 355 144 C395 151 425 173 420 196 C416 213 397 220 384 208 C393 194 372 177 344 173 C299 165 255 174 238 191 C229 200 232 207 238 211 Z", source: { label: "Luders et al. (2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17689267/" },
    es: { name: "Cuerpo calloso", subtitle: "Conectar hemisferios", function: "Es un gran conjunto de fibras que comunica los dos hemisferios cerebrales.", example: "Permitir el intercambio de información entre áreas de ambos lados del cerebro.", evidence: "Un estudio de 62 adultos sanos encontró correlaciones positivas localizadas entre grosor calloso y puntuaciones de inteligencia después de controlar el tamaño cerebral. Recuperar este dato exige conservar también el tamaño de la muestra y la palabra ‘correlación’.", limit: "Una asociación grupal no permite inferir la capacidad de una persona, y grosor no equivale automáticamente a mayor velocidad o mielinización. La imagen no representa tractografía real." },
    en: { name: "Corpus callosum", subtitle: "Connecting hemispheres", function: "A large bundle of fibers connecting the two cerebral hemispheres.", example: "Allowing information to pass between areas on both sides of the brain.", evidence: "A study of 62 healthy adults found localized positive correlations between callosal thickness and intelligence scores after controlling for brain size. Preserving this result also means preserving the sample size and the word ‘correlation’.", limit: "A group association cannot establish one person's ability, and thickness does not automatically mean greater speed or myelination. This image is not real tractography." } },
];

// Irregular, branching cortical folds: original paths, not a patient scan.
const FOLDS = [
  "M107 154 C121 144 139 154 141 136 S170 106 179 118 S174 151 194 148 C218 143 212 118 231 111",
  "M99 190 C108 176 129 178 139 187 S165 196 172 177 S168 155 154 158",
  "M110 223 C123 211 141 214 151 224 S174 233 183 217 S210 202 220 210",
  "M138 252 C151 238 169 253 185 244 S197 222 214 232",
  "M184 89 C186 105 205 99 216 86 S241 78 249 89 C260 105 242 119 245 137",
  "M216 166 C226 156 232 164 240 155 S248 137 260 139",
  "M199 184 C203 170 187 161 197 152",
  "M264 70 C279 75 282 83 270 98 S265 117 274 125",
  "M315 72 C332 64 348 75 342 88 S319 101 322 116 C324 132 346 126 350 140",
  "M297 95 C310 108 291 124 297 140 S318 151 310 168 C307 181 293 187 301 201",
  "M371 83 C356 98 365 111 382 111 S407 122 399 137 C389 151 371 142 368 158",
  "M417 107 C430 119 417 129 425 142 S433 159 418 169 C405 181 389 173 382 186",
  "M333 177 C344 165 360 176 354 191 S328 201 327 215",
  "M453 138 C466 138 480 149 472 162 S455 177 468 185 C480 194 498 181 512 193",
  "M477 113 C478 128 496 124 499 140",
  "M500 157 C515 164 524 174 518 187",
  "M439 212 C448 201 461 210 459 225 S478 244 487 232 C496 219 510 222 522 234",
  "M444 250 C458 242 462 258 477 260 S506 251 516 267",
  "M429 284 C443 271 460 283 479 279",
  "M195 280 C211 269 219 281 234 271 S245 249 263 257 C276 263 284 254 291 247",
  "M225 304 C233 287 249 299 263 291 S276 271 294 278 C310 286 323 275 327 259",
  "M273 326 C279 309 295 322 310 310 S320 288 339 296 C354 304 374 292 375 274",
  "M321 337 C334 326 347 332 359 321 S379 322 391 308",
  "M352 246 C365 235 380 243 389 237",
];

export default function BrainExplorer() {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<RegionId>("frontal");
  const [hovered, setHovered] = useState<RegionId | null>(null);
  const [view, setView] = useState<View>("surface");
  const [labels, setLabels] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [playing, setPlaying] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const uid = `brain-${useId().replace(/:/g, "")}`;
  const currentIndex = REGIONS.findIndex(region => region.id === selected);
  const region = REGIONS[currentIndex];
  const copy = region[lang];
  const text = lang === "es" ? {
    surface: "Superficie", internal: "Estructuras internas", controls: "Controles del modelo cerebral", labels: "Etiquetas", zoomIn: "Acercar", zoomOut: "Alejar", reset: "Restablecer vista", play: "Recorrer", pause: "Pausar", previous: "Región anterior", next: "Región siguiente", regions: "Seleccionar una región", function: "En qué participa", example: "En una situación cotidiana", evidence: "Qué encontró la investigación", limit: "Lo que no podemos concluir", source: "Abrir fuente", surfaceNote: "Hemisferio izquierdo · vista lateral ilustrativa", internalNote: "Proyección interna esquemática · no es un corte anatómico", instruction: "Pasa el cursor para localizar. Pulsa una región para explorar.", touch: "También puedes elegir una región en los botones inferiores.", anterior: "Anterior", posterior: "Posterior", selected: "Región seleccionada", preview: "Vista previa", model: "Modelo educativo, no diagnóstico", footer: "Los colores distinguen regiones; no indican actividad ni capacidad. Los límites son aproximados y los ejemplos describen redes, no funciones exclusivas de una zona."
  } : {
    surface: "Surface", internal: "Internal structures", controls: "Brain model controls", labels: "Labels", zoomIn: "Zoom in", zoomOut: "Zoom out", reset: "Reset view", play: "Guided tour", pause: "Pause", previous: "Previous region", next: "Next region", regions: "Select a region", function: "What it contributes to", example: "In an everyday situation", evidence: "What the research found", limit: "What we cannot conclude", source: "Open source", surfaceNote: "Left hemisphere · illustrative lateral view", internalNote: "Schematic internal projection · not an anatomical section", instruction: "Hover to locate. Select a region to explore.", touch: "You can also choose a region using the buttons below.", anterior: "Anterior", posterior: "Posterior", selected: "Selected region", preview: "Preview", model: "Educational model, not diagnostic", footer: "Colors distinguish regions; they do not indicate activity or ability. Boundaries are approximate, and examples describe networks rather than functions exclusive to one area."
  };

  const select = (id: RegionId) => {
    const next = REGIONS.find(item => item.id === id)!;
    setSelected(id); setView(next.view); setHovered(null); setPlaying(false);
  };
  const changeView = (next: View) => {
    setView(next); setHovered(null); setPlaying(false);
    if (region.view !== next) setSelected(next === "surface" ? "frontal" : "callosum");
  };
  const move = (direction: number) => select(REGIONS[(currentIndex + direction + REGIONS.length) % REGIONS.length].id);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      if (currentIndex === REGIONS.length - 1) { setPlaying(false); return; }
      const next = REGIONS[currentIndex + 1];
      setSelected(next.id); setView(next.view); setHovered(null);
    }, 7000);
    return () => window.clearTimeout(timer);
  }, [playing, currentIndex]);

  useEffect(() => {
    const pauseWhenHidden = () => { if (document.hidden) setPlaying(false); };
    document.addEventListener("visibilitychange", pauseWhenHidden);
    const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) setPlaying(false); });
    if (root.current) observer.observe(root.current);
    return () => { document.removeEventListener("visibilitychange", pauseWhenHidden); observer.disconnect(); };
  }, []);

  const surfaceRegions = REGIONS.filter(item => item.view === "surface" && item.id !== "cerebellum");
  const highlighted = hovered || selected;
  const renderRegion = (item: Region) => (
    <path key={item.id} d={item.path} fill={`url(#${uid}-${item.id})`} stroke={highlighted === item.id ? "#f2e9ff" : "#21162d"} strokeWidth={highlighted === item.id ? 2.6 : 1.5}
      className={`brain-region ${highlighted === item.id ? "is-highlighted" : ""}`} opacity={hovered && hovered !== item.id ? 0.52 : 1}
      role="button" tabIndex={0} aria-label={item[lang].name} aria-pressed={selected === item.id}
      onMouseEnter={() => setHovered(item.id)} onMouseLeave={() => setHovered(null)} onClick={() => select(item.id)}
      onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); select(item.id); } }}>
      <title>{item[lang].name}</title>
    </path>
  );

  return (
    <div className="brain-explorer" ref={root}>
      <div className="brain-toolbar" role="group" aria-label={text.controls}>
        <div className="brain-view-switch"><button aria-pressed={view === "surface"} onClick={() => changeView("surface")}>{text.surface}</button><button aria-pressed={view === "internal"} onClick={() => changeView("internal")}>{text.internal}</button></div>
        <div className="brain-tools">
          <button className="brain-label-toggle" aria-pressed={labels} onClick={() => setLabels(!labels)}><Tags size={16} /><span>{text.labels}</span></button>
          <button aria-label={text.zoomOut} disabled={zoom === 1} onClick={() => setZoom(value => Math.max(1, +(value - 0.15).toFixed(2)))}><ZoomOut size={17} /></button>
          <span className="brain-zoom-level" aria-live="polite">{Math.round(zoom * 100)}%</span>
          <button aria-label={text.zoomIn} disabled={zoom >= 1.45} onClick={() => setZoom(value => Math.min(1.45, +(value + 0.15).toFixed(2)))}><ZoomIn size={17} /></button>
          <button aria-label={text.reset} onClick={() => { select("frontal"); setZoom(1); setLabels(true); }}><RotateCcw size={16} /></button>
        </div>
      </div>

      <div className="brain-workspace">
        <div className="brain-stage">
          <div className="brain-stage-caption"><span>GA / 01</span><p>{view === "surface" ? text.surfaceNote : text.internalNote}</p></div>
          <svg viewBox="30 5 560 430" className="brain-model" role="group" aria-labelledby={`${uid}-title ${uid}-desc`}>
            <title id={`${uid}-title`}>{lang === "es" ? "Explorador cerebral interactivo" : "Interactive brain explorer"}</title>
            <desc id={`${uid}-desc`}>{text.instruction} {text.touch} {text.footer}</desc>
            <defs>
              <clipPath id={`${uid}-cortex`}><path d={CORTEX} /></clipPath>
              <clipPath id={`${uid}-cerebellum-clip`}><path d={CEREBELLUM} /></clipPath>
              {REGIONS.map(item => <radialGradient key={item.id} id={`${uid}-${item.id}`} cx="34%" cy="22%" r="90%"><stop stopColor={item.color} /><stop offset="0.52" stopColor={item.color} stopOpacity="0.83" /><stop offset="1" stopColor="#3b254e" /></radialGradient>)}
              <radialGradient id={`${uid}-light`} cx="32%" cy="18%" r="80%"><stop stopColor="#f6ebff" stopOpacity="0.25" /><stop offset="0.58" stopColor="#251c36" stopOpacity="0" /><stop offset="1" stopColor="#08060e" stopOpacity="0.55" /></radialGradient>
              <linearGradient id={`${uid}-stem`} x1="0" y1="0" x2="1" y2="0"><stop stopColor="#34283d" /><stop offset="0.5" stopColor="#9c88ac" /><stop offset="1" stopColor="#45344f" /></linearGradient>
            </defs>
            <g className="brain-model-transform" style={{ transform: `translate(310px, 215px) scale(${zoom}) translate(-310px, -215px)` }}>
              <ellipse cx="325" cy="405" rx="172" ry="10" fill="#000" opacity="0.24" aria-hidden="true" />
              <path d="M365 292 C364 324 350 346 361 365 L381 401 Q390 410 400 400 L387 365 C380 348 399 329 401 306 Z" fill={`url(#${uid}-stem)`} stroke="#71607f" strokeWidth="1.2" aria-hidden="true" />
              <g opacity={view === "internal" ? 0.38 : 1}>
                {view === "surface" ? renderRegion(REGIONS[4]) : <path d={CEREBELLUM} fill="#6d5d80" />}
                <g clipPath={`url(#${uid}-cerebellum-clip)`} className="brain-decoration">
                  {Array.from({ length: 12 }, (_, i) => <path key={i} d={`M390 ${308 + i * 7} Q451 ${293 + i * 8} 528 ${320 + i * 6}`} fill="none" stroke="#24172f" strokeOpacity="0.62" strokeWidth="2" />)}
                  <path d="M457 319 Q438 349 456 381" fill="none" stroke="#d8c5ed" strokeOpacity="0.28" strokeWidth="1.5" />
                </g>
              </g>
              <path d={CORTEX} fill="#312639" stroke="#837093" strokeWidth="1.4" opacity={view === "internal" ? 0.28 : 1} aria-hidden="true" />
              <g clipPath={`url(#${uid}-cortex)`}>
                {view === "surface" && surfaceRegions.map(renderRegion)}
                <g className="brain-decoration" opacity={view === "internal" ? 0.12 : 1}>
                  {FOLDS.map((d, i) => <g key={i}><path d={d} fill="none" stroke="#281b36" strokeOpacity="0.67" strokeWidth="6" strokeLinecap="round" /><path d={d} fill="none" stroke="#ecdaff" strokeOpacity="0.24" strokeWidth="1.3" strokeLinecap="round" transform="translate(0 3)" /></g>)}
                  <path d="M300 58 C302 86 273 109 280 136 C266 158 275 178 259 192 C253 213 247 230 226 244" fill="none" stroke="#291936" strokeWidth="4" strokeLinecap="round" />
                  <path d="M163 269 C190 262 207 254 226 244 C261 242 282 225 314 229 C345 228 370 218 404 219" fill="none" stroke="#291936" strokeWidth="4" strokeLinecap="round" />
                  <path d={CORTEX} fill={`url(#${uid}-light)`} />
                </g>
                {view === "internal" && <><path d="M232 225 C230 175 373 152 400 202 C421 241 362 260 314 246" fill="none" stroke="#7c668d" strokeWidth="1" strokeDasharray="4 6" className="brain-decoration" />{REGIONS.filter(item => item.view === "internal").map(renderRegion)}<path d="M236 196 Q306 150 393 192 M278 304 Q303 280 337 288 Q387 280 400 237" fill="none" stroke="#f7e9ff" strokeOpacity="0.42" strokeWidth="1.5" className="brain-decoration" /></>}
              </g>
              <path d={CORTEX} fill="none" stroke="#d4bfe9" strokeOpacity={view === "internal" ? 0.25 : 0.55} strokeWidth="1.1" className="brain-decoration" />
              {labels && REGIONS.filter(item => item.view === view).map(item => (
                <g key={item.id} transform={`translate(${item.point[0]} ${item.point[1]})`} className="brain-decoration" aria-hidden="true">
                  <circle r="14" fill={highlighted === item.id ? "#f0e5ff" : "#17101f"} stroke="#d3c0eb" strokeWidth="1" />
                  <text textAnchor="middle" dy="4" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="800" fill={highlighted === item.id ? "#30203f" : "#e0d0f0"}>{String(REGIONS.indexOf(item) + 1).padStart(2, "0")}</text>
                </g>
              ))}
            </g>
            <g className="brain-decoration brain-orientation" aria-hidden="true"><text x="54" y="421">{text.anterior}</text><path d="M124 417 H174 M124 417 l6 -4 M124 417 l6 4" /><text x="566" y="421" textAnchor="end">{text.posterior}</text><path d="M486 417 H436 M486 417 l-6 -4 M486 417 l-6 4" /></g>
          </svg>
          <div className="brain-stage-status"><span><i style={{ background: REGIONS.find(item => item.id === highlighted)!.color }} />{hovered ? text.preview : text.selected}</span><strong>{REGIONS.find(item => item.id === highlighted)![lang].name}</strong></div>
        </div>

        <article className="brain-detail" aria-live={playing ? "off" : "polite"}>
          <div className="brain-detail-top"><span>{String(currentIndex + 1).padStart(2, "0")} / 07</span><small>{region.view === "surface" ? text.surface : text.internal}</small></div>
          <h3>{copy.name}</h3><p className="brain-detail-subtitle">{copy.subtitle}</p>
          <div className="brain-detail-section"><h4>{text.function}</h4><p>{copy.function}</p></div>
          <div className="brain-detail-section"><h4>{text.example}</h4><p>{copy.example}</p></div>
          <div className="brain-detail-section brain-detail-evidence"><h4>{text.evidence}</h4><p>{copy.evidence}</p></div>
          <div className="brain-detail-limit"><Info size={16} /><div><h4>{text.limit}</h4><p>{copy.limit}</p></div></div>
          <a href={region.source.url} target="_blank" rel="noopener noreferrer">{text.source} · {region.source.label} <ArrowUpRight size={15} /></a>
        </article>
      </div>

      <div className="brain-tour"><p>{text.instruction}<small>{text.touch}</small></p><div><button aria-label={text.previous} onClick={() => move(-1)}><ChevronLeft size={18} /></button><button className="brain-tour-play" aria-pressed={playing} onClick={() => { if (!playing && currentIndex === REGIONS.length - 1) { setSelected("frontal"); setView("surface"); } setPlaying(!playing); }}>{playing ? <Pause size={16} /> : <Play size={16} />}{playing ? text.pause : text.play}</button><button aria-label={text.next} onClick={() => move(1)}><ChevronRight size={18} /></button></div></div>
      <div className="brain-region-index" role="group" aria-label={text.regions}>{REGIONS.map((item, index) => <button key={item.id} aria-pressed={selected === item.id} onClick={() => select(item.id)}><span style={{ color: item.color }}>{String(index + 1).padStart(2, "0")}</span><strong>{item[lang].name}</strong><small>{item.view === "internal" ? text.internal : text.surface}</small></button>)}</div>
      <p className="brain-model-note"><Info size={16} /><span><strong>{text.model}.</strong> {text.footer}</span></p>
    </div>
  );
}
