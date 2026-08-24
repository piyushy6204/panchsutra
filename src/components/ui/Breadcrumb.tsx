// src/components/ui/Breadcrumb.tsx
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  inverted?: boolean;
}

export default function Breadcrumb({ items, inverted = false }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight
                  size={12}
                  className={inverted ? "text-[#8795A1]" : "text-[#B0B8C1]"}
                  aria-hidden="true"
                />
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`text-xs font-medium transition-colors ${
                    inverted
                      ? "text-[#8795A1] hover:text-white"
                      : "text-[#8795A1] hover:text-[#0C2B45]"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`text-xs font-medium ${
                    inverted ? "text-[#C9AF85]" : "text-[#B29A68]"
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
