/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./MainNav.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        HindMysuru: ["Hind Mysuru", "sans-serif"],
        Shafarik: ["Shafarik", "sans-serif"],
        YujiMai: ["Yuji Mai", "sans-serif"],
        Orbitron: ["Orbitron", "sans-serif"],
        Rowdies: ["Rowdies", "sans-serif"],
      },
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
};
