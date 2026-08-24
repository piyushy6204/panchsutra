import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Real Estate & Construction Consultants in Nashik & Pune | Panchsutra Consultants",
    template: "%s | Panchsutra Consultants",
  },
  description:
    "Panchsutra Consultants offers real estate, civil & MEP consultancy, PMC, turnkey construction, industrial project and environmental consultancy solutions in Nashik, Pune and across India.",
  metadataBase: new URL("https://www.panchsutraconsultants.in"),
  keywords: [
    "real estate consultants Nashik",
    "construction consultants Nashik",
    "civil MEP consultancy Nashik",
    "PMC Pune",
    "turnkey construction Nashik",
    "MIDC consultancy Nashik",
    "environmental consultancy Nashik",
    "industrial land Nashik",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.panchsutraconsultants.in",
    siteName: "Panchsutra Consultants",
    title: "Real Estate & Construction Consultants in Nashik & Pune | Panchsutra Consultants",
    description:
      "Panchsutra Consultants offers real estate, civil & MEP consultancy, PMC, turnkey construction, industrial project and environmental consultancy solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate & Construction Consultants in Nashik & Pune | Panchsutra Consultants",
    description:
      "Integrated real estate, engineering and construction consultancy from Nashik, Maharashtra.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
