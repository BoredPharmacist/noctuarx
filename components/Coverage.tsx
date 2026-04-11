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
    <section id="coverage" className="py-24 px-6 bg-[#0c0f1a]">
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto pt-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <span className="pill mb-6 inline-flex">Specialized Offering</span>
            <h2 className="text-white mb-6 leading-tight"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}>
              Telepharmacy Serves Facilities
              <br /><span style={{ color: "#5aaa35" }}>of All Sizes, Day or Night</span>
            </h2>
            <p className="text-[#7a8499] leading-relaxed mb-8 max-w-lg">
              Both individual Critical Access Hospitals and multi-site rural health systems
              can benefit from NetLinkRx — not just overnight. We support your pharmacy
              around the clock with scheduled or on-demand medication order verification.
            </p>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #3f7d25, #5aaa35)" }}>
              Get a Quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M8 4l3 3-3 3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="flex-1 max-w-lg flex flex-col gap-4">
            <div className="rounded-2xl border border-[#1a1f35] bg-[#0f1220] p-8">
              <p className="text-xs uppercase tracking-widest mb-6 text-[#2d6fd4]" style={{ letterSpacing: "0.12em" }}>
                Coverage Scenarios
              </p>
              <ul className="flex flex-col gap-3">
                {coverageItems.map((item, i) => (
                  <li key={i} className="check-item">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#1a2d14] flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#5aaa35" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#1a1f35] bg-[#0f1220] p-6 flex flex-col gap-3">
              <p className="text-xs uppercase tracking-widest text-[#5aaa35]" style={{ letterSpacing: "0.12em" }}>
                Remote Order Entry & Verification
              </p>
              <p className="text-white font-semibold" style={{ fontFamily: "'Sora', sans-serif" }}>
                Extend your local pharmacy team&apos;s resources
              </p>
              <p className="text-[#7a8499] text-sm leading-relaxed">
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
