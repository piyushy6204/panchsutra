import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="bg-[#0C2B45] py-16 lg:py-24 relative overflow-hidden text-center" aria-label="Call to action">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-center opacity-[0.03]" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="none" fill="none">
          <line x1="0" y1="200" x2="1200" y2="200" stroke="white" strokeWidth="1" />
          <line x1="600" y1="0" x2="600" y2="400" stroke="white" strokeWidth="1" />
          <circle cx="600" cy="200" r="150" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <p className="text-eyebrow text-[#C9AF85] mb-4">From Land to Landmark.</p>
          
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-8"
            style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)", color: "#FFFFFF" }}
          >
            Your Vision. Our Expertise.<br />
            <span style={{ color: "#B29A68" }}>One Complete Solution.</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#8795A1] leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you&apos;re planning an industrial facility, warehouse, residential
            development, commercial project, or looking for strategic real estate
            opportunities, Panchsutra Consultants is ready to support your journey.
          </p>
          
          <Button href="/contact-us" variant="primary" size="lg" className="bg-[#B29A68] text-[#0C2B45] border-[#B29A68] hover:bg-[#C9AF85] hover:border-[#C9AF85]">
            Start Your Project
          </Button>
        </div>
      </Container>
    </section>
  );
}
