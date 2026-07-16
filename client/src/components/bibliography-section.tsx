import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, BarChart2, Globe, Microscope, Building } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

const categories = [
  {
    id: "meta-analyses",
    icon: BarChart2,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
    refs: [
      { citation: "Hodges, J., et al. (2018). Identifying gifted and talented English learners. Journal for the Education of the Gifted, 41(2), 176–198.", doi: "10.1177/0162353218763490" },
      { citation: "Steenbergen-Hu, S., & Moon, S. M. (2011). The effects of acceleration on high-ability learners: A meta-analysis. Gifted Child Quarterly, 55(1), 39–53.", doi: "10.1177/0016986210383155" },
      { citation: "Colom, R., et al. (2010). Fluid intelligence, memory span, and temperament difficulties predict academic performance of gifted students. Personality and Individual Differences, 48(5), 571–576.", doi: "10.1016/j.paid.2009.12.015" },
      { citation: "Plucker, J. A., & Callahan, C. M. (Eds.) (2014). Critical issues and practices in gifted education (2nd ed.). Prufrock Press.", doi: null },
      { citation: "VanTassel-Baska, J., & Stambaugh, T. (Eds.) (2006). Comprehensive curriculum for gifted learners (3rd ed.). Allyn & Bacon.", doi: null },
    ],
  },
  {
    id: "longitudinal",
    icon: Microscope,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-300",
    refs: [
      { citation: "Terman, L. M. (1925–1959). Genetic studies of genius (Vols. 1–5). Stanford University Press.", doi: null },
      { citation: "Lubinski, D., & Benbow, C. P. (2006). Study of Mathematically Precocious Youth after 35 years. Perspectives on Psychological Science, 1(4), 316–345.", doi: "10.1111/j.1745-6924.2006.00019.x" },
      { citation: "Lubinski, D., et al. (2014). Life paths and accomplishments of mathematically precocious males and females four decades later. Psychological Science, 25(12), 2217–2232.", doi: "10.1177/0956797614551371" },
      { citation: "Heller, K. A. (2004). Identification of gifted and talented students. Psychology Science, 46(Suppl.), 302–323.", doi: null },
      { citation: "Winner, E. (2000). The origins and ends of giftedness. American Psychologist, 55(1), 159–169.", doi: "10.1037/0003-066X.55.1.159" },
    ],
  },
  {
    id: "systematic-reviews",
    icon: FileText,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-300",
    refs: [
      { citation: "Jung, R. E., & Haier, R. J. (2007). The parieto-frontal integration theory (P-FIT) of intelligence. Behavioral and Brain Sciences, 30(2), 135–154.", doi: "10.1017/S0140525X07001185" },
      { citation: "Neubauer, A. C., & Fink, A. (2009). Intelligence and neural efficiency. Neuroscience & Biobehavioral Reviews, 33(7), 1004–1023.", doi: "10.1016/j.neubiorev.2009.04.001" },
      { citation: "Colom, R., et al. (2006). General intelligence and memory span: Evidence for a common neuroanatomic framework. Cognitive Neuropsychology, 23(8), 1203–1212.", doi: "10.1080/02643290600875781" },
      { citation: "Haier, R. J., et al. (1988). Cortical glucose metabolic rate correlates of abstract reasoning and attention studied with positron emission tomography. Intelligence, 12(2), 199–217.", doi: "10.1016/0160-2896(88)90016-5" },
    ],
  },
  {
    id: "classic-books",
    icon: BookOpen,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-300",
    refs: [
      { citation: "Gardner, H. (1983). Frames of mind: The theory of multiple intelligences. Basic Books.", doi: null },
      { citation: "Sternberg, R. J. (1985). Beyond IQ: A triarchic theory of human intelligence. Cambridge University Press.", doi: null },
      { citation: "Winner, E. (1996). Gifted children: Myths and realities. Basic Books.", doi: null },
      { citation: "Silverman, L. K. (2013). Giftedness 101. Springer.", doi: null },
      { citation: "Webb, J. T., et al. (2005). Misdiagnosis and dual diagnoses of gifted children and adults. Great Potential Press.", doi: null },
      { citation: "Gagné, F. (2010). Motivation within the DMGT 2.0 framework. High Ability Studies, 21(2), 81–99.", doi: "10.1080/13598139.2010.525341" },
    ],
  },
  {
    id: "clinical-guidelines",
    icon: Building,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-300",
    refs: [
      { citation: "Subotnik, R. F., Olszewski-Kubilius, P., & Worrell, F. C. (2011). Rethinking giftedness and gifted education. Psychological Science in the Public Interest, 12(1), 3–54.", doi: "10.1177/1529100611418056" },
      { citation: "National Association for Gifted Children (NAGC). (2010). NAGC pre-K–grade 12 gifted programming standards. NAGC.", doi: null },
      { citation: "Renzulli, J. S. (1978). What makes giftedness? Re-examining a definition. Phi Delta Kappan, 60(3), 180–184.", doi: null },
      { citation: "Colangelo, N., & Davis, G. A. (Eds.) (2003). Handbook of gifted education (3rd ed.). Allyn & Bacon.", doi: null },
      { citation: "Neihart, M., et al. (Eds.) (2002). The social and emotional development of gifted children. Prufrock Press.", doi: null },
    ],
  },
  {
    id: "organizations",
    icon: Globe,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-300",
    refs: [
      { citation: "National Association for Gifted Children (NAGC) — nagc.org", doi: null, url: "https://www.nagc.org" },
      { citation: "World Council for Gifted and Talented Children (WCGTC) — world-gifted.org", doi: null, url: "https://world-gifted.org" },
      { citation: "European Council for High Ability (ECHA) — echa.info", doi: null, url: "https://www.echa.info" },
      { citation: "Supporting Emotional Needs of the Gifted (SENG) — sengifted.org", doi: null, url: "https://www.sengifted.org" },
      { citation: "Davidson Institute for Talent Development — davidsongifted.org", doi: null, url: "https://www.davidsongifted.org" },
      { citation: "Center for Talented Youth, Johns Hopkins University — cty.jhu.edu", doi: null, url: "https://cty.jhu.edu" },
    ],
  },
];

export default function BibliographySection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const categoryLabels = lang === 'es'
    ? {
        "meta-analyses": "Investigación, revisiones y educación",
        "longitudinal": "Estudios Longitudinales",
        "systematic-reviews": "Neurociencia e Inteligencia",
        "classic-books": "Libros Clásicos",
        "clinical-guidelines": "Estándares, modelos y contexto clínico",
        "organizations": "Organizaciones Profesionales",
      }
    : {
        "meta-analyses": "Research, Reviews & Education",
        "longitudinal": "Longitudinal Studies",
        "systematic-reviews": "Neuroscience & Intelligence",
        "classic-books": "Classic Books",
        "clinical-guidelines": "Standards, Models & Clinical Context",
        "organizations": "Professional Organizations",
      };

  const labels = lang === 'es'
    ? { title: "Donde termina el atlas y empiezan las fuentes", subtitle: "Selección organizada de artículos revisados por pares, libros académicos, modelos históricos y organizaciones profesionales. Una referencia no decora una afirmación: permite comprobarla.", doi: "DOI:", note: "Esta es una selección curada, no una revisión sistemática ni una garantía de consenso. Para investigación académica, registra términos, bases consultadas, fechas, criterios de inclusión y evaluación de calidad.", noteLabel: "Nota:" }
    : { title: "Where the atlas ends and the sources begin", subtitle: "An organized selection of peer-reviewed articles, academic books, historical models, and professional organizations. A reference does not decorate a claim: it makes the claim checkable.", doi: "DOI:", note: "This is a curated selection, not a systematic review or guarantee of consensus. Academic research should record search terms, databases, dates, inclusion criteria, and quality appraisal.", noteLabel: "Note:" };

  return (
    <section id="bibliografia" ref={ref} className={`py-20 bg-gray-50 section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="text-indigo-600" size={32} />
          </div>
          <h2 className="text-4xl font-bold text-dark-slate mb-4">{labels.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{labels.subtitle}</p>
        </div>

        <div className="space-y-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const catLabel = categoryLabels[cat.id as keyof typeof categoryLabels];
            return (
              <Card key={cat.id} className="shadow-md overflow-hidden">
                <div className={`${cat.bgColor} border-b ${cat.borderColor} p-5 flex items-center gap-3`}>
                  <div className={`${cat.bgColor} rounded-lg p-2 border ${cat.borderColor}`}>
                    <Icon className={cat.color} size={22} />
                  </div>
                  <h3 className={`text-lg font-bold ${cat.color}`}>{catLabel}</h3>
                  <Badge variant="outline" className="ml-auto text-xs">{cat.refs.length}</Badge>
                </div>
                <CardContent className="p-0">
                  <ul className="divide-y divide-gray-100">
                    {cat.refs.map((ref, i) => (
                      <li key={i} className="p-4 hover:bg-gray-50 transition-colors">
                        <p className="text-sm text-gray-800 leading-relaxed">
                          {'url' in ref && ref.url
                            ? <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">{ref.citation}</a>
                            : ref.citation}
                        </p>
                        {ref.doi && (
                          <a href={`https://doi.org/${ref.doi}`} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline mt-1 inline-block">
                            {labels.doi} {ref.doi}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-blue-800"><strong>{labels.noteLabel}</strong> {labels.note}</p>
        </div>
      </div>
    </section>
  );
}
