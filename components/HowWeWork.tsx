const steps = [
  { num: "01", title: "Discover", desc: "We audit your pharmacy operations, staffing gaps, and coverage windows to map your specific clinical and regulatory needs." },
  { num: "02", title: "Design", desc: "We architect a tailored telepharmacy model — coverage schedule, EHR integration, escalation pathways, and compliance protocols." },
  { num: "03", title: "Deploy", desc: "Rapid onboarding with your pharmacy information system. Typical go-live in under 30 days, with continuous support from day one." },
  { num: "04", title: "Optimize", desc: "Ongoing performance reporting, clinical intervention tracking, and program refinement to maximize outcomes and cost efficiency." },
];

export default function HowWeWork() {
  return (
    <section id="process" className="py-24 px-6 bg-[#07090f]">
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto pt-24">
        <div className="mb-12">
          <h2 className="text-white mb-3"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.4rem)", letterSpacing: "-0.02em" }}>
            How We Work
          </h2>
          <p className="text-[#7a8499]">A rigorous, clinician-led approach to deploying remote pharmacy services.</p>
        </div>

        <div className="h-px bg-[#1a1f35] mb-14" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col gap-4">
              <span className="select-none leading-none font-bold"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(3.5rem, 6vw, 5rem)", color: "#1a1f35" }}>
                {s.num}
              </span>
              <h3 className="text-white font-semibold text-lg" style={{ fontFamily: "'Sora', sans-serif" }}>
                {s.title}
              </h3>
              <p className="text-[#7a8499] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
