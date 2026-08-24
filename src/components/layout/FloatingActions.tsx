import { Phone } from "lucide-react";

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/917219028227?text=Hi%20Panchsutra%20Consultants%2C%20I%20would%20like%20to%20discuss%20a%20project.`;
  const callUrl = `tel:+917219028227`;

  return (
    <div
      className="fixed bottom-5 right-4 md:right-5 z-50 flex flex-col items-center gap-3"
      aria-label="Floating contact actions"
    >
      {/* WhatsApp — official brand SVG icon */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Panchsutra Consultants on WhatsApp"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] shadow-md hover:bg-[#1EB857] transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="#ffffff"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.549 4.1 1.51 5.833L.057 23.5a.5.5 0 0 0 .609.61l5.714-1.485A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.952 9.952 0 0 1-5.077-1.39l-.36-.214-3.742.982.997-3.648-.235-.374A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>

      {/* Call */}
      <a
        href={callUrl}
        aria-label="Call Panchsutra Consultants"
        className="flex items-center justify-center w-12 h-12 rounded-full shadow-md transition-colors duration-200"
        style={{ backgroundColor: "#1E5799", color: "#ffffff" }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a4d87")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1E5799")}
      >
        <Phone size={20} strokeWidth={2} />
      </a>
    </div>
  );
}
