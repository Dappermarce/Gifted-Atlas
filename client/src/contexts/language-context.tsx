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
  const [lang, setLang] = useState<Lang>("es");
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === "es"
      ? "Gifted Atlas | Psicología de las altas capacidades"
      : "Gifted Atlas | Psychology of Giftedness";
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
