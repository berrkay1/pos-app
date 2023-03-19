/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'pos-black1':'#000',
        'pos-black2':'#121212',
        'pos-black3':'#2d2d2d',
        'pos-black4':'#313131',
        'pos-blackBtns':'#454545',
      },
      
    },
  },
  plugins: [],
}
