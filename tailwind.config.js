/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit'],
        rem: ['REM'],
        poppins: ['Poppins'],
        bricolage: ['Bricolage Grotesque'],
        caprasimo: ['Caprasimo']
      },
      backgroundImage: {
        'imgOne': 'url("/src/images/img1.jpg")', 
        'imgTwo': 'url("/src/images/img2.jpg")', 
        'imgThree': 'url("/src/images/img3.jpg")' 
      }
    },
  },
  plugins: [],
}

