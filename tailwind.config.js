/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        navbar: "11rem",
        mobileNav: "12rem",
      },
    },
    colors: {
      black: "#121212",
      white: "#FFFFFF",
      gray: "#ECECEC",
    },
  },
  plugins: [],
};
