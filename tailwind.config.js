/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        bordered: "0 0 9px 3px rgba(0,0,0,0.75)",
      },
      colors: {
        primary: "#eddaa0",
      }
    },
  },
  plugins: [],
}
