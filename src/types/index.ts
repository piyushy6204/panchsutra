// src/types/index.ts

export interface Service {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  headingLine: string;
  intro: string;
  closingText: string;
}

export interface Project {
  id: string;
  client: string;
  service: string;
  projectName: string;
  location?: string;
  description: string;
  tags: string[];
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  relevantServices: string[];
}

export interface InsightArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  primaryKeyword: string;
  excerpt: string;
  content: string;
}
