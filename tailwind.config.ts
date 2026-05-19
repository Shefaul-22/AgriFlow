import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-green": "#00A859",
      },
      width: {
        "97.5": "390px",
      },
      height: {
        "155": "620px",
      },
    },
  },
  plugins: [],
};
export default config;