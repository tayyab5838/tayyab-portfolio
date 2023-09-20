import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgPrimary: "#212529",
        bgSecondary: "#202327",
        red: "#e62e4a",
        white: "#ffffff",
        offWhite: "#c4cfde",
      },
      boxShadow: {
        combined:
          "10px 10px 19px rgb(28 30 34), -10px -10px 19px rgb(38 42 46), inset 21px 21px 19px rgb(24 26 29), inset -21px -21px 19px rgb(32 34 37)",
      },
    },
  },
  plugins: [],
};
export default config;
