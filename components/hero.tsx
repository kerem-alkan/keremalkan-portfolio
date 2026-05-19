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
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-balance leading-[1.05]">
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
            {/* Outer glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-muted/20 via-transparent to-muted/10 rounded-3xl blur-2xl" />
            
            {/* Portrait container */}
            <div className="relative">
              {/* Subtle border glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-border/60 via-border/20 to-transparent rounded-2xl" />
              
              {/* Image wrapper with mask for editorial effect */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] rounded-2xl overflow-hidden bg-card">
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
                  className="object-cover object-top grayscale-[15%] contrast-[1.02]"
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
