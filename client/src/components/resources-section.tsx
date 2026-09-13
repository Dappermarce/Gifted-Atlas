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

// Original editorial prompts: a reading route, not an endorsement of every claim.
const readingGuides = [
  { es: ["Modelos de inteligencia", "¿Qué cambia cuando se habla de varias inteligencias?", "Compara las categorías propuestas con las definiciones y métodos de la psicometría. Distingue una propuesta educativa de una medida validada."], en: ["Models of intelligence", "What changes when we speak of several intelligences?", "Compare the proposed categories with psychometric definitions and methods. Distinguish an educational proposal from a validated measure."] },
  { es: ["Más allá de una puntuación", "¿Cómo se relacionan la tarea, la persona y el contexto?", "Sigue la distinción entre los componentes de la teoría triárquica. Pregunta qué evidencia permitiría contrastar cada uno."], en: ["Beyond a score", "How do task, person, and context relate?", "Follow the distinction between the components of triarchic theory. Ask what evidence would allow each to be tested."] },
  { es: ["Mitos y trayectorias", "¿Qué suposiciones llevamos a la lectura sobre la infancia?", "Anota qué afirmaciones se basan en casos y cuáles en estudios de grupos. Una trayectoria llamativa no representa a toda la población."], en: ["Myths and trajectories", "What assumptions do we bring to reading about childhood?", "Note which claims draw on cases and which on group studies. One striking trajectory does not represent an entire population."] },
  { es: ["Entrada al campo", "¿Qué preguntas conviene tener antes de buscar una etiqueta?", "Úsalo para construir vocabulario y ubicar debates. Contrasta los criterios de identificación con el contexto y las fuentes más recientes."], en: ["An entry into the field", "What questions are worth asking before seeking a label?", "Use it to build vocabulary and locate debates. Compare identification criteria with the context and more recent sources."] },
  { es: ["Educación y decisiones", "¿Cómo pasamos de una idea a una práctica educativa?", "Lee por problema: identificación, currículo o evaluación. Revisa la evidencia de cada capítulo; un volumen colectivo reúne perspectivas distintas."], en: ["Education and decisions", "How do we move from an idea to an educational practice?", "Read by problem: identification, curriculum, or assessment. Examine each chapter's evidence; an edited volume brings together different perspectives."] },
  { es: ["Consulta y profundización", "¿Qué dimensión de la experiencia queremos comprender?", "Elige un capítulo según tu pregunta y sigue sus referencias. El manual sirve para orientarse, no para realizar una evaluación individual por cuenta propia."], en: ["Reference and deeper inquiry", "Which dimension of experience do we want to understand?", "Choose a chapter around your question and follow its references. The handbook provides orientation, not a way to perform an individual assessment yourself."] },
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
        <nav className="resource-index" aria-label={lang === 'es' ? 'Índice de recursos' : 'Resource index'}>
          {[["books", t.booksTitle], ["articles", t.articlesTitle], ["centers", t.centersTitle], ["organizations", t.orgsTitle]].map(([id, label]) => <a key={id} href={`#resources-${id}`}>{label}<span aria-hidden="true">↗</span></a>)}
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-6"><BookOpen className="text-primary mr-3" size={24} /><h3 id="resources-books" className="text-xl font-semibold text-dark-slate">{t.booksTitle}</h3></div>
              <p className="text-sm text-gray-600 mb-5">{lang === 'es' ? 'Abre un libro: una pregunta de entrada, una ruta de lectura y algo que conviene no dar por hecho.' : 'Open a book: an opening question, a reading route, and something worth questioning.'}</p>
              <div className="space-y-4">
                {booksData.map((book, index) => (
                  <details key={book.title} className="resource-book">
                    <summary>
                      <span className="resource-book-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                      <span><span className="resource-book-title">{book.title}</span><span className="resource-book-meta">{book.author} · {book.publisher}</span></span>
                      <span className="resource-book-plus" aria-hidden="true">+</span>
                    </summary>
                    <div className="resource-book-guide">
                      <span className="resource-book-category">{readingGuides[index][lang][0]}</span>
                      <h4>{readingGuides[index][lang][1]}</h4>
                      <p>{readingGuides[index][lang][2]}</p>
                      <small>{lang === 'es' ? 'Guía editorial; no implica consenso ni sustituye asesoramiento profesional.' : 'Editorial guidance; it does not imply consensus or replace professional advice.'}</small>
                      <a href={`https://www.google.com/search?q=${encodeURIComponent(`${book.title} ${book.author}`)}`} target="_blank" rel="noopener noreferrer">{lang === 'es' ? 'Buscar una edición' : 'Find an edition'} <span aria-hidden="true">↗</span></a>
                    </div>
                  </details>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-6"><Award className="text-sky-blue mr-3" size={24} /><h3 id="resources-articles" className="text-xl font-semibold text-dark-slate">{t.articlesTitle}</h3></div>
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
              <div className="flex items-center mb-6"><Globe className="text-green-500 mr-3" size={24} /><h3 id="resources-centers" className="text-xl font-semibold text-dark-slate">{t.centersTitle}</h3></div>
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
            <h3 id="resources-organizations" className="text-2xl font-semibold text-dark-slate mb-8 text-center">{t.orgsTitle}</h3>
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
