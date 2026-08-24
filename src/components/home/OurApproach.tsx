"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the client's objectives, requirements, budget, location, and project scope.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We develop practical strategies and technical solutions aligned with the project's requirements.",
  },
  {
    number: "03",
    title: "Coordinate",
    description:
      "We coordinate with relevant stakeholders, consultants, contractors, vendors, and project teams.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "We support efficient implementation while maintaining focus on quality, timelines, and project objectives.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "We work toward reliable project outcomes that create long-term value for our clients.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function OurApproach() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section
      className="bg-[#F3F1EC] py-8 lg:py-14 overflow-hidden"
      aria-labelledby="approach-heading"
    >
      <Container>
        {/* Header — slides in from left */}
        <div
          className="max-w-2xl mb-14 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-40px)",
          }}
          ref={sectionRef}
        >
          <span className="text-eyebrow block mb-4">Our Approach</span>
          <h2
            id="approach-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0C2B45] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
          >
            One Project. One Coordinated Approach.
          </h2>
          <p className="text-base text-[#596572] leading-relaxed">
            We believe successful project execution depends on coordination between
            every stage of development.
          </p>
        </div>

        {/* Steps — each card slides in from right with staggered delay */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-8 left-[2.5rem] right-[2.5rem] h-px bg-[#D9DDE0]"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4" role="list">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className="relative flex lg:flex-col gap-5 lg:gap-0 transition-all ease-out"
                style={{
                  transitionDuration: `${600 + index * 120}ms`,
                  opacity: inView ? 1 : 0,
                  transform: inView
                    ? "translateX(0)"
                    : `translateX(${60 + index * 20}px)`,
                }}
              >
                {/* Number circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-[#D9DDE0] flex items-center justify-center lg:mb-6 transition-colors duration-300 hover:border-[#B29A68]">
                    <span className="text-sm font-mono font-bold text-[#B29A68]">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Vertical connector on mobile */}
                {index < steps.length - 1 && (
                  <div
                    className="lg:hidden absolute left-8 top-16 bottom-0 w-px bg-[#D9DDE0]"
                    aria-hidden="true"
                    style={{ height: "calc(100% - 4rem)" }}
                  />
                )}

                {/* Content */}
                <div className="pb-8 lg:pb-0">
                  <h3
                    className="text-sm font-bold text-[#0C2B45] mb-2"
                    style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#596572] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
