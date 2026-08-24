// src/lib/constants.ts

export const COMPANY = {
  name: "Panchsutra Consultants",
  tagline: "Engineering Excellence. Delivering Precision.",
  positioning: "From Land to Landmark.",
  description:
    "A multidisciplinary real estate and construction consultancy based in Nashik, Maharashtra.",
  address: "1, Shridarshan, Tidke Colony, Nashik - 02, Maharashtra, India",
  phone: "+91 72190 28227",
  phoneDisplay: "+91 72190 28227",
  email: "admin@panchsutraconsultants.in",
  website: "www.panchsutraconsultants.in",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about-us" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact-us" },
] as const;

export const SERVICE_LINKS = [
  { label: "Real Estate Solutions", href: "/services/real-estate-solutions" },
  { label: "Project Management Consultancy", href: "/services/project-management-consultancy" },
  { label: "Civil & MEP Consultancy", href: "/services/civil-mep-consultancy" },
  { label: "Turnkey Construction", href: "/services/turnkey-construction" },
  { label: "MIDC & SEZ Advisory", href: "/services/midc-sez-advisory" },
  { label: "Environmental Consultancy", href: "/services/environmental-consultancy" },
] as const;

export const SERVICE_OPTIONS = [
  "Real Estate Solutions",
  "Project Management Consultancy",
  "Civil & MEP Consultancy",
  "Turnkey Construction",
  "MIDC & SEZ Advisory",
  "Environmental Consultancy",
  "Other",
] as const;
