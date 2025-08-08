const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandblue: '#0075FF', // tu azul personalizado
        lightblue: "#DAEBFF",
        lightgrey: '#AEC7E4',
        navyblue: '#002834',
        beach: '#8EA9C1',
        circlebg: "rgba(77, 213, 143, 0.25)",
        darkblue: '#000321',
        offwhite: 'rgba(255, 255, 255, 0.75)',
        bordertop: 'rgba(196, 196, 196, 0.5)',
        'blue-500': '#0075FF',
        darkgray: '#90A3B4',
        babyblue: '#E2F3F9',
        grey500: '#ECECEC',
        bluegray: "#7D82A1",
        bluegrey: "#7C8F9E",
        midnightblue: '#183B56',
        midblue: '#00276F',
        bluebg: "rgba(47, 184, 227, 0.2)",
        border: "rgba(128, 135, 137, 0.35)"
      },
      fontSize: {
        '65xl': ['65px', { lineHeight: '1' }],
        '80xl': ['80px', { lineHeight: '6rem' }],
      }
    },
  },
  plugins: [],
}