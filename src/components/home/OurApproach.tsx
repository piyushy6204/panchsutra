"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "We begin by understanding the client's objectives, requirements, budget, location, and project scope.",
  },
  {
    number: "02",
    title: "Plan",
    description: "We develop practical strategies and technical solutions aligned with the project's requirements.",
  },
  {
    number: "03",
    title: "Coordinate",
    description: "We coordinate with relevant stakeholders, consultants, contractors, vendors, and project teams.",
  },
  {
    number: "04",
    title: "Execute",
    description: "We support efficient implementation while maintaining focus on quality, timelines, and project objectives.",
  },
  {
    number: "05",
    title: "Deliver",
    description: "We work toward reliable project outcomes that create long-term value for our clients.",
  },
];

interface StepCardProps {
  step: (typeof steps)[0];
  delay: number;
  inView: boolean;
  gridStyle: React.CSSProperties;
}

function StepCard({ step, delay, inView, gridStyle }: StepCardProps) {
  return (
    <div
      style={{
        ...gridStyle,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
        transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
      }}
    >
      <div
        className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col relative overflow-hidden group"
        style={{ height: "220px" }}
      >
        {/* Gold top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B29A68] to-[#D4BA88] rounded-t-xl" />

        {/* Number */}
        <span className="text-3xl font-extrabold font-mono text-[#B29A68] leading-none mt-2 mb-3 block">
          {step.number}
        </span>

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

        {/* Hover shimmer */}
        <div className="absolute inset-0 rounded-xl bg-[#B29A68] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
}

/** Shared definitions for arrows */
function ArrowDefs() {
  return (
    <svg width="0" height="0" className="absolute pointer-events-none">
      <defs>
        <marker id="arrowhead-gold" viewBox="0 0 10 10" markerWidth="5" markerHeight="5" refX="8" refY="5" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#B29A68" />
        </marker>
      </defs>
      <style>{`
        @keyframes flowDash {
          to { stroke-dashoffset: -24; }
        }
        .flowing-line {
          stroke-dasharray: 6 6;
          animation: flowDash 1s linear infinite;
        }
      `}</style>
    </svg>
  );
}

/** Animated diagonal arrow — down-right (01→02, 03→04) */
function ArrowDownRight({ delay, inView }: { delay: number; inView: boolean }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 90"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-h-[90px]"
        aria-hidden="true"
        style={{
          opacity: inView ? 1 : 0,
          transition: `opacity 0.7s ease-out ${delay}ms`
        }}
      >
        <line
          x1="150" y1="25" x2="250" y2="65"
          stroke="#B29A68"
          strokeWidth="2"
          strokeLinecap="round"
          className="flowing-line"
          markerEnd="url(#arrowhead-gold)"
        />
      </svg>
    </div>
  );
}

/** Animated diagonal arrow — up-right (02→03, 04→05) */
function ArrowUpRight({ delay, inView }: { delay: number; inView: boolean }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 90"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-h-[90px]"
        aria-hidden="true"
        style={{
          opacity: inView ? 1 : 0,
          transition: `opacity 0.7s ease-out ${delay}ms`
        }}
      >
        <line
          x1="150" y1="65" x2="250" y2="25"
          stroke="#B29A68"
          strokeWidth="2"
          strokeLinecap="round"
          className="flowing-line"
          markerEnd="url(#arrowhead-gold)"
        />
      </svg>
    </div>
  );
}

/** Mobile-only: vertical animated arrow */
function ArrowDown({ delay, inView }: { delay: number; inView: boolean }) {
  return (
    <div className="flex justify-center h-12 my-1">
      <svg 
        viewBox="0 0 20 48" 
        width="20" 
        height="48" 
        aria-hidden="true"
        style={{
          opacity: inView ? 1 : 0,
          transition: `opacity 0.7s ease-out ${delay}ms`
        }}
      >
        <line
          x1="10" y1="8" x2="10" y2="38"
          stroke="#B29A68"
          strokeWidth="2"
          strokeLinecap="round"
          className="flowing-line"
          markerEnd="url(#arrowhead-gold)"
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
        <ArrowDefs />
        {/* ── Section Header ─────────────────────────────────── */}
        <div
          className="max-w-2xl mb-14"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
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
            We believe successful project execution depends on coordination between every stage of development.
          </p>
        </div>

        {/* ── Desktop: Zigzag Grid ────────────────────────────── */}
        {/*
            Grid layout:
              Row 1 (cards):  [01]  [ ]  [03]  [ ]  [05]
              Row 2 (arrows): [↘ ]  [↗ ] [↘ ]  [↗ ]
              Row 3 (cards):  [ ]  [02]  [ ]  [04]  [ ]
        */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "220px 90px 220px",
            columnGap: "12px",
          }}
        >
          {/* ── Top row cards ── */}
          <StepCard step={steps[0]} delay={0}   inView={inView} gridStyle={{ gridColumn: "1", gridRow: "1" }} />
          <StepCard step={steps[2]} delay={200} inView={inView} gridStyle={{ gridColumn: "3", gridRow: "1" }} />
          <StepCard step={steps[4]} delay={400} inView={inView} gridStyle={{ gridColumn: "5", gridRow: "1" }} />

          {/* ── Bottom row cards ── */}
          <StepCard step={steps[1]} delay={150} inView={inView} gridStyle={{ gridColumn: "2", gridRow: "3" }} />
          <StepCard step={steps[3]} delay={350} inView={inView} gridStyle={{ gridColumn: "4", gridRow: "3" }} />

          {/* ── Arrow SVGs in gap row (row 2) ── */}
          {/* Each spans 2 cols and occupies the full gap row */}
          <div style={{ gridColumn: "1 / 3", gridRow: "2", pointerEvents: "none" }}>
            <ArrowDownRight delay={80}  inView={inView} />
          </div>
          <div style={{ gridColumn: "2 / 4", gridRow: "2", pointerEvents: "none" }}>
            <ArrowUpRight   delay={230} inView={inView} />
          </div>
          <div style={{ gridColumn: "3 / 5", gridRow: "2", pointerEvents: "none" }}>
            <ArrowDownRight delay={280} inView={inView} />
          </div>
          <div style={{ gridColumn: "4 / 6", gridRow: "2", pointerEvents: "none" }}>
            <ArrowUpRight   delay={430} inView={inView} />
          </div>
        </div>

        {/* ── Mobile: Vertical Flow ───────────────────────────── */}
        <div className="lg:hidden">
          {steps.map((step, i) => (
            <div key={step.number}>
              <div
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${i * 150}ms, transform 0.5s ease-out ${i * 150}ms`,
                }}
              >
                <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm p-5 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B29A68] to-[#D4BA88] rounded-t-xl" />
                  <span className="text-3xl font-extrabold font-mono text-[#B29A68] leading-none mt-2 mb-3 block">
                    {step.number}
                  </span>
                  <h3
                    className="text-sm font-bold text-[#0C2B45] mb-2"
                    style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#596572] leading-relaxed">{step.description}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <ArrowDown delay={i * 150 + 100} inView={inView} />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
