"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Coverage", href: "#coverage" },
    { label: "How We Work", href: "#process" },
    { label: "Clinical Programs", href: "#clinical" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md border-b border-[#dde4ef] shadow-sm" : "bg-white border-b border-[#dde4ef]"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="NetLinkRx" style={{ height: "40px", width: "auto", objectFit: "contain" }} />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a href="#contact"
            className="px-5 py-2 rounded-full bg-[#1e4fa3] text-white text-sm font-semibold hover:bg-[#163a7a] transition-colors duration-200">
            Contact Us
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 4L18 18M18 4L4 18" stroke="#0f1c35" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6H19M3 11H19M3 16H19" stroke="#0f1c35" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#dde4ef] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-[#5a6a85] hover:text-[#1e4fa3] text-sm font-medium py-1"
              onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact"
            className="mt-2 px-5 py-2.5 rounded-full bg-[#1e4fa3] text-white text-sm font-semibold text-center"
            onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
