// Changes applied:
// - 8+ years → 10+ years
// - Removed "0 malpractice claims" stat
// - Removed "90% clinical intervention acceptance" stat

const stats = [
  { value: "< 20min", label: "Avg. Order Turnaround" },
  { value: "Up to 70%", label: "Labor Cost Savings vs. FTE" },
  { value: "10+", label: "Years Avg. Clinical Experience" },
  { value: "24/7", label: "Pharmacist Availability" },
];

export default function Stats() {
  return (
    <section id="results" className="py-28 px-6" style={{ background: "#0e2a5c" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left */}
          <div className="flex-1">
            <h2
              className="leading-tight mb-6"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#ffffff" }}
            >
              Real Results,
              <br />
              Not Just Theory
            </h2>
            <p className="leading-relaxed mb-12 max-w-md" style={{ color: "rgba(255,255,255,0.65)" }}>
              NetLinkRx solutions are measured by their impact on patient safety and your
              bottom line. Our W-2 pharmacists average 10+ years of clinical hospital
              experience.
            </p>

            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {stats.map((s, i) => (
                <div key={i}>
                  <div
                    className="mb-1 font-bold"
                    style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#5aaa35", lineHeight: 1 }}
                  >
                    {s.value}
                  </div>
                  <p className="text-xs uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace", color: "rgba(255,255,255,0.4)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest border"
                style={{ fontFamily: "'JetBrains Mono', monospace", borderColor: "rgba(90,170,53,0.4)", color: "#5aaa35", background: "rgba(90,170,53,0.08)" }}>
                Trusted by Critical Access Hospitals
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 max-w-lg">
            <div className="rounded-2xl border p-8" style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}>
              <p className="font-semibold mb-6" style={{ fontFamily: "'Sora', sans-serif", color: "#ffffff" }}>
                Why NetLinkRx?
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
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
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
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
