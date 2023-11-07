/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      main: '#9F4B4B',
      sub: 'var(--sub_color)',
      bodyText: 'var(--text_color)',
      second: '#111124',
      headerBg: 'var(--header_bg)',
      lightMain: '#CF9982',
    },
    extend: {
      fontFamily: {
        heading: "'Montserrat', sans-serif",
        // body: "'Raleway', sans-serif",
        body: "'Montserrat', sans-serif",
        fancy: "'Sacramento', cursive",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}