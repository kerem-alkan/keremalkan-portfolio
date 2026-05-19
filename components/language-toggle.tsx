"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 rounded-md transition-all duration-300 ${
          language === "en"
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-border">/</span>
      <button
        onClick={() => setLanguage("tr")}
        className={`px-2 py-1 rounded-md transition-all duration-300 ${
          language === "tr"
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Türkçe&apos;ye geç"
      >
        TR
      </button>
    </div>
  );
}
