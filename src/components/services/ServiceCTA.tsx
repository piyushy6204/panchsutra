import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ServiceCTA() {
  return (
    <section className="bg-white py-12 lg:py-16 border-t border-[#E8E5DF]" aria-label="Service call to action">
      <Container>
        <div className="bg-[#0C2B45] rounded-xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Decorative lines */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-[0.05]" aria-hidden="true">
            <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="none" fill="none">
              <line x1="0" y1="0" x2="400" y2="400" stroke="white" strokeWidth="2" />
              <line x1="100" y1="0" x2="400" y2="300" stroke="white" strokeWidth="2" />
              <line x1="200" y1="0" x2="400" y2="200" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          
          <div className="max-w-2xl relative z-10">
            <h2 
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
            >
              Discuss Your Project Requirements
            </h2>
            <p className="text-sm sm:text-base text-[#8795A1] leading-relaxed">
              Whether you need land sourcing, engineering consultancy, PMC, industrial development support, or turnkey construction, our team can help you identify the right approach.
            </p>
          </div>
          
          <div className="flex-shrink-0 relative z-10 w-full md:w-auto">
            <Button href="/contact-us" variant="primary" size="lg" className="w-full md:w-auto bg-[#B29A68] text-[#0C2B45] border-[#B29A68] hover:bg-[#C9AF85] hover:border-[#C9AF85]">
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
