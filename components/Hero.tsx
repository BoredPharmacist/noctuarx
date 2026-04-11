export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center dot-grid overflow-hidden bg-[#07090f]"
      style={{ minHeight: "100vh", paddingTop: "64px" }}>

      {/* Radial glow top */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(30,79,163,0.22) 0%, transparent 65%)" }} />

      {/* Green bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: "500px", height: "180px", background: "radial-gradient(ellipse at center, rgba(90,170,53,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-16">

        {/* Pill */}
        <div className="fade-up fade-up-delay-1 mb-7 flex justify-center">
          <span className="pill">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5aaa35] inline-block" />
            Clinical Telepharmacy
          </span>
        </div>

        {/* Headline — tight */}
        <h1 className="fade-up fade-up-delay-2 text-white mb-5"
          style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(2.6rem, 6vw, 4.2rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Remote Pharmacy Care
          <br />
          <span style={{ color: "#5aaa35" }}>When It Matters Most</span>
        </h1>

        {/* Subhead */}
        <p className="fade-up fade-up-delay-3 text-[#7a8499] max-w-xl mx-auto mb-9 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)" }}>
          NetLinkRx puts board-certified clinical pharmacists inside your Critical
          Access or Rural Hospital — on demand, overnight, or around the clock.
          Zero staffing gaps. Zero compromise on patient safety.
        </p>

        {/* CTAs */}
        <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact"
            className="px-7 py-3.5 rounded-full text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #1e4fa3, #2d6fd4)" }}>
            Request a Demo
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M3 7.5H12M9 4l3 3.5-3 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#services"
            className="px-7 py-3.5 rounded-full border border-[#1a1f35] text-[#7a8499] font-medium text-sm flex items-center justify-center gap-2 hover:border-[#252d4a] hover:text-white transition-all duration-200">
            View Services
          </a>
        </div>

        {/* Tagline */}
        <p className="fade-up fade-up-delay-4 mt-10 text-[#4a5268] text-xs uppercase tracking-widest">
          Serving Critical Access &amp; Rural Hospitals Nationwide
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #07090f)" }} />
    </section>
  );
}
