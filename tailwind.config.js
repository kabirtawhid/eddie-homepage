/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
      },
      colors: {
        "gray-1": "#333",
        "gray-2": "#4f4f4f",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
