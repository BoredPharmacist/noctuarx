export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center dot-grid overflow-hidden pt-16">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 10%, rgba(74,158,255,0.09) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(74,158,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Pill */}
        <div className="fade-up fade-up-delay-1 mb-8 flex justify-center">
          <span className="pill">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#4a9eff]"
              style={{ display: "inline-block" }}
            />
            Clinical Telepharmacy
          </span>
        </div>

        {/* Headline */}
        <h1
          className="fade-up fade-up-delay-2 text-white leading-tight mb-6"
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
          }}
        >
          Remote Pharmacy Care
          <br />
          <span className="text-[#4a9eff] glow-accent">When It Matters Most</span>
        </h1>

        {/* Subhead */}
        <p
          className="fade-up fade-up-delay-3 text-[#8b93a8] max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)" }}
        >
          NoctuaRx puts board-certified clinical pharmacists inside your Critical
          Access or Rural Hospital — on demand, overnight, or around the clock.
          Zero staffing gaps. Zero compromise on patient safety.
        </p>

        {/* CTAs */}
        <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="group px-7 py-3.5 rounded-full bg-[#4a9eff] text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#6ab3ff] transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Request a Demo
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-0.5 transition-transform"
            >
              <path
                d="M3 8H13M9 4L13 8L9 12"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#services"
            className="px-7 py-3.5 rounded-full border border-[#1a1c2e] text-[#8b93a8] font-medium text-sm flex items-center justify-center gap-2 hover:border-[#4a9eff] hover:text-white transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View Services
          </a>
        </div>

        {/* Trusted by line */}
        <p
          className="fade-up fade-up-delay-4 mt-12 text-[#4b5563] text-xs uppercase tracking-widest"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Serving Critical Access &amp; Rural Hospitals Nationwide
        </p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #07080f)",
        }}
      />
    </section>
  );
}
