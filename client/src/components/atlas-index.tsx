import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function AtlasIndex() {
  const { lang } = useLanguage();
  const content = lang === "es" ? {
    eyebrow: "Índice de temas",
    title: "Una entrada distinta para cada pregunta",
    intro: "No reduje el contenido para que pareciera sencillo. Organicé sus capas para que puedas leer una idea breve, comprobar de dónde sale y profundizar solo cuando la pregunta lo exija.",
    routes: [
      { n: "01", id: "superdotacion", title: "¿Qué significa altas capacidades?", text: "Compara definiciones, modelos y perfiles sin convertir un umbral en identidad.", meta: "Conceptos · Modelos · Perfiles" },
      { n: "02", id: "metodologia-investigacion", title: "¿Qué sostiene la evidencia?", text: "Revisa métodos, límites, estadísticas y la historia de las ideas que todavía usamos.", meta: "Métodos · Historia · Cifras" },
      { n: "03", id: "evaluacion-avanzada", title: "¿Cómo se identifica con cuidado?", text: "Sigue una evaluación multimétodo y entiende por qué ninguna prueba habla sola.", meta: "Evaluación · Contexto · 2e" },
      { n: "04", id: "recursos", title: "¿Cómo sigo investigando?", text: "Usa fuentes, bibliografía, mitos y preguntas frecuentes para no terminar en un resumen.", meta: "Fuentes · Lecturas · Preguntas" },
    ],
  } : {
    eyebrow: "Topic index",
    title: "A different entry point for every question",
    intro: "I did not reduce the content to make it look simple. I organized its layers so you can read one short idea, check where it came from and go deeper only when the question requires it.",
    routes: [
      { n: "01", id: "superdotacion", title: "What does giftedness mean?", text: "Compare definitions, models and profiles without turning a threshold into an identity.", meta: "Concepts · Models · Profiles" },
      { n: "02", id: "metodologia-investigacion", title: "What does the evidence support?", text: "Review methods, limits, statistics and the history of ideas still in use.", meta: "Methods · History · Numbers" },
      { n: "03", id: "evaluacion-avanzada", title: "How can identification be careful?", text: "Follow a multi-method assessment and understand why no test speaks alone.", meta: "Assessment · Context · 2e" },
      { n: "04", id: "recursos", title: "How do I keep investigating?", text: "Use sources, bibliography, myths and frequently asked questions so the journey does not end in a summary.", meta: "Sources · Readings · Questions" },
    ],
  };

  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="indice-atlas" className="gifted-index" aria-labelledby="gifted-index-title">
      <div className="gifted-index-inner">
        <div className="gifted-index-heading">
          <div><p>{content.eyebrow}</p><h2 id="gifted-index-title">{content.title}</h2></div>
          <p>{content.intro}</p>
        </div>
        <div className="gifted-index-grid">
          {content.routes.map(route => (
            <button key={route.n} onClick={() => goTo(route.id)} className="gifted-index-card">
              <span className="gifted-index-number">{route.n}</span>
              <span className="gifted-index-copy"><strong>{route.title}</strong><span>{route.text}</span><small>{route.meta}</small></span>
              <ArrowRight size={18} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
