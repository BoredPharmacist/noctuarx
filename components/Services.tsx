const services = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11h8M11 7v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: "Remote Order Entry & Verification",
    desc: "Centralized medication order review and approval by board-certified pharmacists — driving patient safety, HIPAA compliance, and quality monitoring so your onsite team focuses on emergent clinical needs.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M11 7v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: "24/7 Pharmacist Availability",
    desc: "Round-the-clock clinical pharmacist coverage for overnight, weekend, peak hours, callouts, leaves of absence, and emergencies — without the FTE cost.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 6h14M4 11h14M4 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: "Medication Order Management",
    desc: "End-to-end prospective medication review prior to administration. Integrates with 20+ pharmacy information systems and CPOE platforms to ensure compliance and reduce turnaround time.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 3h12a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5"/><path d="M8 11l2.5 2.5L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Admission & Discharge Medication Reconciliation",
    desc: "Pharmacist-led reconciliation at every transition point — admission, transfer, and discharge — to eliminate discrepancies, reduce readmissions, and improve care continuity.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3L13.5 8.5H19L14.5 12L16.5 18L11 14.5L5.5 18L7.5 12L3 8.5H8.5L11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
    title: "Clinical Program Support",
    desc: "Specialized pharmacist expertise in antimicrobial stewardship, opioid stewardship, transitions of care, discharge counseling, post-discharge follow-up, and provider education.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#07090f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="pill mb-5 inline-flex">Core Services</span>
          <h2 className="text-white mb-4"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", letterSpacing: "-0.02em" }}>
            Clinical Telepharmacy, Built for
            <br /><span style={{ color: "#5aaa35" }}>Underserved Facilities</span>
          </h2>
          <p className="max-w-xl mx-auto leading-relaxed text-[#7a8499]">
            From order verification to specialized clinical programs — NetLinkRx
            operates as a seamless extension of your pharmacy team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <div key={i} className="service-card rounded-xl border border-[#1a1f35] bg-[#0c0f1a] p-6 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#1a1f35] flex items-center justify-center text-[#2d6fd4]">
                {s.icon}
              </div>
              <h3 className="text-white font-semibold leading-snug"
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "0.92rem" }}>
                {s.title}
              </h3>
              <p className="text-[#7a8499] text-sm leading-relaxed flex-1">{s.desc}</p>
              <a href="#contact" className="text-[#5aaa35] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Learn more
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M3 6.5H10M7.5 4l2.5 2.5-2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
