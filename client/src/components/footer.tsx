import { Brain } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { lang } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const t = lang === 'es'
    ? {
        brand: "Psicología de la Superdotación",
        tagline: "Un atlas para entender las altas capacidades sin convertir una persona en una cifra.",
        disclaimer: "La evidencia primero. Las certezas solo cuando se las han ganado.",
        colResources: "Recursos", assessments: "Evaluaciones", articles: "Artículos Científicos", books: "Libros Especializados", centers: "Centros de Investigación",
        colTopics: "Temas", giftedness: "Superdotación", research: "Investigación", psychiatry: "Psiquiatría", assessment: "Evaluación",
        colInfo: "Criterio editorial", info1: "Fuentes trazables", info2: "Revisión: julio de 2026", info3: "Incertidumbre explicada",
        copyright: "© 2026 Psicología de la Superdotación. Todos los derechos reservados.",
        medicalDisclaimer: "Este sitio web no constituye asesoramiento médico o psicológico profesional.",
        developedBy: "Desarrollado por", createdNote: "Revisión editorial: julio de 2026",
        contact: "Contacto:", cite: "Cita sugerida:",
        citation: "Marcelo, C. K. (2026). Gifted Atlas: Psicología de las altas capacidades.",
        sourceCode: "Código y documentación académica",
      }
    : {
        brand: "Psychology of Giftedness",
        tagline: "An atlas for understanding giftedness without turning a person into a number.",
        disclaimer: "Evidence first. Certainty only when it has been earned.",
        colResources: "Resources", assessments: "Assessments", articles: "Scientific Articles", books: "Specialized Books", centers: "Research Centers",
        colTopics: "Topics", giftedness: "Giftedness", research: "Research", psychiatry: "Psychiatry", assessment: "Assessment",
        colInfo: "Editorial standard", info1: "Traceable sources", info2: "Reviewed: July 2026", info3: "Uncertainty explained",
        copyright: "© 2026 Psychology of Giftedness. All rights reserved.",
        medicalDisclaimer: "This website does not constitute professional medical or psychological advice.",
        developedBy: "Developed by", createdNote: "Editorial review: July 2026",
        contact: "Contact:", cite: "Suggested citation:",
        citation: "Marcelo, C. K. (2026). Gifted Atlas: Psychology of giftedness.",
        sourceCode: "Code and academic documentation",
      };

  return (
    <footer className="bg-dark-slate text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4"><Brain className="text-primary text-2xl mr-3" size={28} /><span className="text-xl font-semibold">{t.brand}</span></div>
            <p className="text-gray-400 mb-4">{t.tagline}</p>
            <p className="text-gray-500 text-sm italic">{t.disclaimer}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.colResources}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection('evaluacion-avanzada')} className="hover:text-white transition-colors">{t.assessments}</button></li>
              <li><button onClick={() => scrollToSection('recursos')} className="hover:text-white transition-colors">{t.articles}</button></li>
              <li><button onClick={() => scrollToSection('recursos')} className="hover:text-white transition-colors">{t.books}</button></li>
              <li><button onClick={() => scrollToSection('recursos')} className="hover:text-white transition-colors">{t.centers}</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.colTopics}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection('superdotacion')} className="hover:text-white transition-colors">{t.giftedness}</button></li>
              <li><button onClick={() => scrollToSection('metodologia-investigacion')} className="hover:text-white transition-colors">{t.research}</button></li>
              <li><button onClick={() => scrollToSection('psiquiatria')} className="hover:text-white transition-colors">{t.psychiatry}</button></li>
              <li><button onClick={() => scrollToSection('evaluacion-avanzada')} className="hover:text-white transition-colors">{t.assessment}</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.colInfo}</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start"><div className="bg-primary w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>{t.info1}</li>
              <li className="flex items-start"><div className="bg-primary w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>{t.info2}</li>
              <li className="flex items-start"><div className="bg-primary w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>{t.info3}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>{t.copyright}</p>
          <p className="text-sm text-gray-500 mt-2">{t.medicalDisclaimer}</p>
          <p className="mt-2">{t.developedBy}{" "}<strong>Marcelo C. K.</strong></p>
          <p className="mt-1 text-gray-400 text-sm">
            {t.contact}{" "}
            <a href="mailto:MarceloCK@proton.me" className="hover:text-white transition-colors underline underline-offset-2">
              MarceloCK@proton.me
            </a>
          </p>
          <p className="mt-4 text-xs text-gray-500"><strong>{t.cite}</strong> {t.citation}</p>
          <p className="mt-2 text-sm">
            <a href="https://github.com/Dappermarce/Gifted-Atlas" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors">
              {t.sourceCode}
            </a>
          </p>
          <p className="text-xs text-gray-600 mt-2">{t.createdNote}</p>
        </div>
      </div>
    </footer>
  );
}
