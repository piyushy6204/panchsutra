import Link from "next/link";
import Container from "@/components/ui/Container";

export default function AboutPreview() {
  return (
    <section
      className="bg-white py-8 lg:py-12"
      aria-labelledby="about-preview-heading"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-eyebrow">About Panchsutra</span>
            </div>
            <h2
              id="about-preview-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0C2B45] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
            >
              Building Strong Foundations
              <br className="hidden sm:block" /> for Every Project
            </h2>
            <p className="text-base text-[#596572] leading-relaxed mb-4">
              Panchsutra Consultants is a multidisciplinary real estate and construction
              consultancy based in Nashik, Maharashtra.
            </p>
            <p className="text-base text-[#596572] leading-relaxed mb-4">
              Founded with the vision of Mr. Shreeganesh Patil, Civil & Environmental
              Technologist, the company combines engineering expertise, strategic planning,
              and industry knowledge to provide practical solutions across the project lifecycle.
            </p>
            <p className="text-base text-[#596572] leading-relaxed mb-8">
              From land identification and engineering consultancy to project management
              and construction execution, our goal is to simplify complex development
              requirements and help clients move forward with confidence.
            </p>
            <Link
              href="/about-us"
              className="inline-flex items-center text-sm font-semibold text-[#0C2B45] border border-[#0C2B45] px-5 py-2.5 rounded-[4px] hover:bg-[#0C2B45] hover:text-white transition-colors duration-200"
            >
              Know More About Us
            </Link>
          </div>

          {/* Right: Founder card + values */}
          <div className="space-y-6">
            {/* Founder */}
             <div className="border border-[#E8E5DF] rounded-md p-7 bg-[#FAFAF9]">
              <p className="text-xs font-semibold text-[#8795A1] uppercase tracking-widest mb-2">Founder</p>
              <h3
                className="text-xl font-bold text-[#0C2B45] mb-1"
                style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
              >
                Mr. Shreeganesh Patil
              </h3>
              <p className="text-sm text-[#B29A68] font-medium mb-4">
                Civil & Environmental Technologist
              </p>
              <p className="text-sm text-[#596572] leading-relaxed">
                With expertise across real estate consultancy, civil engineering,
                environmental consultancy, and construction management, Panchsutra
                was established to bridge the gap between technical expertise and
                practical project execution.
              </p>
            </div>

            {/* Core Capabilities */}
            <div className="border border-[#E8E5DF] rounded-md p-7">
              <p className="text-xs font-semibold text-[#8795A1] uppercase tracking-widest mb-4">
                Multidisciplinary Capabilities
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Real Estate Solutions",
                  "Industrial Land Sourcing",
                  "Civil Engineering",
                  "MEP Consultancy",
                  "Project Management",
                  "Turnkey Construction",
                  "MIDC & SEZ Advisory",
                  "Environmental Consultancy",
                ].map((cap) => (
                  <div key={cap} className="flex items-center gap-2">
                    <span className="block w-1 h-1 rounded-full bg-[#B29A68] flex-shrink-0" aria-hidden="true" />
                    <span className="text-xs text-[#596572]">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
