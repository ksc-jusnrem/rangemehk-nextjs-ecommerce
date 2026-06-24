/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mitti: "#C85A32",
        cobalt: "#003F87",
        turquoise: "#00A896",
        indigo: "#132238",
        porcelain: "#FAF8F5",
      },
      fontFamily: {
        nastaliq: ["'Noto Nastaliq Urdu'", "serif"],
        serif: ["Georgia", "'Times New Roman'", "serif"],
      },
    },
  },
  plugins: [],
};
