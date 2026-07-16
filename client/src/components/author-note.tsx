import { BookOpen, Compass, SearchCheck } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function AuthorNote() {
  const { lang } = useLanguage();

  const t = lang === "es"
    ? {
        eyebrow: "Una nota antes de empezar",
        title: "Este atlas nació de una pregunta, no de una etiqueta",
        body: "Construí Gifted Atlas porque durante demasiado tiempo las altas capacidades se explicaron como si fueran un número con biografía propia. No lo son. Una puntuación puede abrir una conversación, pero no cuenta por sí sola cómo aprende una persona, qué necesita ni qué oportunidades tuvo. Aquí intento hacer algo menos cómodo y bastante más útil: separar evidencia de mito, explicar los límites y dejar las fuentes a la vista.",
        signature: "Marcelo C. K. · autor y desarrollador",
        cards: [
          { title: "Seguir la evidencia", text: "Cada afirmación importante debería poder rastrearse hasta una fuente real." },
          { title: "Conservar la duda", text: "Cuando la investigación no permite una conclusión firme, el atlas lo dice." },
          { title: "No perder a la persona", text: "Ningún modelo, prueba o gráfico resume una vida completa." },
        ],
      }
    : {
        eyebrow: "A note before we begin",
        title: "This atlas began with a question, not a label",
        body: "I built Gifted Atlas because giftedness has too often been explained as if a number could have a biography of its own. It cannot. A score may open a conversation, but it cannot tell us by itself how someone learns, what support they need, or which opportunities they have had. This atlas tries to do something less comfortable and far more useful: separate evidence from myth, explain the limits, and keep the sources visible.",
        signature: "Marcelo C. K. · author and developer",
        cards: [
          { title: "Follow the evidence", text: "Every important claim should be traceable to a real source." },
          { title: "Keep the uncertainty", text: "When research cannot support a firm conclusion, the atlas says so." },
          { title: "Do not lose the person", text: "No model, test, or chart can summarize an entire life." },
        ],
      };

  const icons = [SearchCheck, Compass, BookOpen];

  return (
    <section id="nota-del-autor" className="py-16 bg-white" aria-labelledby="author-note-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-7 sm:p-10 shadow-sm">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-indigo-600 mb-3">{t.eyebrow}</p>
          <h2 id="author-note-title" className="text-3xl sm:text-4xl font-bold text-slate-900 max-w-4xl leading-tight">{t.title}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-700 max-w-4xl">{t.body}</p>
          <p className="mt-5 text-sm font-semibold text-indigo-700">{t.signature}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-9">
            {t.cards.map((card, index) => {
              const Icon = icons[index];
              return (
                <div key={card.title} className="rounded-2xl bg-white/90 border border-slate-200 p-5">
                  <Icon aria-hidden="true" className="text-indigo-600 mb-3" size={24} />
                  <h3 className="font-bold text-slate-900">{card.title}</h3>
                  <p className="text-sm leading-6 text-slate-600 mt-2">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
