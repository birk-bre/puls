const sharedConfig = require("puls-tailwind-config/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  plugins: [require("tailwindcss-animate")],
};
