// src/components/ui/Container.tsx
import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
}

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </Tag>
  );
}
