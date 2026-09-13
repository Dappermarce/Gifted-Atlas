import { Brain } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { lang } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const t =
    lang === "es"
      ? {
          brand: "Gifted Atlas — Psicología de las Altas Capacidades",
          tagline:
            "Un atlas para entender las altas capacidades sin convertir una persona en una cifra.",
          disclaimer:
            "La evidencia primero. Las certezas solo cuando se las han ganado.",

          colResources: "Recursos",
          assessments: "Evaluaciones",
          articles: "Artículos Científicos",
          books: "Libros Especializados",
          centers: "Centros de Investigación",

          colTopics: "Temas",
          giftedness: "Superdotación",
          research: "Investigación",
          psychiatry: "Psiquiatría",
          assessment: "Evaluación",

          colInfo: "Sobre el proyecto",
          info1: "Creado de forma independiente",
          info2: "Contenido educativo con límites de evidencia",
          info3: "Fuentes citadas en la bibliografía",

          copyright:
            "© 2026 Gifted Atlas — Psicología de las Altas Capacidades. Todos los derechos reservados.",
          medicalDisclaimer:
            "Este sitio web no constituye asesoramiento médico o psicológico profesional.",
          developedBy: "Creado y desarrollado por",
          contact: "Contacto:",
          sourceCode: "Código y documentación del proyecto",
          reviewed: "Última revisión: septiembre de 2026",
        }
      : {
          brand: "Gifted Atlas — Psychology of Giftedness",
          tagline:
            "An atlas for understanding giftedness without turning a person into a number.",
          disclaimer:
            "Evidence first. Certainty only when it has been earned.",

          colResources: "Resources",
          assessments: "Assessments",
          articles: "Scientific Articles",
          books: "Specialized Books",
          centers: "Research Centers",

          colTopics: "Topics",
          giftedness: "Giftedness",
          research: "Research",
          psychiatry: "Psychiatry",
          assessment: "Assessment",

          colInfo: "About the project",
          info1: "Created independently",
          info2: "Educational content with clear evidence limits",
          info3: "Sources cited in the bibliography",

          copyright:
            "© 2026 Gifted Atlas — Psychology of Giftedness. All rights reserved.",
          medicalDisclaimer:
            "This website does not constitute professional medical or psychological advice.",
          developedBy: "Created and developed by",
          contact: "Contact:",
          sourceCode: "Code and project documentation",
          reviewed: "Last reviewed: September 2026",
        };

  return (
    <footer className="gifted-footer py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center">
              <Brain className="mr-3 text-2xl text-primary" size={28} />
              <span className="text-xl font-semibold">{t.brand}</span>
            </div>

            <p className="mb-4 text-gray-400">{t.tagline}</p>
            <p className="text-sm italic text-gray-500">{t.disclaimer}</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t.colResources}</h4>

            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection("evaluacion-avanzada")}
                  className="transition-colors hover:text-white"
                >
                  {t.assessments}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("recursos")}
                  className="transition-colors hover:text-white"
                >
                  {t.articles}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("recursos")}
                  className="transition-colors hover:text-white"
                >
                  {t.books}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("recursos")}
                  className="transition-colors hover:text-white"
                >
                  {t.centers}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t.colTopics}</h4>

            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection("superdotacion")}
                  className="transition-colors hover:text-white"
                >
                  {t.giftedness}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("metodologia-investigacion")}
                  className="transition-colors hover:text-white"
                >
                  {t.research}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("psiquiatria")}
                  className="transition-colors hover:text-white"
                >
                  {t.psychiatry}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("evaluacion-avanzada")}
                  className="transition-colors hover:text-white"
                >
                  {t.assessment}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t.colInfo}</h4>

            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                {t.info1}
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                {t.info2}
              </li>

              <li className="flex items-start">
                <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                {t.info3}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-8 text-center text-gray-400">
          <p>{t.copyright}</p>

          <p className="mt-2 text-sm text-gray-500">
            {t.medicalDisclaimer}
          </p>
          <p className="mt-2 text-sm text-gray-500">{t.reviewed}</p>

          <p className="mt-2">
            {t.developedBy} <strong>Marcelo C. K.</strong>
          </p>

          <p className="mt-1 text-sm text-gray-400">
            {t.contact}{" "}
            <a
              href="mailto:Marcelo.CK@outlook.com"
              className="underline underline-offset-2 transition-colors hover:text-white"
            >
              Marcelo.CK@outlook.com
            </a>
          </p>

          <p className="mt-4 text-sm">
            <a
              href="https://github.com/Dappermarce/Gifted-Atlas"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-white"
            >
              {t.sourceCode}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
