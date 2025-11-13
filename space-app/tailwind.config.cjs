/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#1a1a2e",
        blush: "#d98da4ff",
        violet: "#c08dd6ff",
      },
    },
  },
  plugins: [],
};
