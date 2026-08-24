import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FinalCTA from "@/components/home/FinalCTA";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | Panchsutra Consultants",
  description: "Panchsutra provides real estate, engineering and construction consultancy for manufacturing units, warehousing, industrial infrastructure, and real estate development.",
};

export default function IndustriesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Industries" },
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
              <h1 className="text-eyebrow text-[#0C2B45] uppercase tracking-widest">INDUSTRIES</h1>
            </div>
            
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0C2B45] leading-[1.15] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
            >
              Solutions Across Diverse Project Environments
            </h2>
            
            <p className="text-lg text-[#596572] leading-relaxed max-w-3xl">
              Different industries have different operational, infrastructural, and regulatory requirements. Our cross-disciplinary expertise allows us to provide targeted support across a variety of sectors in Nashik, Pune, and Maharashtra.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {industries.map((industry) => (
              <div 
                key={industry.id} 
                className="bg-[#FAFAF9] border border-[#E8E5DF] p-8 lg:p-10 rounded-lg hover:border-[#B29A68] transition-colors duration-300"
              >
                
                <h3 
                  className="text-2xl font-bold text-[#0C2B45] mb-4"
                  style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
                >
                  {industry.title}
                </h3>
                
                <p className="text-base text-[#596572] leading-relaxed mb-8">
                  {industry.description}
                </p>
                
                <div className="pt-6 border-t border-[#E8E5DF]">
                  <p className="text-xs font-semibold text-[#8795A1] uppercase tracking-widest mb-4">Relevant Services</p>
                  <ul className="space-y-2">
                    {industry.relevantServices.map((service, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#B29A68] mt-2 flex-shrink-0" aria-hidden="true" />
                        <span className="text-sm font-medium text-[#0C2B45]">{service}</span>
                      </li>
                    ))}
                  </ul>
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
