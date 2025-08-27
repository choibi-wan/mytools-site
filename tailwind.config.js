/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-geist-sans)", "sans-serif"],
          mono: ["var(--font-geist-mono)", "monospace"],
        },
      },
    },
    plugins: [],
  }