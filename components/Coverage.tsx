const coverageItems = [
  "Days, nights, and weekends",
  "Peak hours, callouts, and leaves of absence",
  "Weather events and emergency preparedness",
  "Emergency Department order processing",
  "EHR transitions and go-live support",
  "Small-to-midsize hospital staffing gaps",
  "Large health system overflow coverage",
];

export default function Coverage() {
  return (
    <section id="coverage" className="py-28 px-6">
      <div className="section-divider mb-28" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left col */}
          <div className="flex-1">
            <span className="pill mb-6 inline-flex">Specialized Offering</span>
            <h2
              className="text-white mb-6 leading-tight"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              }}
            >
              Telepharmacy Serves Facilities
              <br />
              of All Sizes, Day or Night
            </h2>
            <p className="text-[#8b93a8] leading-relaxed mb-8 max-w-lg">
              Both individual Critical Access Hospitals and multi-site rural
              health systems can benefit from NoctuaRx — not just overnight. We
              support your pharmacy around the clock with scheduled or on-demand
              medication order verification to give you the flexibility you need,
              right when you need it.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#4a9eff] text-white font-semibold text-sm hover:bg-[#6ab3ff] transition-all duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get a Quote
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M3 7.5H12M9 4l3 3.5-3 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right col — coverage list */}
          <div className="flex-1 max-w-lg">
            <div className="rounded-2xl border border-[#1a1c2e] bg-[#0d0e1a] p-8">
              <p
                className="text-[#4a9eff] text-xs uppercase tracking-widest mb-6"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Coverage Scenarios
              </p>
              <ul className="flex flex-col gap-3">
                {coverageItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#1e3a5f] flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#4a9eff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-[#c4cad6] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub-card */}
            <div className="mt-4 rounded-2xl border border-[#1a1c2e] bg-[#0d0e1a] p-6 flex flex-col gap-3">
              <p
                className="text-[#4a9eff] text-xs uppercase tracking-widest"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Remote Order Entry & Verification
              </p>
              <p className="text-white font-semibold" style={{ fontFamily: "'Sora', sans-serif" }}>
                Extend your local pharmacy team's resources
              </p>
              <p className="text-[#6b7280] text-sm leading-relaxed">
                We centralize medication order reviews and approvals to drive
                patient safety, HIPAA compliance, and quality monitoring — freeing
                your staff to concentrate on integrated, emergent care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
