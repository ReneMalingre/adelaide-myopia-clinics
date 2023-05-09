/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        eyecareBlue: '#005eb8',
        eyecareLightBlue: '#85c4ff',
        eyecareGrey: '#7c878e',
        eyecareLightGrey: '#dee1e3',
        eyecareOrange: '#ff9f1c',
        eyecareYellow: '#ffbf69',
      },
    },
  },
  plugins: [],
};

