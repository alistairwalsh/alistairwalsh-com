/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a5f',
        accent: '#2563eb',
        cream: '#f8f7f4',
      },
    },
  },
  plugins: [],
};
