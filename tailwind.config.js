const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./public/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
  ],
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customgreen: "#fff",
        customlightgreen: "#98f5e1",
        customBlack: "#0b090a",
        bgColor: "#023E7D",
        walletColor: "#002855",
      },
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
