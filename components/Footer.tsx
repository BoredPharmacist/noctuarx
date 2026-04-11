import Image from "next/image";

export default function Footer() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Coverage", href: "#coverage" },
    { label: "How We Work", href: "#process" },
    { label: "Clinical Programs", href: "#clinical" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t px-6 py-12" style={{ background: "#f4f7fb", borderColor: "#dde4ef" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="flex flex-col gap-3">
            <Image src="/logo.png" alt="NetLinkRx" width={140} height={42} style={{ objectFit: "contain", height: "38px", width: "auto" }} />
            <p className="text-xs max-w-xs leading-relaxed" style={{ color: "#8a97b0" }}>
              Clinical telepharmacy for Critical Access &amp; Rural Hospitals.
              <br />A DBA of TheraIntel LLC.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm transition-colors hover:text-[#1e4fa3]" style={{ color: "#5a6a85", fontFamily: "'DM Sans', sans-serif" }}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            {[
              { label: "LinkedIn", href: "#", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M4 6v5M4 4.5v.01M7 11V8.5C7 7.7 7.7 7 8.5 7S10 7.7 10 8.5V11M7 6v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg> },
              { label: "Email", href: "mailto:info@netlinkrx.com", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg> },
            ].map((s) => (
              <a key={s.label} href={s.href} className="transition-colors hover:text-[#1e4fa3]" style={{ color: "#8a97b0" }} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "#dde4ef" }}>
          <p className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8a97b0" }}>
            © {new Date().getFullYear()} NetLinkRx. All rights reserved.
          </p>
          <p className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8a97b0" }}>
            TheraIntel LLC · Chicago, IL
          </p>
        </div>
      </div>
    </footer>
  );
}
