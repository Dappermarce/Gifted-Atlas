import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function TalentDevelopmentMap() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const t = lang === 'es'
    ? {
        title: "Mapa de la Superdotación",
        subtitle: "Factores que convergen en el desarrollo del talento excepcional",
        disclaimer: "Modelo conceptual — representación educativa basada en la literatura",
        inputs: [
          { label: "Capacidad Cognitiva", desc: "CI elevado, velocidad de procesamiento, memoria de trabajo", color: "#3B82F6", bg: "#EFF6FF", border: "#BFDBFE" },
          { label: "Creatividad", desc: "Pensamiento divergente, originalidad, fluencia de ideas", color: "#8B5CF6", bg: "#F5F3FF", border: "#DDD6FE" },
          { label: "Motivación", desc: "Compromiso con la tarea, perseverancia, autodirección", color: "#10B981", bg: "#ECFDF5", border: "#A7F3D0" },
          { label: "Ambiente", desc: "Familia, escuela, cultura, oportunidades y apoyo", color: "#F59E0B", bg: "#FFFBEB", border: "#FDE68A" },
        ],
        output: "Desarrollo del Talento",
        outputDesc: "Potencial excelente en uno o más dominios",
        arrowLabel: "Interacción dinámica y continua",
        modelsTitle: "Modelos de referencia",
        models: [
          { name: "Modelo de los Tres Anillos", author: "Renzulli (1978)", desc: "Alta capacidad + Creatividad + Compromiso con la tarea" },
          { name: "Modelo DMGT", author: "Gagné (1993)", desc: "Dotación natural → Talento desarrollado mediante catalizadores" },
          { name: "Modelo Múltiple de Potencial de Aprendizaje", author: "Castelló & Batlle (1998)", desc: "Perfil cognitivo diferenciado con recursos excepcionales" },
        ],
        source: "Elaboración propia basada en Renzulli (1978), Gagné (1993) y Castelló & Batlle (1998).",
      }
    : {
        title: "Giftedness Map",
        subtitle: "Factors that converge in the development of exceptional talent",
        disclaimer: "Conceptual model — educational representation based on the literature",
        inputs: [
          { label: "Cognitive Ability", desc: "High IQ, processing speed, working memory", color: "#3B82F6", bg: "#EFF6FF", border: "#BFDBFE" },
          { label: "Creativity", desc: "Divergent thinking, originality, fluency of ideas", color: "#8B5CF6", bg: "#F5F3FF", border: "#DDD6FE" },
          { label: "Motivation", desc: "Task commitment, perseverance, self-direction", color: "#10B981", bg: "#ECFDF5", border: "#A7F3D0" },
          { label: "Environment", desc: "Family, school, culture, opportunities and support", color: "#F59E0B", bg: "#FFFBEB", border: "#FDE68A" },
        ],
        output: "Talent Development",
        outputDesc: "Outstanding potential in one or more domains",
        arrowLabel: "Dynamic and continuous interaction",
        modelsTitle: "Reference Models",
        models: [
          { name: "Three-Ring Model", author: "Renzulli (1978)", desc: "High ability + Creativity + Task commitment" },
          { name: "DMGT Model", author: "Gagné (1993)", desc: "Natural giftedness → Developed talent through catalysts" },
          { name: "Multiple Learning Potential Model", author: "Castelló & Batlle (1998)", desc: "Differentiated cognitive profile with exceptional resources" },
        ],
        source: "Own elaboration based on Renzulli (1978), Gagné (1993) and Castelló & Batlle (1998).",
      };

  return (
    <section
      id="mapa-superdotacion"
      ref={ref}
      className={`py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-3">{t.subtitle}</p>
          <span className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs rounded-full px-4 py-1.5 font-medium">
            {t.disclaimer}
          </span>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-col items-center gap-0 mb-12">
          {/* Input factors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-2">
            {t.inputs.map((inp, i) => (
              <div
                key={i}
                className="rounded-2xl border-2 p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
                style={{ backgroundColor: inp.bg, borderColor: inp.border }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-white font-bold text-sm shadow"
                  style={{ backgroundColor: inp.color }}
                >
                  {i + 1}
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: inp.color }}>
                  {inp.label}
                </h3>
                <p className="text-xs text-gray-600 leading-snug">{inp.desc}</p>
              </div>
            ))}
          </div>

          {/* Converging arrows SVG */}
          <div className="w-full max-w-xl mx-auto my-1">
            <svg viewBox="0 0 400 80" className="w-full" aria-hidden="true">
              {/* Lines from 4 points converging to center bottom */}
              <line x1="50"  y1="5" x2="200" y2="65" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,3"/>
              <line x1="150" y1="5" x2="200" y2="65" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,3"/>
              <line x1="250" y1="5" x2="200" y2="65" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,3"/>
              <line x1="350" y1="5" x2="200" y2="65" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,3"/>
              {/* Arrow tip */}
              <polygon points="200,78 194,62 206,62" fill="#6366F1"/>
              {/* Label */}
              <rect x="90" y="24" width="220" height="20" rx="10" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1"/>
              <text x="200" y="38" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4338CA" fontFamily="Inter, sans-serif">
                {t.arrowLabel}
              </text>
            </svg>
          </div>

          {/* Output box */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-center text-white shadow-xl w-full max-w-sm">
            <div className="text-3xl font-extrabold mb-1 tracking-tight">⭐ {t.output}</div>
            <p className="text-indigo-200 text-sm">{t.outputDesc}</p>
          </div>
        </div>

        {/* Reference models */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-5 text-center">{t.modelsTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.models.map((m, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-indigo-700 mb-1 text-sm">{m.name}</div>
                <div className="text-xs text-gray-500 mb-2 italic">{m.author}</div>
                <p className="text-sm text-gray-700">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center mt-8 italic">{t.source}</p>
      </div>
    </section>
  );
}
