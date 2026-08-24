import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FinalCTA from "@/components/home/FinalCTA";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects & Portfolio | Panchsutra Consultants",
  description: "View our recent engineering, MEP design, and industrial plant setup projects across Nashik and Maharashtra.",
};

export default function ProjectsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Projects" },
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
              <h1 className="text-eyebrow text-[#0C2B45] uppercase tracking-widest">OUR WORK</h1>
            </div>
            
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0C2B45] leading-[1.15] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
            >
              Trusted by Developers, Businesses & Industries
            </h2>
            
            <p className="text-lg text-[#596572] leading-relaxed max-w-3xl">
              We have worked across diverse project requirements, delivering specialised engineering, project management, and industrial solutions. Below is a selection of our recent project engagements.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects List */}
      <section className="py-12 lg:py-16 bg-white">
        <Container>
          <div className="space-y-0 divide-y divide-[#E8E5DF]">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="py-12 lg:py-16 first:pt-0 last:pb-0 grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-start"
              >
                {/* Project Meta */}
                <div>
                  <div className="text-base sm:text-lg font-mono font-bold text-[#B29A68] mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-[#8795A1] uppercase tracking-widest mb-1">Client</p>
                      <h3 className="text-xl font-bold text-[#0C2B45]" style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}>
                        {project.client}
                      </h3>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-[#8795A1] uppercase tracking-widest mb-1">Service Provided</p>
                      <p className="text-sm font-medium text-[#0C2B45]">{project.service}</p>
                    </div>
                    
                    {project.location && (
                      <div>
                        <p className="text-xs font-semibold text-[#8795A1] uppercase tracking-widest mb-1">Location</p>
                        <p className="text-sm text-[#596572]">{project.location}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Project Description */}
                <div>
                  <h4 className="text-2xl lg:text-3xl font-bold text-[#0C2B45] mb-6" style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}>
                    {project.projectName}
                  </h4>
                  
                  <p className="text-base text-[#596572] leading-relaxed mb-8 max-w-2xl">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium text-[#596572] bg-[#F7F7F5] border border-[#E8E5DF] px-3 py-1.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-12 border-t border-[#E8E5DF] text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#0C2B45] mb-4" style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}>
              Have a similar project in mind?
            </h3>
            <p className="text-[#596572] mb-6">
              Our team is ready to support your next development with professional engineering and construction management.
            </p>
          </div>
        </Container>
      </section>
      
      <FinalCTA />
    </>
  );
}
