import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#06070b", 900: "#0a0c12", 800: "#10131b", 700: "#171b26" },
        brand: { DEFAULT: "#818cf8", strong: "#6366f1", cyan: "#22d3ee", violet: "#a78bfa" },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #818cf8 0%, #a78bfa 45%, #22d3ee 100%)",
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        ping2: { "75%,100%": { transform: "scale(2.2)", opacity: "0" } },
      },
      animation: { float: "float 6s ease-in-out infinite", ping2: "ping2 1.8s cubic-bezier(0,0,.2,1) infinite" },
    },
  },
  plugins: [],
};
export default config;
