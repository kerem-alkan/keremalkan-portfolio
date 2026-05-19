"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function About() {
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
      id="about"
      className="py-32 section-fade"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-muted-foreground text-sm tracking-widest uppercase">
              {t.about.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-balance">
              {t.about.heading}
            </h2>
          </div>

          {/* Right column */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.paragraph1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.paragraph2}
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {t.about.skills.map((skill, index) => (
                <div
                  key={skill.label}
                  className="p-4 border border-border rounded-xl hover:border-muted-foreground/50 hover:bg-secondary/30 transition-all duration-300 card-glow"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <p className="text-foreground font-medium">{skill.label}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {skill.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
