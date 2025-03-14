// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          slide: {
            '0%, 25%': { transform: 'translateY(0)' },
            '26%, 50%': { transform: 'translateY(-100%)' },
            '51%, 75%': { transform: 'translateY(-200%)' },
            '76%, 100%': { transform: 'translateY(-300%)' },
          },
        },
        animation: {
          slide: 'slide 12s infinite',
        },
      },
    },
    plugins: [],
  }
  
  