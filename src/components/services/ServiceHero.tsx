import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

interface ServiceHeroProps {
  title: string;
  headingLine: string;
  breadcrumbItems: { label: string; href?: string }[];
}

export default function ServiceHero({ title, headingLine, breadcrumbItems }: ServiceHeroProps) {
  return (
    <section className="bg-[#F7F7F5] pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-[#E8E5DF]" aria-labelledby="service-hero-heading">
      <Container>
        <div className="mb-10 lg:mb-16">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-5">
            <h1 className="text-eyebrow text-[#0C2B45] uppercase tracking-widest">{title}</h1>
          </div>
          
          <h2
            id="service-hero-heading"
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0C2B45] leading-[1.15] tracking-tight"
            style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
          >
            {headingLine}
          </h2>
        </div>
      </Container>
    </section>
  );
}
