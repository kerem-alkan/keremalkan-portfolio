"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const focusAreas = [
    "Retail Operations",
    "Digital Experience",
    "Front-End Development",
    "UI/UX Systems",
    "Consumer Technologies",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div
          className={`space-y-8 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Eyebrow */}
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Brand & Technology Specialist
          </p>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-balance leading-[1.05]">
            Kerem Alkan
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
            Crafting seamless digital experiences at the intersection of brand strategy and technology innovation.
          </p>

          {/* Focus areas */}
          <div className="flex flex-wrap gap-3 pt-4">
            {focusAreas.map((area, index) => (
              <span
                key={area}
                className="text-sm text-muted-foreground border border-border px-4 py-2 rounded-full transition-all duration-300 hover:border-muted-foreground hover:text-foreground"
                style={{
                  transitionDelay: mounted ? `${index * 100}ms` : "0ms",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(10px)",
                }}
              >
                {area}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-6 pt-8">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              View Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-muted-foreground"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
