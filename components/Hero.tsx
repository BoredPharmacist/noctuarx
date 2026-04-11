export default function Hero() {
  return (
    <section className="relative min-h-screen dot-grid overflow-hidden bg-[#07090f]" style={{ paddingTop: "64px" }}>

      {/* Top glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 30% 0%, rgba(30,79,163,0.2) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[calc(100vh-64px)] flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full py-16">

          {/* Left — text */}
          <div className="flex-1 max-w-2xl">
            <div className="fade-up fade-up-delay-1 mb-7">
              <span className="pill">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5aaa35] inline-block" />
                Clinical Telepharmacy
              </span>
            </div>

            <h1 className="fade-up fade-up-delay-2 text-white mb-5"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Remote Pharmacy Care
              <br />
              <span style={{ color: "#5aaa35" }}>When It Matters Most</span>
            </h1>

            <p className="fade-up fade-up-delay-3 text-[#7a8499] mb-9 leading-relaxed max-w-lg"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.1rem)" }}>
              NetLinkRx puts board-certified clinical pharmacists inside your Critical
              Access or Rural Hospital — on demand, overnight, or around the clock.
              Zero staffing gaps. Zero compromise on patient safety.
            </p>

            <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row gap-4">
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

            <p className="fade-up fade-up-delay-4 mt-10 text-[#4a5268] text-xs uppercase tracking-widest">
              Serving Critical Access &amp; Rural Hospitals Nationwide
            </p>
          </div>

          {/* Right — image */}
          <div className="fade-up fade-up-delay-3 flex-1 max-w-lg w-full hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/5", boxShadow: "0 0 80px rgba(30,79,163,0.2), 0 0 0 1px rgba(30,79,163,0.15)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/stock1.png"
                alt="Clinical pharmacist providing remote telepharmacy services"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, transparent, rgba(7,9,15,0.8))" }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: "inset 0 0 40px rgba(30,79,163,0.15)" }} />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #07090f)" }} />
    </section>
  );
}
