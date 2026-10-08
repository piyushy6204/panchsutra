// src/data/projects.ts
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ganesh-yeole-mep",
    client: "Ganesh Yeole Builders & Developers",
    service: "MEP Design",
    projectName: "Shree Ganesh Heights & Shree Ganesh Shrushti",
    description:
      "Delivered MEP design solutions with a focus on coordination, functionality, and project requirements.",
    tags: ["MEP Design", "Residential", "Engineering"],
  },
  {
    id: "mighty-grace-industrial",
    client: "Mighty Grace",
    service: "Project Management Consultancy",
    projectName: "Manufacturing Plant — Ravalgaon, Nashik",
    location: "Ravalgaon, Nashik",
    description:
      "Provided Project Management Consultancy for a manufacturing plant at Ravalgaon, Nashik — supporting planning, coordination, and execution across the project lifecycle.",
    tags: ["PMC", "Manufacturing", "Industrial", "Nashik"],
  },
  {
    id: "skyominiverse-plumbing",
    client: "SKYominiverse Technocrats",
    service: "Plumbing Design",
    projectName: "Nandanvan Icon",
    description:
      "Delivered plumbing design solutions tailored to the project's technical and functional requirements.",
    tags: ["Plumbing Design", "Engineering", "Residential"],
  },
  {
    id: "vgreen-india-ev",
    client: "VGreen India",
    service: "EV Infrastructure Planning",
    projectName: "Charging Station & BSS Location Selection — North & West Maharashtra",
    location: "North & West Maharashtra",
    description:
      "Supported the selection of various EV charging stations and Battery Swapping Station (BSS) locations across North & West Maharashtra, covering strategic site evaluation and feasibility assessment.",
    tags: ["EV Infrastructure", "Site Selection", "Maharashtra"],
  },
  {
    id: "zp-contractor-consultancy",
    client: "Zilla Parishad Contractor Consultancy",
    service: "Estimation, Tender Documents & GFC Estimates",
    projectName: "Government Infrastructure & Civil Development Projects",
    location: "Maharashtra",
    description:
      "Provided Estimation, Tender Documents, and Good for Construction (GFC) estimates to contractors executing Zilla Parishad infrastructure and civil construction projects.",
    tags: ["Estimation", "Tender Documents", "GFC Estimates", "Contractors"],
  },
];
