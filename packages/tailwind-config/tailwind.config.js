/** @type {import('tailwindcss/resolveConfig')} */
module.exports = {
  content: [
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx,stories.mdx,stories.tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideInRight: 'slideInRight 0.3s ease-out',
        slideInLeft: 'slideInLeft 0.3s ease-out',
        slideOutRight: 'slideOutRight 0.3s ease-out',
        slideOutLeft: 'slideOutLeft 0.3s ease-out',
      },
      colors: {
        primary: {
          50: '#FEF0E6',
          100: '#FEE4D2',
          200: '#FDC7A1',
          300: '#FBAC74',
          400: '#FA8F42',
          500: '#F97315',
          600: '#D15A05',
          700: '#9F4504',
          800: '#682D03',
          900: '#371801',
          950: '#190B01',
        },
      },
    },
  },
  plugins: [],
};
