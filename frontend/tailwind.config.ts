import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000000",
        "secondary": "#ffffff",
        "text-primary": "#dbdbdb",
        "text-secondary": "#c2c2c2",
        "special": "#2777f0",
        "spotlight": "#268fff"
      }
    },
  },
  plugins: [],
} satisfies Config;
