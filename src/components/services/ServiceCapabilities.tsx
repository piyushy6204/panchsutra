import Container from "@/components/ui/Container";

interface ServiceCapabilitiesProps {
  intro: string;
  description: string;
  capabilities: string[];
  closingText: string;
}

export default function ServiceCapabilities({
  intro,
  description,
  capabilities,
  closingText,
}: ServiceCapabilitiesProps) {
  return (
    <section className="bg-white py-12 lg:py-16" aria-label="Service details">
      <Container>
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">
          {/* Main content */}
          <div>
            <div className="prose prose-lg max-w-none prose-headings:text-[#0C2B45] prose-headings:font-bold prose-p:text-[#596572] prose-p:leading-relaxed">
              <p className="text-lg text-[#0C2B45] font-medium leading-relaxed mb-6">
                {intro}
              </p>
              <p className="mb-10">{description}</p>
              
              <h3 
                className="text-xl font-bold text-[#0C2B45] mb-6"
                style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
              >
                Our Expertise
              </h3>
              
              <ul className="space-y-4 mb-10 pl-0 list-none">
                {capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="block w-1.5 h-1.5 rounded-full bg-[#B29A68] mt-2.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-[#596572] leading-relaxed">{cap}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-[#F7F7F5] border-l-4 border-[#B29A68] p-6 rounded-r-md">
                <p className="text-[#0C2B45] font-medium text-sm leading-relaxed m-0">
                  {closingText}
                </p>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="bg-[#FAFAF9] border border-[#E8E5DF] rounded-lg p-8">
            <h3 
              className="text-lg font-bold text-[#0C2B45] mb-6"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
            >
              Why Panchsutra?
            </h3>
            
            <ul className="space-y-5">
              {[
                { title: "Integrated Approach", desc: "Coordinating multiple requirements efficiently." },
                { title: "Technical Expertise", desc: "Engineering-led solutions for complex projects." },
                { title: "Practical Execution", desc: "Solutions designed for real-world development." },
                { title: "Transparent Communication", desc: "Clear recommendations at every step." }
              ].map((item, i) => (
                <li key={i} className="flex flex-col">
                  <span className="text-sm font-bold text-[#0C2B45] mb-1">{item.title}</span>
                  <span className="text-xs text-[#596572]">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
