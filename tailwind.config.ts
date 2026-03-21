import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#060816",
        panel: "rgba(14, 20, 39, 0.72)",
        stroke: "rgba(125, 155, 255, 0.18)",
        accent: "#6ea8fe",
        accent2: "#8b5cf6",
        accent3: "#22d3ee",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(110, 168, 254, 0.15), 0 12px 60px rgba(36, 99, 235, 0.18)",
        card: "0 10px 40px rgba(4, 9, 25, 0.45)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(126,146,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(126,146,255,0.08) 1px, transparent 1px)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        scan: "scan 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 1px rgba(110,168,254,0.10), 0 0 30px rgba(34,211,238,0.08)" },
          "50%": { boxShadow: "0 0 0 1px rgba(110,168,254,0.20), 0 0 50px rgba(139,92,246,0.16)" },
        },
        scan: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        }
      }
    },
  },
  plugins: [],
};

export default config;
