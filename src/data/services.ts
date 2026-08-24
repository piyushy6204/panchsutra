// src/data/services.ts
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "real-estate-solutions",
    number: "01",
    title: "Real Estate Solutions",
    shortDescription:
      "Strategic land sourcing, industrial properties, built-to-suit opportunities, and development support.",
    headingLine: "Find the Right Location for Your Next Opportunity",
    intro:
      "The right location can influence the success of an entire project. We assist developers, industries, and businesses in identifying and evaluating strategic property opportunities based on their operational and development requirements.",
    description:
      "Whether you are expanding operations, establishing a new facility, or looking for a development opportunity, we help simplify the property search and decision-making process.",
    capabilities: [
      "Industrial land acquisition",
      "Land sourcing for developers",
      "Long-lease industrial properties",
      "Industrial property purchase opportunities",
      "Ready industrial sheds",
      "Built-to-suit solutions",
      "Pre-leased warehouse development",
    ],
    closingText:
      "Panchsutra brings a consultancy-led approach to real estate — understanding your operational requirements and identifying properties that genuinely support your business objectives.",
  },
  {
    slug: "project-management-consultancy",
    number: "02",
    title: "Project Management Consultancy",
    shortDescription:
      "Planning, supervision, contractor coordination, quality control, scheduling, and execution management.",
    headingLine: "Planning, Coordination & Execution Under Control",
    intro:
      "Effective project management requires coordination between multiple stakeholders, contractors, vendors, engineers, and timelines. Our PMC services help clients manage these moving parts while maintaining focus on quality, cost, timelines, and project objectives.",
    description:
      "Our approach is focused on creating better visibility, smoother coordination, and efficient project execution.",
    capabilities: [
      "Project planning & coordination",
      "Site supervision",
      "Vendor & contractor management",
      "Quality control",
      "Budget monitoring",
      "Project scheduling",
      "Execution support",
      "Coordination between project stakeholders",
    ],
    closingText:
      "A well-managed project is the result of clear planning, consistent monitoring, and effective coordination. Panchsutra's PMC services are designed to provide exactly that — structured support from planning through completion.",
  },
  {
    slug: "civil-mep-consultancy",
    number: "03",
    title: "Civil & MEP Consultancy",
    shortDescription:
      "Engineering, plumbing, MEP coordination, infrastructure planning, and technical project support.",
    headingLine: "Engineering Solutions Designed for Efficient Execution",
    intro:
      "Our Civil and MEP consultancy services provide technical support throughout the planning and development process. We focus on creating coordinated solutions that are practical, efficient, and aligned with project requirements.",
    description:
      "Our engineering approach combines technical accuracy with practical execution requirements.",
    capabilities: [
      "Civil engineering consultancy",
      "Structural coordination",
      "MEP coordination",
      "Plumbing design",
      "Infrastructure planning",
      "Utility management",
      "Technical project support",
    ],
    closingText:
      "Good engineering is the backbone of every successful project. Panchsutra's Civil & MEP consultancy ensures that technical systems are coordinated, practical, and built to perform.",
  },
  {
    slug: "turnkey-construction",
    number: "04",
    title: "Turnkey Construction",
    shortDescription:
      "Complete construction solutions for industrial, commercial, residential, and warehouse projects.",
    headingLine: "From Concept to Completion",
    intro:
      "For clients looking for a complete construction solution, our turnkey approach brings planning, coordination, and execution together. We work to ensure that every stage of the project is managed with attention to quality, timelines, and client requirements.",
    description:
      "From initial planning through execution, we provide a coordinated approach to project delivery.",
    capabilities: [
      "Industrial buildings",
      "Warehouses",
      "Commercial structures",
      "Residential developments",
      "Built-to-suit industrial facilities",
    ],
    closingText:
      "A turnkey approach simplifies project delivery by bringing planning, engineering, coordination, and construction under one structure — giving clients greater clarity and control.",
  },
  {
    slug: "midc-sez-advisory",
    number: "05",
    title: "MIDC & SEZ Advisory",
    shortDescription:
      "Guidance and support for industrial procedures, approvals, documentation, and development planning.",
    headingLine: "Navigate Industrial Development with Greater Confidence",
    intro:
      "Industrial projects often involve complex procedures, documentation, approvals, and development requirements. Our advisory services help clients understand and navigate these processes with project-specific guidance.",
    description:
      "We provide project-specific guidance based on the proposed industrial facility and development requirements. The exact requirements depend on the project, location, scale, nature of activity, and applicable regulations.",
    capabilities: [
      "MIDC procedures & documentation",
      "SEZ consultancy",
      "Industrial project guidance",
      "Approval coordination",
      "Development planning support",
    ],
    closingText:
      "Industrial development requires careful navigation of procedures and requirements. Panchsutra provides project-specific advisory support to help clients approach development with greater clarity.",
  },
  {
    slug: "environmental-consultancy",
    number: "06",
    title: "Environmental Consultancy",
    shortDescription:
      "Environmental planning, regulatory guidance, sustainability support, and compliance assistance.",
    headingLine: "Supporting Sustainable & Compliant Development",
    intro:
      "Environmental considerations are an important part of modern project development. We provide environmental consultancy focused on planning, regulatory guidance, sustainability, and compliance requirements.",
    description:
      "The exact requirements depend on the project's location, scale, nature of activity, and applicable regulations.",
    capabilities: [
      "Environmental planning",
      "Regulatory guidance",
      "Sustainability consultation",
      "Environmental compliance support",
    ],
    closingText:
      "Environmental planning is increasingly central to responsible development. Panchsutra integrates environmental thinking with engineering and construction to support projects that are compliant and sustainably planned.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
