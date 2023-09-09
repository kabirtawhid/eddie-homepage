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
        "gray-3": "#828282",
        "gray-4": "#bdbdbd",
        "gray-6": "#f2f2f2",
        "blue-1": "#2d9cdb",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
