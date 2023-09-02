/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridColumn: {
        'span-1/2': '1 / span 2',
      },
      colors: {
        highlighted: '#0F62FE',
      },
      fontSize: {
        xxs: '0.625rem',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(90deg, #0F62FE 25%, #D9D9D9 0%)',
      },
    },
  },
  plugins: [],
}
