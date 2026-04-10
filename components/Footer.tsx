export default function Footer() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Coverage", href: "#coverage" },
    { label: "How We Work", href: "#process" },
    { label: "Clinical Programs", href: "#clinical" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-[#1a1c2e] bg-[#07080f] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="#4a9eff" strokeWidth="1.5" />
                <ellipse cx="10" cy="13" rx="2.5" ry="3" fill="#4a9eff" opacity="0.9"/>
                <ellipse cx="18" cy="13" rx="2.5" ry="3" fill="#4a9eff" opacity="0.9"/>
                <path d="M8 18 Q14 22 20 18" stroke="#4a9eff" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                <path d="M6 10 Q8 7 10 9" stroke="#4a9eff" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                <path d="M22 10 Q20 7 18 9" stroke="#4a9eff" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
              </svg>
              <span
                className="text-white font-bold tracking-tight"
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.05rem" }}
              >
                Noctua<span className="text-[#4a9eff]">Rx</span>
              </span>
            </div>
            <p className="text-[#4b5563] text-xs max-w-xs leading-relaxed">
              Clinical telepharmacy for Critical Access &amp; Rural Hospitals.
              <br />A DBA of TheraIntel LLC.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[#6b7280] hover:text-white text-sm transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-5">
            {[
              {
                label: "LinkedIn",
                href: "#",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M4 6v5M4 4.5v.01M7 11V8.5C7 7.7 7.7 7 8.5 7S10 7.7 10 8.5V11M7 6v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                label: "Email",
                href: "mailto:info@noctuarx.com",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-[#6b7280] hover:text-white transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#1a1c2e] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[#4b5563] text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            © {new Date().getFullYear()} NoctuaRx. All rights reserved.
          </p>
          <p
            className="text-[#4b5563] text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            TheraIntel LLC · Chicago, IL
          </p>
        </div>
      </div>
    </footer>
  );
}
