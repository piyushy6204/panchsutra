import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Panchsutra Consultants",
};

export default function NotFound() {
  return (
    <section className="bg-white py-24 lg:py-32 min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-8xl font-bold text-[#F3F1EC] mb-6 font-mono">404</div>
          <h1 
            className="text-3xl sm:text-4xl font-bold text-[#0C2B45] mb-6"
            style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
          >
            Page Not Found
          </h1>
          <p className="text-[#596572] text-lg mb-10 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/" variant="primary">
              Return Home
            </Button>
            <Button href="/services" variant="secondary">
              View Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
