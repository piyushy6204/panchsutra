import { getServiceBySlug, services } from "@/data/services";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCapabilities from "@/components/services/ServiceCapabilities";
import ServiceCTA from "@/components/services/ServiceCTA";
import FinalCTA from "@/components/home/FinalCTA";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title },
  ];

  return (
    <>
      <ServiceHero 
        title={service.title} 
        headingLine={service.headingLine} 
        breadcrumbItems={breadcrumbs} 
      />
      <ServiceCapabilities 
        intro={service.intro}
        description={service.description}
        capabilities={service.capabilities}
        closingText={service.closingText}
      />
      <ServiceCTA />
      <FinalCTA />
    </>
  );
}
