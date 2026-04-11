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
      scrolled
        ? "bg-[rgba(7,9,15,0.95)] backdrop-blur-md border-b border-[#1a1f35]"
        : "bg-transparent border-b border-[#1a1f35]"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="NetLinkRx" style={{ height: "42px", width: "auto", objectFit: "contain" }} />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <a href="#contact"
          className="hidden md:inline-flex px-5 py-2 rounded-full border border-white text-white text-sm font-medium hover:bg-white hover:text-[#07090f] transition-all duration-200">
          Contact Us
        </a>

        <button className="md:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 4L18 18M18 4L4 18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6H19M3 11H19M3 16H19" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0c0f1a] border-t border-[#1a1f35] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-[#7a8499] hover:text-white text-sm font-medium py-1"
              onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="mt-2 px-5 py-2.5 rounded-full border border-white text-white text-sm font-medium text-center"
            onClick={() => setMenuOpen(false)}>Contact Us</a>
        </div>
      )}
    </header>
  );
}
