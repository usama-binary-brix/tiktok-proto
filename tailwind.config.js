/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6699FF',
        secondary: '#FF3366',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6699FF 0%, #FF3366 100%)',
        'gradient-primary-reverse': 'linear-gradient(135deg, #FF3366 0%, #6699FF 100%)',
      },
    },
  },
  plugins: [],
}

