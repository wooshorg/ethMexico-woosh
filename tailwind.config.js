/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderRadius: {
      '100vw': '100vw',
      full: '100%',
    },
    colors: {
      dark: '#0A210F',
      black: '#051007',
      white: '#F7F0F0',
      primary: '#23CE6B',
      error: '#ef4444',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontSize: {
      sm: [
        //12px
        '0.75rem',
      ],
      base: [
        //16px
        '1rem',

      ],
      lg: [
        // 18px, 21px, 30px
        '1.31rem',

      ],
      xl: [
        // 24px, 28px, 41px
        '1.75rem',

      ],
      '2xl': [
        // 33px, 36px, 51px
        '2.25rem',

      ],
      '3xl': [
        // 41px, 62px, 67px
        '3.875rem',
      ],
    },
    extend: {},
  },
  plugins: [require('tailwindcss-radix')()],
};
