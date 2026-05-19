"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Retail Experience Platform",
    category: "Digital Experience",
    description:
      "End-to-end retail technology solution powering seamless customer journeys across physical and digital touchpoints.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Consumer Electronics Portal",
    category: "UI/UX Systems",
    description:
      "Comprehensive design system and component library for a global electronics brand, ensuring consistency across products.",
    tags: ["React", "Design System", "Figma"],
  },
  {
    title: "Smart Store Dashboard",
    category: "Retail Operations",
    description:
      "Real-time analytics dashboard for retail operations, providing insights into customer behavior and inventory management.",
    tags: ["Data Viz", "TypeScript", "APIs"],
  },
  {
    title: "Brand Identity System",
    category: "Digital Experience",
    description:
      "Complete brand refresh and digital identity system for a technology company entering new markets.",
    tags: ["Branding", "UI/UX", "Web"],
  },
];

export function SelectedWork() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="work"
      className="py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-balance">
            Projects that define my craft.
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-card border border-border rounded-2xl p-8 hover:border-muted-foreground transition-all duration-500 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Project number */}
              <span className="absolute top-8 right-8 text-sm text-muted-foreground font-mono">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Category */}
              <p className="text-sm text-muted-foreground mb-4">
                {project.category}
              </p>

              {/* Title */}
              <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted-foreground border border-border px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-muted-foreground"
                >
                  <path
                    d="M5.83331 14.1667L14.1666 5.83334M14.1666 5.83334H5.83331M14.1666 5.83334V14.1667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
