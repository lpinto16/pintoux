/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,}"],
  theme: {
    colors: {
      transparent: 'transparent',
      blue_ribbon: {
        '50': '#f7f7ff', 
        '100': '#efeeff', 
        '200': '#d6d6ff', 
        '300': '#bdbdff', 
        '400': '#8c8bff', 
        '500': '#5a59ff', 
        '600': '#5150e6', 
        '700': '#4443bf', 
        '800': '#363599', 
        '900': '#2c2c7d'
    }
      ,crimson: {
      '50': '#fdf3f5', 
      '100': '#fbe7eb', 
      '200': '#f6c3ce', 
      '300': '#f09eb1', 
      '400': '#e45676', 
      '500': '#d90d3b', 
      '600': '#c30c35', 
      '700': '#a30a2c', 
      '800': '#820823', 
      '900': '#6a061d'
     }
      ,emerald: {
      '50': '#f4fbf7', 
      '100': '#e9f8ef', 
      '200': '#c9edd7', 
      '300': '#a8e1bf', 
      '400': '#66cb90', 
      '500': '#25b560', 
      '600': '#21a356', 
      '700': '#1c8848', 
      '800': '#166d3a', 
      '900': '#12592f'
    }
    ,downriver: {
      '50': '#f3f4f6', 
      '100': '#e7e9ee', 
      '200': '#c2c7d4', 
      '300': '#9da6b9', 
      '400': '#546385', 
      '500': '#0b2051', 
      '600': '#0a1d49', 
      '700': '#08183d', 
      '800': '#071331', 
      '900': '#051028'
  }
  ,general: {
    'white': '#ffffff',
    'black': '#121212'
  }
    }
    ,extend: {
      fontFamily: {
        'sporting-bold': ['Sporting Grotesque Bold','san-serif'],
        'sporting-regular': ['Sporting Grotesque Regular','san-serif']
      }
    },
  },
  plugins: [],
}
