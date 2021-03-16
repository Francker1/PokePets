//CRACO config to override PostCSS config to be able confit Tailwind

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
