"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    email: "",
    hospital: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to your backend/form service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="section-divider mb-28" />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="pill mb-5 inline-flex">Get Started</span>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            }}
          >
            Does Your Pharmacy Need
            <br />
            to Do More With Less?
          </h2>
          <p className="text-[#8b93a8] max-w-lg mx-auto leading-relaxed">
            Tell us about your facility and coverage needs. We&apos;ll respond within
            one business day with a tailored telepharmacy proposal.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 rounded-2xl border border-[#1a1c2e] bg-[#0d0e1a]">
            <div className="w-14 h-14 rounded-full bg-[#1e3a5f] flex items-center justify-center mx-auto mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L19 7" stroke="#4a9eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
              Message Received
            </h3>
            <p className="text-[#8b93a8] text-sm">
              We&apos;ll be in touch within one business day.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#1a1c2e] bg-[#0d0e1a] p-8 md:p-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {[
                { id: "name", label: "Name *", placeholder: "Dr. Jane Smith", required: true },
                { id: "title", label: "Title *", placeholder: "Director of Pharmacy", required: true },
                { id: "email", label: "Email Address *", placeholder: "jsmith@hospital.org", required: true },
                { id: "hospital", label: "Hospital / Facility", placeholder: "Community Medical Center", required: false },
              ].map((f) => (
                <div key={f.id} className="flex flex-col gap-2">
                  <label
                    htmlFor={f.id}
                    className="text-[#8b93a8] text-xs uppercase tracking-widest"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.id === "email" ? "email" : "text"}
                    required={f.required}
                    placeholder={f.placeholder}
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    className="bg-[#07080f] border border-[#1a1c2e] rounded-lg px-4 py-3 text-white text-sm placeholder-[#4b5563] focus:outline-none focus:border-[#4a9eff] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <label
                htmlFor="message"
                className="text-[#8b93a8] text-xs uppercase tracking-widest"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Message / Coverage Needs
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your current staffing challenges, coverage hours needed, and facility size..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-[#07080f] border border-[#1a1c2e] rounded-lg px-4 py-3 text-white text-sm placeholder-[#4b5563] focus:outline-none focus:border-[#4a9eff] transition-colors resize-none"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-[#4a9eff] text-white font-semibold text-sm hover:bg-[#6ab3ff] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Send Message
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M3 7.5H12M9 4l3 3.5-3 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
