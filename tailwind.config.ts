import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        crete: ["var(--font-creteRound)"],
        work: ["var(--font-workSans)"],
      },
    },
  },
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
};

export default config;
