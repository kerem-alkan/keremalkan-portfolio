"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 bg-secondary/30 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-muted-foreground text-sm tracking-widest uppercase">
              {t.contact.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-balance">
              {t.contact.heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              {t.contact.description}
            </p>

            {/* Email */}
            <a
              href="mailto:hello@keremalkan.com"
              className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
            >
              <span className="text-xl font-medium">hello@keremalkan.com</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M5.83331 14.1667L14.1666 5.83334M14.1666 5.83334H5.83331M14.1666 5.83334V14.1667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Right column */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">
                {t.contact.connectLabel}
              </p>
              <div className="space-y-4">
                {t.contact.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between py-4 border-b border-border group hover:border-muted-foreground transition-colors"
                  >
                    <span className="text-foreground group-hover:text-muted-foreground transition-colors">
                      {link.label}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all"
                    >
                      <path
                        d="M4.66669 11.3333L11.3334 4.66666M11.3334 4.66666H4.66669M11.3334 4.66666V11.3333"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="pt-8">
              <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
                {t.contact.basedInLabel}
              </p>
              <p className="text-foreground text-lg">{t.contact.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
