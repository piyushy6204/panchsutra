import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative bg-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle geometric background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          className="absolute top-0 right-0 w-[360px] h-[360px] md:w-[480px] md:h-[480px] opacity-[0.03]"
          viewBox="0 0 480 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="240" y1="0" x2="480" y2="240" stroke="#0C2B45" strokeWidth="1.5" />
          <line x1="240" y1="0" x2="0" y2="240" stroke="#0C2B45" strokeWidth="1.5" />
          <line x1="480" y1="240" x2="240" y2="480" stroke="#0C2B45" strokeWidth="1.5" />
          <line x1="0" y1="240" x2="240" y2="480" stroke="#0C2B45" strokeWidth="1.5" />
          <rect x="150" y="150" width="180" height="180" stroke="#B29A68" strokeWidth="1" transform="rotate(45 240 240)" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 pt-2 pb-12 lg:pt-4 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-[640px]">
            <h1
              className="text-[38px] sm:text-[52px] lg:text-[58px] font-extrabold text-[#0C2B45] leading-[1.08] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
            >
              Engineering Excellence.{" "}
              <br className="hidden sm:block" />
              Delivering{" "}
              <span className="text-[#B29A68]">Precision.</span>
            </h1>

            <p className="text-base sm:text-lg font-semibold text-[#0C2B45] mb-3 !text-left">
              One-Stop Solution for Real Estate &amp; Construction Services
            </p>

            <p className="text-base text-[#596572] leading-relaxed mb-3 !text-left">
              From strategic land sourcing and engineering consultancy to project
              management and turnkey construction, Panchsutra Consultants delivers
              integrated solutions for developers, industries, businesses, and
              property owners across India.
            </p>
            <p className="text-base text-[#596572] leading-relaxed mb-8 !text-left">
              Based in Nashik, we bring together technical expertise, strategic
              planning, and execution capabilities to help turn complex projects
              into successful developments.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/contact-us" variant="primary" size="lg" id="hero-cta-primary">
                Discuss Your Project
              </Button>
              <Button href="/services" variant="secondary" size="lg" id="hero-cta-secondary">
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Right: Capabilities panel — only on desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-[#F7F7F5] border border-[#E5E7EB] rounded-lg p-8 relative overflow-hidden">
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B29A68]" aria-hidden="true" />

                <p className="text-eyebrow mb-6">Our Core Capabilities</p>

                <ul className="space-y-0" role="list">
                  {[
                    { num: "01", label: "Real Estate Solutions" },
                    { num: "02", label: "Project Management Consultancy" },
                    { num: "03", label: "Civil & MEP Consultancy" },
                    { num: "04", label: "Turnkey Construction" },
                    { num: "05", label: "MIDC & SEZ Advisory" },
                    { num: "06", label: "Environmental Consultancy" },
                  ].map((item) => (
                    <li key={item.num}>
                      <Link
                        href="/services"
                        className="group flex items-center gap-4 py-3.5 border-b border-[#E5E7EB] last:border-0 hover:bg-white -mx-2 px-2 rounded transition-colors duration-150"
                      >
                        <span className="text-base sm:text-lg font-bold text-[#B29A68] w-7 flex-shrink-0 font-mono">
                          {item.num}
                        </span>
                        <span className="text-sm font-medium text-[#0C2B45] group-hover:text-[#133558]">
                          {item.label}
                        </span>
                        <span className="ml-auto text-[#B29A68] opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-[#E5E7EB]">
                  <p className="text-xs text-[#8795A1]">
                    <span className="text-[#B29A68] font-semibold">From Land to Landmark</span> — One integrated project partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
