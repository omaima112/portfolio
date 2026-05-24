/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      fontSize: {
        // viewport-aware huge sizes: use min() so it doesn't exceed a max rem value
        'super': 'min(50vh, 40rem)',
        'super-md': 'min(55vh, 60rem)'
      }
    }
  },
  plugins: [],
};
