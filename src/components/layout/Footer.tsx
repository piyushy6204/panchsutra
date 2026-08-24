import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICE_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C2B45] text-white">
      {/* Main Footer */}
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Panchsutra Consultants — Home" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo/logo-icon.png"
                alt="Panchsutra Consultants logo icon"
                width={32}
                height={32}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
              <div className="flex flex-col justify-center">
                <span className="font-heading font-extrabold text-base tracking-wider text-white leading-none">
                  PANCHSUTRA
                </span>
                <span className="text-[8px] font-semibold tracking-[0.25em] text-[#B29A68] mt-0.5 leading-none">
                  CONSULTANTS
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#8795A1] leading-relaxed mb-4">
              {COMPANY.tagline}
            </p>
            <p className="text-xs text-[#596572] leading-relaxed">
              From Land to Landmark. We Deliver Complete Solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#B29A68] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8795A1] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#B29A68] mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-[#8795A1] hover:text-white transition-colors duration-150"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#B29A68] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#B29A68] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <address className="text-sm text-[#8795A1] not-italic leading-relaxed">
                  {COMPANY.address}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#B29A68] flex-shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="text-sm text-[#8795A1] hover:text-white transition-colors"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#B29A68] flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-[#8795A1] hover:text-white transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#133558]">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#596572]">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-[#596572]">
            {COMPANY.positioning}
          </p>
        </div>
      </div>
    </footer>
  );
}
