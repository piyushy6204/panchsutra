"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, SERVICE_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Apply scroll shadow via data attribute — never changes SSR className
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 20) {
          headerRef.current.setAttribute("data-scrolled", "true");
        } else {
          headerRef.current.removeAttribute("data-scrolled");
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on keyboard Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E7EB] panchsutra-header"
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">

            {/* ── Logo ──────────────────────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center flex-shrink-0 gap-2.5"
              aria-label="Panchsutra Consultants — Home"
            >
              {/* Icon mark — same on all breakpoints */}
              <Image
                src="/images/logo/logo-icon.png"
                alt="Panchsutra Consultants logo mark"
                width={40}
                height={40}
                className="h-9 w-auto object-contain flex-shrink-0"
                priority
              />
              {/* Text — always horizontal next to icon */}
              <span className="flex flex-col justify-center leading-none">
                <span className="font-extrabold text-[15px] sm:text-[17px] tracking-[0.12em] text-[#0C2B45] leading-none">
                  PANCHSUTRA
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] text-[#B29A68] mt-[3px] leading-none">
                  CONSULTANTS
                </span>
              </span>
            </Link>

            {/* ── Desktop Navigation ────────────────────────────────── */}
            <nav
              className="hidden lg:flex items-center gap-0.5 xl:gap-1"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => {
                if (link.label === "Services") {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-0.5 px-3 py-2 text-[14px] font-medium rounded transition-colors duration-150 ${
                          isActive("/services")
                            ? "text-[#0C2B45]"
                            : "text-[#596572] hover:text-[#0C2B45]"
                        }`}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                      >
                        Services
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Services Dropdown */}
                      {servicesOpen && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[260px] bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-2 z-50"
                          role="menu"
                        >
                          {SERVICE_LINKS.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              role="menuitem"
                              className="block px-4 py-2.5 text-sm text-[#596572] hover:text-[#0C2B45] hover:bg-[#F7F7F5] transition-colors"
                            >
                              {service.label}
                            </Link>
                          ))}
                          <div className="border-t border-[#E5E7EB] mt-2 pt-2">
                            <Link
                              href="/services"
                              role="menuitem"
                              className="block px-4 py-2.5 text-sm font-semibold text-[#0C2B45] hover:bg-[#F7F7F5] transition-colors"
                            >
                              All Services →
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-[14px] font-medium rounded transition-colors duration-150 ${
                      isActive(link.href)
                        ? "text-[#0C2B45] font-semibold"
                        : "text-[#596572] hover:text-[#0C2B45]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop CTA ───────────────────────────────────────── */}
            <div className="hidden lg:flex items-center">
              <a
                href="/contact-us"
                id="header-cta"
                className="inline-flex items-center px-5 py-2.5 text-[14px] font-semibold bg-[#0C2B45] rounded hover:bg-[#133558] transition-colors duration-200 whitespace-nowrap"
                style={{ color: "#ffffff" }}
              >
                Discuss Your Project
              </a>
            </div>

            {/* ── Mobile Menu Toggle ────────────────────────────────── */}
            <button
              className="lg:hidden p-2 text-[#0C2B45] hover:bg-[#F7F7F5] rounded transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to push page content below fixed header */}
      <div className="h-[72px] lg:h-[80px]" aria-hidden="true" />

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
