/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["W95FA", "sans-serif"],
        heading: ["Sysfont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
