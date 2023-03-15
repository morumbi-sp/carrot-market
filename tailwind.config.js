/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        myOrange: {
          light: '#fb923c',
          DEFAULT: '#f97316',
          dark: '#ea580c',
        },
        myText: {
          lightest: '#9ca3af',
          light: '#6b7280',
          medium: '#4b5563',
          dark: '#374151',
          darkest: '#1f2937',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
