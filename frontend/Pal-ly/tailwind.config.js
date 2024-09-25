/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBg: "#0d0d0d",
        customTextColor: "#A04747",
        customAccentGray: "#D8A25E",
        customAccentGreen: "#EEDF7A",
      },
      fontFamily: {
        termina: ["Termina", "sans-serif"], // Add Termina
        epilogue: ["Epilogue", "sans-serif"], // Add Epilogue
      },
    },
  },
  plugins: [],
};
