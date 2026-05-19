"use client";

import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kerem Alkan. {t.footer.rights}
          </p>
          <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
