/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('assets/bg.jpeg')",
        'pitch': "url('assets/pitch.png')",
      }
    },
  },
  plugins: [],
}
