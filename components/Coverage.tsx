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
    <section id="coverage" className="py-28 px-6" style={{ background: "#f4f7fb" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <span className="pill mb-6 inline-flex">Specialized Offering</span>
            <h2
              className="mb-6 leading-tight"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#0f1c35" }}
            >
              Telepharmacy Serves Facilities
              <br />
              <span style={{ color: "#1e4fa3" }}>of All Sizes, Day or Night</span>
            </h2>
            <p className="leading-relaxed mb-8 max-w-lg" style={{ color: "#5a6a85" }}>
              Both individual Critical Access Hospitals and multi-site rural health systems
              can benefit from NetLinkRx — not just overnight. We support your pharmacy
              around the clock with scheduled or on-demand medication order verification.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200"
              style={{ background: "#5aaa35", fontFamily: "'DM Sans', sans-serif" }}
            >
              Get a Quote
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M3 7.5H12M9 4l3 3.5-3 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="flex-1 max-w-lg">
            <div className="rounded-2xl border bg-white p-8" style={{ borderColor: "#dde4ef" }}>
              <p className="text-xs uppercase tracking-widest mb-6" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#1e4fa3" }}>
                Coverage Scenarios
              </p>
              <ul className="flex flex-col gap-3">
                {coverageItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#eaf5e3" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#5aaa35" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#0f1c35" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-2xl border bg-white p-6 flex flex-col gap-3" style={{ borderColor: "#dde4ef" }}>
              <p className="text-xs uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#5aaa35" }}>
                Remote Order Entry & Verification
              </p>
              <p className="font-semibold" style={{ fontFamily: "'Sora', sans-serif", color: "#0f1c35" }}>
                Extend your local pharmacy team&apos;s resources
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#5a6a85" }}>
                We centralize medication order reviews and approvals to drive patient safety,
                HIPAA compliance, and quality monitoring — freeing your staff to concentrate
                on integrated, emergent care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
