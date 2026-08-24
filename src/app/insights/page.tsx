import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FinalCTA from "@/components/home/FinalCTA";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights & Articles | Panchsutra Consultants",
  description: "Read our latest insights on industrial real estate, construction management, and environmental planning in Maharashtra.",
};

export default function InsightsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Insights" },
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
              <h1 className="text-eyebrow text-[#0C2B45] uppercase tracking-widest">INSIGHTS & RESOURCES</h1>
            </div>
            
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0C2B45] leading-[1.15] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
            >
              Knowledge for Better Project Decisions
            </h2>
            
            <p className="text-lg text-[#596572] leading-relaxed max-w-3xl">
              Practical guides and insights on real estate, engineering, construction, and industrial development to help you make informed decisions about your next project.
            </p>
          </div>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
            {insights.map((article) => (
              <article key={article.slug} className="group flex flex-col h-full">
                <div className="mb-4 flex items-center gap-4">
                  <span className="text-xs font-semibold text-[#B29A68] uppercase tracking-widest">
                    {article.category}
                  </span>
                  <span className="block w-6 h-px bg-[#E8E5DF]" aria-hidden="true" />
                </div>
                
                <h3 
                  className="text-2xl font-bold text-[#0C2B45] mb-4 group-hover:text-[#133558] transition-colors"
                  style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
                >
                  <Link href={`/insights/${article.slug}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-base text-[#596572] leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-[#0C2B45] hover:text-[#B29A68] transition-colors"
                    aria-label={`Read article: ${article.title}`}
                  >
                    Read full article
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      
      <FinalCTA />
    </>
  );
}
