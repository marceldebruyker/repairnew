/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669', // primary green
          700: '#047857',
          800: '#065f46',
          900: '#064e3b'
        }
      },
      boxShadow: { soft: '0 10px 30px -10px rgb(0 0 0 / 0.15)' }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}