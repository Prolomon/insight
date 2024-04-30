/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '770px',
      'med': '888px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        "category-img": "url('src/assets/tech_one.jpeg')"
      },
      gridTemplateColumns: {
        "grid-cols-custom": "60% 40%"
      }
    },
  },
  plugins: [],
}

