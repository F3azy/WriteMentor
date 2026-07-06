import { createContext } from "react";
import type { WikiLang } from "../../types/Language";

type LanguageContextType = {
  lang: WikiLang;
  setLang: (lang: WikiLang) => void;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);
