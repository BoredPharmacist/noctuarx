export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center dot-grid overflow-hidden pt-16 bg-white">
      <div className="absolute top-16 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #1e4fa3, #5aaa35, #1e4fa3)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,79,163,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="fade-up fade-up-delay-1 mb-8 flex justify-center">
          <span className="pill">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1e4fa3] inline-block" />
            Clinical Telepharmacy
          </span>
        </div>

        <h1 className="fade-up fade-up-delay-2 leading-tight mb-6 text-[#0f1c35]"
          style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
          Remote Pharmacy Care
          <br />
          <span className="text-[#1e4fa3]">When It Matters Most</span>
        </h1>

        <p className="fade-up fade-up-delay-3 max-w-2xl mx-auto mb-10 leading-relaxed text-[#5a6a85]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)" }}>
          NetLinkRx puts board-certified clinical pharmacists inside your Critical
          Access or Rural Hospital — on demand, overnight, or around the clock.
          Zero staffing gaps. Zero compromise on patient safety.
        </p>

        <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact"
            className="px-7 py-3.5 rounded-full text-white font-semibold text-sm flex items-center justify-center gap-2 bg-[#1e4fa3] hover:bg-[#163a7a] transition-colors duration-200">
            Request a Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#services"
            className="px-7 py-3.5 rounded-full border border-[#dde4ef] text-[#5a6a85] font-medium text-sm flex items-center justify-center gap-2 hover:border-[#1e4fa3] hover:text-[#1e4fa3] transition-colors duration-200">
            View Services
          </a>
        </div>

        <p className="fade-up fade-up-delay-4 mt-12 text-xs uppercase tracking-widest text-[#8a97b0]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          Serving Critical Access &amp; Rural Hospitals Nationwide
        </p>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 rounded-full bg-[#5aaa35] opacity-50" />
    </section>
  );
}
