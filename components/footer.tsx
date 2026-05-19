"use client";

import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 relative">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground/80">
            © {new Date().getFullYear()} Kerem Alkan. {t.footer.rights}
          </p>
          <p className="text-sm text-muted-foreground/60 tracking-wide">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
