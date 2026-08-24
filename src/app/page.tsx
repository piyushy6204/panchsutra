import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyPanchsutra from "@/components/home/WhyPanchsutra";
import OurApproach from "@/components/home/OurApproach";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import AboutPreview from "@/components/home/AboutPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ServicesPreview />
      <WhyPanchsutra />
      <OurApproach />
      <IndustriesPreview />
      <ProjectsPreview />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
