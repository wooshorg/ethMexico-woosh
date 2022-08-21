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
        'clamp(1.25rem, 1rem + 0.56vw, 1.875rem)',
      ],
      xl: [
        // 24px, 28px, 41px
        'clamp(1.5rem, 1.17rem + 1vw, 2.56rem)',
      ],
      '2xl': [
        // 33px, 36px, 51px
        'clamp(2.05rem, 1.5rem + 1.2vw, 3.18rem)',
      ],
      '3xl': [
        // 41px, 62px, 67px
        'clamp(2.56rem, 1.58rem + 2vw, 4.18rem)',
      ],
    },
    extend: {},
  },
  plugins: [require('tailwindcss-radix')()],
};
