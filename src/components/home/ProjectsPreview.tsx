import Link from "next/link";
import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  return (
    <section
      className="bg-[#F7F7F5] py-8 lg:py-12"
      aria-labelledby="projects-heading"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-eyebrow">Our Work</span>
            </div>
            <h2
              id="projects-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0C2B45] tracking-tight"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
            >
              Trusted by Developers,
              <br className="hidden sm:block" /> Businesses & Industries
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-[#0C2B45] border border-[#0C2B45] px-5 py-2.5 rounded-[4px] hover:bg-[#0C2B45] hover:text-white transition-colors duration-200 whitespace-nowrap self-start sm:self-auto"
          >
            View Our Work
          </Link>
        </div>

        {/* Project list — text-led, no fake imagery */}
        <div className="space-y-0 divide-y divide-[#E8E5DF]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-[64px_1fr_auto] gap-4 lg:gap-8 py-8 items-start"
            >
              {/* Index */}
              <span className="hidden lg:flex items-center justify-center w-12 h-12 border border-[#E8E5DF] rounded text-lg font-mono font-extrabold text-[#B29A68]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="lg:hidden text-base font-mono font-bold text-[#B29A68]">
                    {String(index + 1).padStart(2, "0")} —
                  </span>
                  <span className="text-xs font-medium px-2 py-0.5 bg-[#EBE7E0] text-[#596572] rounded">
                    {project.service}
                  </span>
                  {project.location && (
                    <span className="text-xs text-[#8795A1]">{project.location}</span>
                  )}
                </div>
                <h3
                  className="text-lg font-bold text-[#0C2B45] mb-1"
                  style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
                >
                  {project.client}
                </h3>
                <p className="text-sm font-medium text-[#B29A68] mb-2">
                  {project.projectName}
                </p>
                <p className="text-sm text-[#596572] leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#8795A1] border border-[#E8E5DF] px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#8795A1]">
          We have worked across diverse project requirements, delivering specialised engineering and industrial solutions.
        </p>
      </Container>
    </section>
  );
}
