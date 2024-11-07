/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "base": ["Inter", "sans-serif"],
        "head": ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

