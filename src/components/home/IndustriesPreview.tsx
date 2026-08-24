import Link from "next/link";
import Container from "@/components/ui/Container";
import { industries } from "@/data/industries";

export default function IndustriesPreview() {
  return (
    <section
      className="bg-white py-8 lg:py-12"
      aria-labelledby="industries-heading"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-eyebrow">Industries We Serve</span>
            </div>
            <h2
              id="industries-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0C2B45] tracking-tight"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
            >
              Solutions Across Diverse
              <br className="hidden sm:block" /> Project Environments
            </h2>
          </div>
          <Link
            href="/industries"
            className="text-sm font-semibold text-[#0C2B45] border border-[#0C2B45] px-5 py-2.5 rounded-[4px] hover:bg-[#0C2B45] hover:text-white transition-colors duration-200 whitespace-nowrap self-start sm:self-auto"
          >
            All Industries
          </Link>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E5DF]">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="bg-white p-7 hover:bg-[#FAFAF9] transition-colors group"
            >
              <div className="w-6 h-px bg-[#B29A68] mb-4" aria-hidden="true" />
              <h3
                className="text-base font-bold text-[#0C2B45] mb-2"
                style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
              >
                {industry.title}
              </h3>
              <p className="text-sm text-[#596572] leading-relaxed">
                {industry.description.split(".")[0]}.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
