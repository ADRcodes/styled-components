/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    extend: {
      /////
      /////
      /////
      colors: {
        primary: "#2ec4b6",
        primary_light: "#cbf3f0",
        primary_dark: "#0A5D60",
        secondary: "#ff9f1c",
        secondary_light: "#ffbf69",
        secondary_dark: "#CAE6E6",
        neutral: "#FFE046",
        text: "#1F4F4F",
        text_dark: "#32FFFF",
        bg: "#F1FFFF",
        bg_dark: "#101414",
        border: "",
        /////
        /////
        /////
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
      spacing: {
        88: "22rem",
      },
      animation: {
        floaty: "floaty 2s ease-in-out infinite",
        slide_in: "slide_in 5s ease-in-out",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "20%": {
            transform: "rotate(2deg) translateY(-20px) translateX(20px)",
          },
          "40%": {
            transform: "rotate(-8deg) translateX(30px) translateY(-20px)",
          },
          "60%": {
            transform: "rotate(3deg) translateX(30px)",
          },
          "80%": {
            transform: "rotate(-1deg) translateY(-10px) translateX(10px)",
          },
        },
        slide_in: {
          "0%": { transform: "rotate(-3deg)" },
          "5%": {
            transform: "rotate(2deg) translateX(20px)",
          },
          "10%": {
            transform: "rotate(-8deg) translateX(30px) translateY(-20px)",
          },
          "15%": {
            transform: "rotate(3deg) translateX(30px)",
          },
          "100%": {
            transform: "rotate(-10deg) translateY(-200px) translateX(200px)",
          },
        },
        roll_in: {
          "0%": { transform: "rotate(-3deg)", opacity: "0" },
          "100%": {
            transform: "rotate(-10deg) translateY(-200px) translateX(200px)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
