/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/pages/*.ejs",
    "./views/pages/partials/*.ejs",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
