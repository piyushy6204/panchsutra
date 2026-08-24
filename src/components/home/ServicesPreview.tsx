import Link from "next/link";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="bg-white py-8 lg:py-12" aria-labelledby="services-preview-heading">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-eyebrow">Our Services</span>
            </div>
            <h2
              id="services-preview-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0C2B45] tracking-tight"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
            >
              Expertise That Moves
              <br className="hidden sm:block" /> Projects Forward
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-[#0C2B45] border border-[#0C2B45] px-5 py-2.5 rounded-[4px] hover:bg-[#0C2B45] hover:text-white transition-colors duration-200 whitespace-nowrap self-start sm:self-auto"
          >
            View All Services
          </Link>
        </div>

        {/* Services — editorial numbered list */}
        <div className="divide-y divide-[#E8E5DF]">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group grid grid-cols-[48px_1fr_auto] items-start gap-6 py-7 hover:bg-[#FAFAF9] -mx-4 px-4 rounded transition-colors duration-150"
              aria-label={`${service.title} — ${service.shortDescription}`}
            >
              {/* Number */}
              <span className="text-xs font-mono font-semibold text-[#B29A68] pt-0.5 flex-shrink-0">
                {service.number}
              </span>

              {/* Content */}
              <div>
                <h3
                  className="text-base sm:text-lg font-bold text-[#0C2B45] mb-1 group-hover:text-[#133558] transition-colors"
                  style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-[#596572] leading-relaxed max-w-xl">
                  {service.shortDescription}
                </p>
              </div>

              {/* Arrow */}
              <span
                className="text-[#B29A68] text-lg mt-0.5 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
