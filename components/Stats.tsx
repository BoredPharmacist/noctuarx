const stats = [
  { value: "< 20min", label: "Avg. Order Turnaround" },
  { value: "Up to 70%", label: "Labor Cost Savings vs. FTE" },
  { value: "10+", label: "Years Avg. Clinical Experience" },
  { value: "24/7", label: "Pharmacist Availability" },
];

export default function Stats() {
  return (
    <section id="results" className="py-24 px-6 bg-[#0c0f1a]">
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto pt-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <h2 className="text-white leading-tight mb-6"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              Real Results,<br />Not Just Theory
            </h2>
            <p className="text-[#7a8499] leading-relaxed mb-12 max-w-md">
              NetLinkRx solutions are measured by their impact on patient safety and your
              bottom line. Our W-2 pharmacists average 10+ years of clinical hospital experience.
            </p>

            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="stat-number mb-1">{s.value}</div>
                  <p className="text-xs uppercase tracking-widest text-[#4a5268]">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <span className="pill" style={{ borderColor: "rgba(90,170,53,0.35)", color: "#5aaa35", background: "rgba(90,170,53,0.08)" }}>
                Trusted by Critical Access Hospitals
              </span>
            </div>
          </div>

          <div className="flex-1 max-w-lg">
            <div className="rounded-2xl border border-[#1a1f35] bg-[#0f1220] p-8">
              <div className="flex items-center justify-between mb-6">
                <p className="text-white font-semibold" style={{ fontFamily: "'Sora', sans-serif" }}>Why NetLinkRx?</p>
                <span className="pill text-[10px]" style={{ padding: "3px 10px" }}>Trusted</span>
              </div>
              <p className="text-[#7a8499] text-sm leading-relaxed mb-6">
                What sets us apart from traditional remote pharmacy staffing solutions.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "W-2 clinical pharmacists — not contractors",
                  "10+ years avg. hospital pharmacy experience",
                  "ASHP-aligned clinical competencies",
                  "Proprietary compliance & reporting platform",
                  "Deep Critical Access Hospital specialization",
                  "Sub-20 minute average order turnaround",
                  "Compatible with 20+ pharmacy information systems",
                ].map((item, i) => (
                  <li key={i} className="check-item">
                    <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" stroke="#5aaa35" strokeWidth="1.2"/>
                      <path d="M4 7l2 2 4-4" stroke="#5aaa35" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
