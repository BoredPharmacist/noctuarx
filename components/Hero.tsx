export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center dot-grid overflow-hidden pt-16 bg-white">
      {/* Top blue accent bar */}
      <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#1e4fa3] via-[#5aaa35] to-[#1e4fa3]" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,79,163,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="fade-up fade-up-delay-1 mb-8 flex justify-center">
          <span className="pill">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1e4fa3]" style={{ display: "inline-block" }} />
            Clinical Telepharmacy
          </span>
        </div>

        <h1
          className="fade-up fade-up-delay-2 leading-tight mb-6"
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            color: "#0f1c35",
          }}
        >
          Remote Pharmacy Care
          <br />
          <span style={{ color: "#1e4fa3" }}>When It Matters Most</span>
        </h1>

        <p
          className="fade-up fade-up-delay-3 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "#5a6a85" }}
        >
          NetLinkRx puts board-certified clinical pharmacists inside your Critical
          Access or Rural Hospital — on demand, overnight, or around the clock.
          Zero staffing gaps. Zero compromise on patient safety.
        </p>

        <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="group px-7 py-3.5 rounded-full text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200"
            style={{ background: "#1e4fa3", fontFamily: "'DM Sans', sans-serif" }}
            onMouseOver={e => (e.currentTarget.style.background = "#163a7a")}
            onMouseOut={e => (e.currentTarget.style.background = "#1e4fa3")}
          >
            Request a Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#services"
            className="px-7 py-3.5 rounded-full border font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200"
            style={{ borderColor: "#dde4ef", color: "#5a6a85", fontFamily: "'DM Sans', sans-serif" }}
          >
            View Services
          </a>
        </div>

        <p
          className="fade-up fade-up-delay-4 mt-12 text-xs uppercase tracking-widest"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8a97b0" }}
        >
          Serving Critical Access &amp; Rural Hospitals Nationwide
        </p>
      </div>

      {/* Green bottom accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 rounded-full" style={{ background: "#5aaa35", opacity: 0.5 }} />
    </section>
  );
}
