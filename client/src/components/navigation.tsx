import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Brain, ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

type NavItem = { id: string; label: string; note: string };
type NavGroup = { id: string; label: string; eyebrow: string; title: string; description: string; items: NavItem[] };

export default function Navigation() {
  const { lang, toggleLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("inicio");
  const [dark, setDark] = useState(false);
  const [atlasNote, setAtlasNote] = useState<{ text: string } | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const noteTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const brandClickCount = useRef(0);

  const openPreview = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenGroup(id);
  };
  const closePreview = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenGroup(null), 180);
  };

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (noteTimer.current) clearTimeout(noteTimer.current);
  }, []);

  const brandNotes = useMemo(() => lang === "es" ? [
    "Detectaste una regularidad que no estaba señalizada.",
    "La exploración también revela cómo se aproxima una persona a la información.",
    "Seguiste buscando después de que desapareciera la instrucción.",
    "El patrón estaba ahí. La indicación para buscarlo, no.",
  ] : [
    "You detected a regularity that was not signposted.",
    "Exploration also reveals how a person approaches information.",
    "You kept looking after the instruction disappeared.",
    "The pattern was there. The instruction to look for it was not.",
  ], [lang]);

  const groups = useMemo<NavGroup[]>(() => lang === "es" ? [
    {
      id: "atlas", label: "Mapa del atlas", eyebrow: "Empieza con una pregunta", title: "No necesitas leerlo en orden.",
      description: "El índice reúne rutas breves para quien llega por curiosidad y capas más profundas para quien decide quedarse.",
      items: [
        { id: "indice-atlas", label: "Índice de temas", note: "Cuatro rutas para orientarte" },
        { id: "nota-del-autor", label: "Cómo está construido", note: "Evidencia, límites y persona" },
      ],
    },
    {
      id: "comprender", label: "Comprender", eyebrow: "Más que una cifra", title: "Modelos que explican partes, no vidas completas.",
      description: "Compara definiciones, desarrollo del talento, perfiles cognitivos y evidencia neurológica sin convertir un marco en diagnóstico.",
      items: [
        { id: "superdotacion", label: "Altas capacidades", note: "Definiciones y dimensiones" },
        { id: "mapa-superdotacion", label: "Mapa del talento", note: "Capacidad, contexto y desarrollo" },
        { id: "neurociencia", label: "Neurociencia", note: "Tendencias de grupo y límites" },
        { id: "explorador-cerebral", label: "Explorador cerebral", note: "Regiones, evidencia y límites" },
        { id: "mapa-cerebro", label: "Redes cerebrales", note: "Una representación interactiva" },
      ],
    },
    {
      id: "evidencia", label: "Evidencia", eyebrow: "La certeza se gana", title: "Cómo sabemos lo que creemos saber.",
      description: "Métodos, historia y estadísticas con una distinción visible entre resultados, hipótesis y debates todavía abiertos.",
      items: [
        { id: "metodologia-investigacion", label: "Investigación", note: "Diseños, sesgos y lectura crítica" },
        { id: "cronologia-cientifica", label: "Historia interactiva", note: "Reproduce cada hito" },
        { id: "statistics", label: "Cifras con contexto", note: "Qué miden y qué no" },
      ],
    },
    {
      id: "identificar", label: "Identificar", eyebrow: "Evaluar no es etiquetar", title: "Una puntuación abre preguntas; no las cierra.",
      description: "Explora evaluación multimétodo, doble excepcionalidad y decisiones educativas sin convertir una actividad en diagnóstico.",
      items: [
        { id: "evaluacion-avanzada", label: "Evaluación", note: "Principios y actividad educativa" },
        { id: "mapa-evaluacion", label: "Ruta de evaluación", note: "Fuentes y decisiones" },
        { id: "psiquiatria", label: "Doble excepcionalidad", note: "Cruces que exigen contexto" },
      ],
    },
    {
      id: "biblioteca", label: "Biblioteca", eyebrow: "Seguir indagando", title: "El atlas no termina en el resumen.",
      description: "Fuentes, preguntas frecuentes y mitos organizados para poder comprobar, contrastar y continuar la investigación.",
      items: [
        { id: "recursos", label: "Recursos", note: "Instituciones y lecturas" },
        { id: "mitos", label: "Mitos", note: "Afirmaciones bajo revisión" },
        { id: "preguntas-frecuentes", label: "Preguntas frecuentes", note: "Respuestas con matices" },
        { id: "bibliografia", label: "Bibliografía", note: "Fuentes trazables" },
      ],
    },
  ] : [
    {
      id: "atlas", label: "Atlas map", eyebrow: "Begin with a question", title: "You do not need to read it in order.",
      description: "The index offers short routes for the curious and deeper layers for readers who decide to stay.",
      items: [
        { id: "indice-atlas", label: "Topic index", note: "Four routes to find your way" },
        { id: "nota-del-autor", label: "How it is built", note: "Evidence, limits and person" },
      ],
    },
    {
      id: "comprender", label: "Understand", eyebrow: "More than a score", title: "Models explain parts, not entire lives.",
      description: "Compare definitions, talent development, cognitive profiles and neurological evidence without turning a framework into a diagnosis.",
      items: [
        { id: "superdotacion", label: "Giftedness", note: "Definitions and dimensions" },
        { id: "mapa-superdotacion", label: "Talent map", note: "Ability, context and development" },
        { id: "neurociencia", label: "Neuroscience", note: "Group trends and limits" },
        { id: "explorador-cerebral", label: "Brain explorer", note: "Regions, evidence and limits" },
        { id: "mapa-cerebro", label: "Brain networks", note: "An interactive representation" },
      ],
    },
    {
      id: "evidencia", label: "Evidence", eyebrow: "Certainty is earned", title: "How we know what we think we know.",
      description: "Methods, history and statistics with a visible distinction between findings, hypotheses and open debates.",
      items: [
        { id: "metodologia-investigacion", label: "Research", note: "Designs, bias and critical reading" },
        { id: "cronologia-cientifica", label: "Interactive history", note: "Play every milestone" },
        { id: "statistics", label: "Numbers in context", note: "What they measure and what they do not" },
      ],
    },
    {
      id: "identificar", label: "Identify", eyebrow: "Assessment is not labeling", title: "A score opens questions; it does not close them.",
      description: "Explore multi-method assessment, twice exceptionality and educational decisions without turning an activity into diagnosis.",
      items: [
        { id: "evaluacion-avanzada", label: "Assessment", note: "Principles and learning activity" },
        { id: "mapa-evaluacion", label: "Assessment route", note: "Sources and decisions" },
        { id: "psiquiatria", label: "Twice exceptionality", note: "Overlaps that require context" },
      ],
    },
    {
      id: "biblioteca", label: "Library", eyebrow: "Keep investigating", title: "The atlas does not end at the summary.",
      description: "Sources, frequently asked questions and myths organized so readers can check, compare and continue the research.",
      items: [
        { id: "recursos", label: "Resources", note: "Institutions and readings" },
        { id: "mitos", label: "Myths", note: "Claims under review" },
        { id: "preguntas-frecuentes", label: "Frequently asked", note: "Answers with nuance" },
        { id: "bibliografia", label: "Bibliography", note: "Traceable sources" },
      ],
    },
  ], [lang]);

  useEffect(() => {
    const saved = localStorage.getItem("gifted-atlas-theme");
    const initial = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  useEffect(() => {
    const sectionIds = groups.flatMap(group => group.items.map(item => item.id));
    const update = () => {
      let current = "inicio";
      let nearestTop = -Infinity;
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        const top = element?.getBoundingClientRect().top;
        if (top !== undefined && top <= 130 && top > nearestTop) { current = id; nearestTop = top; }
      });
      setActiveSection(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [groups]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const active = document.activeElement;
        const group = active instanceof HTMLElement ? active.closest('.atlas-nav-group') : null;
        group?.querySelector<HTMLButtonElement>('.atlas-nav-trigger')?.focus();
        setOpenGroup(null);
        if (!group) {
          if (active instanceof HTMLElement && active.closest('.atlas-nav')) document.querySelector<HTMLButtonElement>('.atlas-menu-button')?.focus();
          setMenuOpen(false);
        }
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const setTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("gifted-atlas-theme", next ? "dark" : "light");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next ? "#09070d" : "#f7f5fb");
  };

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
    setOpenGroup(null);
  };

  const handleBrandClick = () => {
    goTo("inicio");
    brandClickCount.current += 1;
    if (brandClickCount.current % 5 !== 0) return;

    const index = brandClickCount.current / 5 - 1;
    setAtlasNote({ text: brandNotes[index] });
    if (noteTimer.current) clearTimeout(noteTimer.current);
    noteTimer.current = setTimeout(() => setAtlasNote(null), 5400);
    if (index === brandNotes.length - 1) brandClickCount.current = 0;
  };

  const activeGroup = groups.find(group => group.items.some(item => item.id === activeSection))?.id;

  return (
    <nav className="atlas-nav" aria-label={lang === "es" ? "Navegación principal" : "Main navigation"}>
      <div className="atlas-nav-shell">
        <button className="atlas-brand" onClick={handleBrandClick} aria-label="Gifted Atlas — Home">
          <span className="atlas-brand-mark"><Brain size={20} /></span>
          <span className="atlas-brand-copy"><strong>Gifted Atlas</strong><small>{lang === "es" ? "Psicología de las altas capacidades" : "Psychology of giftedness"}</small></span>
        </button>

        <div className={`atlas-nav-groups ${menuOpen ? "is-open" : ""}`}>
          {groups.map(group => (
            <div
              className={`atlas-nav-group ${openGroup === group.id ? "is-open" : ""}`}
              key={group.id}
              onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) openPreview(group.id); }}
              onMouseLeave={() => { if (window.matchMedia("(hover: hover)").matches) closePreview(); }}
              onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenGroup(null); }}
            >
              <button
                className={`atlas-nav-trigger ${activeGroup === group.id ? "is-active" : ""}`}
                onClick={() => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenGroup(openGroup === group.id ? null : group.id); }}
                aria-expanded={openGroup === group.id}
                aria-controls={`nav-panel-${group.id}`}
              >
                {group.label}<ChevronDown size={13} />
              </button>
              <div id={`nav-panel-${group.id}`} className="atlas-nav-panel">
                <div className="atlas-panel-story">
                  <span>{group.eyebrow}</span>
                  <h2>{group.title}</h2>
                  <p>{group.description}</p>
                  <div className="atlas-thread" aria-hidden="true"><i /><i /><i /><i /></div>
                </div>
                <div className={`atlas-panel-links ${group.items.length === 2 ? "is-compact" : ""} ${group.items.length % 2 === 1 ? "is-odd" : ""}`}>
                  {group.items.map(item => (
                    <button key={item.id} onClick={() => goTo(item.id)}>
                      <span><strong>{item.label}</strong><small>{item.note}</small></span><ArrowUpRight size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="atlas-nav-actions">
          <button onClick={setTheme} aria-label={lang === "es" ? "Cambiar tema" : "Change theme"} aria-pressed={dark}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="atlas-lang" onClick={toggleLang} aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}>{lang === "es" ? "EN" : "ES"}</button>
          <button className="atlas-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={lang === "es" ? "Abrir menú" : "Open menu"}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      {atlasNote && (
        <aside className="atlas-easter-note is-visible" role="status" aria-live="polite">
          <span>{lang === "es" ? "Nota al margen" : "Margin note"}</span>
          <p>{atlasNote.text}</p>
        </aside>
      )}
    </nav>
  );
}
