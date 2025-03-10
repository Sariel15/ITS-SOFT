/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    fontFamily: {
        Lato:['Lato', 'sans-serif'],
      },
    container: {
      center: true,
      padding: "2rem"
    },
    screens: {
      '2sm': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      animation: {
        fadeInLeft: "fadeInLeft 1s ease-in-out",
        fadeIn: "fadeIn 1.5s ease-in-out",
        typing:
          "typing 3s steps(30) 1s normal both, blink 0.75s step-end infinite",
        tada: "tada 1s ease-in-out",
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "50%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(50px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        tada: {
          "0%, 100%": { transform: "scale(1)" },
          "10%, 20%": { transform: "scale(0.9) rotate(-3deg)" },
          "30%, 50%, 70%, 90%": { transform: "scale(1.1) rotate(3deg)" },
        },
      },
    },
  },
};