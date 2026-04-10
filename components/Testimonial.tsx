export default function Testimonial() {
  return (
    <section className="py-28 px-6 bg-[#0a0b14]">
      <div className="section-divider mb-0" />
      <div className="max-w-4xl mx-auto pt-28 text-center">
        <span className="pill mb-8 inline-flex">What They&apos;re Saying</span>

        <blockquote>
          <p
            className="text-white leading-relaxed mb-8"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1.2rem, 3vw, 1.7rem)",
              fontStyle: "italic",
            }}
          >
            &ldquo;Whether down the hall or outside the building, the experience
            for the clinical staff is exactly the same. NoctuaRx fits our
            facility like a natural extension of our team.&rdquo;
          </p>
          <footer>
            <p
              className="text-[#4a9eff] text-sm font-medium"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              — Director of Pharmacy, Critical Access Hospital
            </p>
          </footer>
        </blockquote>

        {/* Stat row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-[#1a1c2e] pt-12">
          {[
            { val: "8+", lbl: "Years Avg. Experience" },
            { val: "90%", lbl: "Clinical Intervention Acceptance" },
            { val: "0", lbl: "Malpractice Claims Since Inception" },
            { val: "70%", lbl: "Labor Savings vs. Per Diem Staff" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span
                className="stat-number"
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
              >
                {s.val}
              </span>
              <span
                className="text-[#4b5563] text-xs uppercase tracking-widest text-center"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.lbl}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
