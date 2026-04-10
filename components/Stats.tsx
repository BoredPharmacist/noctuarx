const stats = [
  { value: "< 20min", label: "Avg. Order Turnaround" },
  { value: "Up to 70%", label: "Labor Cost Savings vs. FTE" },
  { value: "90%+", label: "Clinical Intervention Acceptance" },
  { value: "24/7", label: "Pharmacist Availability" },
];

export default function Stats() {
  return (
    <section id="results" className="py-28 px-6 bg-[#0a0b14]">
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto pt-28">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left — headline + stats */}
          <div className="flex-1">
            <h2
              className="text-white leading-tight mb-6"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
              }}
            >
              Real Results,
              <br />
              Not Just Theory
            </h2>
            <p className="text-[#8b93a8] leading-relaxed mb-12 max-w-md">
              NoctuaRx solutions are measured by their impact on patient safety
              and your bottom line. Our pharmacists average 8+ years of clinical
              hospital experience and have zero malpractice claims since inception.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {stats.map((s, i) => (
                <div key={i}>
                  <div
                    className="stat-number mb-1"
                    style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700 }}
                  >
                    {s.value}
                  </div>
                  <p
                    className="text-[#4b5563] text-xs uppercase tracking-widest"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 inline-flex items-center gap-2">
              <span
                className="pill text-[10px]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Trusted by Critical Access Hospitals
              </span>
            </div>
          </div>

          {/* Right — why NoctuaRx panel */}
          <div className="flex-1 max-w-lg">
            <div className="rounded-2xl border border-[#1a1c2e] bg-[#0d0e1a] p-8">
              <div className="flex items-center justify-between mb-6">
                <p
                  className="text-white font-semibold"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Why NoctuaRx?
                </p>
                <span className="pill text-[10px]">Trusted</span>
              </div>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-6">
                A sample of what sets us apart from traditional remote staffing solutions.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "W-2 clinical pharmacists — not contractors",
                  "8+ years avg. hospital pharmacy experience",
                  "ASHP-aligned clinical competencies",
                  "Proprietary compliance & reporting platform",
                  "Deep Critical Access Hospital specialization",
                  "Sub-20 minute average order turnaround",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#c4cad6]">
                    <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" stroke="#4a9eff" strokeWidth="1.2"/>
                      <path d="M4 7l2 2 4-4" stroke="#4a9eff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
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
