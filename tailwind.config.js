/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          700:"#336aae",
          666:"#244c7e"
        },
        gray:{
          222:"#f2f2f2"
        }

      }
    },
  },
  plugins: [],
}

