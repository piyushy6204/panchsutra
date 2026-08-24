"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import { COMPANY, SERVICE_OPTIONS } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ];

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      // Reset form (in a real app, we'd clear the state or use a form library)
      const form = e.target as HTMLFormElement;
      form.reset();
      
      // Reset status after a few seconds
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F7F7F5] pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-[#E8E5DF]">
        <Container>
          <div className="mb-10 lg:mb-16">
            <Breadcrumb items={breadcrumbs} />
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <h1 className="text-eyebrow text-[#0C2B45] uppercase tracking-widest">CONTACT US</h1>
            </div>
            
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0C2B45] leading-[1.15] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
            >
              Discuss Your Project Requirements
            </h2>
            
            <p className="text-lg text-[#596572] leading-relaxed max-w-3xl">
              Get in touch with our team to discuss how Panchsutra Consultants can support your real estate, engineering, or construction development.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-24 items-start">
            
            {/* Left: Contact Form */}
            <div>
              <div className="mb-10">
                <h3 
                  className="text-2xl font-bold text-[#0C2B45] mb-4"
                  style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
                >
                  Send us a message
                </h3>
                <p className="text-[#596572]">
                  Fill out the form below and our team will get back to you shortly.
                </p>
              </div>

              {formStatus === "success" && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded text-green-800 text-sm font-medium">
                  Thank you for reaching out. We have received your message and will contact you soon.
                </div>
              )}

              {formStatus === "error" && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded text-red-800 text-sm font-medium">
                  There was an error sending your message. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#0C2B45]">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E8E5DF] rounded focus:outline-none focus:ring-2 focus:ring-[#B29A68] focus:border-transparent transition-shadow"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#0C2B45]">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E8E5DF] rounded focus:outline-none focus:ring-2 focus:ring-[#B29A68] focus:border-transparent transition-shadow"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-[#0C2B45]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E8E5DF] rounded focus:outline-none focus:ring-2 focus:ring-[#B29A68] focus:border-transparent transition-shadow"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-[#0C2B45]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E8E5DF] rounded focus:outline-none focus:ring-2 focus:ring-[#B29A68] focus:border-transparent transition-shadow"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-medium text-[#0C2B45]">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E8E5DF] rounded focus:outline-none focus:ring-2 focus:ring-[#B29A68] focus:border-transparent transition-shadow appearance-none"
                  >
                    <option value="" disabled>Select a service...</option>
                    {SERVICE_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-[#0C2B45]">
                    Project Details / Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E8E5DF] rounded focus:outline-none focus:ring-2 focus:ring-[#B29A68] focus:border-transparent transition-shadow resize-y"
                    placeholder="Please tell us about your project requirements..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>

            {/* Right: Contact Information */}
            <div>
              <div className="bg-[#0C2B45] text-white p-8 lg:p-10 rounded-lg shadow-xl relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none opacity-5" aria-hidden="true">
                  <svg width="100%" height="100%" viewBox="0 0 100 300" preserveAspectRatio="none">
                    <line x1="100" y1="0" x2="0" y2="300" stroke="white" strokeWidth="2" />
                    <line x1="100" y1="50" x2="0" y2="350" stroke="white" strokeWidth="2" />
                  </svg>
                </div>

                <h3 
                  className="text-xl font-bold mb-8 relative z-10"
                  style={{ fontFamily: "var(--font-manrope, Manrope, system-ui, sans-serif)" }}
                >
                  Contact Information
                </h3>

                <ul className="space-y-8 relative z-10">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-[#133558] flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#B29A68]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#C9AF85] uppercase tracking-widest mb-1">Office Address</p>
                      <address className="not-italic text-sm leading-relaxed" style={{ color: "#FFFFFF" }}>
                        {COMPANY.address}
                      </address>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-[#133558] flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-[#B29A68]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#C9AF85] uppercase tracking-widest mb-1">Phone</p>
                      <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-sm hover:opacity-80 transition-opacity" style={{ color: "#FFFFFF" }}>
                        {COMPANY.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-[#133558] flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-[#B29A68]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#C9AF85] uppercase tracking-widest mb-1">Email</p>
                      <a href={`mailto:${COMPANY.email}`} className="text-sm hover:opacity-80 transition-opacity break-all" style={{ color: "#FFFFFF" }}>
                        {COMPANY.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-[#133558] flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-[#B29A68]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#C9AF85] uppercase tracking-widest mb-1">Business Hours</p>
                      <p className="text-sm" style={{ color: "#FFFFFF" }}>
                        Monday - Saturday<br />
                        9:30 AM - 6:30 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
