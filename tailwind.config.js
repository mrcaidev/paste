/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["src/{pages,components}/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
