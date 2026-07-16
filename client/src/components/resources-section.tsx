import { Card, CardContent } from "@/components/ui/card";
import { Globe, Award, Heart, BookOpen } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/language-context";

const booksData = [
  { title: "Frames of Mind: The Theory of Multiple Intelligences", author: "Howard Gardner", publisher: "Basic Books, 1983" },
  { title: "Beyond IQ: A Triarchic Theory of Human Intelligence", author: "Robert J. Sternberg", publisher: "Cambridge University Press, 1985" },
  { title: "Gifted Children: Myths and Realities", author: "Ellen Winner", publisher: "Basic Books, 1996" },
  { title: "Giftedness 101", author: "Linda Kreger Silverman", publisher: "Springer, 2013" },
  { title: "Critical Issues and Practices in Gifted Education", author: "Plucker & Callahan (eds.)", publisher: "Prufrock Press, 2014" },
  { title: "Handbook of Giftedness in Children", author: "Steven I. Pfeiffer (ed.)", publisher: "Springer, 2nd ed., 2018" },
];

const articlesData = [
  { title: "Rethinking Giftedness and Gifted Education", author: "Subotnik, Olszewski-Kubilius & Worrell", journal: "Psychological Science in the Public Interest, 2011" },
  { title: "The Effects of Acceleration on High-Ability Learners", author: "Steenbergen-Hu & Moon", journal: "Gifted Child Quarterly, 2011" },
  { title: "Study of Mathematically Precocious Youth After 35 Years", author: "Lubinski & Benbow", journal: "Perspectives on Psychological Science, 2006" },
  { title: "The Parieto-Frontal Integration Theory of Intelligence", author: "Jung & Haier", journal: "Behavioral and Brain Sciences, 2007" },
  { title: "Identifying Gifted and Talented English Learners", author: "Hodges et al.", journal: "Journal for the Education of the Gifted, 2018" },
  { title: "Life Paths of Mathematically Precocious Youth Four Decades Later", author: "Lubinski et al.", journal: "Psychological Science, 2014" },
];

const universitiesData = [
  { name: "Center for Talented Youth (CTY)", program_es: "Identificación y enriquecimiento académico", program_en: "Academic identification and enrichment", location: "Johns Hopkins University, USA" },
  { name: "Vanderbilt SMPY", program_es: "Seguimiento longitudinal del talento matemático", program_en: "Longitudinal tracking of mathematical talent", location: "Vanderbilt University, USA" },
  { name: "Munich High Ability Research Center", program_es: "Desarrollo socioemocional y talento", program_en: "Socioemotional development and talent", location: "LMU Munich, Germany" },
  { name: "Renzulli Center for Creativity", program_es: "Creatividad, talento y enriquecimiento educativo", program_en: "Creativity, talent, and educational enrichment", location: "University of Connecticut, USA" },
  { name: "Davidson Institute for Talent Development", program_es: "Apoyo a estudiantes altamente superdotados", program_en: "Support for highly gifted students", location: "Reno, Nevada, USA" },
  { name: "ECHA — European Council for High Ability", program_es: "Red europea de investigación en altas capacidades", program_en: "European research network on high ability", location: "Europe" },
];

const organizationsData = [
  { acronym: "NAGC", name_es: "National Association for Gifted Children (EE.UU.)", name_en: "National Association for Gifted Children (USA)" },
  { acronym: "WCGTC", name_es: "World Council for Gifted and Talented Children", name_en: "World Council for Gifted and Talented Children" },
  { acronym: "ECHA", name_es: "European Council for High Ability", name_en: "European Council for High Ability" },
  { acronym: "SENG", name_es: "Supporting Emotional Needs of the Gifted", name_en: "Supporting Emotional Needs of the Gifted" },
];

export default function ResourcesSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { lang } = useLanguage();

  const t = lang === 'es'
    ? { title: "Fuentes para seguir preguntando", subtitle: "Libros, artículos y organizaciones para continuar la investigación más allá de este atlas", booksTitle: "Libros Especializados", articlesTitle: "Artículos Científicos", centersTitle: "Centros de Investigación", orgsTitle: "Organizaciones Profesionales" }
    : { title: "Sources for further questions", subtitle: "Books, articles, and organizations for continuing the investigation beyond this atlas", booksTitle: "Specialized Books", articlesTitle: "Scientific Articles", centersTitle: "Research Centers", orgsTitle: "Professional Organizations" };

  return (
    <section id="recursos" ref={ref as React.RefObject<HTMLElement>} className={`py-20 bg-light-gray section-fade ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-6"><BookOpen className="text-primary mr-3" size={24} /><h3 className="text-xl font-semibold text-dark-slate">{t.booksTitle}</h3></div>
              <div className="space-y-4">
                {booksData.map((book, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-dark-slate text-sm leading-snug">{book.title}</h4>
                    <p className="text-gray-600 text-xs mt-1">{book.author}</p>
                    <p className="text-gray-500 text-xs">{book.publisher}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-6"><Award className="text-sky-blue mr-3" size={24} /><h3 className="text-xl font-semibold text-dark-slate">{t.articlesTitle}</h3></div>
              <div className="space-y-4">
                {articlesData.map((article, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-dark-slate text-sm leading-snug">{article.title}</h4>
                    <p className="text-gray-600 text-xs mt-1">{article.author}</p>
                    <p className="text-gray-500 text-xs">{article.journal}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-6"><Globe className="text-green-500 mr-3" size={24} /><h3 className="text-xl font-semibold text-dark-slate">{t.centersTitle}</h3></div>
              <div className="space-y-4">
                {universitiesData.map((center, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-dark-slate text-sm">{center.name}</h4>
                    <p className="text-gray-600 text-xs">{lang === 'es' ? center.program_es : center.program_en}</p>
                    <p className="text-gray-500 text-xs mt-1">{center.location}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-16 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-8 text-center">{t.orgsTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {organizationsData.map((org, index) => {
                const icons = [Globe, Award, Heart, BookOpen];
                const IconComponent = icons[index % icons.length];
                const colors = ['text-primary', 'text-sky-blue', 'text-green-500', 'text-purple-500'];
                const bgColors = ['bg-primary/10', 'bg-sky-blue/10', 'bg-green-500/10', 'bg-purple-500/10'];
                return (
                  <div key={index} className="text-center">
                    <div className={`${bgColors[index % bgColors.length]} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={colors[index % colors.length]} size={32} />
                    </div>
                    <h4 className="font-semibold text-dark-slate mb-2">{org.acronym}</h4>
                    <p className="text-gray-600 text-sm">{lang === 'es' ? org.name_es : org.name_en}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
