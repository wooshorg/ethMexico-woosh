/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    borderRadius: {
      '100vw': '100vw',
      full: '100%',
    },
    colors: {
      dark: '#0A210F',
      black: '#051007',
      white: '#F7F0F0',
      primary: '#6C5DD3',
      error: '#ef4444',
    },
    container: {
      center: true,
    },
    fontSize: {
      sm: [
        //12px
        '1rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
          margin: 0,
          fontWeight: 500,
        },
      ],
      base: [
        //16px
        '1.125rem',
        {
          lineHeight: 1.2,
          margin: 0,
          fontWeight: 500,
        },
      ],
      lg: [
        // 18px, 21px, 30px
        'clamp(1.25rem, 1rem + 0.56vw, 1.875rem)',
        {
          letterSpacing: '-0.01em',
          fontWeight: 600,
        },
      ],
      xl: [
        // 24px, 28px, 41px
        'clamp(1.5rem, 1.17rem + 1vw, 2.56rem)',
        {
          letterSpacing: '-0.015em',
          fontWeight: 600,
        },
      ],
      '2xl': [
        // 33px, 36px, 51px
        'clamp(2.05rem, 1.5rem + 1.2vw, 3.18rem)',
        {
          letterSpacing: '-0.015em',
          fontWeight: 600,
        },
      ],
      '3xl': [
        // 41px, 62px, 67px
        'clamp(2.56rem, 1.58rem + 2vw, 4.18rem)',
        {
          letterSpacing: '-0.015em',
          lineHeight: 1.12,
          fontWeight: 600,
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
