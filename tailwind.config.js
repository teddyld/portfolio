/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          1000: "#18181b",
        },
      },
      animation: {
        blink: "blink 1s linear infinite",
      },
      keyframes: {
        blink: {
          "0%": {
            opacity: "100%",
          },
          "50%": {
            opacity: "0%",
          },
        },
      },
    },
  },
  plugins: [],
};
