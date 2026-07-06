import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import type { WikiLang } from "../../types/Language";

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<WikiLang>("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};