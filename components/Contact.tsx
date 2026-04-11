"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", title: "", email: "", hospital: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="pill mb-5 inline-flex">Get Started</span>
          <h2
            className="mb-4"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#0f1c35" }}
          >
            Does Your Pharmacy Need
            <br />
            to Do More With Less?
          </h2>
          <p className="max-w-lg mx-auto leading-relaxed" style={{ color: "#5a6a85" }}>
            Tell us about your facility and coverage needs. We&apos;ll respond within
            one business day with a tailored telepharmacy proposal.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 rounded-2xl border" style={{ borderColor: "#dde4ef", background: "#f4f7fb" }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "#eaf5e3" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L19 7" stroke="#5aaa35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "'Sora', sans-serif", color: "#0f1c35" }}>Message Received</h3>
            <p className="text-sm" style={{ color: "#5a6a85" }}>We&apos;ll be in touch within one business day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl border p-8 md:p-12" style={{ borderColor: "#dde4ef", background: "#f4f7fb" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {[
                { id: "name", label: "Name *", placeholder: "Dr. Jane Smith", required: true },
                { id: "title", label: "Title *", placeholder: "Director of Pharmacy", required: true },
                { id: "email", label: "Email Address *", placeholder: "jsmith@hospital.org", required: true },
                { id: "hospital", label: "Hospital / Facility", placeholder: "Community Medical Center", required: false },
              ].map((f) => (
                <div key={f.id} className="flex flex-col gap-2">
                  <label htmlFor={f.id} className="text-xs uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#5a6a85" }}>
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.id === "email" ? "email" : "text"}
                    required={f.required}
                    placeholder={f.placeholder}
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    className="border rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ background: "#fff", borderColor: "#dde4ef", color: "#0f1c35", fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="message" className="text-xs uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#5a6a85" }}>
                Message / Coverage Needs
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your current staffing challenges, coverage hours needed, and facility size..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="border rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                style={{ background: "#fff", borderColor: "#dde4ef", color: "#0f1c35", fontFamily: "'DM Sans', sans-serif" }}
              />
            </div>

            <button
              type="submit"
              className="px-10 py-3.5 rounded-full text-white font-semibold text-sm flex items-center gap-2 transition-all duration-200"
              style={{ background: "#1e4fa3", fontFamily: "'DM Sans', sans-serif" }}
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
