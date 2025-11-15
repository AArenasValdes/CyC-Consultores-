/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",      // azul de tu navbar (blue-600)
        primaryDark: "#1e40af",  // hover oscuro
        primaryLight: "#3b82f6", // opcional
      },
      fontFamily: {
        verdana: ['Verdana', 'Geneva', 'sans-serif'],
      },
    },
  },
  plugins: [],
};