"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic grain overlay */}
      <div className="grain-overlay" />
      
      {/* Atmospheric ambient glow */}
      <div className="ambient-glow-top" />
      
      {/* Soft radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Apple keynote-style spotlight */}
      <div className="spotlight top-0 left-1/2 -translate-x-1/2 -translate-y-1/4" />
      
      {/* Subtle warm accent glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-warm/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-glow-cool/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content - Left side */}
          <div
            className={`flex-1 space-y-8 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Eyebrow */}
            <p className="text-muted-foreground text-sm tracking-widest uppercase">
              {t.hero.eyebrow}
            </p>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-balance leading-[1.05] text-glow">
              Kerem Alkan
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
              {t.hero.subtitle}
            </p>

            {/* Focus areas */}
            <div className="flex flex-wrap gap-3 pt-4">
              {t.hero.focusAreas.map((area, index) => (
                <span
                  key={area}
                  className="text-sm text-muted-foreground border border-border px-4 py-2 rounded-full transition-all duration-300 hover:border-muted-foreground/60 hover:text-foreground hover:bg-secondary/50"
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
                className="btn-premium inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium"
              >
                {t.hero.viewWork}
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
                {t.hero.learnMore}
              </a>
            </div>
          </div>

          {/* Portrait - Right side */}
          <div
            className={`relative flex-shrink-0 transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Soft ambient glow behind portrait */}
            <div className="absolute -inset-12 bg-gradient-to-br from-glow-warm/20 via-transparent to-glow-cool/15 rounded-[3rem] blur-[60px]" />
            
            {/* Portrait container */}
            <div className="relative">
              {/* Subtle gradient border */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-border/80 via-border/40 to-border/20 rounded-2xl" />
              
              {/* Image wrapper with mask for editorial effect */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] rounded-2xl overflow-hidden bg-card inner-depth">
                {/* Top gradient overlay for cinematic blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30 z-10 pointer-events-none" />
                
                {/* Side gradient for seamless integration */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 z-10 pointer-events-none" />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)] z-10 pointer-events-none rounded-2xl" />
                
                <Image
                  src="/images/portrait.png"
                  alt="Kerem Alkan"
                  fill
                  className="object-cover object-top img-editorial"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                />
              </div>
              
              {/* Bottom shadow for depth */}
              <div className="absolute -bottom-4 left-4 right-4 h-8 bg-background/60 blur-xl rounded-full" />
            </div>
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
