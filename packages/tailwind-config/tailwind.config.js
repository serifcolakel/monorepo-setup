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
