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
      colors: {
        background: "rgba(var(--background))",
        "background-dark": "rgba(var(--background-dark))",
        content: "rgba(var(--content))",
        secondary: "rgba(var(--secondary))",
        primary: "rgba(var(--primary))",
        "primary-dark": "rgba(var(--primary-dark))",
        card: "rgba(var(--card))",
        line: "rgba(var(--line))",
      },
    },
  },
  plugins: [],
};
