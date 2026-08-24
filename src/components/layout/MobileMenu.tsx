"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close menu when navigating to a new page
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!isOpen) return null;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Links to show — excludes "Services" which has its own page
  const drawerLinks = NAV_LINKS.filter((l) => l.label !== "Services");

  return (
    <div
      id="mobile-menu"
      className="lg:hidden fixed inset-0 top-[72px] z-40 bg-white flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Nav links */}
      <div className="flex-1 overflow-y-auto px-5 py-6 border-b border-[#E5E7EB]">
        <nav aria-label="Mobile main navigation">
          <ul className="space-y-1">
            {/* Services link as a direct link (not expanded list) */}
            <li>
              <Link
                href="/services"
                onClick={onClose}
                className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                  isActive("/services")
                    ? "text-[#0C2B45] bg-[#F7F7F5]"
                    : "text-[#596572] hover:text-[#0C2B45] hover:bg-[#F7F7F5]"
                }`}
              >
                Services
              </Link>
            </li>
            {drawerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                    isActive(link.href)
                      ? "text-[#0C2B45] bg-[#F7F7F5]"
                      : "text-[#596572] hover:text-[#0C2B45] hover:bg-[#F7F7F5]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* CTA */}
      <div className="px-5 py-6 shrink-0">
        <a
          href="/contact-us"
          onClick={onClose}
          className="block w-full text-center py-3.5 bg-[#0C2B45] text-white text-sm font-semibold rounded hover:bg-[#133558] transition-colors"
        >
          Discuss Your Project
        </a>
      </div>
    </div>
  );
}
