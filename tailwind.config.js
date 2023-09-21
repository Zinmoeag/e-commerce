/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        skin:{
          main: 'rgb(var(--main) / <alpha-value>)',
          third: 'rgb(var(--third) / <alpha-value>)',
          secondary: 'rgb(var(--secondary) / <alpha-value>)',
          coffee : 'rgb(var(--coffee) / <alpha-value>)',
          fourth: 'rgb(var(--fourth) / <alpha-value>)',
          firth: 'rgb(var(--firth) / <alpha-value>)',
          sixth: 'rgb(var(--sixth) / <alpha-value>)',
          cover: 'rgb(var(--cover) / <alpha-value>)',
          true: 'rgb(var(--true) / <alpha-value>)',
          text: 'rgb(var(--text) / <alpha-value>)',
          transparent: 'var(--transparent)',
        },
      },
       width: {
        'showContainer': 'var(--showContainerSize)',
      },
      fontFamily : {
        'bebas' : 'var(--bebas)'
      }
    },
  },
  plugins: [],
}


