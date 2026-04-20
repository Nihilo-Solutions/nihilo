/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Explicitly scan the src folder
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f9ff', // Alice Blue
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#020617', // Richer Dark Navy (Slate-950 base)
        },
        accent: {
          light: '#60a5fa', // Blue 400
          DEFAULT: '#3b82f6', // Blue 500 (Electric Blue)
          dark: '#2563eb', // Blue 600
        },
        cyan: {
          light: '#67e8f9', // Cyan 300
          DEFAULT: '#06b6d4', // Cyan 500
          dark: '#0891b2', // Cyan 600
        },
        surface: {
          light: '#1e293b', // Slate 800
          DEFAULT: '#0f172a', // Slate 900
          dark: '#020617', // Slate 950
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}