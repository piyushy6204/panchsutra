// src/components/ui/SectionHeading.tsx
interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  inverted = false,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-eyebrow mb-4 ${
            inverted ? "text-[#C9AF85]" : "text-[#B29A68]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-bold tracking-tight ${
          inverted ? "text-white" : "text-[#0C2B45]"
        } ${isCenter ? "" : ""}`}
        style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`mt-4 leading-relaxed ${
            inverted ? "text-[#B0B8C1]" : "text-[#596572]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
