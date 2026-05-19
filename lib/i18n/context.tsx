"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { translations, type Language, type Translations } from "./translations";

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "en" || saved === "tr")) {
      setLanguageState(saved);
    }
    setMounted(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    // Update html lang attribute
    document.documentElement.lang = lang;
  }, []);

  const toggleLanguage = useCallback(() => {
    const newLang = language === "en" ? "tr" : "en";
    setLanguage(newLang);
  }, [language, setLanguage]);

  const t = translations[language];

  // Prevent hydration mismatch by using default language until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{
          language: "en",
          t: translations.en,
          setLanguage,
          toggleLanguage,
        }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider
      value={{ language, t, setLanguage, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
