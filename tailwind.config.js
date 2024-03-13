/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#555",
          dark: "#212529"
        },
        green: {
          light: "#055036",
          dark: "#023724"
        }
      }
    },
  },
  plugins: [],
}