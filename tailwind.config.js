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
      main: '#CE7954',
      sub: 'var(--sub_color)',
      bodyText: 'var(--text_color)',
      second: '#111124',
      headerBg: 'var(--header_bg)',
      lightMain: '#ffbf75',
    },
    extend: {
      fontFamily: {
        heading: "'Montserrat', sans-serif",
        body: "'Raleway', sans-serif",
        fancy: "'Sacramento', cursive",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}