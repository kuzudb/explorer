/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
        mono: ['Lekton', 'monospace'],
      },
      colors:{
        light:{
          primary: "#E0592D",
          secondary: "#F4F5F8",
          accent: "#E0592D",
          border: "#EAECF1",
          text: "#30333A"
        },
        dark:{
          primary: "#E4693E",
          secondary: "#1F2229",
          accent: "#E4693E",
          border: "#222429",
          text: "white"
        }
      },
    },
  },
  plugins: [],
} 
