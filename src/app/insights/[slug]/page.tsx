import { getInsightBySlug, insights } from "@/data/insights";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FinalCTA from "@/components/home/FinalCTA";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getInsightBySlug(resolvedParams.slug);
  
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
  };
}

export function generateStaticParams() {
  return insights.map((article) => ({
    slug: article.slug,
  }));
}

export default async function InsightArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const article = getInsightBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: article.category },
  ];

  // Helper to parse basic markdown to JSX safely without a heavy library
  const renderContent = (content: string) => {
    const blocks = content.split("\n\n");
    return blocks.map((block, index) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold text-[#0C2B45] mt-10 mb-4" style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}>
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-bold text-[#0C2B45] mt-8 mb-4" style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}>
            {block.replace("### ", "")}
          </h3>
        );
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter(Boolean);
        return (
          <ul key={index} className="space-y-3 mb-6 pl-0 list-none">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="block w-1.5 h-1.5 rounded-full bg-[#B29A68] mt-2 flex-shrink-0" aria-hidden="true" />
                <span className="text-[#596572] leading-relaxed">{item.replace("- ", "")}</span>
              </li>
            ))}
          </ul>
        );
      }
      if (block.startsWith("---")) {
        return <hr key={index} className="my-10 border-t border-[#E8E5DF]" />;
      }
      
      // Parse strong bold text
      const boldRegex = /\*\*(.*?)\*\*/g;
      
      if (boldRegex.test(block)) {
        const parts = block.split(boldRegex);
        return (
          <p key={index} className="text-base text-[#596572] leading-relaxed mb-6">
             {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-semibold text-[#0C2B45]">{part}</strong> : part)}
          </p>
        );
      }

      return (
        <p key={index} className="text-base text-[#596572] leading-relaxed mb-6">
          {block}
        </p>
      );
    });
  };

  return (
    <>
      <article>
        {/* Hero */}
        <section className="bg-[#F7F7F5] pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-[#E8E5DF]">
          <Container>
            <div className="mb-10 lg:mb-16">
              <Breadcrumb items={breadcrumbs} />
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-xs font-semibold text-[#B29A68] uppercase tracking-widest">
                  {article.category}
                </span>
              </div>
              
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C2B45] leading-[1.2] tracking-tight mb-8"
                style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
              >
                {article.title}
              </h1>
              
              <p className="text-lg text-[#596572] leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          </Container>
        </section>

        {/* Article Body */}
        <section className="py-12 lg:py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {renderContent(article.content)}
              </div>
            </div>
          </Container>
        </section>
      </article>

      <FinalCTA />
    </>
  );
}
