/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07080f",
        surface: "#0d0e1a",
        border: "#1a1c2e",
        accent: "#4a9eff",
        "accent-dim": "#2a5a9a",
        muted: "#6b7280",
        subtle: "#1e2035",
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(74,158,255,0.12) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "28px 28px",
      },
    },
  },
  plugins: [],
};
