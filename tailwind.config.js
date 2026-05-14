/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f3ead9",
        clay: "#b46a3a",
        ink: "#181611",
        olive: "#566246",
        gold: "#d9b36c",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 45px rgba(24, 22, 17, 0.12)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(217, 179, 108, 0.32), transparent 40%)",
      },
    },
  },
  plugins: [],
};
