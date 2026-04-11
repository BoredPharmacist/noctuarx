// Change applied: "Two-thirds of our pharmacists" → "Our pharmacists hold specialized training or advanced degrees."

const programs = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4"/><path d="M7 10.5l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Antimicrobial Stewardship",
    desc: "Pharmacist-led ASP programs to optimize antibiotic selection, dosing, and duration — reducing resistance and improving outcomes.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 3h8l2 5-10 0L8 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M4 8h12v2a6 6 0 01-12 0V8z" stroke="currentColor" strokeWidth="1.4"/></svg>,
    title: "Opioid Stewardship",
    desc: "Evidence-based protocols to minimize opioid risk, manage pain safely, and comply with state and CMS requirements.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M7 8h6M7 11h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
    title: "Medication Reconciliation",
    desc: "Comprehensive reconciliation at admission, transfer, and discharge to eliminate discrepancies and prevent adverse drug events.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4"/></svg>,
    title: "Transitions of Care",
    desc: "Pharmacist-driven TOC programs that bridge inpatient to outpatient — reducing 30-day readmissions and improving care continuity.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
    title: "Discharge Counseling",
    desc: "Patient-facing pharmacist consultations at discharge to improve medication adherence, reduce errors, and support care plan compliance.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.4"/><path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
    title: "Post-Discharge Follow-Up",
    desc: "Proactive outreach to discharged patients to identify medication-related problems before they lead to readmission.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 5h12M4 10h8M4 15h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
    title: "Drug Information & Hotline",
    desc: "On-demand clinical drug information support for physicians, nurses, and clinical staff — 24 hours a day, 7 days a week.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
    title: "Provider Education & Support",
    desc: "Structured pharmacist-to-provider education on safe prescribing, drug interactions, and medication management protocols.",
  },
];

export default function Clinical() {
  return (
    <section id="clinical" className="py-28 px-6" style={{ background: "#f4f7fb" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="pill mb-5 inline-flex">Clinical Programs</span>
          <h2
            className="mb-4"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#0f1c35" }}
          >
            Clinical Expertise That Extends
            <br />
            <span style={{ color: "#1e4fa3" }}>Beyond Medication Orders</span>
          </h2>
          <p className="max-w-xl mx-auto leading-relaxed" style={{ color: "#5a6a85" }}>
            Our pharmacists hold specialized training or advanced degrees. We help you
            design and manage clinical programs that move the dial on patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((p, i) => (
            <div key={i} className="service-card rounded-xl border bg-white p-5 flex flex-col gap-3" style={{ borderColor: "#dde4ef" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#e8eef9", color: "#1e4fa3" }}>
                {p.icon}
              </div>
              <h3 className="font-semibold text-sm leading-snug" style={{ fontFamily: "'Sora', sans-serif", color: "#0f1c35" }}>
                {p.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#5a6a85" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
