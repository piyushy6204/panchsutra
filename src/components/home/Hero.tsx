import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[85vh] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Mobile Image */}
      <div className="absolute inset-0 sm:hidden">
        <Image
          src="/images/hero-mobile.jpg"
          alt="Modern commercial construction project in Maharashtra at sunset"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Desktop/Tablet Image */}
      <div className="absolute inset-0 hidden sm:block">
        <Image
          src="/images/hero.jpg"
          alt="Modern commercial construction project in Maharashtra at sunset"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay to ensure text readability - reduced blue density for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B]/85 via-[#071A2B]/55 to-black/30" />
      {/* Additional gradient for mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/80 via-transparent to-transparent sm:hidden" />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 py-16 lg:py-24 z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-[640px]">
            <h1
              className="text-[38px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)", color: "#FFFFFF" }}
            >
              Engineering Excellence.{" "}
              <br className="hidden sm:block" />
              Delivering{" "}
              <span className="text-[#D4BA88]">Precision.</span>
            </h1>

            <p
              className="text-lg sm:text-xl font-semibold mb-4 !text-left"
              style={{ color: "#FFFFFF" }}
            >
              One-Stop Solution for Real Estate &amp; Construction Services
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed mb-8 !text-left max-w-lg"
              style={{ color: "#FFFFFF" }}
            >
              Operating across Maharashtra, including Pune, Nashik, Mumbai, and
              other key cities, we bring together technical expertise, strategic
              planning, and execution capabilities to help turn complex projects
              into successful developments.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact-us" variant="primary" size="lg" id="hero-cta-primary">
                Discuss Your Project
              </Button>
              <Link
                href="/services"
                id="hero-cta-secondary"
                className="inline-flex items-center justify-center font-bold transition-all duration-200 border-2 rounded-lg px-8 py-3.5 text-base border-white bg-white/10 hover:bg-white hover:text-[#0C2B45]"
                style={{ color: "#FFFFFF" }}
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Right: Floating Capabilities Panel */}
          <div className="hidden lg:flex justify-end relative">
            <div className="w-[380px] bg-black/40 backdrop-blur-xl border border-white/20 rounded-xl p-8 shadow-2xl relative overflow-hidden">
              {/* Gold top accent */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#B29A68] to-[#D4BA88]" aria-hidden="true" />

              <p className="text-eyebrow mb-6 tracking-widest uppercase" style={{ color: "#D4BA88" }}>
                Our Core Capabilities
              </p>

              <ul className="space-y-0" role="list">
                {[
                  { num: "01", label: "Real Estate Solutions" },
                  { num: "02", label: "Project Management Consultancy" },
                  { num: "03", label: "Civil & MEP Consultancy" },
                  { num: "04", label: "Turnkey Construction" },
                  { num: "05", label: "Environmental Consultancy" },
                ].map((item) => (
                  <li key={item.num}>
                    <Link
                      href="/services"
                      className="group flex items-center gap-4 py-3.5 border-b border-white/15 last:border-0 hover:bg-white/10 -mx-3 px-3 rounded-md transition-all duration-200"
                    >
                      <span className="text-base font-bold text-[#D4BA88] w-6 flex-shrink-0 font-mono">
                        {item.num}
                      </span>
                      <span className="text-[15px] font-medium group-hover:text-[#D4BA88] transition-colors" style={{ color: "#FFFFFF" }}>
                        {item.label}
                      </span>
                      <span className="ml-auto text-[#D4BA88] opacity-0 group-hover:opacity-100 transition-opacity text-xs transform group-hover:translate-x-1 duration-200">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-white/15">
                <p className="text-xs font-medium" style={{ color: "#FFFFFF" }}>
                  <span className="text-[#D4BA88] font-bold">From Land to Landmark</span> — One integrated partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
