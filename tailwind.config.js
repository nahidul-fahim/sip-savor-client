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
      main: '#CF7D35',
      sub: 'var(--sub_color)',
      bodyText: 'var(--text_color)',
      second: '#111124',
      headerBg: 'var(--header_bg)',
    },
    extend: {
      fontFamily: {
        heading: "'Josefin Sans', sans-serif",
        body: "'Alata', sans-serif",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}