import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#07080a",
        panel: "#0c0e11",
        raised: "#12151a",
        line: "#1d2128",
        muted: "#8a919c",
        faint: "#5b616b",
        accent: "#8ab4ff",
        warn: "#f2a65a",
        bad: "#f0716b",
        ok: "#5fd3a0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        rise: { from: { opacity: "0", transform: "translateY(4px)" }, to: { opacity: "1", transform: "none" } },
        beat: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.35" } },
      },
      animation: { rise: "rise .5s ease-out both", beat: "beat 2.4s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
