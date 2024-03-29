/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        primary: 'rgba(56, 106, 139, 1)',
        hr: '#C4C4C4',
        lightGrey: '#999999',
        lighterGrey: 'rgba(247, 247, 247, 0.9)',
        rentalsColor: '#679DC0',
        managerColor: '#62909F',
        benefitColor: '#4B4B4B',
        sliderColor: '#D2F4FF',
        databaseColor: '#E6736C',
        keyColor: '#A69FF7',
        searchColor: '#DFE0A5',
        cardColor: " #F5F5F5"

      },
    },
  },
  plugins: [],
}




