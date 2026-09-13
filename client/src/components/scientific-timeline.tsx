import { useEffect, useState } from "react";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function ScientificTimeline() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  const milestones = lang === 'es'
    ? [
        { year: "1869", title: "Hereditary Genius", author: "Francis Galton", significance: "Investigación histórica temprana sobre diferencias individuales", impact: "Influyó en la psicología diferencial y también dejó sesgos que deben examinarse", type: "fundamentos", details: "Galton estudió familias prominentes e interpretó sus patrones como hereditarios. Sus métodos no podían separar herencia, privilegio y oportunidades, y su proyecto estuvo ligado a la eugenesia." },
        { year: "1905", title: "Test de Inteligencia Binet-Simon", author: "Alfred Binet & Théodore Simon", significance: "Primera medición cuantitativa de inteligencia", impact: "Nacimiento de la psicometría moderna", type: "breakthrough", details: "Edad mental vs. edad cronológica. Base del CI moderno." },
        { year: "1916", title: "Stanford-Binet Intelligence Scale", author: "Lewis Terman", significance: "Adaptación y estandarización estadounidense del Binet-Simon", impact: "Consolidación histórica del CI como puntuación estandarizada", type: "medición", details: "Terman revisó tareas, normas y procedimientos para el contexto estadounidense. El instrumento fue influyente, pero sus usos históricos también reflejaron sesgos culturales y sociales." },
        { year: "1921-1956", title: "Genetic Studies of Genius", author: "Lewis Terman", significance: "Estudio longitudinal temprano de estudiantes con CI alto", impact: "Datos históricos sobre trayectorias académicas y vitales", type: "longitudinal", details: "Siguió a 1.528 participantes seleccionados con criterios propios de su época. Fue influyente, pero su muestra y procedimientos limitan la generalización y reflejan sesgos históricos." },
        { year: "1926-1942", title: "Gifted Children & Children Above 180 IQ", author: "Leta Hollingworth", significance: "Trabajo pionero en educación y desarrollo de estudiantes con puntuaciones muy altas", impact: "Mayor atención a necesidades educativas y ajuste social", type: "fundamentos", details: "Hollingworth estudió a niños con puntuaciones de CI excepcionalmente altas y cuestionó explicaciones de género de su época. Sus muestras fueron pequeñas y deben leerse en su contexto histórico." },
        { year: "1950", title: "Structure of Intellect Model", author: "J.P. Guilford", significance: "Modelo multifactorial de inteligencia", impact: "Diversificación del concepto de superdotación", type: "theory", details: "120 factores cognitivos. Creatividad como componente clave. Distinción entre pensamiento convergente y divergente." },
        { year: "1971", title: "Study of Mathematically Precocious Youth", author: "Julian Stanley", significance: "Identificación temprana de talento matemático", impact: "Programas de aceleración académica", type: "program", details: "SAT-M a los 12 años. Seguimiento 50+ años." },
        { year: "1978", title: "Modelo de los Tres Anillos", author: "Joseph Renzulli", significance: "La superdotación como intersección de tres rasgos", impact: "Redefinición práctica del superdotado en el aula", type: "model", details: "Alta capacidad + Creatividad + Compromiso con la tarea. Fundamentó políticas educativas en EE.UU. y Europa. Distinción entre 'superdotado escolar' y 'superdotado productivo-creativo'." },
        { year: "1983", title: "Frames of Mind: Theory of Multiple Intelligences", author: "Howard Gardner", significance: "Propuesta de capacidades relativamente diferenciadas", impact: "Gran influencia educativa y debate psicométrico persistente", type: "modelo", details: "Gardner propuso varias inteligencias —entre ellas lingüística, lógico-matemática, musical y espacial—. Es un marco influyente, pero su condición como teoría psicométrica de inteligencias independientes sigue discutida." },
        { year: "1985", title: "Triarchic Theory of Intelligence", author: "Robert Sternberg", significance: "Inteligencia analítica, creativa y práctica", impact: "Evaluación multidimensional del talento", type: "theory", details: "Componentes, experiencia y contexto. Inteligencia exitosa. Sternberg amplió el modelo a la 'teoría WICS' (sabiduría, inteligencia, creatividad y síntesis)." },
        { year: "1993", title: "Differentiated Model of Giftedness", author: "Françoys Gagné", significance: "Distinción entre dotación y talento", impact: "Marco conceptual para desarrollo del talento", type: "model", details: "Catalizadores intrapersonales y ambientales. DMGT 2.0." },
        { year: "2007", title: "Parieto-Frontal Integration Theory", author: "Jung & Haier", significance: "Modelo neurocognitivo de la inteligencia", impact: "Hipótesis de integración entre regiones parietales y frontales", type: "neuroscience", details: "Modelo P-FIT basado en convergencia de estudios de neuroimagen; describe tendencias grupales y no identifica altas capacidades a nivel individual." },
      ]
    : [
        { year: "1869", title: "Hereditary Genius", author: "Francis Galton", significance: "Early historical research on individual differences", impact: "Influenced differential psychology while leaving biases that require scrutiny", type: "foundations", details: "Galton studied prominent families and interpreted their patterns as hereditary. His methods could not separate heredity, privilege and opportunity, and his project was tied to eugenics." },
        { year: "1905", title: "Binet-Simon Intelligence Test", author: "Alfred Binet & Théodore Simon", significance: "First quantitative measurement of intelligence", impact: "Birth of modern psychometrics", type: "breakthrough", details: "Mental age vs. chronological age. Basis of modern IQ." },
        { year: "1916", title: "Stanford-Binet Intelligence Scale", author: "Lewis Terman", significance: "US adaptation and standardization of Binet-Simon", impact: "Historical consolidation of IQ as a standardized score", type: "measurement", details: "Terman revised tasks, norms and procedures for the United States. The instrument was influential, but its historical uses also reflected cultural and social bias." },
        { year: "1921-1956", title: "Genetic Studies of Genius", author: "Lewis Terman", significance: "Early longitudinal study of students with high IQ scores", impact: "Historical data on academic and life trajectories", type: "longitudinal", details: "It followed 1,528 participants selected using criteria of its time. It was influential, but its sample and procedures limit generalization and reflect historical biases." },
        { year: "1926-1942", title: "Gifted Children & Children Above 180 IQ", author: "Leta Hollingworth", significance: "Pioneering work on the education and development of students with very high scores", impact: "Greater attention to educational needs and social adjustment", type: "foundations", details: "Hollingworth studied children with exceptionally high IQ scores and challenged gender explanations of her time. Her samples were small and should be read in historical context." },
        { year: "1950", title: "Structure of Intellect Model", author: "J.P. Guilford", significance: "Multifactorial model of intelligence", impact: "Diversification of the concept of giftedness", type: "theory", details: "120 cognitive factors. Creativity as a key component. Distinction between convergent and divergent thinking." },
        { year: "1971", title: "Study of Mathematically Precocious Youth", author: "Julian Stanley", significance: "Early identification of mathematical talent", impact: "Academic acceleration programs", type: "program", details: "SAT-M at age 12. 50+ year follow-up." },
        { year: "1978", title: "Three-Ring Model of Giftedness", author: "Joseph Renzulli", significance: "Giftedness as the intersection of three traits", impact: "Practical redefinition of giftedness in the classroom", type: "model", details: "Above-average ability + Creativity + Task commitment. Underpinned educational policies across the US and Europe. Distinction between 'schoolhouse giftedness' and 'creative-productive giftedness'." },
        { year: "1983", title: "Frames of Mind: Theory of Multiple Intelligences", author: "Howard Gardner", significance: "Proposal of relatively differentiated capacities", impact: "Major educational influence and continuing psychometric debate", type: "model", details: "Gardner proposed several intelligences, including linguistic, logical-mathematical, musical and spatial. It is an influential framework, but its status as a psychometric theory of independent intelligences remains disputed." },
        { year: "1985", title: "Triarchic Theory of Intelligence", author: "Robert Sternberg", significance: "Analytical, creative, and practical intelligence", impact: "Multidimensional assessment of talent", type: "theory", details: "Components, experience, and context. Successful intelligence. Sternberg later expanded this into the WICS model (wisdom, intelligence, creativity, synthesis)." },
        { year: "1993", title: "Differentiated Model of Giftedness", author: "Françoys Gagné", significance: "Distinction between giftedness and talent", impact: "Conceptual framework for talent development", type: "model", details: "Intrapersonal and environmental catalysts. DMGT 2.0." },
        { year: "2007", title: "Parieto-Frontal Integration Theory", author: "Jung & Haier", significance: "Neurocognitive model of intelligence", impact: "Hypothesis integrating parietal and frontal regions", type: "neuroscience", details: "The P-FIT model draws on converging neuroimaging studies; it describes group trends and does not identify giftedness in an individual." },
      ];

  const labels = lang === 'es'
    ? { author: "Autor", significance: "Qué cambió", impact: "Qué dejó", details: "Cómo leerlo hoy", title: "Historia de la investigación de las altas capacidades", subtitle: "Doce hitos para recorrer una historia que nunca fue lineal. Pulsa reproducir o elige un año.", route: "Recorrido guiado", play: "Reproducir", pause: "Pausar", previous: "Hito anterior", next: "Hito siguiente", milestone: "Hito", of: "de", summaryTitle: "El recorrido, sin falsa precisión", years: "años de investigación", milestones: "hitos seleccionados", note: "La selección no es exhaustiva: las escuelas coexistieron, discreparon y cambiaron en paralelo." }
    : { author: "Author", significance: "What changed", impact: "What remained", details: "How to read it today", title: "History of giftedness research", subtitle: "Twelve milestones in a history that was never linear. Press play or choose a year.", route: "Guided route", play: "Play", pause: "Pause", previous: "Previous milestone", next: "Next milestone", milestone: "Milestone", of: "of", summaryTitle: "The route, without false precision", years: "years of research", milestones: "selected milestones", note: "This selection is not exhaustive: schools coexisted, disagreed and changed in parallel." };

  useEffect(() => {
    setActive(0);
    setPlaying(false);
  }, [lang]);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setActive(current => {
        if (current >= milestones.length - 1) {
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 5000);
    return () => window.clearInterval(timer);
  }, [playing, milestones.length]);

  const selected = milestones[active];
  const move = (next: number) => {
    setPlaying(false);
    setActive(Math.min(Math.max(next, 0), milestones.length - 1));
  };

  return (
    <section id="cronologia-cientifica" ref={ref} className={`gifted-timeline-section section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="gifted-timeline-inner">
        <header className="gifted-timeline-heading">
          <p>{labels.route}</p>
          <h2>{labels.title}</h2>
          <span>{labels.subtitle}</span>
        </header>

        <div className="gifted-history-player">
          <div className="gifted-player-status">
            <small>{labels.milestone} {active + 1} {labels.of} {milestones.length}</small>
            <strong>{selected.year} · {selected.title}</strong>
          </div>
          <div className="gifted-player-controls">
            <button onClick={() => move(active - 1)} disabled={active === 0} aria-label={labels.previous}><SkipBack size={17} /></button>
            <button className="gifted-player-play" onClick={() => setPlaying(!playing)} aria-pressed={playing}>{playing ? <Pause size={17} /> : <Play size={17} />}<span>{playing ? labels.pause : labels.play}</span></button>
            <button onClick={() => move(active + 1)} disabled={active === milestones.length - 1} aria-label={labels.next}><SkipForward size={17} /></button>
          </div>
          <div className="gifted-player-progress" aria-hidden="true"><span style={{ width: `${((active + 1) / milestones.length) * 100}%` }} /></div>
        </div>

        <nav className="gifted-year-rail" aria-label={lang === 'es' ? 'Hitos de la cronología' : 'Timeline milestones'}>
          {milestones.map((milestone, index) => (
            <button key={`${milestone.year}-${index}`} onClick={() => move(index)} className={active === index ? 'is-active' : ''} aria-current={active === index ? 'step' : undefined}>
              <span>{milestone.year}</span><small>{milestone.author}</small>
            </button>
          ))}
        </nav>

        <article className="gifted-milestone" aria-live="polite">
          <div className="gifted-milestone-title"><span>{selected.year} · {selected.type}</span><h3>{selected.title}</h3><p><strong>{labels.author}:</strong> {selected.author}</p></div>
          <div className="gifted-milestone-grid">
            <div><small>{labels.significance}</small><p>{selected.significance}</p></div>
            <div><small>{labels.impact}</small><p>{selected.impact}</p></div>
            <div><small>{labels.details}</small><p>{selected.details}</p></div>
          </div>
        </article>

        <div className="gifted-history-summary"><div><span>+150</span><small>{labels.years}</small></div><div><span>12</span><small>{labels.milestones}</small></div><p><strong>{labels.summaryTitle}</strong>{labels.note}</p></div>
      </div>
    </section>
  );
}
