"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function Experience() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-32 relative overflow-hidden"
    >
      {/* Subtle atmospheric background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            {t.experience.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-balance">
            {t.experience.heading}
          </h2>
        </div>

        {/* Experience list */}
        <div className="space-y-0">
          {t.experience.items.map((exp, index) => (
            <div
              key={exp.company}
              className={`group border-t border-border last:border-b py-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                {/* Company & Role */}
                <div className="md:col-span-4">
                  <h3 className="text-xl font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    {exp.company}
                  </h3>
                  <p className="text-muted-foreground mt-1">{exp.role}</p>
                </div>

                {/* Period */}
                <div className="md:col-span-2">
                  <span className="text-sm text-muted-foreground border border-border px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
