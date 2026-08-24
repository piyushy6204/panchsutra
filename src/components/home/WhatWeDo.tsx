import Container from "@/components/ui/Container";

const capabilities = [
  {
    icon: "◈",
    title: "Real Estate Solutions",
    description:
      "Strategic land sourcing, industrial properties, built-to-suit opportunities, and development support.",
  },
  {
    icon: "◈",
    title: "Civil & MEP Consultancy",
    description:
      "Engineering, plumbing, MEP coordination, infrastructure planning, and technical project support.",
  },
  {
    icon: "◈",
    title: "Project Management Consultancy",
    description:
      "Planning, supervision, contractor coordination, quality control, scheduling, and execution management.",
  },
  {
    icon: "◈",
    title: "Turnkey Construction",
    description:
      "Complete construction solutions for industrial, commercial, residential, and warehouse projects.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#F7F7F5] py-12 lg:py-16" aria-labelledby="what-we-do-heading">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Heading */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-eyebrow">What We Do</span>
            </div>
            <h2
              id="what-we-do-heading"
              className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold text-[#0C2B45] leading-tight tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
            >
              Complete Project Solutions Under One Roof
            </h2>
            <p className="text-base text-[#596572] leading-relaxed mb-4">
              At Panchsutra Consultants, we simplify the real estate and construction
              journey by bringing multiple project requirements together under one roof.
            </p>
            <p className="text-base text-[#596572] leading-relaxed">
              Whether you are looking for the right industrial land, planning a new
              development, requiring Civil or MEP consultancy, managing construction,
              or setting up an industrial facility, our team provides practical and
              project-focused solutions.
            </p>

            {/* Key differentiators */}
            <div className="mt-8 pt-8 border-t border-[#D9DDE0]">
              <p className="text-sm font-semibold text-[#0C2B45] mb-4">Our approach covers:</p>
              <ul className="space-y-2">
                {[
                  "Land & property requirements",
                  "Engineering & technical support",
                  "Project management & coordination",
                  "Construction & industrial development",
                  "Environmental planning",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-[#596572]">
                    <span className="block w-1 h-1 rounded-full bg-[#B29A68] flex-shrink-0" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Capability cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white border border-[#E8E5DF] rounded-md p-6 hover:border-[#B29A68] hover:shadow-sm transition-all duration-200"
              >
                <h3
                  className="text-sm font-bold text-[#0C2B45] mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
                >
                  {cap.title}
                </h3>
                <div className="w-8 h-px bg-[#B29A68] my-3" aria-hidden="true" />
                <p className="text-xs text-[#596572] leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
