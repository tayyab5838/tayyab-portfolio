import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      visibility: ["group-hover"],
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgPrimary: "#222529",
        bgSecondary: "#1f2226",
        bgThird: "#191c21",
        red: "#e62e4a",
        white: "#ffffff",
        offWhite: "#9fa0a3",
      },
    },
  },
  plugins: [],
};
export default config;
