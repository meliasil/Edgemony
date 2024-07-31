/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        custom: ["CustomFont", "sans-serif"],
      },
      colors: {
        primary: {
          tomato: "hsl(4, 100%, 67%)",
        },
        neutral: {
          darkSlateGrey: "hsl(234, 29%, 20%)",
          charcoalGrey: "hsl(235, 18%, 26%)",
          grey: "hsl(231, 7%, 60%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
