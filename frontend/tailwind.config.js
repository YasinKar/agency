/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
    }
  },
  plugins: [],
}