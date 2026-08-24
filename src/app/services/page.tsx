import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FinalCTA from "@/components/home/FinalCTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Real Estate, Engineering & Construction Services",
  description: "Explore real estate, Civil & MEP consultancy, PMC, turnkey construction, MIDC & SEZ advisory and environmental consultancy in Nashik and Pune.",
};

export default function ServicesIndexPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F7F7F5] pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-[#E8E5DF]">
        <Container>
          <div className="mb-10 lg:mb-16">
            <Breadcrumb items={breadcrumbs} />
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <h1 className="text-eyebrow text-[#0C2B45] uppercase tracking-widest">SERVICES</h1>
            </div>
            
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0C2B45] leading-[1.15] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
            >
              Comprehensive Real Estate, Engineering & Construction Solutions
            </h2>
            
            <p className="text-lg text-[#596572] leading-relaxed max-w-3xl">
              From strategic land sourcing to project execution, Panchsutra Consultants provides integrated solutions for developers, industries, businesses, and property owners. Our multidisciplinary approach allows us to coordinate different aspects of a project through one trusted partner.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-12 lg:py-16 bg-white">
        <Container>
          <div className="divide-y divide-[#E8E5DF]">
            {services.map((service) => (
              <div key={service.slug} className="py-12 lg:py-16 first:pt-0 last:pb-0">
                <div className="grid lg:grid-cols-[120px_1fr] gap-6 lg:gap-12">
                  {/* Number */}
                  <div className="hidden lg:block">
                    <span className="text-4xl font-mono font-bold text-[#F3F1EC]">
                      {service.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4 lg:hidden">
                      <span className="text-xl font-mono font-bold text-[#B29A68]">{service.number}.</span>
                      <h3 className="text-2xl font-bold text-[#0C2B45]" style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <h3 className="hidden lg:block text-2xl lg:text-3xl font-bold text-[#0C2B45] mb-4" style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-[#0C2B45] font-medium mb-4">
                      {service.headingLine}
                    </p>
                    
                    <p className="text-base text-[#596572] leading-relaxed max-w-3xl mb-8">
                      {service.intro}
                    </p>
                    
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-[#0C2B45] hover:text-[#B29A68] transition-colors group"
                    >
                      Explore this service
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      <FinalCTA />
    </>
  );
}
