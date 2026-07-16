import { useLanguage } from "@/contexts/language-context";

export default function StatisticsSection() {
  const { lang } = useLanguage();

  const t = lang === 'es'
    ? {
        s1value: "≈2,3%", s1title: "Referencia matemática", s1sub: "Proporción por encima de +2 DS si la distribución fuera normal",
        s2value: "≈130", s2title: "Umbral usado en algunos contextos", s2sub: "No es una definición internacional ni un diagnóstico",
        s3value: "Variable", s3title: "Identificación real", s3sub: "Depende de política, modelo, acceso, idioma y oportunidades",
        s4value: "Multidimensional", s4title: "Evaluación responsable", s4sub: "Combina pruebas, dominios, historia y contexto",
        note: "Estas referencias no estiman cuántas personas son identificadas ni sustituyen criterios locales. Las puntuaciones deben informarse con su prueba, edición e intervalo de confianza.",
      }
    : {
        s1value: "≈2.3%", s1title: "Mathematical reference", s1sub: "Proportion above +2 SD if the distribution were normal",
        s2value: "≈130", s2title: "Threshold used in some contexts", s2sub: "Not an international definition or diagnosis",
        s3value: "Variable", s3title: "Actual identification", s3sub: "Depends on policy, model, access, language, and opportunity",
        s4value: "Multidimensional", s4title: "Responsible assessment", s4sub: "Combines tests, domains, history, and context",
        note: "These references do not estimate how many people are identified or replace local criteria. Scores should be reported with the test, edition, and confidence interval.",
      };

  return (
    <section id="statistics" className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="stats-counter">{t.s1value}</div>
            <p className="text-dark-slate text-lg font-medium mt-1">{t.s1title}</p>
            <p className="text-gray-500 text-sm">{t.s1sub}</p>
          </div>
          <div className="text-center">
            <div className="stats-counter">{t.s2value}</div>
            <p className="text-dark-slate text-lg font-medium mt-1">{t.s2title}</p>
            <p className="text-gray-500 text-sm">{t.s2sub}</p>
          </div>
          <div className="text-center">
            <div className="stats-counter" style={{ fontSize: '1.8rem' }}>{t.s3value}</div>
            <p className="text-dark-slate text-lg font-medium mt-1">{t.s3title}</p>
            <p className="text-gray-500 text-sm">{t.s3sub}</p>
          </div>
          <div className="text-center">
            <div className="stats-counter" style={{ fontSize: '1.8rem' }}>{t.s4value}</div>
            <p className="text-dark-slate text-lg font-medium mt-1">{t.s4title}</p>
            <p className="text-gray-500 text-sm">{t.s4sub}</p>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-8 italic">{t.note}</p>
      </div>
    </section>
  );
}
