"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "We begin by understanding the client's objectives, requirements, budget, location, and project scope.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Plan",
    description: "We develop practical strategies and technical solutions aligned with the project's requirements.",
    icon: "📐",
  },
  {
    number: "03",
    title: "Coordinate",
    description: "We coordinate with relevant stakeholders, consultants, contractors, vendors, and project teams.",
    icon: "🤝",
  },
  {
    number: "04",
    title: "Execute",
    description: "We support efficient implementation while maintaining focus on quality, timelines, and project objectives.",
    icon: "⚙️",
  },
  {
    number: "05",
    title: "Deliver",
    description: "We work toward reliable project outcomes that create long-term value for our clients.",
    icon: "🏆",
  },
];

/* Animated arrow SVG — horizontal (desktop) */
function ArrowH({ delay }: { delay: number }) {
  return (
    <div className="hidden lg:flex items-center justify-center w-12 flex-shrink-0 mt-[-48px]">
      <svg width="48" height="20" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          @keyframes drawArrow-${delay} {
            0%   { stroke-dashoffset: 60; opacity: 0; }
            20%  { opacity: 1; }
            100% { stroke-dashoffset: 0; }
          }
          .arrow-line-${delay} {
            stroke-dasharray: 60;
            stroke-dashoffset: 60;
            animation: drawArrow-${delay} 0.6s ease-out ${delay}ms forwards;
          }
          @keyframes pulse-${delay} {
            0%, 100% { opacity: 0.5; transform: translateX(0); }
            50%       { opacity: 1;   transform: translateX(4px); }
          }
          .arrow-head-${delay} {
            animation: pulse-${delay} 1.4s ease-in-out ${delay + 600}ms infinite;
          }
        `}</style>
        {/* Line */}
        <line
          x1="0" y1="10" x2="34" y2="10"
          stroke="#B29A68" strokeWidth="1.5"
          className={`arrow-line-${delay}`}
        />
        {/* Arrowhead */}
        <polyline
          points="28,4 40,10 28,16"
          fill="none" stroke="#B29A68" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
          className={`arrow-head-${delay}`}
        />
      </svg>
    </div>
  );
}

/* Animated arrow SVG — vertical (mobile) */
function ArrowV({ delay }: { delay: number }) {
  return (
    <div className="flex lg:hidden items-center justify-center h-10 ml-6">
      <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          @keyframes drawArrowV-${delay} {
            0%   { stroke-dashoffset: 50; opacity: 0; }
            20%  { opacity: 1; }
            100% { stroke-dashoffset: 0; }
          }
          .arrow-vline-${delay} {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
            animation: drawArrowV-${delay} 0.6s ease-out ${delay}ms forwards;
          }
          @keyframes pulseV-${delay} {
            0%, 100% { opacity: 0.5; transform: translateY(0); }
            50%       { opacity: 1;   transform: translateY(4px); }
          }
          .arrow-vhead-${delay} {
            animation: pulseV-${delay} 1.4s ease-in-out ${delay + 600}ms infinite;
          }
        `}</style>
        <line
          x1="10" y1="0" x2="10" y2="26"
          stroke="#B29A68" strokeWidth="1.5"
          className={`arrow-vline-${delay}`}
        />
        <polyline
          points="4,20 10,32 16,20"
          fill="none" stroke="#B29A68" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
          className={`arrow-vhead-${delay}`}
        />
      </svg>
    </div>
  );
}

export default function OurApproach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-[#F3F1EC] py-10 lg:py-16 overflow-hidden"
      aria-labelledby="approach-heading"
      ref={sectionRef}
    >
      <Container>
        {/* Header */}
        <div
          className="max-w-2xl mb-14 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}
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

        {/* Flow — desktop horizontal, mobile vertical */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          {steps.map((step, index) => {
            const cardDelay = index * 150;
            const arrowDelay = index * 150 + 120;

            return (
              <div
                key={step.number}
                className="flex flex-col lg:flex-row lg:items-start"
              >
                {/* Step Card */}
                <div
                  className="transition-all ease-out"
                  style={{
                    transitionDuration: `${500 + index * 100}ms`,
                    transitionDelay: `${cardDelay}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0) scale(1)" : "translateY(28px) scale(0.97)",
                  }}
                >
                  <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-5 w-full lg:w-[170px] xl:w-[190px] min-h-[192px] flex flex-col relative overflow-hidden group">
                    {/* Gold top accent */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B29A68] rounded-t-xl" />

                    {/* Number badge */}
                    <div className="flex items-center gap-2 mb-3 mt-1">
                      <span className="text-2xl font-extrabold font-mono text-[#B29A68] leading-none">
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-sm font-bold text-[#0C2B45] mb-2 leading-snug"
                      style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#596572] leading-relaxed flex-1">
                      {step.description}
                    </p>

                    {/* Subtle hover glow */}
                    <div className="absolute inset-0 rounded-xl bg-[#B29A68] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Arrow between cards (not after last) */}
                {index < steps.length - 1 && inView && (
                  <>
                    <ArrowH delay={arrowDelay} />
                    <ArrowV delay={arrowDelay} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
