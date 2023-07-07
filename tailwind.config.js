/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gray1: '#333333',
        gray3: '#828282',
        gray5: '#E0E0E0',
        gray6: '#F2F2F2',
        blue: '#2962FF',
        red: '#D32F2F'

      },
      fontFamily: {
        notoSansJP: ['Noto Sans JP', 'sans-serif']
      }
    }
  },
  plugins: []
};
