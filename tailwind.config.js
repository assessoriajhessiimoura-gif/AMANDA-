/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        offwhite: '#F8F5F0',
        champagne: '#E8D8C8',
        beige: '#D5C1AD',
        coffee: '#49372F',
        gold: '#B69A72',
        'gold-deep': '#7D6447',
        'rose-burnt': '#A8686A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 40px -18px rgba(73, 55, 47, 0.35)',
        lift: '0 28px 60px -20px rgba(73, 55, 47, 0.45)',
      },
    },
  },
  plugins: [],
};
