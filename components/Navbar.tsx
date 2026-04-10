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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(7,8,15,0.95)] backdrop-blur-md border-b border-[#1a1c2e]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="13" stroke="#4a9eff" strokeWidth="1.5" />
            <ellipse cx="10" cy="13" rx="2.5" ry="3" fill="#4a9eff" opacity="0.9"/>
            <ellipse cx="18" cy="13" rx="2.5" ry="3" fill="#4a9eff" opacity="0.9"/>
            <path d="M8 18 Q14 22 20 18" stroke="#4a9eff" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M6 10 Q8 7 10 9" stroke="#4a9eff" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M22 10 Q20 7 18 9" stroke="#4a9eff" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          </svg>
          <span
            className="font-display font-700 text-white tracking-tight"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
          >
            Noctua<span className="text-[#4a9eff]">Rx</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-white text-white text-sm font-medium hover:bg-white hover:text-[#07080f] transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0e1a] border-t border-[#1a1c2e] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[#8b93a8] hover:text-white text-sm font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-5 py-2.5 rounded-full border border-white text-white text-sm font-medium text-center hover:bg-white hover:text-[#07080f] transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
