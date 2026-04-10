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
    <section id="process" className="py-28 px-6">
      <div className="section-divider mb-28" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2
            className="text-white mb-3"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            }}
          >
            How We Work
          </h2>
          <p className="text-[#8b93a8]">
            A rigorous, clinician-led approach to deploying remote pharmacy services.
          </p>
        </div>

        {/* Divider line */}
        <div className="h-px bg-[#1a1c2e] mb-12" />

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col gap-4">
              <span
                className="text-[#1e2035] font-bold select-none leading-none"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(3.5rem, 6vw, 5rem)",
                }}
              >
                {s.num}
              </span>
              <h3
                className="text-white font-semibold text-lg"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
