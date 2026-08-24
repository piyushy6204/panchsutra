import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Panchsutra Consultants | Real Estate & Engineering Experts",
  description: "Learn about Panchsutra Consultants, a multidisciplinary real estate and construction consultancy based in Nashik, Maharashtra founded by Mr. Shreeganesh Patil.",
};

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us" },
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
              <h1 className="text-eyebrow text-[#0C2B45] uppercase tracking-widest">ABOUT US</h1>
            </div>
            
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0C2B45] leading-[1.15] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
            >
              Building Strong Foundations for Every Project
            </h2>
            
            <p className="text-lg text-[#596572] leading-relaxed">
              Panchsutra Consultants is a multidisciplinary real estate and construction consultancy based in Nashik, Maharashtra. We provide integrated solutions across land sourcing, engineering, project management, and construction.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">
            {/* Story & Vision */}
            <div>
              <div className="prose prose-lg max-w-none prose-headings:text-[#0C2B45] prose-headings:font-bold prose-p:text-[#596572] prose-p:leading-relaxed">
                <h3 
                  className="text-2xl font-bold text-[#0C2B45] mb-6"
                  style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
                >
                  Our Vision
                </h3>
                <p className="mb-10">
                  Construction and real estate development are complex processes that require coordination across multiple disciplines. Our vision is to bridge the gap between technical expertise and practical execution, ensuring that projects progress smoothly from the initial planning stages to final delivery.
                </p>
                
                <h3 
                  className="text-2xl font-bold text-[#0C2B45] mb-6"
                  style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
                >
                  Who We Serve
                </h3>
                <p className="mb-6">
                  We work with a diverse range of clients who require professional support and execution capabilities for their projects:
                </p>
                
                <ul className="space-y-4 mb-10 list-none pl-0">
                  {[
                    "Developers looking for reliable land acquisition and PMC support",
                    "Industries planning new manufacturing or warehouse facilities",
                    "Businesses requiring turnkey construction solutions",
                    "Property owners seeking strategic real estate advice"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="block w-1.5 h-1.5 rounded-full bg-[#B29A68] mt-2.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[#596572]">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-[#F7F7F5] border-l-4 border-[#0C2B45] p-6 rounded-r-md mb-10">
                  <p className="text-[#0C2B45] font-medium text-lg italic leading-relaxed m-0">
                    &quot;The right approach at the right time ensures project success. We focus on integrating technical engineering with practical construction reality.&quot;
                  </p>
                </div>
              </div>
            </div>
            
            {/* Founder Profile */}
            <div className="bg-[#FAFAF9] border border-[#E8E5DF] rounded-lg p-8 sticky top-32">
              <div className="w-8 h-px bg-[#B29A68] mb-6" aria-hidden="true" />
              <p className="text-xs font-semibold text-[#8795A1] uppercase tracking-widest mb-2">
                Founder & Principal Consultant
              </p>
              <h3 
                className="text-2xl font-bold text-[#0C2B45] mb-1"
                style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
              >
                Mr. Shreeganesh Patil
              </h3>
              <p className="text-sm font-semibold text-[#B29A68] mb-6">
                Civil & Environmental Technologist
              </p>
              
              <div className="space-y-4 text-sm text-[#596572] leading-relaxed mb-8">
                <p>
                  Founded by Mr. Shreeganesh Patil, Panchsutra Consultants was established with the vision of providing a more integrated and transparent approach to real estate and construction.
                </p>
                <p>
                  With expertise spanning civil engineering, environmental planning, project management, and construction execution, Mr. Patil recognized that successful projects require more than just fragmented services — they require coordinated expertise.
                </p>
                <p>
                  Under his leadership, Panchsutra has grown into a trusted partner for industrial and real estate development in Maharashtra.
                </p>
              </div>
              
              <div className="pt-6 border-t border-[#E8E5DF]">
                <p className="text-xs font-semibold text-[#0C2B45] uppercase tracking-widest mb-4">Core Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  {["Civil Engineering", "Environmental Planning", "Project Management", "Industrial Development"].map(tag => (
                    <span key={tag} className="text-xs text-[#8795A1] bg-white border border-[#E8E5DF] px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      <FinalCTA />
    </>
  );
}
