// components/bootcamp/navigation.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { bootcampConfig } from "@/lib/bootcamp-config";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#program", label: "Program" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#membership", label: "Membership" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            BORIS AMAH
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={createWhatsAppUrl(whatsappMessages.general)}
            className="hidden md:block px-6 py-2.5 bg-[#D4AF37] text-[#050505] text-sm font-semibold rounded-lg hover:bg-[#F5C542] transition-all hover:scale-105"
          >
            JOIN THE BOOTCAMP
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-strong border-t border-white/8">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#A1A1AA] hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={createWhatsAppUrl(whatsappMessages.general)}
              className="block w-full px-6 py-3 bg-[#D4AF37] text-[#050505] text-sm font-semibold rounded-lg hover:bg-[#F5C542] transition-all text-center mt-4"
            >
              JOIN THE BOOTCAMP
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}