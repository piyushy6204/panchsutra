import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const reasons = [
  "End-to-end project solutions under one roof",
  "Expertise in industrial and real estate sectors",
  "Strong technical and execution capabilities",
  "Client-focused and transparent approach",
  "Strategic land sourcing and development support",
  "Reliable project management and coordination",
];

export default function WhyPanchsutra() {
  return (
    <section
      className="bg-[#0C2B45] py-8 lg:py-12 relative overflow-hidden"
      aria-labelledby="why-panchsutra-heading"
    >
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          className="absolute right-0 top-0 w-80 h-80 opacity-[0.03]"
          viewBox="0 0 320 320"
          fill="none"
        >
          <rect x="80" y="80" width="160" height="160" stroke="white" strokeWidth="1" transform="rotate(45 160 160)" />
          <rect x="100" y="100" width="120" height="120" stroke="white" strokeWidth="0.75" transform="rotate(45 160 160)" />
          <line x1="160" y1="0" x2="320" y2="160" stroke="white" strokeWidth="0.5" />
          <line x1="160" y1="0" x2="0" y2="160" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="160" x2="160" y2="320" stroke="white" strokeWidth="0.5" />
          <line x1="320" y1="160" x2="160" y2="320" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-eyebrow text-[#C9AF85]">Why Panchsutra</span>
            </div>
            <h2
              id="why-panchsutra-heading"
              className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)", color: "#FFFFFF" }}
            >
              One Partner.
              <br />
              Multiple Capabilities.
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#CBD5E1" }}>
              Successful projects require more than individual services. They require
              coordination between land, planning, engineering, execution, and management.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#CBD5E1" }}>
              Panchsutra Consultants brings these capabilities together to provide clients
              with a more streamlined and reliable project experience.
            </p>
            <Button href="/about-us" variant="outline" size="md" id="why-cta">
              Learn More About Us
            </Button>
          </div>

          {/* Right: Reasons */}
          <div>
            <ul className="space-y-0" role="list">
              {reasons.map((reason, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-4 border-b border-[#133558] last:border-0"
                >
                  <span
                    className="block w-1.5 h-1.5 rounded-full bg-[#B29A68] mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm sm:text-base text-[#C4CDD4] leading-relaxed">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
