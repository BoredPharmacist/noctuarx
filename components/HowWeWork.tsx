const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We audit your current pharmacy operations, staffing gaps, and coverage windows to map your specific clinical and regulatory needs.",
  },
  {
    num: "02",
    title: "Design",
    desc: "We architect a tailored telepharmacy model — coverage schedule, EHR integration, escalation pathways, and compliance protocols.",
  },
  {
    num: "03",
    title: "Deploy",
    desc: "Rapid onboarding with your pharmacy information system. Typical go-live in under 30 days, with continuous support from day one.",
  },
  {
    num: "04",
    title: "Optimize",
    desc: "Ongoing performance reporting, clinical intervention tracking, and program refinement to maximize outcomes and cost efficiency.",
  },
];

export default function HowWeWork() {
  return (
    <section id="process" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2
            className="mb-3"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.4rem)", color: "#0f1c35" }}
          >
            How We Work
          </h2>
          <p style={{ color: "#5a6a85" }}>A rigorous, clinician-led approach to deploying remote pharmacy services.</p>
        </div>

        <div className="h-px mb-12" style={{ background: "#dde4ef" }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col gap-4">
              <span
                className="font-bold select-none leading-none"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(3.5rem, 6vw, 5rem)", color: "#e8eef9" }}
              >
                {s.num}
              </span>
              <h3 className="font-semibold text-lg" style={{ fontFamily: "'Sora', sans-serif", color: "#0f1c35" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5a6a85" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
