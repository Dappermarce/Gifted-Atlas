import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => localStorage.getItem("gifted-atlas-language") === "en" ? "en" : "es");
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));
  useEffect(() => {
    const copy = lang === "es"
      ? {
          title: "Gifted Atlas — Psicología de las Altas Capacidades",
          description: "Atlas educativo bilingüe sobre altas capacidades, inteligencia, identificación, educación y neurociencia, con fuentes académicas y límites de evidencia.",
          social: "Modelos, evaluación, educación, neurociencia y bibliografía explicados con contexto y cautela científica.",
        }
      : {
          title: "Gifted Atlas — Psychology of Giftedness",
          description: "A bilingual educational atlas of giftedness, intelligence, identification, education, and neuroscience, with academic sources and clear evidence limits.",
          social: "Models, assessment, education, neuroscience, and bibliography explained with context and scientific caution.",
        };

    document.documentElement.lang = lang;
    document.title = copy.title;
    localStorage.setItem("gifted-atlas-language", lang);
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", copy.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", copy.social);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", copy.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", copy.social);
  }, [lang]);
  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
