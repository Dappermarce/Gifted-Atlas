import { Card, CardContent } from "@/components/ui/card";
import { Brain, Palette, Users, CheckCircle, BookOpen } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

export default function GiftednessSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const t = lang === 'es'
    ? {
        title: "¿Qué significa realmente tener altas capacidades?",
        subtitle: "La respuesta corta es que depende del modelo. La respuesta útil empieza cuando explicamos de cuál.",
        quickSummaryTitle: "La idea central",
        quickSummary: "La superdotación y las altas capacidades no tienen una definición internacional única. Algunos enfoques usan una puntuación cercana a dos desviaciones estándar sobre la media como uno de varios criterios; otros integran aptitudes específicas, creatividad, rendimiento, potencial, contexto y oportunidades.",
        defTitle: "Definición y Características",
        defText: "No existe una única definición internacional. La identificación responsable combina instrumentos técnicamente adecuados con historia educativa, desempeño por dominios, contexto sociocultural y necesidades de apoyo; una puntuación nunca debe interpretarse sin su intervalo de confianza.",
        mainCharsTitle: "Rasgos que pueden aparecer — no una lista de requisitos:",
        chars: ["Aprendizaje rápido en uno o más dominios", "Razonamiento abstracto o complejo", "Producción creativa en algunos perfiles", "Intereses profundos o muy específicos", "Necesidades educativas que pueden pasar inadvertidas"],
        statsTitle: "Qué puede variar:",
        stat1: "Estimación teórica (+2 DS):", stat2: "Criterios de identificación:", stat3: "Doble excepcionalidad:", stat4: "Acceso a programas:",
        typesTitle: "Dominios y modelos — no una taxonomía clínica",
        type1: "Capacidad general o específica", type1desc: "Razonamiento general o aptitudes destacadas en dominios concretos, según el modelo utilizado.",
        type2: "Creatividad y producción", type2desc: "Algunos modelos incorporan originalidad, pensamiento divergente y producción creativa junto con la capacidad.",
        type3: "Factores psicosociales", type3desc: "Motivación, apoyo, oportunidades y contexto pueden favorecer o limitar el desarrollo del talento; no constituyen una categoría diagnóstica.",
        source: "Fuente:",
      }
    : {
        title: "What does giftedness actually mean?",
        subtitle: "The short answer is that it depends on the model. The useful answer begins when we explain which one.",
        quickSummaryTitle: "The central idea",
        quickSummary: "Giftedness and high ability do not have one universal definition. Some approaches use a score near two standard deviations above the mean as one of several criteria; others integrate domain-specific aptitude, creativity, achievement, potential, context, and opportunity.",
        defTitle: "Definition and Characteristics",
        defText: "There is no single international definition. Responsible identification combines technically appropriate instruments with educational history, domain performance, sociocultural context, and support needs; a score should never be interpreted without its confidence interval.",
        mainCharsTitle: "Traits that may appear — not a list of requirements:",
        chars: ["Rapid learning in one or more domains", "Abstract or complex reasoning", "Creative production in some profiles", "Deep or highly specific interests", "Educational needs that may go unnoticed"],
        statsTitle: "What may vary:",
        stat1: "Theoretical estimate (+2 SD):", stat2: "Identification criteria:", stat3: "Twice exceptionality:", stat4: "Access to programs:",
        typesTitle: "Domains and models — not a clinical taxonomy",
        type1: "General or specific ability", type1desc: "General reasoning or outstanding aptitude in specific domains, depending on the model used.",
        type2: "Creativity and production", type2desc: "Some models include originality, divergent thinking, and creative production alongside ability.",
        type3: "Psychosocial factors", type3desc: "Motivation, support, opportunities, and context may foster or limit talent development; they are not a diagnostic category.",
        source: "Source:",
      };

  return (
    <section id="superdotacion" ref={ref} className={`py-20 section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Quick summary box */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-primary rounded-r-xl p-5 flex gap-4">
            <BookOpen className="text-primary flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm font-semibold text-primary mb-1">{t.quickSummaryTitle}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{t.quickSummary}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-dark-slate">{t.defTitle}</h3>
            <p className="text-gray-700 leading-relaxed">{t.defText}</p>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-3">{t.mainCharsTitle}</h4>
                <ul className="space-y-2 text-gray-700">
                  {t.chars.map((char, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                      {char}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" alt="Gifted child solving mathematical problems" className="rounded-xl shadow-lg w-full" />
            <p className="text-xs text-gray-500 -mt-4">{t.source} <a href="https://www.nagc.org/news/rethinking-giftedness-a-shift-toward-talent-development-in-schools" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">National Association for Gifted Children — talent development overview</a></p>
            <Card className="bg-sky-blue/5 border-sky-blue/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-sky-blue mb-3">{t.statsTitle}</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between gap-4"><span>{t.stat1}</span><span className="font-semibold text-right">≈2,3%</span></div>
                  <div className="flex justify-between gap-4"><span>{t.stat2}</span><span className="font-semibold text-right">{lang === 'es' ? 'Varían por modelo' : 'Vary by model'}</span></div>
                  <div className="flex justify-between gap-4"><span>{t.stat3}</span><span className="font-semibold text-right">{lang === 'es' ? 'Sin cifra universal' : 'No universal rate'}</span></div>
                  <div className="flex justify-between gap-4"><span>{t.stat4}</span><span className="font-semibold text-right">{lang === 'es' ? 'Desigual' : 'Unequal'}</span></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-dark-slate mb-8 text-center">{t.typesTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover"><CardContent className="p-6"><div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4"><Brain className="text-primary" size={24} /></div><h4 className="font-semibold text-dark-slate mb-3">{t.type1}</h4><p className="text-gray-600">{t.type1desc}</p></CardContent></Card>
            <Card className="card-hover"><CardContent className="p-6"><div className="bg-sky-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4"><Palette className="text-sky-blue" size={24} /></div><h4 className="font-semibold text-dark-slate mb-3">{t.type2}</h4><p className="text-gray-600">{t.type2desc}</p></CardContent></Card>
            <Card className="card-hover"><CardContent className="p-6"><div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4"><Users className="text-green-500" size={24} /></div><h4 className="font-semibold text-dark-slate mb-3">{t.type3}</h4><p className="text-gray-600">{t.type3desc}</p></CardContent></Card>
          </div>
        </div>
      </div>
    </section>
  );
}
